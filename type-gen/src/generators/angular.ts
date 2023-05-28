import * as fs from "fs";
import { generateMetadata, getDefaultEventsMap, getMetadataFromPath } from "..";
import { Attribute, HtmlCustomData, Tag, WebTypesRoot } from "../types";
import {
  AttrKeys,
  isGlobal,
  pascalize,
  propExists,
  resolveAttributeType,
} from "../utils";
import path = require("path");

function angularVisitor(
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
      const angularEvent = {
        ...(item as Attribute),
        name: `(${item.name})`,
        type: resolveAttributeType(`(${item.name})`, (item as Attribute).type),
      };
      if (propExists(angularEvent, globalAttributes)) return [];

      if (isGlobal(tag.name)) {
        globalAttributes.push(angularEvent);
      } else {
        return [angularEvent];
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
      const source = {
        module: "@nativescript/core",
        symbol: pascalize(tag.name),
      };
      const platformAttribues = [
        {
          ...(item as Attribute),
          name: `android:${item.name}`,
          description: item.description + "\n@platform android",
          type: type,
          source,
        },
        {
          ...(item as Attribute),
          name: `ios:${item.name}`,
          description: item.description + "\n@platform ios",
          type: type,
          source,
        },
      ];

      const attributes = [
        { ...(item as Attribute), type: type, source },
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

function angularWriter(metadata: HtmlCustomData) {
  fs.writeFileSync(
    path.join(__dirname, "..", "..", "..", "angular", "metadata.json"),
    JSON.stringify(metadata)
  );
  const webTypes: WebTypesRoot = {
    name: "@nativescript-dom/angular-types",
    schema:
      "https://raw.githubusercontent.com/JetBrains/web-types/master/schema/web-types.json",
    version: "2.0.0",
    contributions: {
      html: {
        elements: [],
        attributes: [],
      },
    },
  };
  webTypes.contributions.html.elements.push(
    ...metadata.tags.map((tag) => ({
      ...tag,
      source: {
        module: "@nativescript/core",
        symbol: tag.name.includes("-") ? pascalize(tag.name) : tag.name,
      },
    }))
  );

  webTypes.contributions.html.attributes.push(...metadata.globalAttributes);
  fs.writeFileSync(
    path.join(__dirname, "..", "..", "..", "angular", "web-types.json"),
    JSON.stringify(webTypes)
  );
}

export async function startAngularGenerator() {
  const events = await getDefaultEventsMap();
  const data = await getMetadataFromPath("@nativescript/core", "ui/**/*.ts");

  generateMetadata(JSON.stringify(data), JSON.stringify(events), {
    visitor: angularVisitor,
    writer: angularWriter,
  });
}

startAngularGenerator();
