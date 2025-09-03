#! /usr/bin/env node
import * as fs from "fs";
import { generateMetadata, getMetadataFromPath, viewBaseAttributes } from "..";
import { Attribute, HtmlCustomData, Tag } from "../types";
import {
  isGlobal,
  pascalize,
  resolveAttributeType,
  toKebabCase,
} from "../utils";
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
    -f | --format: The format of the types to generate. (jsx | webtypes)
    -c | --core: Generate types for @nativescript/core.
    -a | --all: Generate types for all packages based on project dependencies.
    -h | --help: Show help.    
`);
  process.exit(0);
}

type ParsedArgs = {
  package?: string;
  output?: string;
  format?: "jsx" | "web-types";
  core?: boolean;
  all?: boolean;
};

function parseArgs(args: any[]): ParsedArgs {
  let parsedArgs: any = {};
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "-p":
      case "--package":
        parsedArgs.package = args[i + 1];
        break;
      case "-o":
      case "--output":
        parsedArgs.output = args[i + 1];
        break;
      case "-f":
      case "--format":
        parsedArgs.format = args[i + 1];
        break;
      case "-c":
      case "--core":
        parsedArgs.core = true;
        break;
      case "-a":
      case "--all":
        parsedArgs.all = true;
        break;
    }
  }
  return parsedArgs;
}

const parsedArgs = parseArgs(args);

const isNativeScriptInstalled = (require as any).resolve("@nativescript/core");

if (!isNativeScriptInstalled) {
  console.error("Please install @nativescript/core in your project.");
  process.exit(1);
}

const outputPath = parsedArgs.output || path.join(workDir, "typegen");

if (!parsedArgs.package && !parsedArgs.core && !parsedArgs.all) {
  console.error("Please provide a package to generate types for.");
  process.exit(1);
}

if (parsedArgs.package) {
  const isPackageInstalled = (require as any).resolve(parsedArgs.package);
  if (!isPackageInstalled) {
    console.error(
      `Package ${parsedArgs.package} is not installed in your project.`
    );
    process.exit(1);
  }
}

if (
  parsedArgs.format &&
  parsedArgs.format !== "jsx" &&
  parsedArgs.format !== "web-types"
) {
  console.error("Invalid format provided. Use 'jsx' or 'web-types'.");
  process.exit(1);
}

// 1. Parse the arguments
// 2. Check if @nativescript/core is installed in node_modules, throw error if not.
// 3. Check types format needed, JSX or Web Types
// 4. Check Output path required
// 5. Check package for which we need to generate the types
// 6. Check if the package is installed in node_modules, throw error if not.
// 7. If -a | --all provided, generate types for all packages based on project dependencies.
// 8. Use --core flag to generate types for @nativescript/core

function cliVisitor(
  type: "attribute" | "tag" | "event",
  item: Tag | Attribute | string,
  tag: Tag | undefined,
  globalAttributes: Attribute[],
  viewEvents: Attribute[]
): Tag[] | Attribute[] | undefined {
  switch (type) {
    // Do not modify events, return as is.
    case "event": {
      const eventName = item as string;
      const eventAttribute = viewEvents.find((e) => e.name === eventName);
      const elementName = `HTML${pascalize(toKebabCase(tag.name))}Element`;
      const type = resolveAttributeType(
        `@${eventName}`,
        eventAttribute?.type
          ? `NativeDOMEventWithData<${elementName}, ${eventAttribute.type}>`
          : `NativeDOMEvent<${elementName}>`
      );
      const solidEvent = {
        name: `on:${eventName}`,
        type: type,
        description: `Event raised when the ${eventName} event is triggered.`,
        source: eventAttribute
          ? {
              source: eventAttribute.source,
              type: eventAttribute.type,
            }
          : undefined,
      };

      return [solidEvent as Attribute];
    }
    case "tag": {
      const tag = item as Tag;
      if (isGlobal(tag.name)) return [];
      // Fix source path and return the tag.
      // We can return multiple tags here, for example
      // to support multiple type of casings.
      return [
        {
          ...tag,
          path: (item as Tag).path?.replace("./../", ""),
          attributes: tag?.attributes || [],
          name: pascalize(tag.name),
        },
      ];
    }
    case "attribute": {
      const attribute = item as Attribute;
      if (attribute.name.endsWith("Event")) {
        const eventName = attribute.name.slice(0, attribute.name.length - 5);
        const eventAttribute = viewEvents.find((e) => e.name === eventName);
        const elementName = `HTML${pascalize(toKebabCase(tag?.name))}Element`;
        return [
          {
            ...attribute,
            name: `on:${eventName}`,
            description: `Event raised when the ${eventName} event is triggered.`,
            type: resolveAttributeType(
              `@${eventName}`,
              (eventAttribute as Attribute)?.type
                ? `NativeDOMEventWithData<${elementName}, ${
                    (item as Attribute).type
                  }>`
                : `NativeDOMEvent<${elementName}>`
            ),
            source: eventAttribute
              ? {
                  source: eventAttribute.source,
                  type: eventAttribute.type,
                }
              : undefined,
          },
        ];
      }

      const type = resolveAttributeType(
        attribute.name,
        (item as Attribute).type
      );

      // const platformAttribues = [
      //   {
      //     ...(item as Attribute),
      //     name: `android:${attribute.name}`,
      //     description: (attribute.description || "") + "\n@platform android",
      //     type: type,
      //   },
      //   {
      //     ...(item as Attribute),
      //     name: `ios:${attribute.name}`,
      //     description: (attribute.description || "") + "\n@platform ios",
      //     type: type,
      //   },
      // ];
      const attributes = [
        {
          ...(item as Attribute),
          type: type,
          description: attribute.description
            ? attribute.description
            : undefined,
        },
        // ...platformAttribues,
      ];

      return attributes;
    }
  }
  return [];
}

function getDescription(attr: Attribute) {
  return attr.description && attr.description.trim() !== ""
    ? `/**
  * ${attr.description}
  */`
    : "";
}

function cliWriter(metadata: HtmlCustomData) {
  fs.writeFileSync("metadata.json", JSON.stringify(metadata, null, 2));
  return;

  let interfacesString = `
    export interface HTMLViewBaseElementAttributes<T extends HTMLViewBaseElement = HTMLViewBaseElement> extends SolidJSX.DOMAttributes<T>, HTMLAttributes<T> {
        ${metadata.globalAttributes
          .filter((attr) => viewBaseAttributes.indexOf(attr.name) > -1)
          .map(
            (attr) => `
          ${getDescription(attr)} 
          "${attr.name}": ${attr.type};\n
          `
          )
          .join("\n")}
      }\n\n
    
      export interface HTMLViewElementAttributes<T extends HTMLViewElement = HTMLViewElement> extends HTMLViewBaseElementAttributes<T> {
        ${metadata.globalAttributes
          .filter((attr) => viewBaseAttributes.indexOf(attr.name) === -1)
          .map(
            (attr) => `
          ${getDescription(attr)} 
          "${attr.name}": ${attr.type};\n
          `
          )
          .join("\n")}
      }\n\n
    `;
  const JSXIntrinsicElements = [];
  for (let tag of metadata.tags) {
    const attrClass = `HTML${pascalize(tag.name)}ElementAttributes`;
    if (interfacesString.indexOf(`export interface ${attrClass}`) > -1)
      continue;

    if (tag.name === "grid-layout") {
      console.log(tag.attributes);
    }

    const value = `\n
        export interface ${attrClass}<T extends HTML${pascalize(
      tag.name
    )}Element = HTML${pascalize(
      tag.name
    )}Element> extends HTMLViewElementAttributes<T> {
    
          ${tag.attributes
            .map(
              (attr) => `
            ${getDescription(attr)} 
            "${attr.name}": ${attr.type};\n
            `
            )
            .join("\n")}
    
        }\n\n
        `;
    interfacesString += value;

    JSXIntrinsicElements.push(`${getDescription(tag as never)}
  ${tag.name.toLowerCase()}: JSXElementAttributes<HTML${pascalize(
      tag.name
    )}ElementAttributes>;`);
  }
  let template = fs.readFileSync(
    path.join(__dirname, "../../src/templates/solid.template"),
    "utf-8"
  );
  template = template.replace("<__CONTENT_HERE__>", interfacesString);

  template = template.replace(
    `<__ELEMENTS_HERE__>`,
    JSXIntrinsicElements.join("\n\n")
  );

  fs.writeFileSync(
    path.join(__dirname, "..", "..", "..", "solid-js", "jsx-runtime.d.ts"),
    template
  );
}

export async function startCliTypeGenerator() {
  // const events = await getDefaultEventsMap();

  const paths = parsedArgs.package
    ? parsedArgs.package
    : parsedArgs.core
    ? "@nativescript/core"
    : undefined;

  if (!paths) return null;

  const data = await getMetadataFromPath(
    "@nativescript-community/ui-webview",
    "**/*.ts"
  );

  generateMetadata(JSON.stringify(data), JSON.stringify({}), {
    visitor: cliVisitor,
    writer: cliWriter,
  });
}

startCliTypeGenerator();
