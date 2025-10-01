import ts = require("typescript");

export type NativeScriptFramework =
  | "react"
  | "vue"
  | "svelte"
  | "solid"
  | "angular";

export type OutputType = {
  data: string;
  format: "json" | "d.ts";
  nameSuffix?: string;
};

export function isSimpleType(type: string) {
  const simpleTypes = [
    "string",
    "number",
    "boolean",
    "any",
    "unknown",
    "object",
    "undefined",
    "Date",
  ];
  return simpleTypes.some(
    (simpleType) =>
      simpleType.includes(type) ||
      type.startsWith(`"`) ||
      type.startsWith("(") ||
      type.includes("=>") ||
      type.includes("any")
  );
}

export function isCoreType(type: string) {
  if (type.includes("CoreTypes.")) return true;
  return CoreTypes.includes("type " + type);
}
export const CoreTypes = `type ImageStretchType = CoreTypes.ImageStretchType;
type FontWeight = FontWeightType;
type FontStyle = FontStyleType;
type LengthDipUnit = CoreTypes.LengthDipUnit;
type LengthPercentUnit = CoreTypes.LengthPercentUnit;
type LengthPxUnit = CoreTypes.LengthPxUnit;
type LengthType = CoreTypes.LengthType;
type PercentLengthType = CoreTypes.PercentLengthType;
type BackgroundRepeatType = CoreTypes.BackgroundRepeatType;
type VerticalAlignmentType = CoreTypes.VerticalAlignmentType;
type HorizontalAlignmentType = CoreTypes.HorizontalAlignmentType;
type VisibilityType = CoreTypes.VisibilityType;
type TextTransformType = CoreTypes.TextTransformType;
type WhiteSpaceType = CoreTypes.WhiteSpaceType;
type TextDecorationType = CoreTypes.TextDecorationType;
type TextAlignmentType = CoreTypes.TextAlignmentType;
type KeyboardInputType = CoreTypes.KeyboardInputType;
type TextOverflowType = CoreTypes.TextOverflowType;
type ReturnKeyButtonType = CoreTypes.ReturnKeyButtonType;
type UpdateTextTriggerType = CoreTypes.UpdateTextTriggerType;
type AutocapitalizationInputType = CoreTypes.AutocapitalizationInputType;
type OrientationType = CoreTypes.OrientationType;`;

export type CliArgumentsMap = {
  package?: string;
  output?: string;
  framework?: NativeScriptFramework;
  core?: boolean;
  all?: boolean;
  filename?: string;
  directory?: string;
};

export type InputFile = {
  file: string;
  compiledTS: {
    program: ts.Program;
    files: ts.SourceFile[];
  };
};

export interface Attribute {
  description: string;
  name: string;
  type: string;
  source?: any;
}

export type EventType = {
  name: string;
  description: string;
  deprecated: true | undefined;
  deprecatedMessage: string;
  type: string;
};

export interface Tag {
  name: string;
  path?: string;
  description: string;
  properties?: Attribute[];
  attributes: Attribute[];
  events?: EventType[];
  source?: string;
}

export interface HtmlCustomData {
  version: string;
  tags: Tag[];
}

export interface Element {
  name: string;
  description: string;
  attributes: Attribute[];
  source?: {
    module?: string;
    symbol?: string;
  };
}

export interface Html {
  elements: Element[];
  attributes: Attribute[];
}

export interface Contributions {
  html: Html;
}

export interface WebTypesRoot {
  name: string;
  version: string;
  schema: string;
  contributions: Contributions;
}
