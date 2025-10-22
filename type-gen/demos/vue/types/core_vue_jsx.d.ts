import * as RuntimeCore from "@vue/runtime-core";
import {
  AccessibilityLiveRegion,
  ViewBase,
  AlignSelf,
  EventData,
  PropertyChangeData,
  TapGestureEventData,
  PanGestureEventData,
  SwipeGestureEventData,
  RotationGestureEventData,
  GestureEventDataWithState,
  TouchGestureEventData,
  View,
  Color,
  AccessibilityRole,
  AccessibilityState,
  LinearGradient,
  ShadowCSSValues,
  FlexFlow,
  Flex,
  VisionHoverOptions,
  TouchAnimationOptions,
  ShownModallyData,
  EventDataValue,
  AbsoluteLayout,
  ActionBar,
  NavigationButton,
  ActionItems,
  ActionItem,
  ActivityIndicator,
  Button,
  FormattedString,
  StrokeCSSValues,
  ContentView,
  DatePicker,
  DockLayout,
  EditableTextBase,
  FlexboxLayout,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  AlignItems,
  AlignContent,
  FontVariationSettingsType,
  Frame,
  NavigationData,
  GridLayout,
  HtmlView,
  Image,
  ImageSource,
  ImageAsset,
  ImageSymbolEffect,
  ImageSymbolEffects,
  iosSymbolScaleType,
  Label,
  ListPicker,
  ItemsSource,
  ListView,
  Template,
  KeyedTemplate,
  ItemEventData,
  Page,
  NavigatedData,
  Placeholder,
  CreateViewEventData,
  Progress,
  ProxyViewContainer,
  Repeater,
  RootLayout,
  ScrollView,
  ScrollEventData,
  SearchBar,
  SegmentedBar,
  SegmentedBarItem,
  SelectedIndexChangedEventData,
  Slider,
  accessibilityDecrementEvent,
  AccessibilityIncrementEventData,
  Span,
  StackLayout,
  Switch,
  TabView,
  TabViewItem,
  TextBase,
  TextField,
  TextView,
  TimePicker,
  WebView,
  LoadEventData,
  WrapLayout,
} from "@nativescript/core";
import { ClipPathFunction } from "@nativescript/core/ui/styling/clip-path-function";
import {
  FlexGrow,
  FlexShrink,
  Order,
} from "@nativescript/core/ui/layouts/flexbox-layout";

import { CoreTypes, FontWeightType, FontStyleType } from "@nativescript/core";
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
type OrientationType = CoreTypes.OrientationType;

export type NSDOMEvent<T> = T;
type ReservedProps<T> = {
  key?: string | number | symbol;
  ref?:
    | string
    | RuntimeCore.Ref<T>
    | ((ref: T, refs: Record<string, any>) => void);
  ref_for?: boolean;
  ref_key?: string;
};

type ElementAttrs<T> = ReservedProps<T>;
export type NSDOMAttributes<T> = ElementAttrs<T>;

type KnownColorNames =
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
}
export interface ViewBaseAttributes<T> extends NSDOMAttributes<ViewBase> {
  bindingContext?: string;

  /**
   * Gets or sets the id for this view.
   */
  id?: string;

  /**
   * Gets or sets the CSS class name for this view.
   */
  className?: string;

  /**
   * Gets or sets the visual state of the view.
   */
  hidden?: string | boolean;

  /**
   * Gets or sets the shared transition tag for animated view transitions
   */
  sharedTransitionTag?: string;

  /**
   * Opt out of shared transition under different binding conditions
   */
  sharedTransitionIgnore?: string | boolean;

  /**
   * Default visual state, defaults to 'normal'
   */
  defaultVisualState?: string;

  /**
   * Gets or sets the distance, in pixels, between the left edge of the child and the left edge of its parent.
   */
  left?: LengthType;

  /**
   * Gets or sets the distance, in pixels, between the top edge of the child and the top edge of its parent.
   */
  top?: LengthType;

  /**
   * Dock position of the view within its parent.
   */
  dock?: "left" | "top" | "right" | "bottom";

  /**
   * The row for the element. The rows are 0-indexed, so the first row is indicated by 0.
   */
  row?: string | number;

  /**
   * The column for the element. The columns are 0-indexed, so the first column is indicated by 0.
   */
  col?: string | number;

  /**
   * The column for the element. The columns are 0-indexed, so the first column is indicated by 0.
   */
  column?: string | number;

  /**
   * The number of rows for the element to span across.
   */
  rowSpan?: string | number;

  /**
   * The number of columns for the element to span across.
   */
  colSpan?: string | number;

  columnSpan?: string | number;

  /**
   * Sets the order in which child elements inside a Flex appear in relation to one another.
   */
  order?: string | number;

  /**
   * Indicates that the child should grow in size, if necessary. Sets how much the child will grow in proportion to the rest of the child elements in the flex container.
   */
  flexGrow?: string | number;

  /**
   * Indicates that the child should shrink when the row runs out of space. Sets how much the flex item will shrink in proportion to the rest of the child elements in the flex container. When not specified, its value is set to 1.
   */
  flexShrink?: string | number;

  /**
   * When true, forces the item to wrap onto a new line.
   */
  flexWrapBefore?: string | boolean;

  /**
   * (Android-only) Overrides the alignItems value for the child.
   */
  alignSelf?: AlignSelf;

  /**
   * Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.
   */
  reusable?: string | boolean;

  style?: Style;

  /**
   * String value used when hooking to loaded event.
   */
  onLoaded?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to unloaded event.
   */
  onUnloaded?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to creation event
   */
  onCreated?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to disposeNativeView event
   */
  onDisposeNativeView?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to propertyChange event.
   */
  onPropertyChange?: (event: NSDOMEvent<PropertyChangeData>) => void;

  /**
   * Gesture Event
   */
  onTap?: (event: TapGestureEventData) => void;

  /**
   * Gesture Event
   */
  onDoubleTap?: (event: TapGestureEventData) => void;

  /**
   * Gesture Event
   */
  onPan?: (event: PanGestureEventData) => void;

  /**
   * Gesture Event
   */
  onSwipe?: (event: SwipeGestureEventData) => void;

  /**
   * Gesture Event
   */
  onRotation?: (event: RotationGestureEventData) => void;

  /**
   * Gesture Event
   */
  onLongPress?: (event: GestureEventDataWithState) => void;

  /**
   * Gesture Event
   */
  onTouch?: (event: TouchGestureEventData) => void;
}

export interface ViewAttributes<T> extends ViewBaseAttributes<View> {
  /**
   * Gets or sets the border color of the view.
   */
  borderColor?: ColorValue;

