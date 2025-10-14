#! /usr/bin/env node
import * as fs from "fs";
import { generateTypes } from "..";
import { CliArgumentsMap } from "../types";
import { sanitizeFileName } from "../utils";
import path = require("path");
import { resolvePackageJSONPath } from "@rigor789/resolve-package-path";

const args = process.argv.slice(2);
const workDir = process.cwd();

if (args.length === 0) {
  console.error(
    "Typegen requires at least one argument. Use --help to see the options."
  );
  process.exit(1);
}

if (args[0] === "--help" || args[0] === "-h") {
  console.log(`Usage: typegen [options]

Options:
    -p | --package: The package for which to generate types.
    -o | --output: The output path where the types should be generated.
    -f | --framework: The framework to generate the types for. (solidjs | vue | svelte | angular | react)
    -c | --core: Generate types for @nativescript/core.
    -a | --all: Generate types for all packages based on project dependencies.
    -d | --directory: Generate types from a directory.
    -n | --filename: Name of the output file.
    -h | --help: Show help.    
`);
  process.exit(0);
}

function parseArgs(args: any[]) {
  let parsedArgs: CliArgumentsMap = {};
  const _args = [];
  for (let arg of args) {
    if (arg.includes("=")) {
      const parts = arg.split("=");
      _args.push(...parts);
    } else {
      _args.push(arg);
    }
  }

  for (let i = 0; i < _args.length; i++) {
    switch (_args[i]) {
      case "-p":
      case "--package":
        parsedArgs.package = _args[i + 1];
        break;
      case "-o":
      case "--output":
        parsedArgs.output = _args[i + 1];
        break;
      case "-f":
      case "--framework":
        parsedArgs.framework = _args[i + 1];
        break;
      case "-c":
      case "--core":
        parsedArgs.core = true;
        break;
      case "-a":
      case "--all":
        parsedArgs.all = true;
        break;
      case "-d":
      case "--directory":
        parsedArgs.directory = _args[i + 1];
        break;
      case "-n":
      case "--filename":
        parsedArgs.filename = _args[i + 1];
        break;
    }
  }
  return parsedArgs;
}

const parsedArgs = parseArgs(args);

const isNativeScriptInstalled = resolvePackageJSONPath("@nativescript/core", {
  paths: [workDir]
})

if (!isNativeScriptInstalled) {
  console.error("Please install @nativescript/core in your project.");
  process.exit(1);
}

if (!parsedArgs.package && !parsedArgs.core && !parsedArgs.all) {
  console.error("Please provide a package to generate types for.");
  process.exit(1);
}

if (parsedArgs.package) {
  const isPackageInstalled = resolvePackageJSONPath(parsedArgs.package, {
  paths: [workDir]
});
  if (!isPackageInstalled) {
    console.error(
      `Package ${parsedArgs.package} is not installed in your project.`
    );
    process.exit(1);
  }
}

if (!parsedArgs.framework) {
  console.error(
    "Invalid framework provided. The framework to generate the types for. (solidjs | vue | svelte | angular | react)."
  );
  process.exit(1);
}

export async function startCliTypeGenerator() {
  const types = await generateTypes(parsedArgs);
  if (types?.length) {
    for (let type of types) {
      const filename = parsedArgs.filename
        ? `${parsedArgs.filename}`
        : `${
            parsedArgs.package
              ? sanitizeFileName(parsedArgs.package)
              : parsedArgs.core
              ? "core"
              : "ns"
          }_${parsedArgs.framework}_${type.nameSuffix}.${type.format}`;

          
      if (parsedArgs.output && !fs.existsSync(parsedArgs.output)) {
        fs.mkdirSync(parsedArgs.output, {
          recursive: true
        })
      }

      fs.writeFileSync(
        parsedArgs.output ? `${parsedArgs.output}/${filename}` : `types/${filename}`,
        type.data
      );
    }
  }
}

startCliTypeGenerator();
