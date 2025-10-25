import * as fs from "fs";
import glob from "glob";
import {
  AnalyzerResult,
  analyzeSourceFile,
  TransformerConfig,
} from "web-component-analyzer";
import { compileTypescript } from "./cli/compile";
import { clearEventDiscovery, NativeScriptFlavor } from "./cli/flavor";
import { generateAngularTypes } from "./generators/angular";
import { jsonTransformerLocal } from "./transformer";
import {
  CliArgumentsMap,
  EventType,
  gestureEvents,
  HtmlCustomData,
  InputFile,
  MetadataOptions,
  OutputType,
} from "./types";
import path = require("path");
import ts = require("typescript");
import { generateSolidTypes } from "./generators/solid";
import { generateVueTypes } from "./generators/vue";
import { generateSvelteTypes } from "./generators/svelte";
import { generateReactTypes } from "./generators/react";
import { resolvePackageJSONPath } from "@rigor789/resolve-package-path";
import { CORE_PKG } from "./utils";

async function visitFilesForSource(
  { isModule, source, pattern, legacyMode, viewNames }: MetadataOptions,
  viewVisitor?: (view: Partial<InputFile>) => void
) {
  const sourceModulePath = isModule
    ? path.dirname(
        resolvePackageJSONPath(source, {
          paths: [process.cwd()],
        })
      )
    : path.join(__dirname, source);

  const globPattern = path.join(
    sourceModulePath.replace("package.json", ""),
    pattern
  );
  const files = await glob(globPattern);

  for (let file of files) {
    const fileText = fs.readFileSync(file, "utf-8");
    if (!fileText.includes("@nsView") && !legacyMode) continue;

    if (
      viewNames &&
      !viewNames.some((name) => fileText.includes(`@nsView ${name}`))
    )
      continue;

    const fileData = {
      file: file,
      compiledTS: compileTypescript([file]),
    };
    viewVisitor?.(fileData);
  }
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
  const transformerConfig: TransformerConfig = {
    inlineTypes: config.inlineTypes ?? false,
    visibility: config.visibility ?? "public",
    cwd: config.cwd,
  };

  return jsonTransformerLocal(results, program, transformerConfig);
}

function analyzeInputFile(entries: HtmlCustomData[], legacyMode: boolean) {
  return (view: InputFile) => {
    const results: AnalyzerResult[] = [];
    for (let file of view.compiledTS.files) {
      const result = analyzeSourceFile(file as any, {
        program: view.compiledTS.program as any,
        ts: ts as any,
        flavors: [new NativeScriptFlavor(legacyMode)],
        config: {
          analyzeAllDeclarations: true,
          analyzeDependencies: true,
          analyzeDefaultLib: true,
          analyzeGlobalFeatures: true,
        },
      });
      results.push(result);
    }

    const json = transformResults(results, view.compiledTS.program, {
      inlineTypes: false,
      visibility: "public",
      format: "json",
    });
    const htmlData = JSON.parse(json) as HtmlCustomData;
    if (!htmlData.tags || !htmlData.tags.length) return;

    entries.push(htmlData);
  };
}

function mergeEntries(entries: HtmlCustomData[]) {
  const htmlCustomData: HtmlCustomData = {
    $schema:
      "https://raw.githubusercontent.com/microsoft/vscode-html-languageservice/refs/heads/main/docs/customData.schema.json",
    version: 1.1,
    tags: [],
  };

  for (let entry of entries) {
    if (entry.tags.length === 0) continue;
    for (let tag of entry.tags) {
      if (htmlCustomData.tags.some((t) => t.name === tag.name)) continue;
      tag.events = tag.events ?? [];
      for (const ge of gestureEvents) {
        const exists = tag.events.some((e) => e.name === ge.name);
        if (!exists) {
          const eventObj: EventType = {
            name: ge.name,
            description: "Gesture Event",
            deprecated: undefined,
            deprecatedMessage: "",
            type: ge.type,
          };
          tag.events.push(eventObj);
        }
      }

      htmlCustomData.tags.push(tag);
    }
  }
  return htmlCustomData;
}

export async function getCoreViewMetadata(options: MetadataOptions) {
  return getMetadataFromPath(options);
}

export async function getMetadataFromPath({
  source,
  pattern,
  isModule = true,
  legacyMode = false,
  args,
  context,
  viewNames,
}: MetadataOptions) {
  const jsonEntries: HtmlCustomData[] = [];

  if (legacyMode) {
    console.log("Trying to find views using legacy mode");
  }

  await visitFilesForSource(
    {
      source,
      pattern,
      isModule,
      legacyMode,
      args,
      context,
      viewNames,
    },
    analyzeInputFile(jsonEntries, legacyMode)
  );

  const htmlCustomData = mergeEntries(jsonEntries);
  if (
    !htmlCustomData.tags.length &&
    !legacyMode &&
    globalThis.USE_LEGACY_MODE
  ) {
    return getMetadataFromPath({
      source,
      pattern,
      isModule,
      legacyMode: true,
      args: args,
      context,
    });
  }

  return htmlCustomData;
}

const context = {};
export async function generateTypes(
  args: CliArgumentsMap
): Promise<OutputType[]> {
  globalThis.USE_LEGACY_MODE = args.legacy;
  globalThis.LEGACY_MODE = false;
  clearEventDiscovery();
  const root = args.package
    ? args.package
    : args.core
      ? CORE_PKG
      : args.directory;

  if (!root) return [];

  const options = {
    source: root,
    pattern: "**/*.ts",
    isModule: args.directory ? false : true,
    legacyMode: false,
    args,
    context,
  };

  if (!args.core && !context["coreViewData"]) {
    const coreViewData = await getCoreViewMetadata({
      ...options,
      source: CORE_PKG,
      viewNames: ["View", "ViewBase"],
    });
    context["coreViewData"] = coreViewData;
  }

  const rawData = await getMetadataFromPath({
    source: root,
    pattern: "**/*.ts",
    isModule: args.directory ? false : true,
    legacyMode: false,
    args,
    context,
  });

  if (args.core) {
    context["coreViewData"] = rawData;
  }

  if (!rawData.tags.length) {
    console.log("No NativeScript views found in", root);
    return [];
  }

  console.log(rawData.tags.length, "views found in", root);

  switch (args.framework) {
    case "angular":
      return generateAngularTypes(args, root, rawData, context);
    case "react":
      return generateReactTypes(args, root, rawData, context);
    case "solid":
      return await generateSolidTypes(args, root, rawData, context);
    case "svelte":
      return await generateSvelteTypes(args, root, rawData, context);
    case "vue":
      return await generateVueTypes(args, root, rawData, context);
  }
}
