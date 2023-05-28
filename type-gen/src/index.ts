import {
  AnalyzerResult,
  analyzeSourceFile,
  transformAnalyzerResult,
  TransformerConfig,
} from "web-component-analyzer";
//@ts-ignore
import * as fs from "fs";
import glob from "glob";
import * as AttributeKeys from "./attr-literals";
import { Attribute, HtmlCustomData, Tag } from "./types";
import { isGlobal, toKebabCase } from "./utils";
import path = require("path");
import ts = require("typescript");
const VIEW_CLASS_REGEX =
  /class .* extends (ViewBase|ViewCommon|TextBase|LayoutBase|EditableTextBase|View|CustomLayoutView|FrameBase|PageBase|.*View|ActionItem|.*Layout)/g;
const VIEW_BASE = /class ViewBase/g;
const BASE_CLASS = /(ViewBase)/g;

async function expandGlobs(modulePath: string) {
  const filePath = await glob(modulePath);
  return filePath;
}

type InputFile = {
  className: string;
  elementName: string;
  extends: string;
  file: string;
  fileName: string;
  compiledTS: {
    program: ts.Program;
    files: ts.SourceFile[];
  };
};

const defaultOptions = {
  noEmitOnError: false,
  allowJs: true,
  maxNodeModuleJsDepth: 3,
  experimentalDecorators: true,
  target: ts.ScriptTarget.Latest,
  downlevelIteration: true,
  module: ts.ModuleKind.ESNext,
  //module: ModuleKind.CommonJS,
  //lib: ["ESNext", "DOM", "DOM.Iterable"],
  strictNullChecks: true,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  esModuleInterop: true,
  noEmit: true,
  allowSyntheticDefaultImports: true,
  allowUnreachableCode: true,
  allowUnusedLabels: true,
  skipLibCheck: true,
};

/**
 * Compiles an array of file paths using typescript.
 * @param filePaths
 * @param options
 */
function compileTypescript(filePaths, options = defaultOptions) {
  filePaths = Array.isArray(filePaths) ? filePaths : [filePaths];
  const program = ts.createProgram(filePaths, options);
  const files = program
    .getSourceFiles()
    .filter((sf) => filePaths.includes(sf.fileName))
    .sort((sfA, sfB) => (sfA.fileName > sfB.fileName ? 1 : -1));
  return { program, files };
}

async function discoverViews(
  source: string,
  pattern: string,
  isModule?: boolean
) {
  const sourceModulePath = isModule
    ? path.dirname(require.resolve(source))
    : path.join(__dirname, source);

  const dest = path.join(
    __dirname,
    isModule ? source : source.split("/").pop()
  );
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  console.log("Found module at:", sourceModulePath);

  fs.cpSync(sourceModulePath, dest, {
    recursive: true,
  });

  const globPattern = path.join(dest, pattern);

  console.log("Finding files in:", globPattern);

  const files = await expandGlobs(globPattern);
  const output: Partial<InputFile>[] = [];
  for (let file of files) {
    if (file.includes("android.") || file.includes("ios.")) continue;
    const text = fs.readFileSync(file, "utf-8");
    const matches = [
      ...(text.match(VIEW_CLASS_REGEX) || []),
      ...(text.match(VIEW_BASE) || []),
    ];

    if (matches && matches.length > 0 && text.indexOf("@element") === -1) {
      matches.forEach((match) => {
        const className = match.split(" ")[1].trim();
        const elementName = toKebabCase(className);
        if (
          (!elementName.includes("property") &&
            !elementName.includes("base")) ||
          BASE_CLASS.test(className)
        ) {
          const customElementDefine = `\n\ncustomElements.define("${elementName}", ${className});`;
          if (
            text.indexOf(
              `customElements.define("${elementName}", ${className});`
            ) === -1
          ) {
            fs.appendFileSync(file, customElementDefine, "utf-8");
          }
          const fileData = {
            className,
            elementName,
            extends: match.split(" ")[3],
            file: file,
            fileName: `${elementName}.d.ts`,
            compiledTS: compileTypescript([file]),
          };
          output.push(fileData);
        }
      });
    } else {
      if (text.indexOf("@element") > -1) {
        const fileData = {
          file: file,
          compiledTS: compileTypescript([file]),
        };
        output.push(fileData);
      }
    }
  }
  output.forEach((item) => console.log(item.className));
  return output;
}

export async function getDefaultEventsMap() {
  const meta = await getMetadataFromPath(
    "../node_modules/@nativescript-dom/core-types",
    "**/*.d.ts",
    false
  );
  return meta;
}