  /**
   * Gets or sets the top border color of the view.
   */
  borderTopColor?: ColorValue;

  /**
   * Gets or sets the right border color of the view.
   */
  borderRightColor?: ColorValue;

  /**
   * Gets or sets the bottom border color of the view.
   */
  borderBottomColor?: ColorValue;

  /**
   * Gets or sets the left border color of the view.
   */
  borderLeftColor?: ColorValue;

  /**
   * Gets or sets the border width of the view.
   */
  borderWidth?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Gets or sets the top border width of the view.
   */
  borderTopWidth?: LengthType;

  /**
   * Gets or sets the right border width of the view.
   */
  borderRightWidth?: LengthType;

  /**
   * Gets or sets the bottom border width of the view.
   */
  borderBottomWidth?: LengthType;

  /**
   * Gets or sets the left border width of the view.
   */
  borderLeftWidth?: LengthType;

  /**
   * Gets or sets the border radius of the view.
   */
  borderRadius?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Gets or sets the top left border radius of the view.
   */
  borderTopLeftRadius?: LengthType;

  /**
   * Gets or sets the top right border radius of the view.
   */
  borderTopRightRadius?: LengthType;

  /**
   * Gets or sets the bottom right border radius of the view.
   */
  borderBottomRightRadius?: LengthType;

  /**
   * Gets or sets the bottom left border radius of the view.
   */
  borderBottomLeftRadius?: LengthType;

  /**
   * Gets or sets the color of the view.
   */
  color?: ColorValue;

  /**
   * Hide the view and its children from the a11y service
   */
  accessibilityHidden?: string | boolean;

  /**
     * The view's unique accessibilityIdentifier.

This is used for automated testing.
*/
  accessibilityIdentifier?: string;

  /**
   * Which role should this view be treated by the a11y service?
   */
  accessibilityRole?: AccessibilityRole;

  /**
   * Which state should this view be treated as by the a11y service?
   */
  accessibilityState?: AccessibilityState;

  /**
   * Short description of the element, ideally one word.
   */
  accessibilityLabel?: string;

  /**
   * Current value of the element in a localized string.
   */
  accessibilityValue?: string;

  /**
   * A hint describes the elements behavior. Example: 'Tap change playback speed'
   */
  accessibilityHint?: string;

  /**
     * Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.
*/
  accessibilityLanguage?: string;

  /**
   * This view starts a media session. Equivalent to trait = startsMedia
   */
  accessibilityMediaSession?: string | boolean;

  accessibilityIgnoresInvertColors?: string | boolean;

  /**
   * Defines whether accessibility font scale should affect font size.
   */
  iosAccessibilityAdjustsFontSize?: string | boolean;

  /**
   * Gets or sets the minimum accessibility font scale.
   */
  iosAccessibilityMinFontScale?: string | number;

  /**
   * Gets or sets the maximum accessibility font scale.
   */
  iosAccessibilityMaxFontScale?: string | number;

  automationText?: string;

  /**
   * Gets or sets the elevation of the android view.
   */
  androidElevation?: string | number;

  /**
   * Gets or sets the dynamic elevation offset of the android view.
   */
  androidDynamicElevationOffset?: string | number;

  /**
   * Gets or sets the background style property.
   */
  background?: string;

  /**
   * Gets or sets the background color of the view.
   */
  backgroundColor?: ColorValue;

  /**
   * Gets or sets the background image of the view.
   */
  backgroundImage?: string | LinearGradient;

  /**
   * Gets or sets the box shadow of the view.
   */
  boxShadow?: string | ShadowCSSValues;

  /**
   * Gets or sets the minimum width the view may grow to.
   */
  minWidth?: LengthType;

  /**
   * Gets or sets the minimum height the view may grow to.
   */
  minHeight?: LengthType;

  /**
   * Gets or sets the desired width of the view.
   */
  width?: PercentLengthType;

  /**
   * Gets or sets the desired height of the view.
   */
  height?: PercentLengthType;

  /**
   * Gets or sets margin style property.
   */
  margin?: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;

  /**
   * Specifies extra space on the left side of this view.
   */
  marginLeft?: PercentLengthType;

  /**
   * Specifies extra space on the top side of this view.
   */
  marginTop?: PercentLengthType;

  /**
   * Specifies extra space on the right side of this view.
   */
  marginRight?: PercentLengthType;

  /**
   * Specifies extra space on the bottom side of this view.
   */
  marginBottom?: PercentLengthType;

  /**
   * Gets or sets the alignment of this view within its parent along the Horizontal axis.
   */
  horizontalAlignment?: HorizontalAlignmentType;

  /**
   * Gets or sets the alignment of this view within its parent along the Vertical axis.
   */
  verticalAlignment?: VerticalAlignmentType;

  /**
   * Gets or sets the visibility of the view.
   */
  visibility?: VisibilityType;

  /**
   * Gets or sets the opacity style property.
   */
  opacity?: string | number;

  /**
   * Gets or sets the rotate affine transform of the view along the Z axis.
   */
  rotate?: string | number;

  /**
   * Gets or sets the rotate affine transform of the view along the X axis.
   */
  rotateX?: string | number;

  /**
   * Gets or sets the rotate affine transform of the view along the Y axis.
   */
  rotateY?: string | number;

  /**
     * Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.
*/
  perspective?: string | number;

  /**
   * Gets or sets the translateX affine transform of the view in device independent pixels.
   */
  translateX?: string | number;

  /**
   * Gets or sets the translateY affine transform of the view in device independent pixels.
   */
  translateY?: string | number;

  /**
   * Gets or sets the scaleX affine transform of the view.
   */
  scaleX?: string | number;

  /**
   * Gets or sets the scaleY affine transform of the view.
   */
  scaleY?: string | number;

  /**
   * Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
   */
  originX?: string | number;

  /**
   * Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
   */
  originY?: string | number;

  /**
   * The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
   */
  flexFlow?: FlexFlow;

  /**
   * The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
   */
  flex?: Flex;

  /**
   * Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.
   */
  isEnabled?: string | boolean;

  /**
   * Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
   */
  isUserInteractionEnabled?: string | boolean;

  /**
   * Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: false
   */
  iosOverflowSafeArea?: string | boolean;

  /**
   * Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true
   */
  iosOverflowSafeAreaEnabled?: string | boolean;

  /**
   * Gets or sets a value indicating whether the the view should totally ignore safe areas computation. This property is iOS specific. Default value: false
   */
  iosIgnoreSafeArea?: string | boolean;

  /**
   * visionOS only
   */
  visionIgnoreHoverStyle?: string | boolean;

  /**
   * visionOS only
   */
  visionHoverStyle?: string | VisionHoverOptions;

  testID?: string;

  touchAnimation?: string | boolean | TouchAnimationOptions;

