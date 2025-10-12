import { Attribute } from "./types";

export function capitalize(string: string) {
  // take first character, uppercase it
  // add the rest of the string
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function toCamelCase(str: string) {
  return str[0].toLowerCase() + str.slice(1);
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

export function resolveAttributeType(type: string) {
  if (!type) return "string";
  const types = type.split("|").map(type => type.trim())
  if (types.length === 1 && types[1] === "number" || types[1] === "boolean") {
    return `string | ${type}`;
  }

  if (types.some(type => type === "number" || type === "boolean") && !types.some(type => type === "string")) return `string | ${type}`

  if (types.includes("Color")) {
    return "ColorValue";
  }

  return type;
}

export function propExists(attr: Attribute, inAttributes: Attribute[]) {
  return inAttributes.findIndex((inAttr) => inAttr.name === attr.name) > -1;
}

export function isGlobal(name: string) {
  if (name === "view") return true;
  if (name === "view-events") return true;
  return /(view-base|view-base-events)/g.test(name);
}

export function sanitizeFileName(fileName: string): string {
  // Remove invalid characters: / \ ? % * : | " < >
  return fileName.replace(/[\/\\\?\%\*\:\|\"\<\>]/g, '_');
}