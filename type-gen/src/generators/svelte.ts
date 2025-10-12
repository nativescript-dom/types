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
import { pascalize, resolveAttributeType, toCamelCase } from "../utils";

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
    ): HTMLElement;`

export async function generateSvelteTypes(
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
      htmlName: toCamelCase(tag.name),
      source: "",
      name: `${tag.name}Attributes`,
      description: tag.description
    };

    intrinsicElement.source += `export interface ${intrinsicElement.name} extends NSDOMAttributes<${tag.name}> {`;
    intrinsicElement.source += `\n[name: string]: any`


    if (!imports.find((t) => t === tag.name.trim())) {
      imports.push(tag.name);
    }

    for (let property of tag.properties) {
      if (property.name === "style") continue;
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
        const eventType =
          event.description === "Gesture Event"
            ? event.type
            : `NSDOMEvent<${event.type}>`;
        intrinsicElement.source += `\n\n      /**\n     * ${event.description}\n@type ${event.type}\n*/\n"on:${event.name}"?: (event:${eventType}) => void`;
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
    `import { HTMLAttributes } from "svelte/elements";`,
    `import {\nCoreTypes,\n${imports.join(",\n")}\n} from "${importSource}";`,
    `import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";`,
    `import { FlexGrow, FlexShrink, Order } from "@nativescript/core/ui/layouts/flexbox-layout";`,
    "",
    "",
    CoreTypes,
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
    ...intrinsicElements.map(
      (e) => `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": ${e.name},`
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
