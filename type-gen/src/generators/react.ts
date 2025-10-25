import { format } from "prettier";
import {
  CliArgumentsMap,
  CoreTypes,
  HtmlCustomData,
  isCoreType,
  isSimpleType,
  JsxStyleObject,
  OutputType,
  Tag,
} from "../types";
import {
  generateJSXAttributesInterface,
  importEventDataTypeFromPackage,
  importTypeFromPackage,
  isCoreView,
  pascalize,
  resolveAttributeType,
  sortTagsByPrority,
  toCamelCase,
} from "../utils";

export async function generateReactTypes(
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
            eventName: (eventName) => `on${pascalize(eventName)}`,
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
        `import {NSDOMAttributes,ViewAttributes ,ViewBaseAttributes, NSDOMEvent, ColorValue, Style} from "ns-react/jsx-runtime"`,
        `import {\n${imports.join(",\n")}\n} from "${importSource}";`,
        `import {${coreImports.join(",\n")}\n} from "@nativescript/core";`,
        CoreTypes(),
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
        CoreTypes(),
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
        `declare global {`,
        `   export namespace JSX {`,
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
