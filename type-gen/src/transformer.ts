import {
  isSimpleType,
  SimpleType,
  SimpleTypeAlias,
  typeToString,
} from "ts-simple-type";
import { Program, Type, TypeChecker, TypeFormatFlags } from "typescript";
import {
  AnalyzerResult,
  ComponentCssPart,
  ComponentCssProperty,
  ComponentDefinition,
  ComponentEvent,
  ComponentMember,
  ComponentSlot,
  JsDoc,
  TransformerConfig,
  VisibilityKind,
} from "web-component-analyzer";
import { relative } from "path";

const VISIBILITY_NUMBER_MAP: Record<VisibilityKind, number> = {
  private: 1,
  protected: 2,
  public: 3,
};

/**
 * Removes all items from an array with visibilities that are less visible than "visibility".
 * @param visibility
 * @param array
 */
export function filterVisibility<T extends { visibility?: VisibilityKind }>(
  visibility: VisibilityKind = "public",
  array: T[]
): T[] {
  const target = VISIBILITY_NUMBER_MAP[visibility];
  return array.filter(
    (item) => VISIBILITY_NUMBER_MAP[item.visibility || "public"] >= target
  );
}

export interface HtmlDataValue {
  name: string;
  description?: string;
}

export interface HtmlDataValueSet {
  name: string;
  values: HtmlDataValue[];
}

export interface HtmlDataMember {
  name: string;
  description?: string;
  values?: HtmlDataValue[];
  valueSet?: string;

  // Suggested fields:
  type?: unknown;
  attribute?: string;
  deprecated?: boolean;
  deprecatedMessage?: string;
}

export interface HtmlDataAttribute extends HtmlDataMember {
  // Suggested fields:
  default?: string;
}

export interface HtmlDataProperty extends HtmlDataMember {
  // Suggested fields:
  default?: string;
}

export interface HtmlDataSlot extends HtmlDataMember {}

export interface HtmlDataEvent extends HtmlDataMember {}

export interface HtmlDataCssProperty extends HtmlDataMember {
  // Suggested fields:
  default?: string;
}

export interface HtmlDataCssPart extends HtmlDataMember {}

export interface HtmlDataTag {
  name: string;
  description?: string;
  attributes?: HtmlDataAttribute[];
  path?: string;

  // Suggested fields:
  properties?: HtmlDataProperty[];
  slots?: HtmlDataSlot[];
  events?: HtmlDataEvent[];
  cssProperties?: HtmlDataCssProperty[];
  cssParts?: HtmlDataCssPart[];
  deprecated?: boolean;
  deprecatedMessage?: string;
}

export interface HtmlDataV2 {
  version: string;
  tags?: HtmlDataTag[];
  valueSets?: HtmlDataValueSet[];

  // Suggested fields:
  global?: {
    attributes?: HtmlDataMember[];
    properties?: HtmlDataMember[];
    slots?: HtmlDataMember[];
    events?: HtmlDataMember[];
  };
}

export type HtmlData = HtmlDataV2;

/**
 * Returns a "type hint" from a type
 * The type hint is an easy to read representation of the type and is not made for being parsed.
 * @param type
 * @param checker
 * @param config
 */
export function getTypeHintFromType(
  type: string | Type | SimpleType | undefined,
  checker: TypeChecker,
  config: TransformerConfig
): string | undefined {
  if (type == null) return undefined;
  if (typeof type === "string") return type;

  let typeHint: string;

  if (config.inlineTypes) {
    // Inline aliased types
    if (isSimpleType(type)) {
      // Expand a possible alias
      if (isUnionTypeAlias(type)) {
        type = type.target;
      }

      typeHint = typeToString(type);
    } else {
      // Transform using Typescript natively, to avoid transforming all types to simple types (overhead).
      // The "InTypeAlias" flag expands the type.
      typeHint = checker.typeToString(
        type,
        undefined,
        TypeFormatFlags.InTypeAlias
      );
    }
  } else {
    // Transform types to string
    typeHint = typeToString(type, checker);
  }

  // Replace "anys" and "{}" with more human friendly representations
  if (typeHint === "any") return undefined;
  if (typeHint === "any[]") return "array";
  if (typeHint === "{}") return "object";

  // "CustomEvent<unknown>" and "Event" of no interest
  if (typeHint === "CustomEvent<unknown>" || typeHint === "Event")
    return undefined;

  return typeHint;
}

/**
 * Checks if a type is a type alias simple type
 * @param simpleType
 */
function isUnionTypeAlias(
  simpleType: SimpleType
): simpleType is SimpleTypeAlias {
  return simpleType.kind === "ALIAS" && simpleType.target.kind === "UNION";
}

/**
 * Flattens an array.
 * Use this function to keep support for node 10
 * @param items
 */
export function arrayFlat<T>(items: (T[] | T)[]): T[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ("flat" in (items as any)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (items as any).flat();
  }

  const flattenArray: T[] = [];
  for (const item of items) {
    if (Array.isArray(item)) {
      flattenArray.push(...item);
    } else {
      flattenArray.push(item);
    }
  }
  return flattenArray;
}

/**
 * Filters an array returning only defined items
 * @param array
 */
export function arrayDefined<T>(array: (T | undefined)[]): T[] {
  return array.filter((item): item is NonNullable<typeof item> => item != null);
}

/**
 * Filters an array returning only unique itesm
 * @param array
 */
