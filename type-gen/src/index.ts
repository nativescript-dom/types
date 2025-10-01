import * as fs from "fs";
import glob from "glob";
import {
  AnalyzerResult,
  analyzeSourceFile,
  TransformerConfig,
} from "web-component-analyzer";
import { compileTypescript } from "./cli/compile";
import { NativeScriptFlavor } from "./cli/flavor";
import { generateAngularTypes } from "./generators/angular";
import { jsonTransformerLocal } from "./transformer";
import {
  CliArgumentsMap,
  HtmlCustomData,
  InputFile,
  OutputType
} from "./types";
import path = require("path");
import ts = require("typescript");
import { generateSolidTypes } from "./generators/solid";
const { resolvePackagePath } = require("@rigor789/resolve-package-path");

async function visitFilesForSource(
  source: string,
  pattern: string,
  isModule?: boolean,
  viewVisitor?: (view: Partial<InputFile>) => void
) {
  const sourceModulePath = isModule
    ? //@ts-ignore
      path.dirname(resolvePackagePath(source))
    : path.join(__dirname, source);

  const globPattern = path.join(sourceModulePath, pattern);
  const files = await glob(globPattern);

  for (let file of files) {
    const fileText = fs.readFileSync(file, "utf-8");
    if (!fileText.includes("@nsView")) continue;
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

export async function getMetadataFromPath(
  source: string,
  pattern: string,
  isModule = true
) {
  const jsonEntries: HtmlCustomData[] = [];
  await visitFilesForSource(source, pattern, isModule, (view: InputFile) => {
    const results: AnalyzerResult[] = [];
    for (let file of view.compiledTS.files) {
      const result = analyzeSourceFile(file as any, {
        program: view.compiledTS.program as any,
        ts: ts as any,
        flavors: [new NativeScriptFlavor()],
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

    jsonEntries.push(htmlData);
  });

  const htmlCustomData: HtmlCustomData = {
    $schema:
      "https://raw.githubusercontent.com/microsoft/vscode-html-languageservice/refs/heads/main/docs/customData.schema.json",
    version: 1.1,
    tags: [],
  };
  // Append all entries into a single entry
  for (let entry of jsonEntries) {
    //@ts-ignore
    if (entry.tags.length === 0) continue;
    for (let tag of entry.tags) {
      htmlCustomData.tags.push(tag);
    }
  }

  // console.log(htmlCustomData.tags[0].properties);
  return htmlCustomData;
}



export async function generateTypes(
  args: CliArgumentsMap
): Promise<OutputType[]> {
  const root = args.package
    ? args.package
    : args.core
    ? "@nativescript/core"
    : args.directory;

  if (!root) return [];

  const rawData = await getMetadataFromPath(
    root,
    "**/*.ts",
    args.directory ? false : true
  );

  switch (args.framework) {
    case "angular":
      return generateAngularTypes(args, root, rawData);
    case "react":
    case "solid":
      return generateSolidTypes(args, root, rawData);
    case "svelte":
    case "vue":
      break;
  }
}
