import path = require("path");
import { Attribute, isCoreType, isSimpleType } from "./types";
import ts = require("typescript");
import * as fs from "fs";
import { resolvePackageJSONPath } from "@rigor789/resolve-package-path";

export function isCore(source: string) {
  return source === "@nativescript/core";
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
  const isCore = pkg === "@nativescript/core";
  const type = eventDataType.trim();
  if (
    !imports.find((t) => t === type) &&
    !coreImports.find((t) => t === type)
  ) {
    if (!isCore) {
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
          "@nativescript/core",
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
  }
  return false;
}

export function importTypeFromPackage(
  type: string,
  pkg: string,
  coreImports: string[],
  imports: string[]
) {
  const isCore = pkg === "@nativescript/core";
  if (!isSimpleType(type.trim())) {
    const strippedType = type.trim().replace("[]", "");
    if (
      !imports.find((t) => t === strippedType) &&
      !coreImports.find((t) => t === strippedType) &&
      !isCoreType(strippedType) &&
      strippedType !== "Style"
    ) {
      if (!isCore) {
        const isExported = moduleExportsSymbolForPackage(
          pkg,
          process.cwd(),
          strippedType
        );
        if (isExported) {
          imports.push(strippedType);
          return true;
        } else {
          coreImports.push(type);
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
