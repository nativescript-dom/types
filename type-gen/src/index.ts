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
import { capitalize, pascalize, toCamelCase, toKebabCase } from "./utils";
import path = require("path");
import ts = require("typescript");
const { resolvePackagePath } = require("@rigor789/resolve-package-path");

// A list of all the views in Core.
const CoreViewsList = [
  "AbsoluteLayout",
  "ActivityIndicator",
  "Button",
  "ContentView",
  "ContainerView",
  "DatePicker",
  "DockLayout",
  "EditableTextBase",
  "FlexboxLayout",
  "FormattedString",
  "GridLayout",
  "HtmlView",
  "Image",
  "Label",
  "ListPicker",
  "ListView",
  "Placeholder",
  "Progress",
  "ProxyViewContainer",
  "Repeater",
  "RootLayout",
  "ScrollView",
  "SearchBar",
  "SegmentedBar",
  "SegmentedBarItem",
  "Slider",
  "StackLayout",
  "Switch",
  "TabView",
  "TabViewItem",
  "TextField",
  "TextView",
  "TimePicker",
  "WebView",
  "View",
  "ViewBase",
  "EditableTextBase",
  "TextBase",
  "ImageBase",
  "LayoutBase",
];

// Add base classes for all core views too.
CoreViewsList.push(
  ...CoreViewsList.map((v) =>
    v.endsWith("Base") ? undefined : `${v}Base`
  ).filter((v) => !!v)
);

const VIEW_CLASS_REGEX = /class ([\w_.\-]+) extends ([\w_.\-]+)/g;

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
  events: string[];
  eventsImport: string;
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

const VIEW_PROPERTY_SET = new Set<string>();
const VIEW_EVENTS: Attribute[] = [];

