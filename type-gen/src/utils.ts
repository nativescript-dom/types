import path = require("path");
import { Attribute, isCoreType, isSimpleType, Tag } from "./types";
import ts = require("typescript");
import * as fs from "fs";
import { resolvePackageJSONPath } from "@rigor789/resolve-package-path";

export const CORE_PKG = process.env["CORE_PKG_NAME"] || "@nativescript/core";

export function isCore(source: string) {
  return source === CORE_PKG;
}

export function extendsCoreViewType(tag: Tag): string {
  if (tag.name === "View") return "ViewBaseAttributes";
  if (tag.name === "ViewBase") return `NSDOMAttributes<${tag.name}>`;

  if (
    tag.properties.find((p) => p.name === "bindingContext") &&
    !tag.properties.find((p) => p.name === "borderColor")
  )
    return "ViewBaseAttributes";
  if (
    tag.properties.find((p) => p.name === "bindingContext") &&
    tag.properties.find((p) => p.name === "borderColor")
  )
    return "ViewAttributes";

  return `NSDOMAttributes<${tag.name}>`;
}

export function isCoreView(name: string) {
  return name === "View" || name === "ViewBase";
}

export function capitalize(string: string) {
  // take first character, uppercase it
  // add the rest of the string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toCamelCase(str: string) {
  return str[0].toLowerCase() + str.slice(1);
}

export function pascalize(string: string) {
  // splitting words by dash
  const words = string.split("-");
  // use capitalize function to capitalize every word
  const capitalized = words.map((word) => capitalize(word));
  // glue up words with .join()
  return capitalized.join("");
}

export const toKebabCase = (str: string) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
};

export function resolveAttributeType(type: string) {
  if (!type) return "string";
  const types = type.split("|").map((type) => type.trim());
  if ((types.length === 1 && types[1] === "number") || types[1] === "boolean") {
    return `string | ${type}`;
  }

  if (
    types.some((type) => type === "number" || type === "boolean") &&
    !types.some((type) => type === "string")
  )
    return `string | ${type}`;

  if (types.includes("Color")) {
    return "ColorValue";
  }

  return type;
}

export function propExists(attr: Attribute, inAttributes: Attribute[]) {
  return inAttributes.findIndex((inAttr) => inAttr.name === attr.name) > -1;
}

export function isGlobal(name: string) {
  if (name === "view") return true;
  if (name === "view-events") return true;
  return /(view-base|view-base-events)/g.test(name);
}

