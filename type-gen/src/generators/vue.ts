import { format } from "prettier";
import {
  CliArgumentsMap,
  CoreTypes,
  HtmlCustomData,
  JsxStyleObject,
  OutputType,
  Tag,
} from "../types";
import {
  generateJSXAttributesInterface,
  isCoreView,
  pascalize,
  sortTagsByPrority,
  toCamelCase,
} from "../utils";

export async function generateVueTypes(
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
            name: (name) => name,
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
        `import {NSDOMAttributes,ViewAttributes,ViewBaseAttributes, NSDOMEvent, ColorValue, Style} from "ns-vue/jsx-runtime"`,
        `import {${coreImports.join(",\n")}\n} from "@nativescript/core";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        CoreTypes(),
        ...intrinsicElements.map((e) => e.source),
        `declare module "@vue/runtime-core" {`,
        `export interface GlobalComponents {`,
        ...intrinsicElements.map(
          (e) =>
            `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": DefineComponent<${e.name}>,`
        ),
        "}",
        "}",
      ].join("\n")
    : [
        `import * as RuntimeCore from "@vue/runtime-core";`,
        `import {${imports.join(",\n")}\n} from "${importSource}";`,
        `import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";`,
        `import { FlexGrow, FlexShrink, Order } from "@nativescript/core/ui/layouts/flexbox-layout";`,
        "",
        "",
        CoreTypes(),
        "",
        `export type NSDOMEvent<T> = T;`,
        `type ReservedProps<T> = {
  key?: string | number | symbol;
  ref?:
    | string
    | RuntimeCore.Ref<T>
    | ((ref: T, refs: Record<string, any>) => void);
  ref_for?: boolean;
  ref_key?: string;
};

type ElementAttrs<T> = ReservedProps<T>;`,
        `export type NSDOMAttributes<T> = ElementAttrs<T>;`,
        "",
        JsxStyleObject,
        ...intrinsicElements.map((e) => e.source),
        `declare module "@vue/runtime-core" {`,
        `export interface GlobalComponents {`,
        ...intrinsicElements
          .filter((e) => !isCoreView(e.tagName))
          .map(
            (e) =>
              `${e.description ? `/** ${e.description} */\n` : ``}"${e.htmlName}": DefineComponent<${e.name}>,`
          ),
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