  ignoreTouchAnimation?: string | boolean;

  touchDelay?: string | number;

  /**
     * (iOS only) Gets or sets the status bar style for this view.
Note: You must remove Info.plist key `UIViewControllerBasedStatusBarAppearance`
It defaults to true when not present: https://developer.apple.com/documentation/bundleresources/information-property-list/uiviewcontrollerbasedstatusbarappearance
Or you can explicitly set it to true:
<key>UIViewControllerBasedStatusBarAppearance</key>
<true/>

False value will make this property have no effect.
*/
  statusBarStyle?: "light" | "dark";

  /**
   * Dock position of the view within its parent.
   */
  dock?: "left" | "right" | "top" | "bottom";

  /**
   * String value used when hooking to layoutChanged event.
   */
  onLayoutChanged?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to showingModally event.
   */
  onShowingModally?: (event: NSDOMEvent<ShownModallyData>) => void;

  /**
   * String value used when hooking to shownModally event.
   */
  onShownModally?: (event: NSDOMEvent<ShownModallyData>) => void;

  /**
   * String value used when hooking to accessibilityBlur event.
   */
  onAccessibilityBlur?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to accessibilityFocus event.
   */
  onAccessibilityFocus?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to accessibilityFocusChanged event.
   */
  onAccessibilityFocusChanged?: (event: NSDOMEvent<EventDataValue>) => void;

  /**
   * String value used when hooking to androidOverflowInset event.
   */
  onAndroidOverflowInset?: (event: NSDOMEvent<EventDataValue>) => void;
}

