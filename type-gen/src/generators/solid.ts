import { format } from "prettier";
import {
  CliArgumentsMap,
  CoreTypes,
  HtmlCustomData,
  JsxStyleObject,
  OutputType,
  Tag
} from "../types";
import {
  generateJSXAttributesInterface,
  isCoreView,
  sortTagsByPrority
} from "../utils";

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
  data: HtmlCustomData,
  context: Record<string, any>
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
    tagName: string;
  }[] = [];

  sortTagsByPrority(data.tags);

  const viewBaseTag: Tag =
    data.tags.find((tag) => tag.name === "ViewBase") ||
    (context.coreViewData as HtmlCustomData).tags.find(
      (tag) => tag.name === "ViewBase"
    );
  const viewTag: Tag =
    data.tags.find((tag) => tag.name === "View") ||
    (context.coreViewData as HtmlCustomData).tags.find(
      (tag) => tag.name === "View"
    );

  for (let tag of data.tags) {
    try {
      intrinsicElements.push(
        generateJSXAttributesInterface({
          tag: tag,
          transformers: {
            name: (name) => name.toLowerCase(),
            propertyName: (name) => name,
            eventName: (eventName) => `on:${eventName}`,
          },
          context: {
            view: viewTag,
            viewBase: viewBaseTag,
            imports,
            importSource,
            coreImports,
          },
        })
      );
    } catch (e) {
      console.error(`Error generating types for tag: ${tag.name}`, e);
    }
  }

  const output = !isCore
    ? [
        `import {${coreImports.join(",\n")}\n} from "@nativescript/core";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        `import {NSDOMAttributes, ViewAttributes, ViewBaseAttributes, NSDOMEvent, ColorValue, Style} from "ns-solid/jsx-runtime"`,
        CoreTypes(),
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
        CoreTypes(),
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
        ...intrinsicElements
          .filter((e) => !isCoreView(e.tagName))
          .map(
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
