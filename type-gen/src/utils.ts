import { Attribute } from "./types";

import * as AttributeKeys from "./attr-literals";
export function capitalize(string: string) {
  // take first character, uppercase it
  // add the rest of the string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function pascalize(string: string) {
  // splitting words by dash
  const words = string.split("-");
  // use capitalize function to capitalize every word
  const capitalized = words.map((word) => capitalize(word));
  // glue up words with .join()
  return capitalized.join("");
}

export const toKebabCase = (str: string) => {
  return (
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
};

export function resolveAttributeType(name: string, type: string) {
  if (name.startsWith("(")) {
    return `(event: ${type || "NativeDOMEvent"}) => void`;
  }

  if (name.startsWith("@")) {
    return `(payload: ${type || "NativeDOMEvent"}) => void`;
  }
  if (!type) {
    console.log("attribute has undefined type", name, type);
    return "any";
  }
  if (type.includes("Length")) {
    let resolvedType = "";
    if (!type.includes("string")) resolvedType += "string |";
    if (!type.includes("number")) resolvedType += "number |";
    return (resolvedType += type);
  }

  if (type === "number") return (type += " | string");
  if (type === "string") return "string";
  if (type.includes("[]")) return type;
  if (type.includes("Array<")) return type;

  return "string |" + type;
}

export function propExists(attr: Attribute, inAttributes: Attribute[]) {
  return inAttributes.findIndex((inAttr) => inAttr.name === attr.name) > -1;
}

export function isGlobal(name: string) {
  if (name === "view") return true;
  if (name === "view-events") return true;
  return /(view-base|view-base-events)/g.test(name);
}

export const AttrKeys = {};

for (let key in AttributeKeys) {
  const pascalKey = key
    .replace("HTML", "")
    .replace("ElementAttributes", "")
    .replace("ElementAttributeKeys", "")
    .replace("AttributeKeys", "");
  const kebabKey = pascalKey
    .split(/\.?(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  AttrKeys[pascalKey] = AttributeKeys[key];
  AttrKeys[kebabKey] = AttributeKeys[key];
}