async function discoverViews(
  source: string,
  pattern: string,
  isModule?: boolean
) {
  const sourceModulePath = isModule
    ? //@ts-ignore
      path.dirname(resolvePackagePath(source))
    : path.join(__dirname, source);

  const dest = path.join(
    __dirname,
    isModule ? source : source.split("/").pop()
  );
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.cpSync(sourceModulePath, dest, {
    recursive: true,
  });

  const globPattern = path.join(dest, pattern);

  const EVENT_REGEX = /static (\w+)Event:\s+string;/gm;
  const EVENT_REGEX_GETTER = /static get (\w+)Event\(\):/gm;

  const files = await expandGlobs(globPattern);
  const rawOutput: Partial<InputFile>[] = [];

  for (let file of files) {
    const text = fs.readFileSync(file, "utf-8");

    const matchedEvents = [
      ...(text.matchAll(EVENT_REGEX) || []),
      ...(text.matchAll(EVENT_REGEX_GETTER) || []),
    ];

    const events = matchedEvents.map((match) => match[1]);

    if (file.includes("android.") || file.includes("ios.")) continue;

    const matches = [...(text.matchAll(VIEW_CLASS_REGEX) || [])];

    matches?.forEach((match) => {
      const className = match[1];
      const elementName = toKebabCase(className);
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
        extends: match[2],
        file: file,
        fileName: `${elementName}.d.ts`,
        compiledTS: compileTypescript([file]),
        events: events,
      };

      // Extract all possible valid view properties from source files. We want to make sure we do not include any invalid properties.
      for (const file of fileData.compiledTS.program.getSourceFiles()) {
        const text = file.text;
        const matches = [
          ...(text.matchAll(
            /(\b[a-z][\w]+)Property: (CssProperty|Property|ShorthandProperty|InheritedCssProperty|CssAnimationProperty|.*Property).*;/g
          ) || []),
        ];

        for (const match of matches) {
          VIEW_PROPERTY_SET.add(match[1]);
        }

        // const eventsPascalized = events.map((e) => capitalize(e));
        // eventsPascalized.forEach((event) => {
        //   const eventMatch = text.matchAll(
        //     new RegExp(`interface (${event}[a-zA-z0-9_.]+)`, "g")
        //   );
        //   const value = eventMatch.next().value;
        //   if (value) {
        //     VIEW_EVENTS.push({
        //       name: toCamelCase(event),
        //       type: value[1],
        //       description: "",
        //       source: file.fileName.includes("@nativescript/core/")
        //         ? path.join(
        //             "@nativescript/core",
        //             file.fileName.split("@nativescript/core").pop()
        //           )
        //         : file.fileName.includes(source)
        //         ? source
        //         : file.fileName,
        //     });
        //   }
        // });
      }
      rawOutput.push(fileData);
    });
  }

  // const corePath = resolvePackagePath("@nativescript/core");
  // const coreFiles = await expandGlobs(path.join(corePath, "ui/**/*.ts"));
  // const coreEvents = [];

  // for (const file of coreFiles) {
  //   const text = fs.readFileSync(file, "utf-8");
  //   const eventMatches = [
  //     ...(text.matchAll(EVENT_REGEX) || []),
  //     ...(text.matchAll(EVENT_REGEX_GETTER) || []),
  //   ];
  //   const events = eventMatches.map((match) => match[1]);
  //   coreEvents.push(...events);
  // }

  // for (const file of coreFiles) {
  //   const eventsPascalized = coreEvents.map((e) => capitalize(e));

  //   eventsPascalized.forEach((event) => {
  //     const eventMatch = fs
  //       .readFileSync(file, "utf-8")
  //       .matchAll(
  //         new RegExp(
  //           `interface (${event}[a-zA-z0-9_.]+) extends EventData`,
  //           "g"
  //         )
  //       );
  //     const value = eventMatch.next().value;
  //     if (value) {
  //       console.log("Core event type", value[1]);
  //       VIEW_EVENTS.push({
  //         name: toCamelCase(event),
  //         type: value[1],
  //         description: "",
  //         source: path.join(
  //           "@nativescript/core",
  //           file.split("@nativescript/core").pop()
  //         ),
  //       });
  //     } else {
  //       // console.log(event, "No type found in core");
  //     }
  //   });
  // }

  // extract classes that extend core views
  const extendsCoreViewList = rawOutput.filter(
    (v) =>
      CoreViewsList.includes(v.extends) ||
      (CoreViewsList.includes(v.className) &&
        (CoreViewsList.includes(v.extends) || v.extends == "ViewBase"))
  );
  if (!extendsCoreViewList.length) return [];

  const finalOutput: Partial<InputFile>[] = [];

  // get classes that extend that classes which extend core views
  for (const item of extendsCoreViewList) {
    let current = item;
    let events = current.events;
    while (current) {
      const parent = CoreViewsList.includes(current.className)
        ? null
        : rawOutput.find((v) => v.extends === current.className);
      events.push(...(parent?.events || []));
      if (!parent) {
        current.events = events;
        finalOutput.push(current);
        break;
      }
      current = parent;
    }
  }

  return finalOutput;
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

  const jsonEntries: HtmlCustomData[] = [];
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
    const htmlData = JSON.parse(json) as HtmlCustomData;

    htmlData.tags[0].events = {
      import: view.eventsImport,
      list: view.events,
    };

    jsonEntries.push(htmlData);
  }

  const htmlCustomData: HtmlCustomData = {
    version: "1.1",
    tags: [],
    globalAttributes: [],
  };
  // Append all entries into a single entry
  for (let entry of jsonEntries) {
    if (entry.tags.length === 0) continue;
    for (let tag of entry.tags) {
      if (!tag.properties || tag.properties.length === 0) {
        console.log("Skipping tag with no properties: ", tag.name, "empty");
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
      item: Tag | Attribute | string,
      tag: Tag | undefined,
      globalAttributes: Attribute[],
      viewEvents: Attribute[]
    ) => Tag[] | Attribute[];
    writer: (metadata: HtmlCustomData) => void;
  }
) {
  const elements: HtmlCustomData = {
    version: "1.1",
    globalAttributes: [],
    tags: [],
  };
  const meta = JSON.parse(tagsData) as HtmlCustomData;

  for (let element of meta.tags) {
    // Visit each tag
    const tags =
      (options.visitor("tag", element, undefined, [], VIEW_EVENTS) as Tag[]) ||
      [];

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
        if (
          VIEW_PROPERTY_SET.has(property.name) ||
          property.name.endsWith("Event")
        ) {
          const attrs =
            (options.visitor(
              "attribute",
              property,
              tag,
              [],
              VIEW_EVENTS
            ) as Attribute[]) || [];
          tag.attributes.push(...attrs);
        }
      }

      // Convert events to properties.
      for (let event of tag.events.list) {
        const events = options.visitor("event", event, tag, [], VIEW_EVENTS);
        for (const event of events) {
          if (!tag.attributes.find((e) => e.name === event.name)) {
            tag.attributes.push(event as Attribute);
          }
        }
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
