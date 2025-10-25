import {
  AnalyzerDeclarationVisitContext,
  AnalyzerFlavor,
  AnalyzerVisitContext,
  DefinitionNodeResult,
  FeatureDiscoverVisitMap,
  getJsDoc,
  ComponentDeclarationKind,
  ComponentHeritageClause,
  ComponentHeritageClauseKind,
  InheritanceResult,
} from "web-component-analyzer";
import ts = require("typescript");
import {
  ConstructSignatureDeclaration,
  HeritageClause,
  Node,
} from "typescript";
import { findChild, findChildren, resolveDeclarationsDeep } from "./ast-util";
import { discoverMembers } from "./discover-members";
import { pascalize } from "../utils";

/**
 * Discovers inheritance from a node by looking at "extends" and "implements"
 * @param node
 * @param baseContext
 */
export function discoverInheritance(
  node: Node,
  baseContext: AnalyzerVisitContext
): InheritanceResult | undefined {
  let declarationKind: ComponentDeclarationKind | undefined = undefined;
  const heritageClauses: ComponentHeritageClause[] = [];
  const declarationNodes = new Set<Node>();

  const context: InheritanceAnalyzerVisitContext = {
    ...baseContext,
    emitDeclaration: (decl) => declarationNodes.add(decl),
    emitInheritance: (kind, identifier) =>
      heritageClauses.push({ kind, identifier, declaration: undefined }),
    emitDeclarationKind: (kind) => (declarationKind = declarationKind || kind),
    visitedNodes: new Set<Node>(),
  };

  // Resolve the structure of the node
  resolveStructure(node, context);

  // Reverse heritage clauses because they come out in wrong order
  heritageClauses.reverse();

  return {
    declarationNodes: Array.from(declarationNodes),
    heritageClauses,
    declarationKind,
  };
}

interface InheritanceAnalyzerVisitContext extends AnalyzerVisitContext {
  emitDeclaration: (node: Node) => void;
  emitDeclarationKind: (kind: ComponentDeclarationKind) => void;
  emitInheritance: (
    kind: ComponentHeritageClauseKind,
    identifier: Node
  ) => void;
  visitedNodes: Set<Node>;
}

function resolveStructure(
  node: Node,
  context: InheritanceAnalyzerVisitContext
) {
  const { ts } = context;

  if (context.visitedNodes.has(node)) {
    return;
  }

  context.visitedNodes.add(node);

  // Call this function recursively if this node is an identifier
  if (ts.isIdentifier(node)) {
    for (const decl of resolveDeclarationsDeep(node, context)) {
      resolveStructure(decl, context);
    }
  }

  // Emit declaration node if we've found a class of interface
  else if (ts.isClassLike(node) || ts.isInterfaceDeclaration(node)) {
    context.emitDeclarationKind(ts.isClassLike(node) ? "class" : "interface");
    context.emitDeclaration(node);

    // Resolve inheritance
    for (const heritage of node.heritageClauses || []) {
      for (const type of heritage.types || []) {
        resolveHeritage(heritage, type.expression, context);
      }
    }
  }

  // Emit a declaration node if this node is a type literal
  else if (ts.isTypeLiteralNode(node) || ts.isObjectLiteralExpression(node)) {
    context.emitDeclarationKind("interface");
    context.emitDeclaration(node);
  }

  // Emit a mixin if this node is a function
  else if (ts.isFunctionLike(node) || ts.isCallLikeExpression(node)) {
    context.emitDeclarationKind("mixin");

    if (ts.isFunctionLike(node) && node.getSourceFile().isDeclarationFile) {
      // Find any identifiers if the node is in a declaration file
      findChildren(node.type, ts.isIdentifier, (identifier) => {
        resolveStructure(identifier, context);
      });
    } else {
      // Else find the first class declaration in the block
      // Note that we don't look for a return statement because this would complicate things
      const clzDecl = findChild(node, ts.isClassLike);
      if (clzDecl != null) {
        resolveStructure(clzDecl, context);
        return;
      }

      // If we didn't find any class declarations, we might be in a function that wraps a mixin
      // Therefore find the return statement and call this method recursively
      const returnNode = findChild(node, ts.isReturnStatement);
      if (
        returnNode != null &&
        returnNode.expression != null &&
        returnNode.expression !== node
      ) {
        const returnNodeExp = returnNode.expression;

        // If a function call is returned, this function call expression is followed, and the arguments are treated as heritage
        //    Example: return MyFirstMixin(MySecondMixin(Base))   -->   MyFirstMixin is followed, and MySecondMixin + Base are inherited
        if (
          ts.isCallExpression(returnNodeExp) &&
          returnNodeExp.expression != null
        ) {
          for (const arg of returnNodeExp.arguments) {
            resolveHeritage(undefined, arg, context);
          }

          resolveStructure(returnNodeExp.expression, context);
        }

        return;
      }
    }
  } else if (
    ts.isVariableDeclaration(node) &&
    (node.initializer != null || node.type != null)
  ) {
    resolveStructure((node.initializer || node.type)!, context);
  } else if (ts.isIntersectionTypeNode(node)) {
    emitTypeLiteralsDeclarations(node, context);
  }
}

