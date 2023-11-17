import * as fs from "fs";
import {
  generateMetadata,
  getDefaultEventsMap,
  getMetadataFromPath,
  viewBaseAttributes,
} from "..";
import { Attribute, HtmlCustomData, Tag } from "../types";
import {
  AttrKeys,
  isGlobal,
  pascalize,
  propExists,
  resolveAttributeType,
} from "../utils";
import path = require("path");

function solidVisitor(
  type: "attribute" | "tag" | "event" | "event-tag",
  item: Tag | Attribute,
  tag: Tag | undefined,
  globalAttributes: Attribute[]
): Tag[] | Attribute[] | undefined {
  switch (type) {
    // Do not modify events, return as is.
    case "event-tag":
      return [item as Tag];
    case "event": {
      const type = resolveAttributeType(
        `@${item.name}`,
        (item as Attribute).type
      );
      const solidEvent = {
        ...(item as Attribute),
        name: `on:${item.name}`,
        type: type,
      };

      if (propExists(solidEvent, globalAttributes)) {
        return [];
      }

      if (isGlobal(tag.name)) {
        globalAttributes.push(solidEvent);
      } else {
        return [solidEvent];
      }
      break;
    }
    case "tag": {
      if (isGlobal(item.name)) return [];
      // Fix source path and return the tag.
      // We can return multiple tags here, for example
      // to support multiple type of casings.
      return [
        {
          ...(item as Tag),
          path: (item as Tag).path?.replace("./../", ""),
          attributes: tag?.attributes || [],
          name: pascalize(item.name),
        },
        {
          ...(item as Tag),
          path: (item as Tag).path?.replace("./../", ""),
          attributes: tag?.attributes || [],
          name: item.name,
        },
      ];
    }
    case "attribute": {
      const KeysMap = AttrKeys[tag.name] || [];
      if (
        propExists(item as Attribute, globalAttributes) ||
        propExists(item as Attribute, tag?.attributes) ||
        KeysMap.indexOf(item.name) === -1
      )
        return [];
      // skip attributes that end with Event keyword.
      if (item.name.endsWith("Event")) return [];

      const type = resolveAttributeType(item.name, (item as Attribute).type);

      const platformAttribues = [
        {
          ...(item as Attribute),
          name: `android:${item.name}`,
          description: (item.description || "") + "\n@platform android",
          type: type,
        },
        {
          ...(item as Attribute),
          name: `ios:${item.name}`,
          description: (item.description || "") + "\n@platform ios",
          type: type,
        },
      ];
      const attributes = [
        {
          ...(item as Attribute),
          type: type,
          description: item.description ? item.description : undefined,
        },
        ...platformAttribues,
      ];

      if (isGlobal(tag.name)) {
        globalAttributes.push(...attributes);
        return [];
      } else {
        return attributes;
      }
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

function solidWriter(metadata: HtmlCustomData) {
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

export async function startSolidGenerator() {
  const events = await getDefaultEventsMap();
  const data = await getMetadataFromPath("@nativescript/core", "ui/**/*.ts");
  generateMetadata(JSON.stringify(data), JSON.stringify(events), {
    visitor: solidVisitor,
    writer: solidWriter,
  });
}

startSolidGenerator();
