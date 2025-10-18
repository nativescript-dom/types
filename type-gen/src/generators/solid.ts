import {
  CliArgumentsMap,
  CoreTypes,
  HtmlCustomData,
  isCoreType,
  isSimpleType,
  JsxStyleObject,
  OutputType,
} from "../types";
import { format } from "prettier";
import {
  importEventDataTypeFromPackage,
  importTypeFromPackage,
  moduleExportsSymbolForPackage,
  resolveAttributeType,
} from "../utils";
import ts = require("typescript");
import path = require("path");

const SolidJSXTypes = `export function mapElementTag<K extends keyof IntrinsicElements>(
      tag: K
    ): IntrinsicElements[K];

    export function createElement<
      Element extends IntrinsicElements,
      Key extends keyof IntrinsicElements
    >(element: Key | undefined | null, attrs: Element[Key]): Element[Key];

     export interface ArrayElement extends SolidJSX.ArrayElement {}
     type Element = SolidJSX.Element

    export function createElement<
      Element extends IntrinsicElements,
      Key extends keyof IntrinsicElements,
      T
    >(
      element: Key | undefined | null,
      attrsEnhancers: T,
      attrs: Element[Key] & T
    ): Element[Key];

    export interface ArrayElement extends Array<Element> {}

    export interface FunctionElement {
      (): Element;
    }

    interface IntrinsicAttributes {
      ref?: unknown | ((e: unknown) => void);
    }

    export interface ElementClass {
      // empty, libs can define requirements downstream
    }
    export interface ElementAttributesProperty {
      // empty, libs can define requirements downstream
    }
    export interface ElementChildrenAttribute {
      children: {};
    }

    interface ArrayElement extends Array<Element> {}


    interface CustomEvents {}
    interface CustomCaptureEvents {}`;

/**
 *
 * @param args
 * @param path
 * @param data
 * @returns
 */
export async function generateSolidTypes(
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
      htmlName: tag.name.toLocaleLowerCase(),
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
      intrinsicElement.source += `\n\n      ${property.description ? `/**\n     * ${property.description}\n*/` : ""}\n${property.name}?: ${resolveAttributeType(property.type)}`;

      if (property.type) {
        if (!isSimpleType(property.type)) {
          for (let type of property.type.split("|")) {
           importTypeFromPackage(
              type,
              importSource,
              coreImports,
              imports
            );
          }
        }
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
        intrinsicElement.source += `\n\n      /**\n     * ${event.description || ""}\n*/\n"on:${event.name}"?: (event:${eventType}) => void`;
      }
    }

    intrinsicElement.source += `\n\n}\n\n`;
    intrinsicElements.push(intrinsicElement);
  }

  const output = !isCore
    ? [
        `import {${coreImports.join(",\n")}\n} from "@nativescript/core";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        `import {NSDOMAttributes, NSDOMEvent, ColorValue, Style} from "ns-solid/jsx-runtime"`,
        CoreTypes,
        `declare module "ns-solid/jsx-runtime" {`,
        "   export namespace JSX {",
        ...intrinsicElements.map((e) => e.source),
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
        `import {JSX as SolidJSX } from "solid-js";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        `import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";`,
        `import { FlexGrow, FlexShrink, Order } from "@nativescript/core/ui/layouts/flexbox-layout";`,
        "",
        "",
        CoreTypes,
        "",
        `declare module "ns-solid/jsx-runtime" {`,
        "export interface NSDOMAttributes<T> extends SolidJSX.CustomAttributes<T>, SolidJSX.DirectiveAttributes, SolidJSX.DirectiveFunctionAttributes<T> {}",
        `export type NSDOMEvent<T> = Event & T;`,
        "",
        JsxStyleObject,
        "   export namespace JSX {",
        SolidJSXTypes,
        ...intrinsicElements.map((e) => e.source),
        `export interface IntrinsicElements {`,
        ...intrinsicElements.map(
          (e) =>
            `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": ${e.name},`
        ),
        "}",
        "   }",
        `function Fragment(props: { children: JSX.Element }): JSX.Element;`,
        `function jsx(type: any, props: any): () => any;`,
        `export { jsx, jsx as jsxs, jsx as jsxDEV, Fragment };`,
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
