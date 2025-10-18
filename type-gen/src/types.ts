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

export const gestureEvents = [
  { name: "tap", type: "TapGestureEventData" },
  { name: "doubleTap", type: "TapGestureEventData" },
  { name: "pan", type: "PanGestureEventData" },
  { name: "swipe", type: "SwipeGestureEventData" },
  { name: "rotation", type: "RotationGestureEventData" },
  { name: "longPress", type: "GestureEventDataWithState" },
  { name: "touch", type: "TouchGestureEventData" },
];

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
  return (
    type.startsWith(`"`) ||
    type.startsWith("(") ||
    type.includes("=>") ||
    type.includes("any") ||
    type.startsWith("{") ||
    type.startsWith("[") ||
    type.startsWith("Record<") ||
    type.startsWith("Map<") ||
    type.startsWith("Set<") ||
    type.includes("[]") ||
    simpleTypes.some((simpleType) => simpleType.includes(type))
  );
}

export function isCoreType(type: string) {
  if (type.includes("CoreTypes.")) return true;
  return CoreTypes.includes("type " + type + " =");
}
export const CoreTypes = `import {CoreTypes, FontWeightType, FontStyleType} from "@nativescript/core";
type ImageStretchType = CoreTypes.ImageStretchType;
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

export const JsxStyleObject = `type KnownColorNames =
  | "transparent"
  | "aliceblue"
  | "antiquewhite"
  | "aqua"
  | "aquamarine"
  | "azure"
  | "beige"
  | "bisque"
  | "black"
  | "blanchedalmond"
  | "blue"
  | "blueviolet"
  | "brown"
  | "burlywood"
  | "cadetblue"
  | "chartreuse"
  | "chocolate"
  | "coral"
  | "cornflowerblue"
  | "cornsilk"
  | "crimson"
  | "cyan"
  | "darkblue"
  | "darkcyan"
  | "darkgoldenrod"
  | "darkgray"
  | "darkgreen"
  | "darkkhaki"
  | "darkmagenta"
  | "darkolivegreen"
  | "darkorange"
  | "darkorchid"
  | "darkred"
  | "darksalmon"
  | "darkseagreen"
  | "darkslateblue"
  | "darkslategray"
  | "darkturquoise"
  | "darkviolet"
  | "deeppink"
  | "deepskyblue"
  | "dimgray"
  | "dodgerblue"
  | "firebrick"
  | "floralwhite"
  | "forestgreen"
  | "fuchsia"
  | "gainsboro"
  | "ghostwhite"
  | "gold"
  | "goldenrod"
  | "gray"
  | "green"
  | "greenyellow"
  | "honeydew"
  | "hotpink"
  | "indianred"
  | "indigo"
  | "ivory"
  | "khaki"
  | "lavender"
  | "lavenderblush"
  | "lawngreen"
  | "lemonchiffon"
  | "lightblue"
  | "lightcoral"
  | "lightcyan"
  | "lightgoldenrodyellow"
  | "lightgray"
  | "lightgreen"
  | "lightpink"
  | "lightsalmon"
  | "lightseagreen"
  | "lightskyblue"
  | "lightslategray"
  | "lightsteelblue"
  | "lightyellow"
  | "lime"
  | "limegreen"
  | "linen"
  | "magenta"
  | "maroon"
  | "mediumaquamarine"
  | "mediumblue"
  | "mediumorchid"
  | "mediumpurple"
  | "mediumseagreen"
  | "mediumslateblue"
  | "mediumspringgreen"
  | "mediumturquoise"
  | "mediumvioletred"
  | "midnightblue"
  | "mintcream"
  | "mistyrose"
  | "moccasin"
  | "navajowhite"
  | "navy"
  | "oldlace"
  | "olive"
  | "olivedrab"
  | "orange"
  | "orangered"
  | "orchid"
  | "palegoldenrod"
  | "palegreen"
  | "paleturquoise"
  | "palevioletred"
  | "papayawhip"
  | "peachpuff"
  | "peru"
  | "pink"
  | "plum"
  | "powderblue"
  | "purple"
  | "rebeccapurple"
  | "red"
  | "rosybrown"
  | "royalblue"
  | "saddlebrown"
  | "salmon"
  | "sandybrown"
  | "seagreen"
  | "seashell"
  | "sienna"
  | "silver"
  | "skyblue"
  | "slateblue"
  | "slategray"
  | "snow"
  | "springgreen"
  | "steelblue"
  | "tan"
  | "teal"
  | "thistle"
  | "tomato"
  | "turquoise"
  | "violet"
  | "wheat"
  | "white"
  | "whitesmoke"
  | "yellow"
  | "yellowgreen";

// Extend the type to also allow any string value
export type ColorValue = KnownColorNames | (string & {});