export async function getMetadataFromPath(
  source: string,
  pattern: string,
  isModule = true
) {
  const views = await discoverViews(source, pattern, isModule);

  const jsonEntries = [];
  for (let view of views) {
    const results = [];
    for (let file of view.compiledTS.files) {
      const result = analyzeSourceFile(file as any, {
        program: view.compiledTS.program as any,
        ts: ts as any,
        config: {
          analyzeAllDeclarations: true,
          analyzeDependencies: true,
          analyzeDefaultLib: true,
          analyzeGlobalFeatures: true,
        },
      });
      results.push(result);
    }

    const filteredResults = results.filter(
      (result) =>
        result.componentDefinitions.length > 0 ||
        result.globalFeatures != null ||
        (result.declarations?.length || 0) > 0
    );
    const json = transformResults(filteredResults, view.compiledTS.program, {
      inlineTypes: false,
      visibility: "public",
      format: "json",
    });
    jsonEntries.push(json);
  }

  const htmlCustomData: HtmlCustomData = {
    version: "1.1",
    tags: [],
    globalAttributes: [],
  };
  // Append all entries into a single entry
  for (let entry of jsonEntries) {
    const parsed = JSON.parse(entry) as HtmlCustomData;
    if (parsed.tags.length === 0) continue;
    for (let tag of parsed.tags) {
      if (tag.name === "view-common") continue;

      if (!tag.properties || tag.properties.length === 0) {
        console.log("skipping tag ", tag.name, "empty");
        continue;
      }
      htmlCustomData.tags.push(tag);
    }
  }
  return htmlCustomData;
}

/**
 * Transforms analyze results based on the wca cli config.
 * @param results
 * @param program
 * @param config
 */
export function transformResults(
  results: AnalyzerResult[] | AnalyzerResult,
  program: ts.Program,
  config: any
): string {
  results = Array.isArray(results) ? results : [results];

  // Default format is "markdown"
  const format = config.format || "markdown";

  const transformerConfig: TransformerConfig = {
    inlineTypes: config.inlineTypes ?? false,
    visibility: config.visibility ?? "public",
    markdown: config.markdown,
    cwd: config.cwd,
  };

  return transformAnalyzerResult(
    format,
    results,
    program as any,
    transformerConfig
  );
}

export function generateMetadata(
  tagsData: string,
  eventsData: string,
  options: {
    visitor: (
      type: "attribute" | "tag" | "event" | "event-tag",
      item: Tag | Attribute,
      tag: Tag | undefined,
      globalAttributes: Attribute[]
    ) => Tag[] | Attribute[];
    writer: (metadata: HtmlCustomData) => void;
  }
) {
  const events: HtmlCustomData = {
    version: "1.1",
    globalAttributes: [],
    tags: [],
  };
  const elements: HtmlCustomData = {
    version: "1.1",
    globalAttributes: [],
    tags: [],
  };

  const eventsMeta = JSON.parse(eventsData) as HtmlCustomData;

  const sortedEvents = [
    ...eventsMeta.tags.filter((tag) => isGlobal(tag.name)),
    ...eventsMeta.tags.filter((tag) => !isGlobal(tag.name)),
  ];
  for (let eventTag of sortedEvents) {
    // Visit each tag
    const tags =
      (options.visitor(
        "event-tag",
        eventTag,
        undefined,
        elements.globalAttributes
      ) as Tag[]) || [];

    for (let tag of tags) {
      tag.attributes = [];
      // Visit each prop of each tag
      for (let eventProp of tag.properties) {
        const attrs =
          (options.visitor(
            "event",
            eventProp,
            tag,
            elements.globalAttributes
          ) as Attribute[]) || [];
        tag.attributes.push(...attrs);
      }
      delete tag.properties;
    }
    // Append all tags
    events.tags.push(...tags);
  }

  const meta = JSON.parse(tagsData) as HtmlCustomData;
  // We want to parse global tags first.
  const sortedMetaTags = [
    ...meta.tags.filter((tag) => isGlobal(tag.name)),
    ...meta.tags.filter((tag) => !isGlobal(tag.name)),
  ];

  for (let element of sortedMetaTags) {
    // Visit each tag
    const tags =
      (options.visitor(
        "tag",
        element,
        events.tags.find((tag) => tag.name === `${element.name}-events`),
        elements.globalAttributes
      ) as Tag[]) || [];
    // Even if a tag is skipped, we still iterate over it's properties.
    const _tags = tags.length === 0 ? [element] : tags;
    for (let tag of _tags) {
      if (!tag.properties) {
        console.warn(`No properties found for tag ${tag.name}`);
        continue;
      }
      tag.attributes = !tag.attributes ? [] : tag.attributes;
      // Visit each prop of each tag
      for (let property of tag.properties) {
        const attrs =
          (options.visitor(
            "attribute",
            property,
            tag,
            elements.globalAttributes
          ) as Attribute[]) || [];

        tag.attributes.push(...attrs);
      }
      // Delete properties array
      delete tag.properties;
    }
    // Append all tags
    elements.tags.push(...tags);
  }

  options.writer(elements);
}

export const viewBaseAttributes = [
  ...AttributeKeys.HTMLViewBaseElementAttributeKeys,
  ...AttributeKeys.HTMLViewBaseElementAttributeKeys.map((k) => `ios:${k}`),
  ...AttributeKeys.HTMLViewBaseElementAttributeKeys.map((k) => `android:${k}`),
  "onLoaded",
  "@loaded",
  "(loaded)",
  "onUnloaded",
  "(unloaded)",
  "@unloaded",
  "onCreated",
  "(created)",
  "@created",
  "onDisposeNativeView",
  "@disposeNativeView",
  "(disposeNativeView)",
];
