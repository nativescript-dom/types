import * as fs from "fs";
import {
  generateMetadata,
  getDefaultEventsMap,
  getMetadataFromPath,
  viewBaseAttributes,
} from "..";
import { Attribute, HtmlCustomData, Tag, WebTypesRoot } from "../types";
import {
  AttrKeys,
  isGlobal,
  pascalize,
  propExists,
  resolveAttributeType,
} from "../utils";
import path = require("path");

function vueVisitor(
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
      const vueEvent = {
        ...(item as Attribute),
        name: `on${item.name[0].toUpperCase() + item.name.slice(1)}`,
        type: type,
      };

      const vueEventAt = {
        ...(item as Attribute),
        name: `@${item.name}`,
        type: type,
      };

      if (
        propExists(vueEvent, globalAttributes) &&
        propExists(vueEventAt, globalAttributes)
      ) {
        return [];
      }

      if (isGlobal(tag.name)) {
        globalAttributes.push(vueEvent, vueEventAt);
      } else {
        return [vueEvent, vueEventAt];
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
          description: item.description + "\n@platform android",
          type: type,
        },
        {
          ...(item as Attribute),
          name: `ios:${item.name}`,
          description: item.description + "\n@platform ios",
          type: type,
        },
      ];
      const attributes = [
        { ...(item as Attribute), type: type },
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

function vueWriter(metadata: HtmlCustomData) {
  const webTypes: WebTypesRoot = {
    name: "@nativescript-dom/vue-types",
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
        module: tag.path,
        symbol: tag.name.includes("-") ? pascalize(tag.name) : tag.name,
      },
    }))
  );

  webTypes.contributions.html.attributes.push(...metadata.globalAttributes);

  let interfacesString = `
    interface HTMLViewBaseElementAttributes<T extends HTMLViewBaseElement = HTMLViewBaseElement> extends ElementAttrs<T>, HTMLAttributes<T> {
      ${metadata.globalAttributes
        .filter((attr) => viewBaseAttributes.indexOf(attr.name) > -1)
        .map(
          (attr) => `
        /**
         * ${attr.description || ""}
         */
        "${attr.name}": ${attr.type};\n
        `
        )
        .join("\n")}
    }\n\n
  
    interface HTMLViewElementAttributes<T extends HTMLViewElement = HTMLViewElement> extends HTMLViewBaseElementAttributes<T> {
      ${metadata.globalAttributes
        .filter((attr) => viewBaseAttributes.indexOf(attr.name) === -1)
        .map(
          (attr) => `
        /**
         * ${attr.description || ""}
         */
        "${attr.name}": ${attr.type};\n
        `
        )
        .join("\n")}
    }\n\n
  `;

  for (let tag of metadata.tags) {
    const attrClass = `HTML${pascalize(tag.name)}ElementAttributes`;
    if (interfacesString.indexOf(attrClass) > -1) continue;
    const value = `\n
      interface ${attrClass}<T extends HTML${pascalize(
      tag.name
    )}Element = HTML${pascalize(
      tag.name
    )}Element> extends HTMLViewElementAttributes<T> {
  
        ${tag.attributes
          .map(
            (attr) => `
          /**
           * ${attr.description || ""}
           */
          "${attr.name}": ${attr.type};\n
          `
          )
          .join("\n")}
  
      }\n\n
      `;
    interfacesString += value;
  }
  const template = fs.readFileSync(
    path.join(__dirname, "../../src/templates/vue.template"),
    "utf-8"
  );

  fs.writeFileSync(
    path.join(__dirname, "..", "..", "..", "vue", "index.d.ts"),
    template.replace("<__CONTENT_HERE__>", interfacesString)
  );
}

export async function startVueGenerator() {
  const events = await getDefaultEventsMap();
  const data = await getMetadataFromPath("@nativescript/core", "ui/**/*.ts");
  generateMetadata(JSON.stringify(data), JSON.stringify(events), {
    visitor: vueVisitor,
    writer: vueWriter,
  });
}

startVueGenerator();
