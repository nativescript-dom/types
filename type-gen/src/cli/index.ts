#! /usr/bin/env node
import * as fs from "fs";
import { generateTypes } from "..";
import { CliArgumentsMap } from "../types";
import { sanitizeFileName } from "../utils";
import { resolvePackageJSONPath } from "@rigor789/resolve-package-path";
import path = require("path");

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
    -r | --reset: Reset lock files
    -n | --filename: Name of the output file.
    -l | --legacy: Use legacy mode to find views. This is experimental and might result in inaccurate types
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
      case "-r":
      case "--reset":
        parsedArgs.resetLockFiles = true;
        break;
      case "-f":
      case "--framework":
        parsedArgs.framework = _args[i + 1];
        break;
      case "-c":
      case "--core":
        parsedArgs.core = true;
        break;
      case "-l":
      case "--legacy":
        parsedArgs.legacy = true;
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
  paths: [workDir],
});

if (!isNativeScriptInstalled) {
  console.error("Please install @nativescript/core in your project.");
  process.exit(1);
}

if (parsedArgs.package) {
  const isPackageInstalled = resolvePackageJSONPath(parsedArgs.package, {
    paths: [workDir],
  });
  if (!isPackageInstalled) {
    console.error(
      `Package ${parsedArgs.package} is not installed in your project.`
    );
    process.exit(1);
  }
}

const typegenLockDir = path.join(workDir, "node_modules", ".ns-type-gen");
const lockFilePath = path.join(typegenLockDir, ".ns-type-gen.lock.json");

async function generateTypesForArgs(parsedArgs: CliArgumentsMap) {
  const types = await generateTypes(parsedArgs);
  if (types?.length) {
    for (let type of types) {
      const filename = parsedArgs.filename
        ? `${parsedArgs.filename}`
        : `${
            parsedArgs.core
              ? "core"
              : parsedArgs.package
                ? sanitizeFileName(parsedArgs.package)
                : "ns"
          }_${parsedArgs.framework}_${type.nameSuffix}.${type.format}`;

      if (parsedArgs.output && !fs.existsSync(parsedArgs.output)) {
        fs.mkdirSync(parsedArgs.output, {
          recursive: true,
        });
      }

      fs.writeFileSync(
        parsedArgs.output
          ? `${parsedArgs.output}/${filename}`
          : `types/${filename}`,
        type.data
      );
    }
  }
}

export async function startCliTypeGenerator() {
  if (parsedArgs.resetLockFiles) {
    if (fs.existsSync(lockFilePath)) {
      fs.unlinkSync(lockFilePath);
      console.log("Lock files have been reset.");
    }
  }

  if (
    !parsedArgs.all &&
    !parsedArgs.core &&
    !parsedArgs.directory &&
    !parsedArgs.package
  ) {
    return;
  }

  if (!parsedArgs.framework) {
    console.error(
      "Invalid framework provided. The framework to generate the types for. (solid | vue | svelte | angular | react)."
    );
    process.exit(1);
  }

  if (parsedArgs.all) {
    const packageJsonPath = path.join(workDir, "package.json");
    if (!fs.existsSync(packageJsonPath)) {
      console.log(
        "Could not find a valid package.json file at the current directory to generate types"
      );
      return;
    }
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

    let lockFileJson: Record<string, string> = undefined;
    try {
      if (fs.existsSync(lockFilePath)) {
        lockFileJson = JSON.parse(fs.readFileSync(lockFilePath, "utf-8"));
      }
    } catch (e) {}

    const packages = packageJson.dependencies as Record<string, string>;
    if (!packages) {
      console.log(
        "The provided package.json file is invalid or does not have a dependencies key."
      );
      return;
    }
    const packageNames = Object.keys(packages);
    for (const pkgName of packageNames) {
      if (!lockFileJson || lockFileJson[pkgName] !== packages[pkgName]) {
        await generateTypesForArgs({
          ...parsedArgs,
          package: pkgName,
          core: pkgName === "@nativescript/core",
        });
      }
    }

    if (!fs.existsSync(typegenLockDir)) {
      fs.mkdirSync(typegenLockDir);
    }
    fs.writeFileSync(lockFilePath, JSON.stringify(packages));
  } else {
    await generateTypesForArgs(parsedArgs);
  }
}

startCliTypeGenerator();
