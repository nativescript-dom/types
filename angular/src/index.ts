//@ts-ignore
import * as AttrKeys from "./attr-literals";
import * as fs from "fs";
import path = require("path");

export const Keys = {};

for (let key in AttrKeys) {
  const kebabKey = key
    .replace("HTML", "")
    .replace("ElementAttributes", "")
    .replace("ElementAttributeKeys", "")
    .replace("AttributeKeys", "")
    .split(/\.?(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  Keys[kebabKey] = AttrKeys[key];
}

export interface Property {
  name: string;
  description: string;
  type: string;
}

export interface Tag {
  name: string;
  path: string;
  description: string;
  properties: Property[];
  attributes: Property[];
}

export interface RootObject {
  version: string;
  tags: Tag[];
  globalAttributes: Property[];
}

const METADATA_DIR = path.join(__dirname, "..", "metadata");
const metadataFiles = fs.readdirSync(METADATA_DIR);

function readFile(file) {
  return fs.readFileSync(path.join(METADATA_DIR, file), "utf-8");
}

const MetaDataBuild: RootObject = {
  version: "1.1",
  globalAttributes: [],
  tags: [],
};

function addProp(
  prop: Property,
  type: "global" | "tag" | "base",
  tagName?: string
) {
  if (MetaDataBuild.globalAttributes.find((p) => p.name === prop.name)) return;
  if (type === "global") {
    MetaDataBuild.globalAttributes.push(
      prop,
      {
        ...prop,
        name: `android:${prop.name}`,
      },
      {
        ...prop,
        name: `ios:${prop.name}`,
      }
    );
  } else if (type === "tag") {
    const index = MetaDataBuild.tags.findIndex((t) => t.name === tagName);
    if (index > -1) {
      MetaDataBuild.tags[index].attributes.push(
        ...[
          prop,
          {
            ...prop,
            name: `android:${prop.name}`,
          },
          {
            ...prop,
            name: `ios:${prop.name}`,
          },
        ]
      );
    }
  }
}

function createTag(tag: Tag) {
  const index = MetaDataBuild.tags.findIndex((t) => t.name === tag.name);
  if (index > -1) return;
  tag.attributes = [];
  MetaDataBuild.tags.push(tag);
}

function isGlobal(name: string) {
  if (name === "view") return true;
  if (name === "view-events") return true;
  return /(view-base|view-base-events)/g.test(name);
}

function isBaseElement(name: string) {
  return /(text-base|layout-base|editable-text-base)/g.test(name);
}

const EventMetaData: RootObject = {
  version: "1.1",
  globalAttributes: [],
  tags: [],
};

metadataFiles.forEach((file) => {
  if (file === "event-maps.json") {
    const eventMeta = JSON.parse(readFile(file)) as RootObject;
    eventMeta.tags.map((tag) => {
      tag.attributes = [];
      EventMetaData.tags.push(tag);

      tag.properties.map((prop) => {
        if (
          EventMetaData.globalAttributes.findIndex(
            (p) => p.name === prop.name
          ) === -1
        ) {
          if (isGlobal(tag.name)) {
            EventMetaData.globalAttributes.push(prop);
          } else {
            const index = EventMetaData.tags.findIndex(
              (t) => t.name === tag.name
            );
            if (index > -1) {
              EventMetaData.tags[index].attributes.push(prop);
            }
          }
        }
      });
      delete tag.properties;
    });
    return;
  }

  const meta = JSON.parse(readFile(file)) as RootObject;
  meta.tags.map((tag) => {
    // Create a tag
    if (!isGlobal(tag.name) && !isBaseElement(tag.name)) createTag(tag);
    if (!tag.properties) {
      console.warn(`No properties found for tag ${tag.name}`);
      return;
    }
    tag.properties.map((prop) => {
      if (!Keys[tag.name]) {
        console.log(tag.name, "missing from keys");
        return;
      }
      /**
       * Only add props that don't exist already.
       */
      if (
        Keys[tag.name].indexOf(prop.name) > -1 &&
        !prop.name.endsWith("Event")
      ) {
        // Add all valid props as attributes to metadata
        addProp(
          prop,
          isGlobal(tag.name)
            ? "global"
            : isBaseElement(tag.name)
            ? "base"
            : "tag",
          tag.name
        );
      }
    });
    tag.name = pascalize(tag.name);
    delete tag.properties;
    // Write the metadata to file.
  });
});

function capitalize(string) {
  // take first character, uppercase it
  // add the rest of the string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function pascalize(string) {
  // splitting words by dash
  const words = string.split("-");
  // use capitalize function to capitalize every word
  const capitalized = words.map((word) => capitalize(word));
  // glue up words with .join()
  return capitalized.join("");
}

/**
 * Convert events to (eventName) for angular
 */
MetaDataBuild.globalAttributes.push(
  ...EventMetaData.globalAttributes.map((attr) => ({
    ...attr,
    name: `(${attr.name})`,
  }))
);
/**
 * Convert events to (eventName) for angular
 */
MetaDataBuild.tags.forEach((tag) => {
  const index = EventMetaData.tags.findIndex(
    (t) => t.name === `${tag.name}-events`
  );
  if (index > -1) {
    tag.attributes.push(
      ...EventMetaData.tags[index].attributes.map((attr) => ({
        ...attr,
        name: `(${attr.name})`,
      }))
    );
  }
});
fs.writeFileSync(
  path.join(__dirname, "..", "metadata.json"),
  JSON.stringify(MetaDataBuild)
);
