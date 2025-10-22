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
  sortTagsByPrority,
  toCamelCase
} from "../utils";

const SvelteJSX = ` // Every namespace eligible for use with the new Svelte intellisense needs to implement the following two functions

    // Every namespace eligible for use needs to implement the following two functions
    /**
     * @internal do not use
     */
    function mapElementTag<K extends keyof ElementTagNameMap>(
      tag: K
    ): ElementTagNameMap[K];
    function mapElementTag<K extends keyof SVGElementTagNameMap>(
      tag: K
    ): SVGElementTagNameMap[K];
    function mapElementTag(tag: any): any; // needs to be any because used in context of <svelte:element>

    /**
     * @internal do not use
     */
    function createElement<
      Elements extends IntrinsicElements,
      Key extends keyof Elements
    >(
      // "undefined | null" because of <svelte:element>
      element: Key | undefined | null,
      attrs: string extends Key ? HTMLViewElementAttributes<any> : Elements[Key]
    ): Key extends keyof ElementTagNameMap
      ? ElementTagNameMap[Key]
      : Key extends keyof SVGElementTagNameMap
      ? SVGElementTagNameMap[Key]
      : any;

    function createElement<
      Elements extends IntrinsicElements,
      Key extends keyof Elements,
      T
    >(
      // "undefined | null" because of <svelte:element>
      element: Key | undefined | null,
      attrsEnhancers: T,
      attrs: (string extends Key
        ? HTMLViewElementAttributes<any>
        : Elements[Key]) &
        T
    ): Key extends keyof ElementTagNameMap
      ? ElementTagNameMap[Key]
      : Key extends keyof SVGElementTagNameMap
      ? SVGElementTagNameMap[Key]
      : any;

    //

    function mapElementTag(tag: any): HTMLElement;

    function createElement<
      Elements extends IntrinsicElements,
      Key extends keyof Elements
    >(
      // "undefined | null" because of <svelte:element>
      element: Key | undefined | null,
      attrs: Elements[Key]
    ): HTMLElement;

    function createElement<
      Elements extends IntrinsicElements,
      Key extends keyof Elements,
      T
    >(
      // "undefined | null" because of <svelte:element>
      element: Key | undefined | null,
      attrsEnhancers: T,
      attrs: Elements[Key] & T
    ): HTMLElement;`;

export async function generateSvelteTypes(
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
            name: (name) => toCamelCase(name),
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
        `import {NSDOMAttributes,ViewAttributes,ViewBaseAttributes, NSDOMEvent, ColorValue, Style} from "ns-svelte/jsx-runtime"`,
        `import {\n${imports.join(",\n")}\n} from "${importSource}";`,
        `import {${coreImports.join(",\n")}\n} from "@nativescript/core";`,
        CoreTypes(),
        ...intrinsicElements.map((e) => e.source),
        `declare global {`,
        `   namespace svelteNS.JSX {`,
        `export interface IntrinsicElements {`,
        ...intrinsicElements.map(
          (e) =>
            `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": ${e.name},`
        ),
        "}",
        `}`,
        `}`,
      ].join("\n")
    : [
        `import { HTMLAttributes } from "svelte/elements";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        `import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";`,
        `import { FlexGrow, FlexShrink, Order } from "@nativescript/core/ui/layouts/flexbox-layout";`,
        "",
        "",
        CoreTypes(),
        "",
        `export type NSDOMEvent<T> = T;`,
        `export interface NSDOMAttributes<T> {
      class?: string
    }`,
        "",
        JsxStyleObject,
        ...intrinsicElements.map((e) => e.source),
        `declare global {`,
        `   namespace svelteNS.JSX {`,
        SvelteJSX,
        `export interface IntrinsicElements {`,
        ...intrinsicElements
          .filter((e) => !isCoreView(e.tagName))
          .map(
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
