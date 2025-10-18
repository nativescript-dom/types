import { format } from "prettier";
import {
  CliArgumentsMap,
  CoreTypes,
  HtmlCustomData,
  isCoreType,
  isSimpleType,
  JsxStyleObject,
  OutputType,
} from "../types";
import {
  importEventDataTypeFromPackage,
  importTypeFromPackage,
  pascalize,
  resolveAttributeType,
  toCamelCase,
} from "../utils";

export async function generateReactTypes(
  args: CliArgumentsMap,
  path: string,
  data: HtmlCustomData
): Promise<OutputType[]> {
  const importSource = path;
  const isCore = importSource === "@nativescript/core";
  const coreImports = [];
  const imports = [];

  if (isCore) {
    imports.push("AccessibilityLiveRegion");
  }
  const intrinsicElements: {
    htmlName: string;
    source: string;
    name: string;
    description: string;
  }[] = [];

  for (let tag of data.tags) {
    if (tag.name === "View" || tag.name === "ViewBase") continue;

    const intrinsicElement = {
      htmlName: toCamelCase(tag.name),
      source: "",
      name: `${tag.name}Attributes`,
      description: tag.description,
    };

    intrinsicElement.source += `export interface ${intrinsicElement.name} extends NSDOMAttributes<${tag.name}> {`;
    intrinsicElement.source += `\n[name: string]: any`;

    if (!imports.find((t) => t === tag.name.trim())) {
      imports.push(tag.name);
    }

    for (let property of tag.properties) {
      if (property.name === "style") continue;
      intrinsicElement.source += `\n\n      ${property.description ? `/**\n     * ${property.description}\n*/` : ''}\n${property.name}?: ${resolveAttributeType(property.type)}`;

      if (property.type) {
        for (let type of property.type.split("|"))
          importTypeFromPackage(type, importSource, coreImports, imports);
      }
    }

    if (tag.events) {
      for (let event of tag.events) {
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
        intrinsicElement.source += `\n\n      /**\n     * ${event.description || ""}\n@type ${event.type}\n*/\n"on${pascalize(event.name)}"?: (event:${eventType}) => void`;
      }
    }

    intrinsicElement.source += `\n\n}\n\n`;
    intrinsicElements.push(intrinsicElement);
  }

  const output = !isCore
    ? [
        `import {NSDOMAttributes, NSDOMEvent, ColorValue, Style} from "ns-react/jsx-runtime"`,
        `import {\n${imports.join(",\n")}\n} from "${importSource}";`,
        `import {${coreImports.join(",\n")}\n} from "@nativescript/core";`,
        CoreTypes,
        ...intrinsicElements.map((e) => e.source),
         `declare global {`,
        `   export namespace JSX {`,
        `export interface IntrinsicElements {`,
        ...intrinsicElements.map(
          (e) =>
            `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": ${e.name},`
        ),
        "}",
        "}",
        "}",
      ].join("\n")
    : [
        `import { HTMLAttributes, DetailedHTMLProps, Key, LegacyRef, Ref } from "react";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        `import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";`,
        `import { FlexGrow, FlexShrink, Order } from "@nativescript/core/ui/layouts/flexbox-layout";`,
        "",
        "",
        CoreTypes,
        "",
        `export type NSDOMEvent<T> = T;`,
        ` interface Attributes {
  key?: Key | null | undefined;
}
interface RefAttributes<T> extends Attributes {
  ref?: Ref<T> | undefined;
}
interface ClassAttributes<T> extends Attributes {
  ref?: LegacyRef<T> | undefined;
}`,
        `export interface NSDOMAttributes<T> extends ClassAttributes<T> {}`,
        "",
        JsxStyleObject,
        ...intrinsicElements.map((e) => e.source),
        `declare module "ns-react/jsx-runtime" {`,
        `   export namespace JSX {`,
        `export interface IntrinsicElements {`,
        ...intrinsicElements.map(
          (e) =>
            `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": ${e.name},`
        ),
        "}",
        "}",
        "}",
      ].join("\n");

  return [
    {
      data: await format(output, {
        parser: "typescript",
      }),
      format: "d.ts",
      nameSuffix: "jsx",
    },
  ];
}