function resolveHeritage(
  heritage: HeritageClause | ComponentHeritageClauseKind | undefined,
  node: Node,
  context: InheritanceAnalyzerVisitContext
): void {
  const { ts } = context;

  /**
   * Parse mixins
   */
  if (ts.isCallExpression(node)) {
    // Mixins
    const { expression: identifier, arguments: args } = node;

    // Extend classes given to the mixin
    // Example: class MyElement extends MyMixin(MyBase) --> MyBase
    // Example: class MyElement extends MyMixin(MyBase1, MyBase2) --> MyBase1, MyBase2
    for (const arg of args) {
      resolveHeritage(heritage, arg, context);
    }

    // Resolve and traverse the mixin function
    // Example: class MyElement extends MyMixin(MyBase) --> MyMixin
    if (identifier != null && ts.isIdentifier(identifier)) {
      resolveHeritage("mixin", identifier, context);
    }
  } else if (ts.isIdentifier(node)) {
    // Try to handle situation like this, by resolving the variable in between
    //    const Base = ExtraMixin(base);
    //    class MixinClass extends Base { }
    let dontEmitHeritageClause = false;

    // Resolve the declaration of this identifier
    const declarations = resolveDeclarationsDeep(node, context);

    for (const decl of declarations) {
      // If the resolved declaration is a variable declaration assigned to a function, try to follow the assignments.
      //    Example:    const MyBase = MyMixin(Base); return class extends MyBase { ... }
      if (context.ts.isVariableDeclaration(decl) && decl.initializer != null) {
        if (context.ts.isCallExpression(decl.initializer)) {
          let hasDeclaration = false;
          resolveStructure(decl, {
            ...context,
            emitInheritance: () => {},
            emitDeclarationKind: () => {},
            emitDeclaration: () => {
              hasDeclaration = true;
            },
          });

          if (!hasDeclaration) {
            resolveHeritage(heritage, decl.initializer, context);
            dontEmitHeritageClause = true;
          }
        }
      }

      // Don't emit inheritance if it's a parameter, because the parameter
      //    is a subsitution for the actual base class which we have already resolved.
      else if (context.ts.isParameter(decl)) {
        dontEmitHeritageClause = true;
      }
    }

    if (!dontEmitHeritageClause) {
      // This is an "implements" clause if implement keyword is used or if all the resolved declarations are interfaces
      const kind: ComponentHeritageClauseKind =
        heritage != null && typeof heritage === "string"
          ? heritage
          : //@ts-ignore
            heritage?.token === ts.SyntaxKind.ImplementsKeyword ||
              (declarations.length > 0 &&
                !declarations.some(
                  (decl) => !context.ts.isInterfaceDeclaration(decl)
                ))
            ? "implements"
            : "extends";

      context.emitInheritance(kind, node);
    }
  }
}

/**
 * Emits "type literals" in the AST. Emits them with "emitDeclaration"
 * @param node
 * @param context
 */
function emitTypeLiteralsDeclarations(
  node: Node,
  context: InheritanceAnalyzerVisitContext
) {
  if (context.ts.isTypeLiteralNode(node)) {
    // If we encounter a construct signature, follow the type
    const construct = node.members?.find(
      (member): member is ConstructSignatureDeclaration =>
        context.ts.isConstructSignatureDeclaration(member)
    );
    if (construct != null && construct.type != null) {
      context.emitDeclarationKind("mixin");
      emitTypeLiteralsDeclarations(construct.type, context);
    } else {
      context.emitDeclaration(node);
    }
  } else {
    node.forEachChild((n) => emitTypeLiteralsDeclarations(n, context));
  }
}

function getNodeIdentifier(node: ts.Node, context: AnalyzerVisitContext) {
  if (context.ts.isIdentifier(node)) {
    return node;
  } else if (
    (context.ts.isClassLike(node) ||
      context.ts.isInterfaceDeclaration(node) ||
      context.ts.isVariableDeclaration(node) ||
      context.ts.isMethodDeclaration(node) ||
      context.ts.isPropertyDeclaration(node) ||
      context.ts.isFunctionDeclaration(node)) &&
    node.name != null &&
    context.ts.isIdentifier(node.name)
  ) {
    return node.name;
  }
  return undefined;
}