export interface AbsoluteLayoutAttributes
  extends ViewAttributes<AbsoluteLayout> {
  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface ActionBarAttributes extends ViewAttributes<ActionBar> {
  /**
   * Gets or sets the action bar title.
   */
  title?: string;

  /**
   * Gets or sets the title view. When set - replaces the title with a custom view.
   */
  titleView?: View;

  /**
   * Gets or sets the navigation button (a.k.a. the back button).
   */
  navigationButton?: NavigationButton;

  /**
     * Removes the shadow/border at the bottom of the ActionBar and removes translucency on iOS.
Default false.
*/
  flat?: string | boolean;

  /**
   * Gets the collection of action items.
   */
  actionItems?: ActionItems;

  /**
     * Gets or set the UIImageRenderingMode of the action bar icons in iOS. Defaults to "alwaysOriginal"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
*/
  iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";
}

export interface ActionItemAttributes
  extends Omit<ViewBaseAttributes<ActionItem>, "onTap"> {
  /**
   * Gets or sets the text of the action item.
   */
  text?: string;

  /**
   * Gets or sets the icon of the action item.
   */
  icon?: string;

  /**
   * Gets or sets the custom action view of the action item.
   */
  actionView?: View;

  /**
   * Gets or sets the visibility of the action item.
   */
  visibility?: string;

  /**
   * Dock position of the view within its parent.
   */
  dock?: "left" | "right" | "top" | "bottom";

  /**
   * String value used when hooking to layoutChanged event.
   */
  onTap?: (event: NSDOMEvent<EventData>) => void;
}

export interface ActivityIndicatorAttributes
  extends ViewAttributes<ActivityIndicator> {
  /**
   * Gets or sets a value indicating whether the widget is currently displaying progress.
   */
  busy?: string | boolean;
}

export interface ButtonAttributes extends ViewAttributes<Button> {
  /**
   * Gets or sets whether the Button wraps text or not.
   */
  textWrap?: string | boolean;

  /**
   * Gets or sets the text.
   */
  text?: string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText?: FormattedString;

  /**
   * Gets or sets font-family style property.
   */
  fontFamily?: string;

  /**
   * Gets or sets font-size style property.
   */
  fontSize?: string | number;

  /**
   * Gets or sets font-style style property.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets font-weight style property.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing?: string | number;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight?: string | number;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment?: TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets text transform style property.
   */
  textTransform?: TextTransformType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow?: ShadowCSSValues;

  /**
   * Gets or sets text stroke style property.
   */
  textStroke?: StrokeCSSValues;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace?: WhiteSpaceType;

  /**
   * Gets or sets text-overflow style property.
   */
  textOverflow?: TextOverflowType;

  /**
   * Gets or sets white space style property.
   */
  maxLines?: string | number;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Specify wether the native text should be applied with or without animations
   */
  iosTextAnimation?: string | boolean | "inherit";

  /**
   * String value used when hooking to tap event.
   */
  "onString;"?: (event: NSDOMEvent<EventData>) => void;
}

export interface ContentViewAttributes extends ViewAttributes<ContentView> {
  /**
   * Gets or sets the single child of the view.
   */
  content?: View;
}

export interface DatePickerAttributes extends ViewAttributes<DatePicker> {
  /**
   * Gets or sets the year.
   */
  year?: string | number;

  /**
   * Gets or sets the month. The months start from 1.
   */
  month?: string | number;

  /**
   * Gets or sets the day. The days start from 1.
   */
  day?: string | number;

  /**
   * Gets or sets the entire date.
   */
  date?: Date;

  /**
   * Gets or sets the max date.
   */
  maxDate?: Date;

  /**
   * Gets or sets the min date.
   */
  minDate?: Date;

  /**
     * Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
*/
  iosPreferredDatePickerStyle?: string | number;

  /**
   * Gets or sets whether the time should be shown.
   */
  showTime?: string | boolean;

  /**
   * String value used when hooking to dateChange event.
   */
  onDateChange?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface DockLayoutAttributes extends ViewAttributes<DockLayout> {
  /**
     * Gets or sets a value that indicates whether the last child element within a DockLayout stretches to fill the remaining available space.
The default value is true.
*/
  stretchLastChild?: string | boolean;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface EditableTextBaseAttributes
  extends ViewAttributes<EditableTextBase> {
  /**
   * Gets or sets the soft keyboard type.
   */
  keyboardType?: KeyboardInputType;

  /**
   * Gets or sets the soft keyboard return key flavor.
   */
  returnKeyType?: ReturnKeyButtonType;

  /**
   * Gets or sets a value indicating when the text property will be updated.
   */
  updateTextTrigger?: UpdateTextTriggerType;

  /**
   * Gets or sets the autocapitalization type.
   */
  autocapitalizationType?: AutocapitalizationInputType;

  /**
   * Gets or sets the autofill type.
   */
  autofillType?: string;

  /**
   * Gets or sets whether the instance is editable.
   */
  editable?: string | boolean;

  /**
   * Enables or disables autocorrection.
   */
  autocorrect?: string | boolean;

  /**
   * Gets or sets the placeholder text.
   */
  hint?: string;

  /**
   * Limits input to a certain number of characters.
   */
  maxLength?: string | number;

  /**
   * Gets or sets the color of the placeholder text
   */
  placeholderColor?: ColorValue;

  /**
   * Gets or sets the text.
   */
  text?: string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText?: FormattedString;

  /**
   * Gets or sets font-family style property.
   */
  fontFamily?: string;

  /**
   * Gets or sets font-size style property.
   */
  fontSize?: string | number;

  /**
   * Gets or sets font-style style property.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets font-weight style property.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing?: string | number;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight?: string | number;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment?: TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets text transform style property.
   */
  textTransform?: TextTransformType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow?: ShadowCSSValues;

  /**
   * Gets or sets text stroke style property.
   */
  textStroke?: StrokeCSSValues;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace?: WhiteSpaceType;

  /**
   * Gets or sets text-overflow style property.
   */
  textOverflow?: TextOverflowType;

  /**
   * Gets or sets white space style property.
   */
  maxLines?: string | number;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Specify wether the native text should be applied with or without animations
   */
  iosTextAnimation?: string | boolean | "inherit";

  /**
   * String value used when hooking to the blur event.
   */
  onBlurEvent?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the focus event.
   */
  onFocusEvent?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the textChange event.
   */
  onTextChangeEvent?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface FlexboxLayoutAttributes extends ViewAttributes<FlexboxLayout> {
  /**
   * Gets or set the direction of childern on the main axis.
   */
  flexDirection?: FlexDirection;

  /**
   * Gets or sets whether children can wrap into multiple lines
   */
  flexWrap?: FlexWrap;

  /**
   * Gets or sets alignment of childern on the main axis
   */
  justifyContent?: JustifyContent;

  /**
   * Gets or sets alignment of the childern on cross axis
   */
  alignItems?: AlignItems;

  /**
   * Gets or sets alignment of items along the cross axis
   */
  alignContent?: AlignContent;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface FormattedStringAttributes
  extends ViewBaseAttributes<FormattedString> {
  /**
   * Gets or sets the font family which will be used for all spans that doesn't have a specific value.
   */
  fontFamily?: string;

  /**
   * Gets or sets the font size which will be used for all spans that doesn't have a specific value.
   */
  fontSize?: string | number;

  /**
   * Gets or sets the font style which will be used for all spans that doesn't have a specific value.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets the font variation settings which will be used for all spans that doesn't have a specific value.
   */
  fontVariationSettings?: FontVariationSettingsType[];

  /**
   * Gets or sets text decorations which will be used for all spans that doesn't have a specific value.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets the font foreground color which will be used for all spans that doesn't have a specific value.
   */
  color?: ColorValue;

  /**
   * Gets or sets the font background color which will be used for all spans that doesn't have a specific value.
   */
  backgroundColor?: ColorValue;

  /**
   * Defines whether accessibility font scale should affect font size.
   */
  iosAccessibilityAdjustsFontSize?: string | boolean;

  /**
   * Gets or sets the minimum accessibility font scale.
   */
  iosAccessibilityMinFontScale?: string | number;

  /**
   * Gets or sets the maximum accessibility font scale.
   */
  iosAccessibilityMaxFontScale?: string | number;
}

export interface FrameAttributes extends ViewAttributes<Frame> {
  defaultPage?: string | undefined;

  /**
   * Used to control the visibility the Navigation Bar in iOS and the Action Bar in Android.
   */
  actionBarVisibility?: "auto" | "never" | "always";

  /**
   * Specify a custom UINavigationBar class (iOS only)
   */
  iosNavigationBarClass?: string;

  /**
   * Specify a custom UIToolbar class (iOS only)
   */
  iosToolBarClass?: string;

  /**
   * String value used when hooking to OptionSelected event.
   */
  onOptionSelected?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to navigatingTo event.
   */
  onNavigatingTo?: (event: NSDOMEvent<NavigationData>) => void;

  /**
   * String value used when hooking to navigatedTo event.
   */
  onNavigatedTo?: (event: NSDOMEvent<NavigationData>) => void;
}

export interface GridLayoutAttributes extends ViewAttributes<GridLayout> {
  /**
     * A string value representing row heights delimited with commas.

Valid values: an absolute number, auto, or *:
*/
  rows?: string;

  /**
     * A string value representing column widths delimited with commas.

Valid values: an absolute number, auto, or *:
*/
  columns?: string;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface HtmlViewAttributes extends ViewAttributes<HtmlView> {
  /**
   * Gets or sets html string for the HtmlView.
   */
  html?: string;

  /**
   * Gets or sets a value indicating whether HtmlView is selectable.
   */
  selectable?: string | boolean;

  /**
   * Gets of sets color of links in the rendered HTML.
   */
  linkColor?: ColorValue;
}

export interface ImageAttributes extends ViewAttributes<Image> {
  /**
   * Gets or sets the image source of the image.
   */
  imageSource?: ImageSource;

  /**
   * Gets or sets the source of the Image. This can be either an URL string or a native image instance.
   */
  src?: string | ImageSource | ImageAsset;

  /**
   * Gets or sets the image stretch mode.
   */
  stretch?: ImageStretchType;

  /**
     * Gets or sets the loading strategy for images on the local file system:
- **sync** - blocks the UI if necessary to display immediately, good for small icons.
- **async** *(default)* - will load in the background, may appear with short delay, good for large images.
When loading images from web they are always loaded **async** no matter of loadMode value.
*/
  loadMode?: "sync" | "async";

  /**
   * A color used to tint template images.
   */
  tintColor?: ColorValue;

  /**
     * Gets or sets the desired decode height of the image.
This property is Android specific.
*/
  decodeHeight?: LengthType;

  /**
     * Gets or sets the desired decode width of the image.
This property is Android specific.
*/
  decodeWidth?: LengthType;

  /**
     * Get or set the symbol effect used to animate the SF symbol image
Symbol effects: https://developer.apple.com/documentation/symbols?language=objc
*/
  iosSymbolEffect?: ImageSymbolEffect | ImageSymbolEffects;

  /**
   * Get or set the SF Symbol scale to use.
   */
  iosSymbolScale?: iosSymbolScaleType;

  /**
   * String value used when hooking to the isLoadingChange event.
   */
  onIsLoading?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface LabelAttributes extends ViewAttributes<Label> {
  /**
   * Gets or sets whether the Label wraps text or not.
   */
  textWrap?: string | boolean;

  /**
   * Gets or sets the text.
   */
  text?: string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText?: FormattedString;

  /**
   * Gets or sets font-family style property.
   */
  fontFamily?: string;

  /**
   * Gets or sets font-size style property.
   */
  fontSize?: string | number;

  /**
   * Gets or sets font-style style property.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets font-weight style property.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing?: string | number;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight?: string | number;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment?: TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets text transform style property.
   */
  textTransform?: TextTransformType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow?: ShadowCSSValues;

  /**
   * Gets or sets text stroke style property.
   */
  textStroke?: StrokeCSSValues;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace?: WhiteSpaceType;

  /**
   * Gets or sets text-overflow style property.
   */
  textOverflow?: TextOverflowType;

  /**
   * Gets or sets white space style property.
   */
  maxLines?: string | number;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Specify wether the native text should be applied with or without animations
   */
  iosTextAnimation?: string | boolean | "inherit";
}

export interface ListPickerAttributes extends ViewAttributes<ListPicker> {
  /**
   * Gets or sets the selected index.
   */
  selectedIndex?: string | number;

  /**
     * Gets or set the items collection of the ListPicker.
The items property can be set to an array or an object defining length and getItem(index) method.
*/
  items?: any[] | ItemsSource;

  /**
   *
   */
  onSelectedIndexChange?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface ListViewAttributes extends ViewAttributes<ListView> {
  /**
     * Gets or set the items collection of the ListView.
The items property can be set to an array or an object defining length and getItem(index) method.
*/
  items?: any[] | ItemsSource;

  /**
   * Gets or set the item template of the ListView.
   */
  itemTemplate?: string | Template;

  /**
   * Gets or set the list of item templates for the item template selector
   */
  itemTemplates?: string | KeyedTemplate[];

  /**
   * A function that returns the appropriate ket template based on the data item.
   */
  itemTemplateSelector?:
    | string
    | ((item: any, index: number, items: any) => string);

  /**
   * Item id generator
   */
  itemIdGenerator?: (item: any, index: number, items: any) => number;

  /**
   * Gets or set the items separator line color of the ListView.
   */
  separatorColor?: ColorValue;

  /**
   * Gets or set row height of the ListView.
   */
  rowHeight?: LengthType;

  /**
     * Gets or set the estimated height of rows in the ListView.
The default value is 44px.
*/
  iosEstimatedRowHeight?: LengthType;

  /**
   * String value used when hooking to itemLoading event.
   */
  onItemLoading?: (event: NSDOMEvent<ItemEventData>) => void;

  /**
   * String value used when hooking to itemTap event.
   */
  onItemTap?: (event: NSDOMEvent<ItemEventData>) => void;
}

export interface PageAttributes extends ViewAttributes<Page> {
  /**
   * Gets or sets whether page background spans under status bar.
   */
  backgroundSpanUnderStatusBar?: string | boolean;

  /**
   * Gets or sets the color of the status bar in Android.
   */
  androidStatusBarBackground?: ColorValue;

  /**
   * Used to hide the Navigation Bar in iOS and the Action Bar in Android.
   */
  actionBarHidden?: string | boolean;

  /**
     * Used to control if swipe back navigation in iOS is enabled.

This property is iOS specific.
Default value: true
*/
  enableSwipeBackNavigation?: string | boolean;

  /**
   * A property that is used to pass a data from another page (while navigate to).
   */
  navigationContext?: string;

  /**
     * iOS Only
Perform an action when user performans the "escape" gesture
*/
  onAccessibilityPerformEscape?: (() => boolean) | undefined;

  /**
   * Should page changed be announced to the screen reader.
   */
  accessibilityAnnouncePageEnabled?: string | boolean;

  /**
   * Gets or sets the single child of the view.
   */
  content?: View;

  /**
   * String value used when hooking to navigatingTo event.
   */
  onNavigatingTo?: (event: NSDOMEvent<NavigatedData>) => void;

  /**
   * String value used when hooking to navigatedTo event.
   */
  onNavigatedTo?: (event: NSDOMEvent<NavigatedData>) => void;

  /**
   * String value used when hooking to navigatingFrom event.
   */
  onNavigatingFrom?: (event: NSDOMEvent<NavigatedData>) => void;

  /**
   * String value used when hooking to navigatedFrom event.
   */
  onNavigatedFrom?: (event: NSDOMEvent<NavigatedData>) => void;
}

export interface PlaceholderAttributes extends ViewAttributes<Placeholder> {
  /**
   * String value used when hooking to creatingView event.
   */
  onCreatingView?: (event: NSDOMEvent<CreateViewEventData>) => void;
}

export interface ProgressAttributes extends ViewAttributes<Progress> {
  /**
   * Gets or sets a progress current value.
   */
  value?: string | number;

  /**
   * Gets or sets a progress max value.
   */
  maxValue?: string | number;

  /**
   * String value used when hooking to valueChange event.
   */
  onValueChange?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface ProxyViewContainerAttributes
  extends ViewAttributes<ProxyViewContainer> {
  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface RepeaterAttributes extends ViewAttributes<Repeater> {}

export interface RootLayoutAttributes extends ViewAttributes<RootLayout> {
  /**
     * A string value representing row heights delimited with commas.

Valid values: an absolute number, auto, or *:
*/
  rows?: string;

  /**
     * A string value representing column widths delimited with commas.

Valid values: an absolute number, auto, or *:
*/
  columns?: string;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface ScrollViewAttributes extends ViewAttributes<ScrollView> {
  /**
   * Gets or sets a value indicating whether scroll is enabled.
   */
  isScrollEnabled?: string | boolean;

  /**
   * Toggles scrollbar indicator visibility
   */
  scrollBarIndicatorVisible?: string | boolean;

  /**
   * Gets or sets direction in which the content can be scrolled.
   */
  orientation?: OrientationType;

  /**
   * Gets or sets the single child of the view.
   */
  content?: View;

  /**
   * String value used when hooking to scroll event.
   */
  onScroll?: (event: NSDOMEvent<ScrollEventData>) => void;
}

export interface SearchBarAttributes extends ViewAttributes<SearchBar> {
  /**
   * Gets or sets a search bar text.
   */
  text?: string;

  /**
   * Gets or sets the text of the search bar text field hint/placeholder.
   */
  hint?: string;

  /**
   * Gets or sets the TextField background color of the SearchBar component.
   */
  textFieldBackgroundColor?: ColorValue;

  /**
   * Gets or sets the TextField Hint color of the SearchBar component.
   */
  textFieldHintColor?: ColorValue;

  /**
   * String value used when hooking to submit event.
   */
  onSubmit?: (event: NSDOMEvent<EventData>) => void;
}

export interface SegmentedBarAttributes extends ViewAttributes<SegmentedBar> {
  /**
   * Gets or sets the selected index of the SegmentedBar component.
   */
  selectedIndex?: string | number;

  /**
   * Gets or sets the selected background color of the SegmentedBar component.
   */
  selectedBackgroundColor?: ColorValue;

  /**
   * Gets or sets the selected text color of the SegmentedBar component.
   */
  selectedTextColor?: ColorValue;

  /**
   * Gets or sets the items of the SegmentedBar.
   */
  items?: SegmentedBarItem[];

  /**
   * Dock position of the view within its parent.
   */
  dock?: "left" | "top" | "right" | "bottom";

  /**
   * String value used when hooking to the selectedIndexChanged event.
   */
  onSelectedIndexChanged?: (
    event: NSDOMEvent<SelectedIndexChangedEventData>,
  ) => void;
}

export interface SegmentedBarItemAttributes
  extends ViewBaseAttributes<SegmentedBarItem> {
  /**
   * Gets or sets the title of the SegmentedBarItem.
   */
  title?: string;
}

export interface SliderAttributes extends ViewAttributes<Slider> {
  /**
   * Gets or sets a slider current value. The default value is 0.
   */
  value?: string | number;

  /**
   * Gets or sets a slider min value. The default value is 0.
   */
  minValue?: string | number;

  /**
   * Gets or sets a slider max value. The default value is 100.
   */
  maxValue?: string | number;

  /**
   * Increase/Decrease step size for iOS Increment-/Decrement events
   */
  accessibilityStep?: string | number;

  /**
   * String value used when hooking to valueChange event.
   */
  onValueChange?: (event: NSDOMEvent<PropertyChangeData>) => void;

  /**
   * String value used when hooking to accessibilityDecrement event.
   */
  onAccessibilityDecrement?: (
    event: NSDOMEvent<accessibilityDecrementEvent>,
  ) => void;

  /**
   * String value used when hooking to accessibilityIncrement event.
   */
  onAccessibilityIncrement?: (
    event: NSDOMEvent<AccessibilityIncrementEventData>,
  ) => void;
}

export interface SpanAttributes extends ViewBaseAttributes<Span> {
  /**
   * Gets or sets the font family of the span.
   */
  fontFamily?: string;

  /**
   * Gets or sets the font size of the span.
   */
  fontSize?: string | number;

  /**
   * Gets or sets the font style of the span.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets the font weight of the span.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets the font variation settings of the span.
   */
  fontVariationSettings?: FontVariationSettingsType[];

  /**
   * Gets or sets text decorations for the span.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets the font foreground color of the span.
   */
  color?: ColorValue;

  /**
   * Gets or sets the font background color of the span.
   */
  backgroundColor?: ColorValue;

  /**
   * Defines whether accessibility font scale should affect font size.
   */
  iosAccessibilityAdjustsFontSize?: string | boolean;

  /**
   * Gets or sets the minimum accessibility font scale.
   */
  iosAccessibilityMinFontScale?: string | number;

  /**
   * Gets or sets the maximum accessibility font scale.
   */
  iosAccessibilityMaxFontScale?: string | number;

  /**
   * Gets or sets the text for the span.
   */
  text?: string;

  /**
   * Gets if the span is tappable or not.
   */
  tappable?: string | boolean;

  /**
   * String value used when hooking to linkTap event.
   */
  onLinkTap?: (event: NSDOMEvent<EventData>) => void;
}

export interface StackLayoutAttributes extends ViewAttributes<StackLayout> {
  /**
     * Gets or sets if layout should be horizontal or vertical.
The default value is vertical.
*/
  orientation?: OrientationType;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

export interface SwitchAttributes extends ViewAttributes<Switch> {
  /**
   * Gets or sets if a switch is checked or not.
   */
  checked?: string | boolean;

  /**
   * Gets or sets the background color of the Switch when it is turned off.
   */
  offBackgroundColor?: ColorValue;

  /**
   * String value used when hooking to checkedChange event.
   */
  onCheckedChange?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface TabViewAttributes extends ViewAttributes<TabView> {
  /**
   * Gets or sets the items of the TabView.
   */
  items?: TabViewItem[];

  /**
   * Gets or sets the selectedIndex of the TabView.
   */
  selectedIndex?: string | number;

  /**
   * Gets or sets the font size of the tabs titles.
   */
  tabTextFontSize?: string | number;

  /**
   * Gets or sets the text color of the tabs titles.
   */
  tabTextColor?: ColorValue;

  /**
   * Gets or sets the background color of the tabs.
   */
  tabBackgroundColor?: ColorValue;

  /**
   * Gets or sets the text color of the selected tab title.
   */
  selectedTabTextColor?: ColorValue;

  /**
   * Gets or sets the color of the horizontal line drawn below the currently selected tab on Android.
   */
  androidSelectedTabHighlightColor?: ColorValue;

  /**
     * Gets or set the UIImageRenderingMode of the tab icons in iOS.  Defaults to "automatic"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
*/
  iosIconRenderingMode?: "automatic" | "alwaysOriginal" | "alwaysTemplate";

  /**
     * Gets or sets the rendering mode of tab icons on Android.  Defaults to "original"
Valid values are:
 - alwaysOriginal
 - alwaysTemplate
*/
  androidIconRenderingMode?: "alwaysOriginal" | "alwaysTemplate";

  /**
     * Gets or sets the number of tabs that should be retained to either side of the current tab in the view hierarchy in an idle state.
Tabs beyond this limit will be recreated from the TabView when needed.
*/
  androidOffscreenTabLimit?: string | number;

  /**
     * Gets or set the tabs vertical position.
Valid values are:
 - top
 - bottom
*/
  androidTabsPosition?: "top" | "bottom";

  /**
   * Gets or sets a value indicating whether swipe gesture is enabled for Android.
   */
  androidSwipeEnabled?: string | boolean;

  /**
   * Dock position of the view within its parent.
   */
  dock?: "left" | "top" | "right" | "bottom";

  /**
   * String value used when hooking to the selectedIndexChanged event.
   */
  onSelectedIndexChanged?: (
    event: NSDOMEvent<SelectedIndexChangedEventData>,
  ) => void;
}

export interface TabViewItemAttributes extends ViewBaseAttributes<TabViewItem> {
  /**
   * Gets or sets the title of the TabViewItem.
   */
  title?: string;

  /**
   * Gets or sets the view of the TabViewItem.
   */
  view?: View;

  /**
   * Gets or sets the icon source of the TabViewItem. This could either be a a file name or resource id.
   */
  iconSource?: string;

  /**
   * Gets or sets the text transform of the tab titles.
   */
  textTransform?: TextTransformType;
}

export interface TextBaseAttributes extends ViewAttributes<TextBase> {
  /**
   * Gets or sets the text.
   */
  text?: string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText?: FormattedString;

  /**
   * Gets or sets font-family style property.
   */
  fontFamily?: string;

  /**
   * Gets or sets font-size style property.
   */
  fontSize?: string | number;

  /**
   * Gets or sets font-style style property.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets font-weight style property.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing?: string | number;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight?: string | number;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment?: TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets text transform style property.
   */
  textTransform?: TextTransformType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow?: ShadowCSSValues;

  /**
   * Gets or sets text stroke style property.
   */
  textStroke?: StrokeCSSValues;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace?: WhiteSpaceType;

  /**
   * Gets or sets text-overflow style property.
   */
  textOverflow?: TextOverflowType;

  /**
   * Gets or sets white space style property.
   */
  maxLines?: string | number;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Specify wether the native text should be applied with or without animations
   */
  iosTextAnimation?: string | boolean | "inherit";
}

export interface TextFieldAttributes extends ViewAttributes<TextField> {
  /**
   * Gets or sets if a text field is for password entry.
   */
  secure?: string | boolean;

  /**
   * Gets or sets if a text field should dismiss on return.
   */
  closeOnReturn?: string | boolean;

  /**
   * iOS only (to avoid 12+ auto suggested strong password handling)
   */
  secureWithoutAutofill?: string | boolean;

  /**
   * Gets or sets the soft keyboard type.
   */
  keyboardType?: KeyboardInputType;

  /**
   * Gets or sets the soft keyboard return key flavor.
   */
  returnKeyType?: ReturnKeyButtonType;

  /**
   * Gets or sets a value indicating when the text property will be updated.
   */
  updateTextTrigger?: UpdateTextTriggerType;

  /**
   * Gets or sets the autocapitalization type.
   */
  autocapitalizationType?: AutocapitalizationInputType;

  /**
   * Gets or sets the autofill type.
   */
  autofillType?: string;

  /**
   * Gets or sets whether the instance is editable.
   */
  editable?: string | boolean;

  /**
   * Enables or disables autocorrection.
   */
  autocorrect?: string | boolean;

  /**
   * Gets or sets the placeholder text.
   */
  hint?: string;

  /**
   * Limits input to a certain number of characters.
   */
  maxLength?: string | number;

  /**
   * Gets or sets the color of the placeholder text
   */
  placeholderColor?: ColorValue;

  /**
   * Gets or sets the text.
   */
  text?: string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText?: FormattedString;

  /**
   * Gets or sets font-family style property.
   */
  fontFamily?: string;

  /**
   * Gets or sets font-size style property.
   */
  fontSize?: string | number;

  /**
   * Gets or sets font-style style property.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets font-weight style property.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing?: string | number;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight?: string | number;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment?: TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets text transform style property.
   */
  textTransform?: TextTransformType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow?: ShadowCSSValues;

  /**
   * Gets or sets text stroke style property.
   */
  textStroke?: StrokeCSSValues;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace?: WhiteSpaceType;

  /**
   * Gets or sets text-overflow style property.
   */
  textOverflow?: TextOverflowType;

  /**
   * Gets or sets white space style property.
   */
  maxLines?: string | number;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Specify wether the native text should be applied with or without animations
   */
  iosTextAnimation?: string | boolean | "inherit";

  /**
   * String value used when hooking to the returnPress event.
   */
  onReturnPress?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the blur event.
   */
  onBlurEvent?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the focus event.
   */
  onFocusEvent?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the textChange event.
   */
  onTextChangeEvent?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface TextViewAttributes extends ViewAttributes<TextView> {
  /**
   * Gets or sets the soft keyboard type.
   */
  keyboardType?: KeyboardInputType;

  /**
   * Gets or sets the soft keyboard return key flavor.
   */
  returnKeyType?: ReturnKeyButtonType;

  /**
   * Gets or sets a value indicating when the text property will be updated.
   */
  updateTextTrigger?: UpdateTextTriggerType;

  /**
   * Gets or sets the autocapitalization type.
   */
  autocapitalizationType?: AutocapitalizationInputType;

  /**
   * Gets or sets the autofill type.
   */
  autofillType?: string;

  /**
   * Gets or sets whether the instance is editable.
   */
  editable?: string | boolean;

  /**
   * Enables or disables autocorrection.
   */
  autocorrect?: string | boolean;

  /**
   * Gets or sets the placeholder text.
   */
  hint?: string;

  /**
   * Limits input to a certain number of characters.
   */
  maxLength?: string | number;

  /**
   * Gets or sets the color of the placeholder text
   */
  placeholderColor?: ColorValue;

  /**
   * Gets or sets the text.
   */
  text?: string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText?: FormattedString;

  /**
   * Gets or sets font-family style property.
   */
  fontFamily?: string;

  /**
   * Gets or sets font-size style property.
   */
  fontSize?: string | number;

  /**
   * Gets or sets font-style style property.
   */
  fontStyle?: FontStyleType;

  /**
   * Gets or sets font-weight style property.
   */
  fontWeight?: FontWeightType;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing?: string | number;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight?: string | number;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment?: TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration?: TextDecorationType;

  /**
   * Gets or sets text transform style property.
   */
  textTransform?: TextTransformType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow?: ShadowCSSValues;

  /**
   * Gets or sets text stroke style property.
   */
  textStroke?: StrokeCSSValues;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace?: WhiteSpaceType;

  /**
   * Gets or sets text-overflow style property.
   */
  textOverflow?: TextOverflowType;

  /**
   * Limits input to a certain number of lines.
   */
  maxLines?: string | number;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Specify wether the native text should be applied with or without animations
   */
  iosTextAnimation?: string | boolean | "inherit";

  /**
   * String value used when hooking to the returnPress event.
   */
  onReturnPress?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the blur event.
   */
  onBlurEvent?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the focus event.
   */
  onFocusEvent?: (event: NSDOMEvent<EventData>) => void;

  /**
   * String value used when hooking to the textChange event.
   */
  onTextChangeEvent?: (event: NSDOMEvent<PropertyChangeData>) => void;
}

export interface TimePickerAttributes extends ViewAttributes<TimePicker> {
  /**
   * Gets or sets the time hour.
   */
  hour?: string | number;

  /**
   * Gets or sets the time minute.
   */
  minute?: string | number;

  /**
   * Gets or sets the time.
   */
  time?: Date;

  /**
   * Gets or sets the max time hour.
   */
  maxHour?: string | number;

  /**
   * Gets or sets the max time minute.
   */
  maxMinute?: string | number;

  /**
   * Gets or sets the min time hour.
   */
  minHour?: string | number;

  /**
   * Gets or sets the min time minute.
   */
  minMinute?: string | number;

  /**
   * Gets or sets the minute interval.
   */
  minuteInterval?: string | number;

  /**
     * Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
*/
  iosPreferredDatePickerStyle?: string | number;

  /**
   * String value used when hooking to the timeChange event.
   */
  onTimeChange?: (event: NSDOMEvent<EventData>) => void;
}

export interface WebViewAttributes extends ViewAttributes<WebView> {
  /**
   * Gets or sets the url, local file path or HTML string.
   */
  src?: string;

  /**
   * Disable scrolling in the WebView
   */
  disableZoom?: string | boolean;

  /**
     * Enables inline media playback on iOS.
By default, webview forces iPhone into fullscreen media playback.
*/
  iosAllowInlineMediaPlayback?: string | boolean;

  /**
   * String value used when hooking to loadStarted event.
   */
  onLoadStarted?: (event: NSDOMEvent<LoadEventData>) => void;

  /**
   * String value used when hooking to loadFinished event.
   */
  onLoadFinished?: (event: NSDOMEvent<LoadEventData>) => void;
}

export interface WrapLayoutAttributes extends ViewAttributes<WrapLayout> {
  /**
     * Gets or sets the flow direction. Default value is horizontal.
If orientation is horizontal items are arranged in rows, else items are arranged in columns.
*/
  orientation?: OrientationType;

  /**
     * Gets or sets the width used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
*/
  itemWidth?: LengthType;

  /**
     * Gets or sets the height used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
*/
  itemHeight?: LengthType;

  /**
   * Gets or sets padding style property.
   */
  padding?: string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom?: LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft?: LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight?: LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop?: LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds?: string | boolean;

  /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
layout container in case an interactive child view did not handle it.
Default value of this property is false. This does not affect the appearance of the view.
*/
  isPassThroughParentEnabled?: string | boolean;
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    /** A layout that lets you specify exact locations (left/top coordinates) of its children. */
    AbsoluteLayout: DefineComponent<AbsoluteLayoutAttributes>;
    /** Provides an abstraction over the ActionBar (android) and NavigationBar (iOS). */
    ActionBar: DefineComponent<ActionBarAttributes>;
    /** Represents an action item in the action bar. */
    ActionItem: DefineComponent<ActionItemAttributes>;
    /** Represents a UI widget which displays a progress indicator hinting the user for some background operation running. */
    ActivityIndicator: DefineComponent<ActivityIndicatorAttributes>;
    /** Represents a standard Button widget. */
    Button: DefineComponent<ButtonAttributes>;
    ContentView: DefineComponent<ContentViewAttributes>;
    /** Represents an date picker. */
    DatePicker: DefineComponent<DatePickerAttributes>;
    /** A Layout that arranges its children at its outer edges, and allows its last child to take up the remaining space. */
    DockLayout: DefineComponent<DockLayoutAttributes>;
    /** Represents the base class for all editable text views. */
    EditableTextBase: DefineComponent<EditableTextBaseAttributes>;
    FlexboxLayout: DefineComponent<FlexboxLayoutAttributes>;
    /** A class used to create a formatted (rich text) string. */
    FormattedString: DefineComponent<FormattedStringAttributes>;
    /** Represents the logical View unit that is responsible for navigation within an application.
Nested frames are supported, enabling hierarchical navigation scenarios. */
    Frame: DefineComponent<FrameAttributes>;
    /** Defines a rectangular layout area that consists of columns and rows. */
    GridLayout: DefineComponent<GridLayoutAttributes>;
    /** Represents a view with html content. Use this component instead WebView when you want to show just static HTML content.
[iOS support](https://developer.apple.com/documentation/foundation/nsattributedstring/1524613-initwithdata)
[android support](http://developer.android.com/reference/android/text/Html.html) */
    HtmlView: DefineComponent<HtmlViewAttributes>;
    /** Represents a class that provides functionality for loading and streching image(s). */
    Image: DefineComponent<ImageAttributes>;
    /** Represents a text label. */
    Label: DefineComponent<LabelAttributes>;
    /** Represents an list picker. */
    ListPicker: DefineComponent<ListPickerAttributes>;
    /** Represents a view that shows items in a vertically scrolling list. */
    ListView: DefineComponent<ListViewAttributes>;
    /** Represents a logical unit for navigation (inside Frame). */
    Page: DefineComponent<PageAttributes>;
    /** Represents a Placeholder, which is used to add a native view to the visual tree. */
    Placeholder: DefineComponent<PlaceholderAttributes>;
    /** Represents a progress component. */
    Progress: DefineComponent<ProgressAttributes>;
    /** Proxy view container that adds all its native children directly to the parent.
To be used as a logical grouping container of views. */
    ProxyViewContainer: DefineComponent<ProxyViewContainerAttributes>;
    /** Represents a UI Repeater component. */
    Repeater: DefineComponent<RepeaterAttributes>;
    RootLayout: DefineComponent<RootLayoutAttributes>;
    /** Represents a scrollable area that can have content that is larger than its bounds. */
    ScrollView: DefineComponent<ScrollViewAttributes>;
    /** Represents a search bar component. */
    SearchBar: DefineComponent<SearchBarAttributes>;
    /** Represents a UI SegmentedBar component. */
    SegmentedBar: DefineComponent<SegmentedBarAttributes>;
    /** Represents a SegmentedBar item. */
    SegmentedBarItem: DefineComponent<SegmentedBarItemAttributes>;
    /** Represents a slider component. */
    Slider: DefineComponent<SliderAttributes>;
    /** A class used to create a single part of formatted string with a common text properties. */
    Span: DefineComponent<SpanAttributes>;
    /** A Layout that arranges its children horizontally or vertically. The direction can be set by orientation property. */
    StackLayout: DefineComponent<StackLayoutAttributes>;
    /** Represents a switch component. */
    Switch: DefineComponent<SwitchAttributes>;
    /** Represents a tab view. */
    TabView: DefineComponent<TabViewAttributes>;
    /** Represents a tab view entry. */
    TabViewItem: DefineComponent<TabViewItemAttributes>;
    TextBase: DefineComponent<TextBaseAttributes>;
    /** Represents an editable text field. */
    TextField: DefineComponent<TextFieldAttributes>;
    /** Represents an editable multiline text view. */
    TextView: DefineComponent<TextViewAttributes>;
    /** Represents an time picker. */
    TimePicker: DefineComponent<TimePickerAttributes>;
    /** Represents a standard WebView widget. */
    WebView: DefineComponent<WebViewAttributes>;
    /** WrapLayout position children in rows or columns depending on orientation property
until space is filled and then wraps them on new row or column. */
    WrapLayout: DefineComponent<WrapLayoutAttributes>;
  }
}