interface Style {
  rotate: number;
  rotateX: number;
  rotateY: number;
  perspective: number;
  scaleX: number;
  scaleY: number;
  translateX: CoreTypes.dip;
  translateY: CoreTypes.dip;
  clipPath: string | ClipPathFunction;
  color: ColorValue;
  tintColor: ColorValue;
  placeholderColor: ColorValue;
  background: string;
  backgroundColor: ColorValue;
  backgroundImage: string | LinearGradient;
  backgroundRepeat: CoreTypes.BackgroundRepeatType;
  backgroundSize: string;
  backgroundPosition: string;
  borderColor: string | ColorValue;
  borderTopColor: ColorValue;
  borderRightColor: ColorValue;
  borderBottomColor: ColorValue;
  borderLeftColor: ColorValue;
  borderWidth: string | CoreTypes.LengthType;
  borderTopWidth: CoreTypes.LengthType;
  borderRightWidth: CoreTypes.LengthType;
  borderBottomWidth: CoreTypes.LengthType;
  borderLeftWidth: CoreTypes.LengthType;
  borderRadius: string | CoreTypes.LengthType;
  borderTopLeftRadius: CoreTypes.LengthType;
  borderTopRightRadius: CoreTypes.LengthType;
  borderBottomRightRadius: CoreTypes.LengthType;
  borderBottomLeftRadius: CoreTypes.LengthType;
  boxShadow: ShadowCSSValues;
  fontSize: number;
  fontFamily: string;
  fontStyle: FontStyleType;
  fontWeight: FontWeightType;
  fontVariationSettings: FontVariationSettingsType[];
  font: string;
  maxLines: CoreTypes.MaxLinesType;
  androidElevation: number;
  androidDynamicElevationOffset: number;
  zIndex: number;
  opacity: number;
  visibility: CoreTypes.VisibilityType;
  letterSpacing: number;
  lineHeight: number;
  textAlignment: CoreTypes.TextAlignmentType;
  textDecoration: CoreTypes.TextDecorationType;
  textTransform: CoreTypes.TextTransformType;
  textShadow: ShadowCSSValues;
  textStroke: StrokeCSSValues;
  whiteSpace: CoreTypes.WhiteSpaceType;
  textOverflow: CoreTypes.TextOverflowType;
  minWidth: CoreTypes.LengthType;
  minHeight: CoreTypes.LengthType;
  width: CoreTypes.PercentLengthType;
  height: CoreTypes.PercentLengthType;
  margin: string | CoreTypes.PercentLengthType;
  marginLeft: CoreTypes.PercentLengthType;
  marginTop: CoreTypes.PercentLengthType;
  marginRight: CoreTypes.PercentLengthType;
  marginBottom: CoreTypes.PercentLengthType;
  padding: string | CoreTypes.LengthType;
  paddingLeft: CoreTypes.LengthType;
  paddingTop: CoreTypes.LengthType;
  paddingRight: CoreTypes.LengthType;
  paddingBottom: CoreTypes.LengthType;
  horizontalAlignment: CoreTypes.HorizontalAlignmentType;
  verticalAlignment: CoreTypes.VerticalAlignmentType;
  tabTextFontSize: number;
  tabTextColor: ColorValue;
  tabBackgroundColor: ColorValue;
  selectedTabTextColor: ColorValue;
  androidSelectedTabHighlightColor: ColorValue;
  separatorColor: ColorValue;
  selectedBackgroundColor: ColorValue;
  selectedTextColor: ColorValue;
  statusBarStyle: "light" | "dark";
  androidStatusBarBackground: ColorValue;
  androidContentInset: string | CoreTypes.LengthType;
  androidContentInsetLeft: CoreTypes.LengthType;
  androidContentInsetRight: CoreTypes.LengthType;
  flexDirection: FlexDirection;
  flexWrap: FlexWrap;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  alignContent: AlignContent;
  order: Order;
  flexGrow: FlexGrow;
  flexShrink: FlexShrink;
  flexWrapBefore: boolean;
  alignSelf: AlignSelf;
  flexFlow: FlexFlow;
  flex: Flex;
  accessible: boolean;
  accessibilityHidden: boolean;
  accessibilityRole: AccessibilityRole;
  accessibilityState: AccessibilityState;
  accessibilityLiveRegion: AccessibilityLiveRegion;
  accessibilityLanguage: string;
  accessibilityMediaSession: boolean;
  accessibilityStep: number;
  iosAccessibilityAdjustsFontSize: boolean;
  iosAccessibilityMinFontScale: number;
  iosAccessibilityMaxFontScale: number;
}`;

export type CliArgumentsMap = {
  package?: string;
  output?: string;
  framework?: NativeScriptFramework;
  core?: boolean;
  all?: boolean;
  filename?: string;
  directory?: string;
  resetLockFiles?: boolean;
  legacy?: boolean;
};

export type InputFile = {
  file: string;
  compiledTS: {
    program: ts.Program;
    files: ts.SourceFile[];
  };
};

export interface AttributeValue {
  name: string;
  description?: string;
}

export interface Attribute {
  description: string;
  name: string;
  type: string;
  source?: any;
  values?: AttributeValue[];
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
  $schema: string;
  version: number;
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