/**
 * Checks if a class or any of its ancestors extend EventData.
 * @param node The class node to check.
 * @param checker The TypeScript type checker.
 * @returns true if EventData is found in the inheritance chain.
 */
function extendsClassOrInterface(
  node: ts.ClassDeclaration | ts.InterfaceDeclaration,
  checker: ts.TypeChecker,
  className: string
): boolean {
  let current = node;

  if (current.name.getText() === className) return true;

  while (current) {
    const heritageClauses = current.heritageClauses;
    if (heritageClauses) {
      for (const clause of heritageClauses) {
        if (clause.token === ts.SyntaxKind.ExtendsKeyword) {
          for (const type of clause.types) {
            const symbol = checker.getSymbolAtLocation(type.expression);

            if (symbol && symbol.getName() === className) {
              return true;
            }

            // Try to resolve the declaration for further traversal
            const declarations = symbol?.getDeclarations();

            let baseClass =
              declarations?.find(ts.isClassDeclaration) ||
              declarations?.find(ts.isInterfaceDeclaration);

            if (!baseClass && symbol) {
              const node =
                checker.getTypeOfSymbol(symbol)?.symbol?.valueDeclaration;
              baseClass =
                node &&
                (ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node))
                  ? node
                  : undefined;
            }

            if (
              baseClass &&
              extendsClassOrInterface(baseClass, checker, className)
            ) {
              return true;
            }
          }
        }
      }
    }
    // Move up the chain if possible (not always possible, so break)
    break;
  }
  return false;
}

export const EVENTS_DISCOVERY: {
  name: string;
  node: ts.Node;
}[] = [];

export function getEvents() {
  return EVENTS_DISCOVERY;
}

export function clearEventDiscovery() {
  EVENTS_DISCOVERY.splice(0, EVENTS_DISCOVERY.length);
}

globalThis.LEGACY_MODE = false;
export class NativeScriptFlavor implements AnalyzerFlavor {
  constructor(legacyMode: boolean = false) {
    globalThis.LEGACY_MODE = legacyMode;
  }

  discoverDefinitions(
    node: ts.Node,
    context: AnalyzerVisitContext
  ): DefinitionNodeResult[] | undefined {
    if (
      context.ts.isInterfaceDeclaration(node) ||
      context.ts.isClassDeclaration(node)
    ) {
      const identifier = getNodeIdentifier(node, context);
      const jsdoc = getJsDoc(node, context.ts);
      const tag = jsdoc?.tags?.find((tag) => tag.tag === "nsView");
      const isView = !globalThis.LEGACY_MODE
        ? !!tag
        : extendsClassOrInterface(node as any, context.checker, "ViewBase");

      if (!isView) {
        const isEventClass = extendsClassOrInterface(
          node as any,
          context.checker,
          "EventData"
        );
        if (isEventClass) {
          EVENTS_DISCOVERY.push({
            name: node.name?.getText().trim(),
            node: node,
          });
        }
      }

      if (isView) {
        return [
          {
            tagName: identifier.getText(node.getSourceFile()),
            tagNameNode: identifier,
            identifierNode: identifier,
          },
        ];
      }
    }
  }

  discoverFeatures?: Partial<
    FeatureDiscoverVisitMap<AnalyzerDeclarationVisitContext>
  > = {
    event: (node, context) => {
      if (ts.isPropertyDeclaration(node)) {
        const jsDoc = getJsDoc(node, ts);
        const found = jsDoc?.tags?.find((tag) => tag.tag === "nsEvent");
        if (found) {
          const parsed = found.parsed();
          return [
            {
              name: parsed.name,
              node: node,
              typeHint: parsed.type || "EventData",
              jsDoc: jsDoc,
            },
          ];
        }

        if (globalThis.LEGACY_MODE) {
          const nodeName = node.name.getText().trim();
          const isEventLegacy = nodeName.endsWith("Event");
          if (
            isEventLegacy &&
            node.type?.kind === ts.SyntaxKind.StringKeyword
          ) {
            const name = nodeName.slice(0, nodeName.length - "Event".length);
            return [
              {
                name: name,
                node: node,
                typeHint: "EventData",
                jsDoc: jsDoc,
              },
            ];
          }
        }
      }
      return undefined;
    },
    member: (node, context) => {
      return discoverMembers(node, context);
    },
  };

  discoverInheritance(
    node: Node,
    context: AnalyzerVisitContext
  ): InheritanceResult | undefined {
    return discoverInheritance(node, context);
  }
}
