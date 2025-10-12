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
import { resolveAttributeType } from "../utils";

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
  const imports = ["AccessibilityLiveRegion"];
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
      description: tag.description
    };

    intrinsicElement.source += `export interface ${intrinsicElement.name} extends NSDOMAttributes<${tag.name}> {`;

    if (!imports.find((t) => t === tag.name.trim())) {
      imports.push(tag.name);
    }

    for (let property of tag.properties) {
      intrinsicElement.source += `\n\n      /**\n     * ${property.description}\n*/\n${property.name}?: ${resolveAttributeType(property.type)}`;

      if (property.type) {
        for (let type of property.type.split("|"))
          if (!isSimpleType(type.trim())) {
            const strippedType = type.trim().replace("[]", "");
            if (
              !imports.find((t) => t === strippedType) &&
              !isCoreType(strippedType) &&
              strippedType !== "Style"
            ) {
              imports.push(strippedType);
            }
          }
      }
    }

    if (tag.events) {
      for (let event of tag.events) {
        intrinsicElement.source += `\n\n      /**\n     * ${event.description}\n*/\n"on:${event.name}"?: (event:${event.description === "Gesture Event" ? event.type : `NSDOMEvent<${event.type}>`}) => void`;
        const type = event.type.trim();
        if (!imports.find((t) => t === type)) {
          imports.push(type);
        }
      }
    }

    intrinsicElement.source += `\n\n}\n\n`;
    intrinsicElements.push(intrinsicElement);
  }

  const output = [
    `import {JSX as SolidJSX } from "solid-js";`,
    `import {\nCoreTypes,\n${imports.join(",\n")}\n} from "${importSource}";`,
    `import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";`,
    `import { FlexGrow, FlexShrink, Order } from "@nativescript/core/ui/layouts/flexbox-layout";`,
    "",
    "",
    CoreTypes,
    "",
    "interface NSDOMAttributes<T> extends SolidJSX.CustomAttributes<T>, SolidJSX.DirectiveAttributes, SolidJSX.DirectiveFunctionAttributes<T> {}",
    `export type NSDOMEvent<T> = Event & T;`,
    "",
    JsxStyleObject,
    `declare module "ns-solid/jsx-runtime" {`,
    "   export namespace JSX {",
    SolidJSXTypes,
    ...intrinsicElements.map((e) => e.source),
    `export interface IntrinsicElements {`,
    ...intrinsicElements.map((e) => `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": ${e.name},`),
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