export function arrayDedupe<T>(array: T[]): T[] {
  const uniqueItems: T[] = [];

  for (const item of array) {
    if (uniqueItems.indexOf(item) === -1) {
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

/**
 * Returns the first element in the set
 * @param set
 */
export function getFirst<T>(set: Set<T>): T | undefined {
  return set.values().next().value;
}

/**
 * Transforms results to json.
 * @param results
 * @param program
 * @param config
 */
export const jsonTransformerLocal = (
  results: AnalyzerResult[],
  program: Program,
  config: TransformerConfig
): string => {
  const checker = program.getTypeChecker();

  // Get all definitions
  const definitions = arrayFlat(results.map((res) => res.componentDefinitions));

  // Transform all definitions into "tags"
  const tags = definitions.map((d) =>
    definitionToHtmlDataTag(d, checker, config)
  );

  const htmlData: HtmlData = {
    version: "experimental",
    tags,
  };

  return JSON.stringify(htmlData, null, 2);
};

function definitionToHtmlDataTag(
  definition: ComponentDefinition,
  checker: TypeChecker,
  config: TransformerConfig
): HtmlDataTag {
  // Grab path to the definition file if possible
  const node =
    getFirst(definition.tagNameNodes) || getFirst(definition.identifierNodes);
  const fileName = node?.getSourceFile().fileName;
  const path =
    fileName != null && config.cwd != null
      ? `./${relative(config.cwd, fileName)}`
      : undefined;

  const declaration = definition.declaration;

  if (declaration == null) {
    return {
      name: definition.tagName,
      path,
    };
  }

  const attributes = arrayDefined(
    filterVisibility(config.visibility, declaration.members).map((d) =>
      componentMemberToHtmlDataAttribute(d, checker, config)
    )
  );

  const properties = arrayDefined(
    filterVisibility(config.visibility, declaration.members).map((d) =>
      componentMemberToHtmlDataProperty(d, checker, config)
    )
  );

  const events = arrayDefined(
    filterVisibility(config.visibility, declaration.events).map((e) =>
      componentEventToHtmlDataEvent(e, checker)
    )
  );

  const slots = arrayDefined(
    declaration.slots.map((e) => componentSlotToHtmlDataSlot(e, checker))
  );

  const cssProperties = arrayDefined(
    declaration.cssProperties.map((p) =>
      componentCssPropToHtmlCssProp(p, checker)
    )
  );

  const cssParts = arrayDefined(
    declaration.cssParts.map((p) => componentCssPartToHtmlCssPart(p, checker))
  );

  return {
    name: definition.tagName,
    path,
    description: getDescriptionFromJsDoc(declaration.jsDoc),
    attributes: attributes.length === 0 ? undefined : attributes,
    properties: properties.length === 0 ? undefined : properties,
    events: events.length === 0 ? undefined : events,
    slots: slots.length === 0 ? undefined : slots,
    cssProperties: cssProperties.length === 0 ? undefined : cssProperties,
    cssParts: cssParts.length === 0 ? undefined : cssParts,
    deprecated:
      declaration.deprecated === true ||
      typeof declaration.deprecated === "string" ||
      undefined,
    deprecatedMessage:
      typeof declaration.deprecated === "string"
        ? declaration.deprecated
        : undefined,
  };
}

function componentCssPropToHtmlCssProp(
  prop: ComponentCssProperty,
  checker: TypeChecker
): HtmlDataCssProperty | undefined {
  return {
    name: prop.name || "",
    description: getDescriptionFromJsDoc(prop.jsDoc),
    type: prop.typeHint,
    default: prop.default != null ? JSON.stringify(prop.default) : undefined,
  };
}

function componentCssPartToHtmlCssPart(
  part: ComponentCssPart,
  checker: TypeChecker
): HtmlDataCssPart | undefined {
  return {
    name: part.name || "",
    description: getDescriptionFromJsDoc(part.jsDoc),
  };
}

function componentSlotToHtmlDataSlot(
  slot: ComponentSlot,
  checker: TypeChecker
): HtmlDataSlot | undefined {
  return {
    name: slot.name || "",
    description: getDescriptionFromJsDoc(slot.jsDoc),
  };
}

function componentEventToHtmlDataEvent(
  event: ComponentEvent,
  checker: TypeChecker
): HtmlDataEvent | undefined {
  return {
    name: event.name,
    description: getDescriptionFromJsDoc(event.jsDoc),
    deprecated: event.deprecated === true || undefined,
    deprecatedMessage:
      typeof event.deprecated === "string" ? event.deprecated : undefined,
    type: event.typeHint,
  };
}

function componentMemberToHtmlDataAttribute(
  member: ComponentMember,
  checker: TypeChecker,
  config: TransformerConfig
): HtmlDataAttribute | undefined {
  if (member.attrName == null) {
    return undefined;
  }

  return {
    name: member.attrName,
    description: getDescriptionFromJsDoc(member.jsDoc),
    type: getTypeHintFromType(
      member.typeHint ?? member.type?.(),
      checker,
      config
    ),
    default:
      member.default != null ? JSON.stringify(member.default) : undefined,
    deprecated: member.deprecated === true || undefined,
    deprecatedMessage:
      typeof member.deprecated === "string" ? member.deprecated : undefined,
  };
}

function componentMemberToHtmlDataProperty(
  member: ComponentMember,
  checker: TypeChecker,
  config: TransformerConfig
): HtmlDataProperty | undefined {
  if (member.propName == null) {
    return undefined;
  }

  return {
    name: member.propName,
    attribute: member.attrName,
    description: getDescriptionFromJsDoc(member.jsDoc),
    type: getTypeHintFromType(
      member.typeHint ?? member.type?.(),
      checker,
      config
    ),
    default:
      member.default != null ? JSON.stringify(member.default) : undefined,
    deprecated: member.deprecated === true || undefined,
    deprecatedMessage:
      typeof member.deprecated === "string" ? member.deprecated : undefined,
  };
}

function getDescriptionFromJsDoc(jsDoc: JsDoc | undefined): string | undefined {
  return jsDoc?.description;
}