export function sanitizeFileName(fileName: string): string {
  // Remove invalid characters: / \ ? % * : | " < >
  return fileName.replace(/[\/\\\?\%\*\:\|\"\<\>]/g, "_");
}

export function moduleExportsSymbolForPackage(
  packageName: string,
  workDir: string,
  name: string
): boolean {
  const paths = [workDir];
  try {
    // 1) try package.json to find "types"/"typings"
    const pkgJsonPath = resolvePackageJSONPath(packageName, { paths });
    const pkgDir = path.dirname(pkgJsonPath);
    const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
    if (pkgJson.types || pkgJson.typings) {
      const typesPath = path.resolve(pkgDir, pkgJson.types || pkgJson.typings);
      if (fs.existsSync(typesPath)) return moduleExportsSymbol(typesPath, name);
    }
    // 2) try common declaration fallback locations
    const candidates = [
      path.resolve(pkgDir, "index.d.ts"),
      path.resolve(pkgDir, "dist/index.d.ts"),
      path.resolve(pkgDir, "build/index.d.ts"),
      path.resolve(pkgDir, "src/index.d.ts"),
      path.resolve(pkgDir, "types/index.d.ts"),
      // try require.resolve for index.d.ts (handles nested /lib/index.d.ts etc.)
      (() => {
        try {
          return require.resolve(`${packageName}/index.d.ts`, { paths });
        } catch {
          return null;
        }
      })(),
    ].filter(Boolean) as string[];

    for (const c of candidates) {
      if (c && fs.existsSync(c)) return moduleExportsSymbol(c, name);
    }

    // 3) fallback to the package JS entry and analyze JS (allowJs in moduleExportsSymbol)
    const jsEntry = require.resolve(packageName, { paths });
    if (jsEntry && fs.existsSync(jsEntry))
      return moduleExportsSymbol(jsEntry, name);
  } catch {
    // ignore and return false
  }
  return false;
}

export function moduleExportsSymbol(
  resolvedFile: string,
  name: string
): boolean {
  const filePath = resolvedFile;
  const program = ts.createProgram([filePath], {
    target: ts.ScriptTarget.ES2020,
    module: ts.ModuleKind.CommonJS,
    allowJs: true,
    skipLibCheck: true,
  });

  const checker = program.getTypeChecker();
  const sf = program.getSourceFile(filePath);
  if (!sf) return false;

  // sourceFile.symbol is usually populated for module files
  const moduleSymbol = (sf as any).symbol ?? checker.getSymbolAtLocation(sf);
  if (!moduleSymbol) return false;

  const exports = checker.getExportsOfModule(moduleSymbol);
  return exports.some((s) => s.getName() === name);
}

export function importEventDataTypeFromPackage(
  eventDataType: string,
  pkg: string,
  coreImports: string[],
  imports: string[]
) {
  const type = eventDataType.trim();
  if (
    !imports.find((t) => t === type) &&
    !coreImports.find((t) => t === type)
  ) {
    if (!isCore(pkg)) {
      const isExported = moduleExportsSymbolForPackage(
        pkg,
        process.cwd(),
        type
      );
      if (isExported) {
        imports.push(type);
        return true;
      } else {
        const coreExported = moduleExportsSymbolForPackage(
          CORE_PKG,
          process.cwd(),
          type
        );
        if (coreExported) {
          coreImports.push(type);
          return true;
        }
      }
    } else {
      imports.push(type);
      return true;
    }
  } else {
    return true;
  }
  return false;
}

export function importTypeFromPackage(
  type: string,
  pkg: string,
  coreImports: string[],
  imports: string[]
) {
  if (!isSimpleType(type.trim())) {
    const strippedType = type.trim().replace("[]", "");
    if (
      !imports.find((t) => t === strippedType) &&
      !coreImports.find((t) => t === strippedType) &&
      !isCoreType(strippedType) &&
      strippedType !== "Style"
    ) {
      if (!isCore(pkg)) {
        const isExported = moduleExportsSymbolForPackage(
          pkg,
          process.cwd(),
          strippedType
        );
        if (isExported) {
          imports.push(strippedType);
          return true;
        } else {
          coreImports.push(strippedType);
          return true;
        }
      } else {
        imports.push(strippedType);
        return true;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
}

const EVENT_NAME_REGEX = /\b[a-z][a-zA-Z0-9]*Event\b/;
export function generateJSXAttributesInterface({
  tag,
  context,
  transformers,
  acceptsGenericProperties,
}: {
  tag: Tag;
  context: {
    view: Tag;
    viewBase: Tag;
    importSource: string;
    coreImports: string[];
    imports: string[];
  };
  transformers: {
    name: (name: string) => string;
    propertyName: (property: string) => string;
    eventName: (eventName: string) => string;
  };
  acceptsGenericProperties?: boolean;
}) {
  const { view, viewBase, importSource, imports, coreImports } = context;
  const omittedTypes = [];
  const EXTEND_VIEW_MARKER = `<EXTEND_VIEW_MARKER>`;
  const intrinsicElement = {
    htmlName: transformers.name(tag.name),
    source: "",
    name: `${tag.name}Attributes`,
    tagName: tag.name,
    description: tag.description,
  };

  const extendsCoreViewTypeName = extendsCoreViewType(tag);

  intrinsicElement.source += `export interface ${intrinsicElement.name}${isCoreView(intrinsicElement.tagName) ? "<T>" : ""} extends ${EXTEND_VIEW_MARKER}  {`;
  if (acceptsGenericProperties) {
    intrinsicElement.source += `\n[name: string]: any`;
  }

  if (!imports.find((t) => t === tag.name.trim())) {
    imports.push(tag.name);
  }

  for (let property of tag.properties) {
    const propertyName = transformers.propertyName(property.name);
    if (EVENT_NAME_REGEX.test(property.name)) continue;

    if (
      extendsCoreViewTypeName === "ViewBaseAttributes" ||
      extendsCoreViewTypeName === "ViewAttributes"
    ) {
      if (
        viewBase.properties.find(
          (p) =>
            transformers.propertyName(p.name) === propertyName &&
            p.type === property.type
        )
      )
        continue;
    }

    if (extendsCoreViewTypeName === "ViewAttributes") {
      if (
        view.properties.find(
          (p) =>
            transformers.propertyName(p.name) === propertyName &&
            p.type === property.type
        )
      )
        continue;
    }

    intrinsicElement.source += `\n\n      ${property.description ? `/**\n     * ${property.description}\n*/` : ""}\n${propertyName}?: ${resolveAttributeType(property.type)}`;

    if (property.type) {
      if (!isSimpleType(property.type)) {
        for (let type of property.type.split("|")) {
          importTypeFromPackage(type, importSource, coreImports, imports);
        }
      }
    }
  }

  if (tag.events) {
    for (let event of tag.events) {
      const eventName = transformers.eventName(event.name);
      if (
        extendsCoreViewTypeName === "ViewBaseAttributes" ||
        extendsCoreViewTypeName === "ViewAttributes"
      ) {
        const found = viewBase.events.find((e) => e.name === event.name);
        if (found) {
          if (found.type !== event.type) {
            omittedTypes.push(eventName);
          } else {
            continue;
          }
        }
      }

      if (extendsCoreViewTypeName === "ViewAttributes") {
        const found = view.events.find((e) => e.name === event.name);
        if (found) {
          if (found.type !== event.type) {
            omittedTypes.push(eventName);
          } else {
            continue;
          }
        }
      }

      const imported = importEventDataTypeFromPackage(
        event.type,
        importSource,
        coreImports,
        imports
      );
      if (!imported) event.type = "EventData";
      const eventType =
        event.description === "Gesture Event"
          ? event.type
          : `NSDOMEvent<${event.type}>`;
      intrinsicElement.source += `\n\n      /**\n     * ${event.description || ""}\n*/\n"${eventName}"?: (event:${eventType}) => void`;
    }
  }

  if (!extendsCoreViewTypeName.includes("NSDOMAttributes")) {
    if (omittedTypes.length) {
      intrinsicElement.source = intrinsicElement.source.replace(
        EXTEND_VIEW_MARKER,
        `Omit<${extendsCoreViewTypeName}<${intrinsicElement.tagName}>, ${omittedTypes.map((type) => `"${type}"`).join(" | ")}>`
      );
    } else {
      intrinsicElement.source = intrinsicElement.source.replace(
        EXTEND_VIEW_MARKER,
        extendsCoreViewTypeName + `<${intrinsicElement.tagName}>`
      );
    }
  } else {
    intrinsicElement.source = intrinsicElement.source.replace(
      EXTEND_VIEW_MARKER,
      extendsCoreViewTypeName
    );
  }

  intrinsicElement.source += `\n\n}\n\n`;
  return intrinsicElement;
}

export function sortTagsByPrority(tags: Tag[]) {
  const priorityOrder = ["ViewBase", "View"];
  return tags.sort((a, b) => {
    const ai = priorityOrder.indexOf(a.name);
    const bi = priorityOrder.indexOf(b.name);
    // If either is in the priority list, order by that list
    if (ai !== -1 || bi !== -1) {
      if (ai === -1) return 1;
      if (bi === -1) return -1;
      return ai - bi;
    }
    // Fallback to alphabetical by name
    return a.name.localeCompare(b.name);
  });
}
