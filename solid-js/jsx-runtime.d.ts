import { JSX as SolidJSX } from "solid-js";
import "@nativescript-dom/core-types";
import { OmittedStyleObjectKeys } from "@nativescript-dom/core-types/attr-literals/index";
import "@nativescript-dom/core-types/event-maps/plain-event-maps";
import "@nativescript-dom/core-types/name-maps/pascal-cased";
import {
  AccessibilityLiveRegion,
  AccessibilityRole,
  AccessibilityState,
  ActionBar,
  ActionItems,
  Color,
  CoreTypes,
  CreateViewEventData,
  ImageSource,
  ItemEventData,
  ItemsSource,
  KeyedTemplate,
  LoadEventData,
  NavigationButton,
  TabViewItem,
  Template,
  View,
} from "@nativescript/core";
import {
  AlignContent,
  AlignItems,
  FlexDirection,
  FlexWrap,
  JustifyContent,
} from "@nativescript/core/ui/layouts/flexbox-layout";
import {
  SegmentedBarItem,
  SelectedIndexChangedEventData,
} from "@nativescript/core/ui/segmented-bar";
import {
  AccessibilityDecrementEventData,
  AccessibilityIncrementEventData,
} from "@nativescript/core/ui/slider";
import { CSSShadow } from "@nativescript/core/ui/styling/css-shadow";
import {
  FontStyleType,
  FontWeightType,
} from "@nativescript/core/ui/styling/font-interfaces";
import { LinearGradient } from "@nativescript/core/ui/styling/linear-gradient";

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

// Converts camelCase to kebab-case
type Kebab<
  T extends string,
  A extends string = ""
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
  : A;
type KebabKeys<T> = {
  [K in keyof T as K extends string ? Kebab<K> : K]: T[K];
} & T;

// Allows both kebab-case & camelCase keys in style object.
type Style = Partial<
  KebabKeys<
    Omit<
      import("@nativescript/core").Style,
      | OmittedStyleObjectKeys
      | "width"
      | "height"
      | "background"
      | "backgroundColor"
      | "color"
    >
  > & {
    width?: string | number;
    height?: string | number;
    background?: string;
    backgroundColor?: string;
    "background-color": string;
    color?: string;
  }
>;

export interface HTMLViewBaseElementAttributes<
  T extends HTMLViewBaseElement = HTMLViewBaseElement
> extends SolidJSX.DOMAttributes<T>,
    HTMLAttributes<T> {
  recycleNativeView: string | "always" | "never" | "auto";

  /**
* 
@platform android
*/
  "android:recycleNativeView": string | "always" | "never" | "auto";

  /**
* 
@platform ios
*/
  "ios:recycleNativeView": string | "always" | "never" | "auto";

  /**
   * Gets or sets the CSS class name for this view.
   */
  className: string;

  /**
* Gets or sets the CSS class name for this view.
@platform android
*/
  "android:className": string;

  /**
* Gets or sets the CSS class name for this view.
@platform ios
*/
  "ios:className": string;

  left: string | number | LengthType;

  /**
* 
@platform android
*/
  "android:left": string | number | LengthType;

  /**
* 
@platform ios
*/
  "ios:left": string | number | LengthType;

  top: string | number | LengthType;

  /**
* 
@platform android
*/
  "android:top": string | number | LengthType;

  /**
* 
@platform ios
*/
  "ios:top": string | number | LengthType;

  dock: string | "left" | "top" | "right" | "bottom";

  /**
* 
@platform android
*/
  "android:dock": string | "left" | "top" | "right" | "bottom";

  /**
* 
@platform ios
*/
  "ios:dock": string | "left" | "top" | "right" | "bottom";

  row: number | string;

  /**
* 
@platform android
*/
  "android:row": number | string;

  /**
* 
@platform ios
*/
  "ios:row": number | string;

  col: number | string;

  /**
* 
@platform android
*/
  "android:col": number | string;

  /**
* 
@platform ios
*/
  "ios:col": number | string;

  column: number | string;

  /**
* 
@platform android
*/
  "android:column": number | string;

  /**
* 
@platform ios
*/
  "ios:column": number | string;

  rowSpan: number | string;

  /**
* 
@platform android
*/
  "android:rowSpan": number | string;

  /**
* 
@platform ios
*/
  "ios:rowSpan": number | string;

  colSpan: number | string;

  /**
* 
@platform android
*/
  "android:colSpan": number | string;

  /**
* 
@platform ios
*/
  "ios:colSpan": number | string;

  columnSpan: number | string;

  /**
* 
@platform android
*/
  "android:columnSpan": number | string;

  /**
* 
@platform ios
*/
  "ios:columnSpan": number | string;

  order: number | string;

  /**
* 
@platform android
*/
  "android:order": number | string;

  /**
* 
@platform ios
*/
  "ios:order": number | string;

  flexGrow: number | string;

  /**
* 
@platform android
*/
  "android:flexGrow": number | string;

  /**
* 
@platform ios
*/
  "ios:flexGrow": number | string;

  flexShrink: number | string;

  /**
* 
@platform android
*/
  "android:flexShrink": number | string;

  /**
* 
@platform ios
*/
  "ios:flexShrink": number | string;

  flexWrapBefore: string | boolean;

  /**
* 
@platform android
*/
  "android:flexWrapBefore": string | boolean;

  /**
* 
@platform ios
*/
  "ios:flexWrapBefore": string | boolean;

  alignSelf: string | AlignSelf;

  /**
* 
@platform android
*/
  "android:alignSelf": string | AlignSelf;

  /**
* 
@platform ios
*/
  "ios:alignSelf": string | AlignSelf;

  /**
* Gets or sets if the view is reusable.
Reusable views are not automatically destroyed when removed from the View tree.
*/
  reusable: string | boolean;

  /**
* Gets or sets if the view is reusable.
Reusable views are not automatically destroyed when removed from the View tree.
@platform android
*/
  "android:reusable": string | boolean;

  /**
* Gets or sets if the view is reusable.
Reusable views are not automatically destroyed when removed from the View tree.
@platform ios
*/
  "ios:reusable": string | boolean;

  /**
   * Gets the style object associated to this view.
   */
  style: string | Style;

  /**
* Gets the style object associated to this view.
@platform android
*/
  "android:style": string | Style;

  /**
* Gets the style object associated to this view.
@platform ios
*/
  "ios:style": string | Style;
}

export interface HTMLViewElementAttributes<
  T extends HTMLViewElement = HTMLViewElement
> extends HTMLViewBaseElementAttributes<T> {
  /**
* An event that fires when the native view is rendered in the
native view hierarchy.
*/
  "on:loaded": (payload: NativeDOMEvent<T>) => void;

  /**
* An event that fires when the native view is removed from the
native view hierarchy.
*/
  "on:unloaded": (payload: NativeDOMEvent<T>) => void;

  /**
* An event that fires as soon as a view is created. At this point, the native view has not been
created yet.
*/
  "on:created": (payload: NativeDOMEvent<T>) => void;

  /**
* An event that fires when the native view is disposed. This gets called after the `unloaded`
event fires.
*/
  "on:disposeNativeView": (payload: NativeDOMEvent<T>) => void;

  /**
   * An event that fires when the position or size of a rendered native view changes.
   */
  "on:layoutChanged": (payload: NativeDOMEvent<T>) => void;

  /**
   * An event that fires when a native view is shown modally.
   */
  "on:shownModally": (payload: NativeDOMEvent<T>) => void;

  "on:showingModally": (payload: NativeDOMEvent<T>) => void;

  "on:accessibilityBlur": (payload: NativeDOMEvent<T>) => void;

  "on:accessibilityFocus": (payload: NativeDOMEvent<T>) => void;

  "on:accessibilityPerformEscape": (payload: NativeDOMEvent<T>) => void;

  "on:accessibilityFocusChanged": (payload: NativeDOMEvent<T>) => void;

  "on:tap": (payload: NativeTapGestureEvent<T>) => void;

  "on:doubleTap": (payload: NativeTapGestureEvent<T>) => void;

  "on:pan": (payload: NativePanGestureEvent<T>) => void;

  "on:swipe": (payload: NativeSwipeGestureEvent<T>) => void;

  "on:rotation": (payload: NativeRotationEvent<T>) => void;

  "on:longPress": (payload: NativeGestureEvent<T>) => void;

  "on:touch": (payload: NativeTouchEvent<T>) => void;

  "on:pinch": (payload: NativePinchGestureEvent<T>) => void;

  "on:androidBackPressed": (payload: NativeAndroidBackPressedEvent<T>) => void;

  /**
* The view's unique accessibilityIdentifier.

This is used for automated testing.
*/
  accessibilityIdentifier: string;

  /**
* The view's unique accessibilityIdentifier.

This is used for automated testing.
@platform android
*/
  "android:accessibilityIdentifier": string;

  /**
* The view's unique accessibilityIdentifier.

This is used for automated testing.
@platform ios
*/
  "ios:accessibilityIdentifier": string;

  /**
   * Short description of the element, ideally one word.
   */
  accessibilityLabel: string;

  /**
* Short description of the element, ideally one word.
@platform android
*/
  "android:accessibilityLabel": string;

  /**
* Short description of the element, ideally one word.
@platform ios
*/
  "ios:accessibilityLabel": string;

  /**
   * Current value of the element in a localized string.
   */
  accessibilityValue: string;

  /**
* Current value of the element in a localized string.
@platform android
*/
  "android:accessibilityValue": string;

  /**
* Current value of the element in a localized string.
@platform ios
*/
  "ios:accessibilityValue": string;

  /**
   * A hint describes the elements behavior. Example: 'Tap change playback speed'
   */
  accessibilityHint: string;

  /**
* A hint describes the elements behavior. Example: 'Tap change playback speed'
@platform android
*/
  "android:accessibilityHint": string;

  /**
* A hint describes the elements behavior. Example: 'Tap change playback speed'
@platform ios
*/
  "ios:accessibilityHint": string;

  testID: string;

  /**
* 
@platform android
*/
  "android:testID": string;

  /**
* 
@platform ios
*/
  "ios:testID": string;

  /**
   * Gets or sets the border color of the view.
   */
  borderColor: string | string | Color;

  /**
* Gets or sets the border color of the view.
@platform android
*/
  "android:borderColor": string | string | Color;

  /**
* Gets or sets the border color of the view.
@platform ios
*/
  "ios:borderColor": string | string | Color;

  /**
   * Gets or sets the top border color of the view.
   */
  borderTopColor: string | Color;

  /**
* Gets or sets the top border color of the view.
@platform android
*/
  "android:borderTopColor": string | Color;

  /**
* Gets or sets the top border color of the view.
@platform ios
*/
  "ios:borderTopColor": string | Color;

  /**
   * Gets or sets the right border color of the view.
   */
  borderRightColor: string | Color;

  /**
* Gets or sets the right border color of the view.
@platform android
*/
  "android:borderRightColor": string | Color;

  /**
* Gets or sets the right border color of the view.
@platform ios
*/
  "ios:borderRightColor": string | Color;

  /**
   * Gets or sets the left border color of the view.
   */
  borderLeftColor: string | Color;

  /**
* Gets or sets the left border color of the view.
@platform android
*/
  "android:borderLeftColor": string | Color;

  /**
* Gets or sets the left border color of the view.
@platform ios
*/
  "ios:borderLeftColor": string | Color;

  /**
   * Gets or sets the border width of the view.
   */
  borderWidth: string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets the border width of the view.
@platform android
*/
  "android:borderWidth": string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets the border width of the view.
@platform ios
*/
  "ios:borderWidth": string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Gets or sets the top border width of the view.
   */
  borderTopWidth: string | number | LengthType;

  /**
* Gets or sets the top border width of the view.
@platform android
*/
  "android:borderTopWidth": string | number | LengthType;

  /**
* Gets or sets the top border width of the view.
@platform ios
*/
  "ios:borderTopWidth": string | number | LengthType;

  /**
   * Gets or sets the bottom border width of the view.
   */
  borderBottomWidth: string | number | LengthType;

  /**
* Gets or sets the bottom border width of the view.
@platform android
*/
  "android:borderBottomWidth": string | number | LengthType;

  /**
* Gets or sets the bottom border width of the view.
@platform ios
*/
  "ios:borderBottomWidth": string | number | LengthType;

  /**
   * Gets or sets the left border width of the view.
   */
  borderLeftWidth: string | number | LengthType;

  /**
* Gets or sets the left border width of the view.
@platform android
*/
  "android:borderLeftWidth": string | number | LengthType;

  /**
* Gets or sets the left border width of the view.
@platform ios
*/
  "ios:borderLeftWidth": string | number | LengthType;

  /**
   * Gets or sets the top left border radius of the view.
   */
  borderTopLeftRadius: string | number | LengthType;

  /**
* Gets or sets the top left border radius of the view.
@platform android
*/
  "android:borderTopLeftRadius": string | number | LengthType;

  /**
* Gets or sets the top left border radius of the view.
@platform ios
*/
  "ios:borderTopLeftRadius": string | number | LengthType;

  /**
   * Gets or sets the top right border radius of the view.
   */
  borderTopRightRadius: string | number | LengthType;

  /**
* Gets or sets the top right border radius of the view.
@platform android
*/
  "android:borderTopRightRadius": string | number | LengthType;

  /**
* Gets or sets the top right border radius of the view.
@platform ios
*/
  "ios:borderTopRightRadius": string | number | LengthType;

  /**
   * Gets or sets the bottom right border radius of the view.
   */
  borderBottomRightRadius: string | number | LengthType;

  /**
* Gets or sets the bottom right border radius of the view.
@platform android
*/
  "android:borderBottomRightRadius": string | number | LengthType;

  /**
* Gets or sets the bottom right border radius of the view.
@platform ios
*/
  "ios:borderBottomRightRadius": string | number | LengthType;

  /**
   * Gets or sets the bottom left border radius of the view.
   */
  borderBottomLeftRadius: string | number | LengthType;

  /**
* Gets or sets the bottom left border radius of the view.
@platform android
*/
  "android:borderBottomLeftRadius": string | number | LengthType;

  /**
* Gets or sets the bottom left border radius of the view.
@platform ios
*/
  "ios:borderBottomLeftRadius": string | number | LengthType;

  /**
   * Gets or sets the color of the view.
   */
  color: string | Color;

  /**
* Gets or sets the color of the view.
@platform android
*/
  "android:color": string | Color;

  /**
* Gets or sets the color of the view.
@platform ios
*/
  "ios:color": string | Color;

  /**
   * Gets or sets the background color of the view.
   */
  backgroundColor: string | string | Color;

  /**
* Gets or sets the background color of the view.
@platform android
*/
  "android:backgroundColor": string | string | Color;

  /**
* Gets or sets the background color of the view.
@platform ios
*/
  "ios:backgroundColor": string | string | Color;

  /**
   * Gets or sets the background image of the view.
   */
  backgroundImage: string | string | LinearGradient;

  /**
* Gets or sets the background image of the view.
@platform android
*/
  "android:backgroundImage": string | string | LinearGradient;

  /**
* Gets or sets the background image of the view.
@platform ios
*/
  "ios:backgroundImage": string | string | LinearGradient;

  backgroundSize: string;

  /**
* 
@platform android
*/
  "android:backgroundSize": string;

  /**
* 
@platform ios
*/
  "ios:backgroundSize": string;

  backgroundPosition: string;

  /**
* 
@platform android
*/
  "android:backgroundPosition": string;

  /**
* 
@platform ios
*/
  "ios:backgroundPosition": string;

  backgroundRepeat: string | BackgroundRepeatType;

  /**
* 
@platform android
*/
  "android:backgroundRepeat": string | BackgroundRepeatType;

  /**
* 
@platform ios
*/
  "ios:backgroundRepeat": string | BackgroundRepeatType;

  /**
   * Gets or sets the box shadow of the view.
   */
  boxShadow: string | string | CSSShadow;

  /**
* Gets or sets the box shadow of the view.
@platform android
*/
  "android:boxShadow": string | string | CSSShadow;

  /**
* Gets or sets the box shadow of the view.
@platform ios
*/
  "ios:boxShadow": string | string | CSSShadow;

  /**
   * Gets or sets the minimum width the view may grow to.
   */
  minWidth: string | number | LengthType;

  /**
* Gets or sets the minimum width the view may grow to.
@platform android
*/
  "android:minWidth": string | number | LengthType;

  /**
* Gets or sets the minimum width the view may grow to.
@platform ios
*/
  "ios:minWidth": string | number | LengthType;

  /**
   * Gets or sets the minimum height the view may grow to.
   */
  minHeight: string | number | LengthType;

  /**
* Gets or sets the minimum height the view may grow to.
@platform android
*/
  "android:minHeight": string | number | LengthType;

  /**
* Gets or sets the minimum height the view may grow to.
@platform ios
*/
  "ios:minHeight": string | number | LengthType;

  /**
   * Gets or sets the desired width of the view.
   */
  width: string | number | PercentLengthType;

  /**
* Gets or sets the desired width of the view.
@platform android
*/
  "android:width": string | number | PercentLengthType;

  /**
* Gets or sets the desired width of the view.
@platform ios
*/
  "ios:width": string | number | PercentLengthType;

  /**
   * Gets or sets the desired height of the view.
   */
  height: string | number | PercentLengthType;

  /**
* Gets or sets the desired height of the view.
@platform android
*/
  "android:height": string | number | PercentLengthType;

  /**
* Gets or sets the desired height of the view.
@platform ios
*/
  "ios:height": string | number | PercentLengthType;

  /**
   * Gets or sets margin style property.
   */
  margin: string | number | LengthDipUnit | LengthPxUnit | LengthPercentUnit;

  /**
* Gets or sets margin style property.
@platform android
*/
  "android:margin":
    | string
    | number
    | LengthDipUnit
    | LengthPxUnit
    | LengthPercentUnit;

  /**
* Gets or sets margin style property.
@platform ios
*/
  "ios:margin":
    | string
    | number
    | LengthDipUnit
    | LengthPxUnit
    | LengthPercentUnit;

  /**
   * Specifies extra space on the left side of this view.
   */
  marginLeft: string | number | PercentLengthType;

  /**
* Specifies extra space on the left side of this view.
@platform android
*/
  "android:marginLeft": string | number | PercentLengthType;

  /**
* Specifies extra space on the left side of this view.
@platform ios
*/
  "ios:marginLeft": string | number | PercentLengthType;

  /**
   * Specifies extra space on the top side of this view.
   */
  marginTop: string | number | PercentLengthType;

  /**
* Specifies extra space on the top side of this view.
@platform android
*/
  "android:marginTop": string | number | PercentLengthType;

  /**
* Specifies extra space on the top side of this view.
@platform ios
*/
  "ios:marginTop": string | number | PercentLengthType;

  /**
   * Specifies extra space on the right side of this view.
   */
  marginRight: string | number | PercentLengthType;

  /**
* Specifies extra space on the right side of this view.
@platform android
*/
  "android:marginRight": string | number | PercentLengthType;

  /**
* Specifies extra space on the right side of this view.
@platform ios
*/
  "ios:marginRight": string | number | PercentLengthType;

  /**
   * Specifies extra space on the bottom side of this view.
   */
  marginBottom: string | number | PercentLengthType;

  /**
* Specifies extra space on the bottom side of this view.
@platform android
*/
  "android:marginBottom": string | number | PercentLengthType;

  /**
* Specifies extra space on the bottom side of this view.
@platform ios
*/
  "ios:marginBottom": string | number | PercentLengthType;

  /**
   * Gets or sets the alignment of this view within its parent along the Horizontal axis.
   */
  horizontalAlignment: string | HorizontalAlignmentType;

  /**
* Gets or sets the alignment of this view within its parent along the Horizontal axis.
@platform android
*/
  "android:horizontalAlignment": string | HorizontalAlignmentType;

  /**
* Gets or sets the alignment of this view within its parent along the Horizontal axis.
@platform ios
*/
  "ios:horizontalAlignment": string | HorizontalAlignmentType;

  /**
   * Gets or sets the alignment of this view within its parent along the Vertical axis.
   */
  verticalAlignment: string | VerticalAlignmentType;

  /**
* Gets or sets the alignment of this view within its parent along the Vertical axis.
@platform android
*/
  "android:verticalAlignment": string | VerticalAlignmentType;

  /**
* Gets or sets the alignment of this view within its parent along the Vertical axis.
@platform ios
*/
  "ios:verticalAlignment": string | VerticalAlignmentType;

  /**
   * Gets or sets the visibility of the view.
   */
  visibility: string | VisibilityType;

  /**
* Gets or sets the visibility of the view.
@platform android
*/
  "android:visibility": string | VisibilityType;

  /**
* Gets or sets the visibility of the view.
@platform ios
*/
  "ios:visibility": string | VisibilityType;

  /**
   * Gets or sets the opacity style property.
   */
  opacity: number | string;

  /**
* Gets or sets the opacity style property.
@platform android
*/
  "android:opacity": number | string;

  /**
* Gets or sets the opacity style property.
@platform ios
*/
  "ios:opacity": number | string;

  /**
   * Gets or sets the rotate affine transform of the view along the Z axis.
   */
  rotate: number | string;

  /**
* Gets or sets the rotate affine transform of the view along the Z axis.
@platform android
*/
  "android:rotate": number | string;

  /**
* Gets or sets the rotate affine transform of the view along the Z axis.
@platform ios
*/
  "ios:rotate": number | string;

  /**
   * Gets or sets the rotate affine transform of the view along the X axis.
   */
  rotateX: number | string;

  /**
* Gets or sets the rotate affine transform of the view along the X axis.
@platform android
*/
  "android:rotateX": number | string;

  /**
* Gets or sets the rotate affine transform of the view along the X axis.
@platform ios
*/
  "ios:rotateX": number | string;

  /**
   * Gets or sets the rotate affine transform of the view along the Y axis.
   */
  rotateY: number | string;

  /**
* Gets or sets the rotate affine transform of the view along the Y axis.
@platform android
*/
  "android:rotateY": number | string;

  /**
* Gets or sets the rotate affine transform of the view along the Y axis.
@platform ios
*/
  "ios:rotateY": number | string;

  /**
* Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.
*/
  perspective: number | string;

  /**
* Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.
@platform android
*/
  "android:perspective": number | string;

  /**
* Gets or sets the distance of the camera form the view perspective.
Usually needed when rotating the view over the X or Y axis.
@platform ios
*/
  "ios:perspective": number | string;

  textTransform: string | TextTransformType;

  /**
* 
@platform android
*/
  "android:textTransform": string | TextTransformType;

  /**
* 
@platform ios
*/
  "ios:textTransform": string | TextTransformType;

  /**
   * Gets or sets the translateX affine transform of the view in device independent pixels.
   */
  translateX: number | string;

  /**
* Gets or sets the translateX affine transform of the view in device independent pixels.
@platform android
*/
  "android:translateX": number | string;

  /**
* Gets or sets the translateX affine transform of the view in device independent pixels.
@platform ios
*/
  "ios:translateX": number | string;

  /**
   * Gets or sets the translateY affine transform of the view in device independent pixels.
   */
  translateY: number | string;

  /**
* Gets or sets the translateY affine transform of the view in device independent pixels.
@platform android
*/
  "android:translateY": number | string;

  /**
* Gets or sets the translateY affine transform of the view in device independent pixels.
@platform ios
*/
  "ios:translateY": number | string;

  /**
   * Gets or sets the scaleX affine transform of the view.
   */
  scaleX: number | string;

  /**
* Gets or sets the scaleX affine transform of the view.
@platform android
*/
  "android:scaleX": number | string;

  /**
* Gets or sets the scaleX affine transform of the view.
@platform ios
*/
  "ios:scaleX": number | string;

  /**
   * Gets or sets the scaleY affine transform of the view.
   */
  scaleY: number | string;

  /**
* Gets or sets the scaleY affine transform of the view.
@platform android
*/
  "android:scaleY": number | string;

  /**
* Gets or sets the scaleY affine transform of the view.
@platform ios
*/
  "ios:scaleY": number | string;

  /**
   * If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
   */
  accessible: string | boolean;

  /**
* If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
@platform android
*/
  "android:accessible": string | boolean;

  /**
* If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
@platform ios
*/
  "ios:accessible": string | boolean;

  /**
   * Hide the view and its children from the a11y service
   */
  accessibilityHidden: string | boolean;

  /**
* Hide the view and its children from the a11y service
@platform android
*/
  "android:accessibilityHidden": string | boolean;

  /**
* Hide the view and its children from the a11y service
@platform ios
*/
  "ios:accessibilityHidden": string | boolean;

  /**
   * Which role should this view be treated by the a11y service?
   */
  accessibilityRole: string | AccessibilityRole;

  /**
* Which role should this view be treated by the a11y service?
@platform android
*/
  "android:accessibilityRole": string | AccessibilityRole;

  /**
* Which role should this view be treated by the a11y service?
@platform ios
*/
  "ios:accessibilityRole": string | AccessibilityRole;

  /**
   * Which state should this view be treated as by the a11y service?
   */
  accessibilityState: string | AccessibilityState;

  /**
* Which state should this view be treated as by the a11y service?
@platform android
*/
  "android:accessibilityState": string | AccessibilityState;

  /**
* Which state should this view be treated as by the a11y service?
@platform ios
*/
  "ios:accessibilityState": string | AccessibilityState;

  accessibilityLiveRegion: string | AccessibilityLiveRegion;

  /**
* 
@platform android
*/
  "android:accessibilityLiveRegion": string | AccessibilityLiveRegion;

  /**
* 
@platform ios
*/
  "ios:accessibilityLiveRegion": string | AccessibilityLiveRegion;

  /**
* Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.
*/
  accessibilityLanguage: string;

  /**
* Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.
@platform android
*/
  "android:accessibilityLanguage": string;

  /**
* Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.
@platform ios
*/
  "ios:accessibilityLanguage": string;

  /**
   * This view starts a media session. Equivalent to trait = startsMedia
   */
  accessibilityMediaSession: string | boolean;

  /**
* This view starts a media session. Equivalent to trait = startsMedia
@platform android
*/
  "android:accessibilityMediaSession": string | boolean;

  /**
* This view starts a media session. Equivalent to trait = startsMedia
@platform ios
*/
  "ios:accessibilityMediaSession": string | boolean;

  automationText: string;

  /**
* 
@platform android
*/
  "android:automationText": string;

  /**
* 
@platform ios
*/
  "ios:automationText": string;

  /**
   * Gets or sets the elevation of the android view.
   */
  androidElevation: number | string;

  /**
* Gets or sets the elevation of the android view.
@platform android
*/
  "android:androidElevation": number | string;

  /**
* Gets or sets the elevation of the android view.
@platform ios
*/
  "ios:androidElevation": number | string;

  /**
   * Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
   */
  originX: number | string;

  /**
* Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
@platform android
*/
  "android:originX": number | string;

  /**
* Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
@platform ios
*/
  "ios:originX": number | string;

  /**
   * Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
   */
  originY: number | string;

  /**
* Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
@platform android
*/
  "android:originY": number | string;

  /**
* Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
@platform ios
*/
  "ios:originY": number | string;

  /**
   * Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
   */
  isUserInteractionEnabled: string | boolean;

  /**
* Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
@platform android
*/
  "android:isUserInteractionEnabled": string | boolean;

  /**
* Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
@platform ios
*/
  "ios:isUserInteractionEnabled": string | boolean;

  /**
   * Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: false
   */
  iosOverflowSafeArea: string | boolean;

  /**
* Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: false
@platform android
*/
  "android:iosOverflowSafeArea": string | boolean;

  /**
* Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: false
@platform ios
*/
  "ios:iosOverflowSafeArea": string | boolean;

  /**
   * Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true
   */
  iosOverflowSafeAreaEnabled: string | boolean;

  /**
* Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true
@platform android
*/
  "android:iosOverflowSafeAreaEnabled": string | boolean;

  /**
* Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true
@platform ios
*/
  "ios:iosOverflowSafeAreaEnabled": string | boolean;

  /**
   * Gets or sets the shared transition tag for animated view transitions
   */
  sharedTransitionTag: string;

  /**
* Gets or sets the shared transition tag for animated view transitions
@platform android
*/
  "android:sharedTransitionTag": string;

  /**
* Gets or sets the shared transition tag for animated view transitions
@platform ios
*/
  "ios:sharedTransitionTag": string;

  /**
   * Opt out of shared transition under different binding conditions
   */
  sharedTransitionIgnore: string | boolean;

  /**
* Opt out of shared transition under different binding conditions
@platform android
*/
  "android:sharedTransitionIgnore": string | boolean;

  /**
* Opt out of shared transition under different binding conditions
@platform ios
*/
  "ios:sharedTransitionIgnore": string | boolean;
}

export interface HTMLWebViewElementAttributes<
  T extends HTMLWebViewElement = HTMLWebViewElement
> extends HTMLViewElementAttributes<T> {
  "on:loadStarted": (
    payload: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>
  ) => void;

  "on:loadFinished": (
    payload: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>
  ) => void;

  /**
   * Gets or sets the url, local file path or HTML string.
   */
  src: string;

  /**
* Gets or sets the url, local file path or HTML string.
@platform android
*/
  "android:src": string;

  /**
* Gets or sets the url, local file path or HTML string.
@platform ios
*/
  "ios:src": string;

  /**
   * Gets a value indicating whether the WebView can navigate forward.
   */
  canGoForward: string | boolean;

  /**
* Gets a value indicating whether the WebView can navigate forward.
@platform android
*/
  "android:canGoForward": string | boolean;

  /**
* Gets a value indicating whether the WebView can navigate forward.
@platform ios
*/
  "ios:canGoForward": string | boolean;

  /**
   * Disable scrolling in the WebView
   */
  disableZoom: string | boolean;

  /**
* Disable scrolling in the WebView
@platform android
*/
  "android:disableZoom": string | boolean;

  /**
* Disable scrolling in the WebView
@platform ios
*/
  "ios:disableZoom": string | boolean;
}

export interface HTMLTimePickerElementAttributes<
  T extends HTMLTimePickerElement = HTMLTimePickerElement
> extends HTMLViewElementAttributes<T> {
  "on:timeChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLTimePickerElement> | undefined
  ) => void;

  /**
   * Gets or sets the time hour.
   */
  hour: number | string;

  /**
* Gets or sets the time hour.
@platform android
*/
  "android:hour": number | string;

  /**
* Gets or sets the time hour.
@platform ios
*/
  "ios:hour": number | string;

  /**
   * Gets or sets the time minute.
   */
  minute: number | string;

  /**
* Gets or sets the time minute.
@platform android
*/
  "android:minute": number | string;

  /**
* Gets or sets the time minute.
@platform ios
*/
  "ios:minute": number | string;

  /**
   * Gets or sets the time.
   */
  time: string | Date;

  /**
* Gets or sets the time.
@platform android
*/
  "android:time": string | Date;

  /**
* Gets or sets the time.
@platform ios
*/
  "ios:time": string | Date;

  /**
   * Gets or sets the max time hour.
   */
  maxHour: number | string;

  /**
* Gets or sets the max time hour.
@platform android
*/
  "android:maxHour": number | string;

  /**
* Gets or sets the max time hour.
@platform ios
*/
  "ios:maxHour": number | string;

  /**
   * Gets or sets the max time minute.
   */
  maxMinute: number | string;

  /**
* Gets or sets the max time minute.
@platform android
*/
  "android:maxMinute": number | string;

  /**
* Gets or sets the max time minute.
@platform ios
*/
  "ios:maxMinute": number | string;

  /**
   * Gets or sets the minute interval.
   */
  minuteInterval: number | string;

  /**
* Gets or sets the minute interval.
@platform android
*/
  "android:minuteInterval": number | string;

  /**
* Gets or sets the minute interval.
@platform ios
*/
  "ios:minuteInterval": number | string;

  /**
* Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
*/
  iosPreferredDatePickerStyle: number | string;

  /**
* Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
@platform android
*/
  "android:iosPreferredDatePickerStyle": number | string;

  /**
* Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
@platform ios
*/
  "ios:iosPreferredDatePickerStyle": number | string;
}

export interface HTMLTextViewElementAttributes<
  T extends HTMLTextViewElement = HTMLTextViewElement
> extends HTMLViewElementAttributes<T> {
  "on:focus": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  "on:returnPress": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  "on:blur": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  "on:textChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  /**
   * Gets or sets the text.
   */
  text: string;

  /**
* Gets or sets the text.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText: string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform android
*/
  "android:formattedText": string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform ios
*/
  "ios:formattedText": string | FormattedString;

  /**
   * Gets or sets font-size style property.
   */
  fontSize: number | string;

  /**
* Gets or sets font-size style property.
@platform android
*/
  "android:fontSize": number | string;

  /**
* Gets or sets font-size style property.
@platform ios
*/
  "ios:fontSize": number | string;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing: number | string;

  /**
* Gets or sets letterSpace style property.
@platform android
*/
  "android:letterSpacing": number | string;

  /**
* Gets or sets letterSpace style property.
@platform ios
*/
  "ios:letterSpacing": number | string;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight: number | string;

  /**
* Gets or sets lineHeight style property.
@platform android
*/
  "android:lineHeight": number | string;

  /**
* Gets or sets lineHeight style property.
@platform ios
*/
  "ios:lineHeight": number | string;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment: string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform android
*/
  "android:textAlignment": string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform ios
*/
  "ios:textAlignment": string | TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration: string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform android
*/
  "android:textDecoration": string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform ios
*/
  "ios:textDecoration": string | TextDecorationType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow: string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform android
*/
  "android:textShadow": string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform ios
*/
  "ios:textShadow": string | CSSShadow;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace: string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform android
*/
  "android:whiteSpace": string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform ios
*/
  "ios:whiteSpace": string | WhiteSpaceType;

  /**
   * Limits input to a certain number of lines.
   */
  maxLines: number | string;

  /**
* Limits input to a certain number of lines.
@platform android
*/
  "android:maxLines": number | string;

  /**
* Limits input to a certain number of lines.
@platform ios
*/
  "ios:maxLines": number | string;

  /**
   * Gets or sets padding style property.
   */
  padding: string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform android
*/
  "android:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform ios
*/
  "ios:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;
}

export interface HTMLTextFieldElementAttributes<
  T extends HTMLTextFieldElement = HTMLTextFieldElement
> extends HTMLViewElementAttributes<T> {
  "on:focus": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  "on:returnPress": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  "on:blur": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  "on:textChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   * Gets or sets if a text field is for password entry.
   */
  secure: string | boolean;

  /**
* Gets or sets if a text field is for password entry.
@platform android
*/
  "android:secure": string | boolean;

  /**
* Gets or sets if a text field is for password entry.
@platform ios
*/
  "ios:secure": string | boolean;

  /**
   * Gets or sets if a text field should dismiss on return.
   */
  closeOnReturn: string | boolean;

  /**
* Gets or sets if a text field should dismiss on return.
@platform android
*/
  "android:closeOnReturn": string | boolean;

  /**
* Gets or sets if a text field should dismiss on return.
@platform ios
*/
  "ios:closeOnReturn": string | boolean;

  /**
   * iOS only (to avoid 12+ auto suggested strong password handling)
   */
  secureWithoutAutofill: string | boolean;

  /**
* iOS only (to avoid 12+ auto suggested strong password handling)
@platform android
*/
  "android:secureWithoutAutofill": string | boolean;

  /**
* iOS only (to avoid 12+ auto suggested strong password handling)
@platform ios
*/
  "ios:secureWithoutAutofill": string | boolean;

  /**
   * Gets or sets the text.
   */
  text: string;

  /**
* Gets or sets the text.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText: string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform android
*/
  "android:formattedText": string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform ios
*/
  "ios:formattedText": string | FormattedString;

  /**
   * Gets or sets font-size style property.
   */
  fontSize: number | string;

  /**
* Gets or sets font-size style property.
@platform android
*/
  "android:fontSize": number | string;

  /**
* Gets or sets font-size style property.
@platform ios
*/
  "ios:fontSize": number | string;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing: number | string;

  /**
* Gets or sets letterSpace style property.
@platform android
*/
  "android:letterSpacing": number | string;

  /**
* Gets or sets letterSpace style property.
@platform ios
*/
  "ios:letterSpacing": number | string;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight: number | string;

  /**
* Gets or sets lineHeight style property.
@platform android
*/
  "android:lineHeight": number | string;

  /**
* Gets or sets lineHeight style property.
@platform ios
*/
  "ios:lineHeight": number | string;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment: string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform android
*/
  "android:textAlignment": string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform ios
*/
  "ios:textAlignment": string | TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration: string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform android
*/
  "android:textDecoration": string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform ios
*/
  "ios:textDecoration": string | TextDecorationType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow: string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform android
*/
  "android:textShadow": string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform ios
*/
  "ios:textShadow": string | CSSShadow;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace: string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform android
*/
  "android:whiteSpace": string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform ios
*/
  "ios:whiteSpace": string | WhiteSpaceType;

  /**
   * Gets or sets padding style property.
   */
  padding: string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform android
*/
  "android:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform ios
*/
  "ios:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;
}

export interface HTMLSpanElementAttributes<
  T extends HTMLSpanElement = HTMLSpanElement
> extends HTMLViewElementAttributes<T> {
  "on:linkTap": (payload: NativeDOMEvent<HTMLSpanElement>) => void;

  /**
   * Gets or sets the font family of the span.
   */
  fontFamily: string;

  /**
* Gets or sets the font family of the span.
@platform android
*/
  "android:fontFamily": string;

  /**
* Gets or sets the font family of the span.
@platform ios
*/
  "ios:fontFamily": string;

  /**
   * Gets or sets the font size of the span.
   */
  fontSize: number | string;

  /**
* Gets or sets the font size of the span.
@platform android
*/
  "android:fontSize": number | string;

  /**
* Gets or sets the font size of the span.
@platform ios
*/
  "ios:fontSize": number | string;

  /**
   * Gets or sets the font style of the span.
   */
  fontStyle: string | FontStyleType;

  /**
* Gets or sets the font style of the span.
@platform android
*/
  "android:fontStyle": string | FontStyleType;

  /**
* Gets or sets the font style of the span.
@platform ios
*/
  "ios:fontStyle": string | FontStyleType;

  /**
   * Gets or sets the font weight of the span.
   */
  fontWeight: string | FontWeightType;

  /**
* Gets or sets the font weight of the span.
@platform android
*/
  "android:fontWeight": string | FontWeightType;

  /**
* Gets or sets the font weight of the span.
@platform ios
*/
  "ios:fontWeight": string | FontWeightType;

  /**
   * Gets or sets text decorations for the span.
   */
  textDecoration: string | TextDecorationType;

  /**
* Gets or sets text decorations for the span.
@platform android
*/
  "android:textDecoration": string | TextDecorationType;

  /**
* Gets or sets text decorations for the span.
@platform ios
*/
  "ios:textDecoration": string | TextDecorationType;

  /**
   * Gets or sets the text for the span.
   */
  text: string;

  /**
* Gets or sets the text for the span.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text for the span.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets if the span is tappable or not.
   */
  tappable: string | boolean;

  /**
* Gets if the span is tappable or not.
@platform android
*/
  "android:tappable": string | boolean;

  /**
* Gets if the span is tappable or not.
@platform ios
*/
  "ios:tappable": string | boolean;
}

export interface HTMLFormattedStringElementAttributes<
  T extends HTMLFormattedStringElement = HTMLFormattedStringElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the font family which will be used for all spans that doesn't have a specific value.
   */
  fontFamily: string;

  /**
* Gets or sets the font family which will be used for all spans that doesn't have a specific value.
@platform android
*/
  "android:fontFamily": string;

  /**
* Gets or sets the font family which will be used for all spans that doesn't have a specific value.
@platform ios
*/
  "ios:fontFamily": string;

  /**
   * Gets or sets the font size which will be used for all spans that doesn't have a specific value.
   */
  fontSize: number | string;

  /**
* Gets or sets the font size which will be used for all spans that doesn't have a specific value.
@platform android
*/
  "android:fontSize": number | string;

  /**
* Gets or sets the font size which will be used for all spans that doesn't have a specific value.
@platform ios
*/
  "ios:fontSize": number | string;

  /**
   * Gets or sets the font style which will be used for all spans that doesn't have a specific value.
   */
  fontStyle: string | FontStyleType;

  /**
* Gets or sets the font style which will be used for all spans that doesn't have a specific value.
@platform android
*/
  "android:fontStyle": string | FontStyleType;

  /**
* Gets or sets the font style which will be used for all spans that doesn't have a specific value.
@platform ios
*/
  "ios:fontStyle": string | FontStyleType;

  /**
   * Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
   */
  fontWeight: string | FontWeightType;

  /**
* Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
@platform android
*/
  "android:fontWeight": string | FontWeightType;

  /**
* Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
@platform ios
*/
  "ios:fontWeight": string | FontWeightType;

  /**
   * Gets or sets text decorations which will be used for all spans that doesn't have a specific value.
   */
  textDecoration: string | TextDecorationType;

  /**
* Gets or sets text decorations which will be used for all spans that doesn't have a specific value.
@platform android
*/
  "android:textDecoration": string | TextDecorationType;

  /**
* Gets or sets text decorations which will be used for all spans that doesn't have a specific value.
@platform ios
*/
  "ios:textDecoration": string | TextDecorationType;
}

export interface HTMLTabViewItemElementAttributes<
  T extends HTMLTabViewItemElement = HTMLTabViewItemElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the title of the TabViewItem.
   */
  title: string;

  /**
* Gets or sets the title of the TabViewItem.
@platform android
*/
  "android:title": string;

  /**
* Gets or sets the title of the TabViewItem.
@platform ios
*/
  "ios:title": string;

  /**
   * Gets or sets the icon source of the TabViewItem. This could either be a a file name or resource id.
   */
  iconSource: string;

  /**
* Gets or sets the icon source of the TabViewItem. This could either be a a file name or resource id.
@platform android
*/
  "android:iconSource": string;

  /**
* Gets or sets the icon source of the TabViewItem. This could either be a a file name or resource id.
@platform ios
*/
  "ios:iconSource": string;
}

export interface HTMLTabViewElementAttributes<
  T extends HTMLTabViewElement = HTMLTabViewElement
> extends HTMLViewElementAttributes<T> {
  "on:selectedIndexChanged": (
    payload: NativeDOMEventWithData<
      HTMLTabViewElement,
      SelectedIndexChangedEventData
    >
  ) => void;

  /**
   * Gets or sets the items of the TabView.
   */
  items: TabViewItem[];

  /**
* Gets or sets the items of the TabView.
@platform android
*/
  "android:items": TabViewItem[];

  /**
* Gets or sets the items of the TabView.
@platform ios
*/
  "ios:items": TabViewItem[];

  /**
   * Gets or sets the selectedIndex of the TabView.
   */
  selectedIndex: number | string;

  /**
* Gets or sets the selectedIndex of the TabView.
@platform android
*/
  "android:selectedIndex": number | string;

  /**
* Gets or sets the selectedIndex of the TabView.
@platform ios
*/
  "ios:selectedIndex": number | string;

  /**
   * Gets or sets the font size of the tabs titles.
   */
  tabTextFontSize: number | string;

  /**
* Gets or sets the font size of the tabs titles.
@platform android
*/
  "android:tabTextFontSize": number | string;

  /**
* Gets or sets the font size of the tabs titles.
@platform ios
*/
  "ios:tabTextFontSize": number | string;

  /**
   * Gets or sets the text color of the tabs titles.
   */
  tabTextColor: string | Color;

  /**
* Gets or sets the text color of the tabs titles.
@platform android
*/
  "android:tabTextColor": string | Color;

  /**
* Gets or sets the text color of the tabs titles.
@platform ios
*/
  "ios:tabTextColor": string | Color;

  /**
   * Gets or sets the background color of the tabs.
   */
  tabBackgroundColor: string | Color;

  /**
* Gets or sets the background color of the tabs.
@platform android
*/
  "android:tabBackgroundColor": string | Color;

  /**
* Gets or sets the background color of the tabs.
@platform ios
*/
  "ios:tabBackgroundColor": string | Color;

  /**
   * Gets or sets the text color of the selected tab title.
   */
  selectedTabTextColor: string | Color;

  /**
* Gets or sets the text color of the selected tab title.
@platform android
*/
  "android:selectedTabTextColor": string | Color;

  /**
* Gets or sets the text color of the selected tab title.
@platform ios
*/
  "ios:selectedTabTextColor": string | Color;

  /**
   * Gets or sets the color of the horizontal line drawn below the currently selected tab on Android.
   */
  androidSelectedTabHighlightColor: string | Color;

  /**
* Gets or sets the color of the horizontal line drawn below the currently selected tab on Android.
@platform android
*/
  "android:androidSelectedTabHighlightColor": string | Color;

  /**
* Gets or sets the color of the horizontal line drawn below the currently selected tab on Android.
@platform ios
*/
  "ios:androidSelectedTabHighlightColor": string | Color;

  /**
* Gets or set the UIImageRenderingMode of the tab icons in iOS.  Defaults to "automatic"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
*/
  iosIconRenderingMode:
    | string
    | "automatic"
    | "alwaysOriginal"
    | "alwaysTemplate";

  /**
* Gets or set the UIImageRenderingMode of the tab icons in iOS.  Defaults to "automatic"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
@platform android
*/
  "android:iosIconRenderingMode":
    | string
    | "automatic"
    | "alwaysOriginal"
    | "alwaysTemplate";

  /**
* Gets or set the UIImageRenderingMode of the tab icons in iOS.  Defaults to "automatic"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
@platform ios
*/
  "ios:iosIconRenderingMode":
    | string
    | "automatic"
    | "alwaysOriginal"
    | "alwaysTemplate";

  /**
* Gets or sets the number of tabs that should be retained to either side of the current tab in the view hierarchy in an idle state.
Tabs beyond this limit will be recreated from the TabView when needed.
*/
  androidOffscreenTabLimit: number | string;

  /**
* Gets or sets the number of tabs that should be retained to either side of the current tab in the view hierarchy in an idle state.
Tabs beyond this limit will be recreated from the TabView when needed.
@platform android
*/
  "android:androidOffscreenTabLimit": number | string;

  /**
* Gets or sets the number of tabs that should be retained to either side of the current tab in the view hierarchy in an idle state.
Tabs beyond this limit will be recreated from the TabView when needed.
@platform ios
*/
  "ios:androidOffscreenTabLimit": number | string;

  /**
* Gets or set the tabs vertical position.
Valid values are:
 - top
 - bottom
*/
  androidTabsPosition: string | "top" | "bottom";

  /**
* Gets or set the tabs vertical position.
Valid values are:
 - top
 - bottom
@platform android
*/
  "android:androidTabsPosition": string | "top" | "bottom";

  /**
* Gets or set the tabs vertical position.
Valid values are:
 - top
 - bottom
@platform ios
*/
  "ios:androidTabsPosition": string | "top" | "bottom";

  /**
   * Gets or sets a value indicating whether swipe gesture is enabled for Android.
   */
  androidSwipeEnabled: string | boolean;

  /**
* Gets or sets a value indicating whether swipe gesture is enabled for Android.
@platform android
*/
  "android:androidSwipeEnabled": string | boolean;

  /**
* Gets or sets a value indicating whether swipe gesture is enabled for Android.
@platform ios
*/
  "ios:androidSwipeEnabled": string | boolean;
}

export interface HTMLSwitchElementAttributes<
  T extends HTMLSwitchElement = HTMLSwitchElement
> extends HTMLViewElementAttributes<T> {
  "on:checkedChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLSwitchElement>
  ) => void;

  /**
   * Gets or sets if a switch is checked or not.
   */
  checked: string | boolean;

  /**
* Gets or sets if a switch is checked or not.
@platform android
*/
  "android:checked": string | boolean;

  /**
* Gets or sets if a switch is checked or not.
@platform ios
*/
  "ios:checked": string | boolean;

  /**
   * Gets or sets the background color of the Switch when it is turned off.
   */
  offBackgroundColor: string | Color;

  /**
* Gets or sets the background color of the Switch when it is turned off.
@platform android
*/
  "android:offBackgroundColor": string | Color;

  /**
* Gets or sets the background color of the Switch when it is turned off.
@platform ios
*/
  "ios:offBackgroundColor": string | Color;
}

export interface HTMLSegmentedBarItemElementAttributes<
  T extends HTMLSegmentedBarItemElement = HTMLSegmentedBarItemElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the title of the SegmentedBarItem.
   */
  title: string;

  /**
* Gets or sets the title of the SegmentedBarItem.
@platform android
*/
  "android:title": string;

  /**
* Gets or sets the title of the SegmentedBarItem.
@platform ios
*/
  "ios:title": string;
}

export interface HTMLSegmentedBarElementAttributes<
  T extends HTMLSegmentedBarElement = HTMLSegmentedBarElement
> extends HTMLViewElementAttributes<T> {
  "on:selectedIndexChanged": (
    payload: NativeDOMEventWithData<
      HTMLSegmentedBarElement,
      SelectedIndexChangedEventData
    >
  ) => void;

  /**
   * Gets or sets the selected index of the SegmentedBar component.
   */
  selectedIndex: number | string;

  /**
* Gets or sets the selected index of the SegmentedBar component.
@platform android
*/
  "android:selectedIndex": number | string;

  /**
* Gets or sets the selected index of the SegmentedBar component.
@platform ios
*/
  "ios:selectedIndex": number | string;

  /**
   * Gets or sets the selected background color of the SegmentedBar component.
   */
  selectedBackgroundColor: string | Color;

  /**
* Gets or sets the selected background color of the SegmentedBar component.
@platform android
*/
  "android:selectedBackgroundColor": string | Color;

  /**
* Gets or sets the selected background color of the SegmentedBar component.
@platform ios
*/
  "ios:selectedBackgroundColor": string | Color;

  /**
   * Gets or sets the items of the SegmentedBar.
   */
  items: SegmentedBarItem[];

  /**
* Gets or sets the items of the SegmentedBar.
@platform android
*/
  "android:items": SegmentedBarItem[];

  /**
* Gets or sets the items of the SegmentedBar.
@platform ios
*/
  "ios:items": SegmentedBarItem[];
}

export interface HTMLSliderElementAttributes<
  T extends HTMLSliderElement = HTMLSliderElement
> extends HTMLViewElementAttributes<T> {
  "on:accessibilityDecrement": (
    payload: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityIncrementEventData
    >
  ) => void;

  "on:accessibilityIncrement": (
    payload: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityDecrementEventData
    >
  ) => void;

  /**
   * Gets or sets a slider current value. The default value is 0.
   */
  value: number | string;

  /**
* Gets or sets a slider current value. The default value is 0.
@platform android
*/
  "android:value": number | string;

  /**
* Gets or sets a slider current value. The default value is 0.
@platform ios
*/
  "ios:value": number | string;

  /**
   * Gets or sets a slider min value. The default value is 0.
   */
  minValue: number | string;

  /**
* Gets or sets a slider min value. The default value is 0.
@platform android
*/
  "android:minValue": number | string;

  /**
* Gets or sets a slider min value. The default value is 0.
@platform ios
*/
  "ios:minValue": number | string;

  /**
   * Gets or sets a slider max value. The default value is 100.
   */
  maxValue: number | string;

  /**
* Gets or sets a slider max value. The default value is 100.
@platform android
*/
  "android:maxValue": number | string;

  /**
* Gets or sets a slider max value. The default value is 100.
@platform ios
*/
  "ios:maxValue": number | string;

  /**
   * Increase/Decrease step size for iOS Increment-/Decrement events
   */
  accessibilityStep: number | string;

  /**
* Increase/Decrease step size for iOS Increment-/Decrement events
@platform android
*/
  "android:accessibilityStep": number | string;

  /**
* Increase/Decrease step size for iOS Increment-/Decrement events
@platform ios
*/
  "ios:accessibilityStep": number | string;
}

export interface HTMLSearchBarElementAttributes<
  T extends HTMLSearchBarElement = HTMLSearchBarElement
> extends HTMLViewElementAttributes<T> {
  "on:submit": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  "on:clear": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  "on:close": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  "on:textChange": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   * Gets or sets a search bar text.
   */
  text: string;

  /**
* Gets or sets a search bar text.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets a search bar text.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets the text of the search bar text field hint/placeholder.
   */
  hint: string;

  /**
* Gets or sets the text of the search bar text field hint/placeholder.
@platform android
*/
  "android:hint": string;

  /**
* Gets or sets the text of the search bar text field hint/placeholder.
@platform ios
*/
  "ios:hint": string;

  /**
   * Gets or sets the TextField background color of the SearchBar component.
   */
  textFieldBackgroundColor: string | Color;

  /**
* Gets or sets the TextField background color of the SearchBar component.
@platform android
*/
  "android:textFieldBackgroundColor": string | Color;

  /**
* Gets or sets the TextField background color of the SearchBar component.
@platform ios
*/
  "ios:textFieldBackgroundColor": string | Color;

  /**
   * Gets or sets the TextField Hint color of the SearchBar component.
   */
  textFieldHintColor: string | Color;

  /**
* Gets or sets the TextField Hint color of the SearchBar component.
@platform android
*/
  "android:textFieldHintColor": string | Color;

  /**
* Gets or sets the TextField Hint color of the SearchBar component.
@platform ios
*/
  "ios:textFieldHintColor": string | Color;
}

export interface HTMLRepeaterElementAttributes<
  T extends HTMLRepeaterElement = HTMLRepeaterElement
> extends HTMLViewElementAttributes<T> {}

export interface HTMLProxyViewContainerElementAttributes<
  T extends HTMLProxyViewContainerElement = HTMLProxyViewContainerElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;
}

export interface HTMLScrollViewElementAttributes<
  T extends HTMLScrollViewElement = HTMLScrollViewElement
> extends HTMLViewElementAttributes<T> {
  "on:scroll": (payload: NativeScrollEvent<HTMLScrollViewElement>) => void;

  /**
   * Gets or sets a value indicating whether scroll is enabled.
   */
  isScrollEnabled: string | boolean;

  /**
* Gets or sets a value indicating whether scroll is enabled.
@platform android
*/
  "android:isScrollEnabled": string | boolean;

  /**
* Gets or sets a value indicating whether scroll is enabled.
@platform ios
*/
  "ios:isScrollEnabled": string | boolean;

  /**
   * Gets a value that contains the vertical offset of the scrolled content.
   */
  verticalOffset: number | string;

  /**
* Gets a value that contains the vertical offset of the scrolled content.
@platform android
*/
  "android:verticalOffset": number | string;

  /**
* Gets a value that contains the vertical offset of the scrolled content.
@platform ios
*/
  "ios:verticalOffset": number | string;

  /**
   * Gets a value that contains the horizontal offset of the scrolled content.
   */
  horizontalOffset: number | string;

  /**
* Gets a value that contains the horizontal offset of the scrolled content.
@platform android
*/
  "android:horizontalOffset": number | string;

  /**
* Gets a value that contains the horizontal offset of the scrolled content.
@platform ios
*/
  "ios:horizontalOffset": number | string;

  /**
   * Gets the maximum value for the verticalOffset.
   */
  scrollableHeight: number | string;

  /**
* Gets the maximum value for the verticalOffset.
@platform android
*/
  "android:scrollableHeight": number | string;

  /**
* Gets the maximum value for the verticalOffset.
@platform ios
*/
  "ios:scrollableHeight": number | string;

  /**
   * Gets the maximum value for the horizontalOffset.
   */
  scrollableWidth: number | string;

  /**
* Gets the maximum value for the horizontalOffset.
@platform android
*/
  "android:scrollableWidth": number | string;

  /**
* Gets the maximum value for the horizontalOffset.
@platform ios
*/
  "ios:scrollableWidth": number | string;

  /**
   * Toggles scrollbar indicator visibility
   */
  scrollBarIndicatorVisible: string | boolean;

  /**
* Toggles scrollbar indicator visibility
@platform android
*/
  "android:scrollBarIndicatorVisible": string | boolean;

  /**
* Toggles scrollbar indicator visibility
@platform ios
*/
  "ios:scrollBarIndicatorVisible": string | boolean;

  /**
   * Gets or sets direction in which the content can be scrolled.
   */
  orientation: string | OrientationType;

  /**
* Gets or sets direction in which the content can be scrolled.
@platform android
*/
  "android:orientation": string | OrientationType;

  /**
* Gets or sets direction in which the content can be scrolled.
@platform ios
*/
  "ios:orientation": string | OrientationType;
}

export interface HTMLProgressElementAttributes<
  T extends HTMLProgressElement = HTMLProgressElement
> extends HTMLViewElementAttributes<T> {
  "on:valueChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLProgressElement>
  ) => void;

  /**
   * Gets or sets a progress current value.
   */
  value: number | string;

  /**
* Gets or sets a progress current value.
@platform android
*/
  "android:value": number | string;

  /**
* Gets or sets a progress current value.
@platform ios
*/
  "ios:value": number | string;

  /**
   * Gets or sets a progress max value.
   */
  maxValue: number | string;

  /**
* Gets or sets a progress max value.
@platform android
*/
  "android:maxValue": number | string;

  /**
* Gets or sets a progress max value.
@platform ios
*/
  "ios:maxValue": number | string;
}

export interface HTMLPlaceholderElementAttributes<
  T extends HTMLPlaceholderElement = HTMLPlaceholderElement
> extends HTMLViewElementAttributes<T> {
  "on:creatingView": (
    payload: NativeDOMEventWithData<HTMLPlaceholderElement, CreateViewEventData>
  ) => void;
}

export interface HTMLListViewElementAttributes<
  T extends HTMLListViewElement = HTMLListViewElement
> extends HTMLViewElementAttributes<T> {
  "on:itemLoading": (
    payload: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>
  ) => void;

  "on:itemTap": (
    payload: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>
  ) => void;

  "on:loadMoreItems": (payload: NativeDOMEvent<HTMLListViewElement>) => void;

  "on:scroll": (payload: NativeDOMEvent) => void;

  /**
* Gets or set the items collection of the ListView.
The items property can be set to an array or an object defining length and getItem(index) method.
*/
  items: any[] | ItemsSource;

  /**
* Gets or set the items collection of the ListView.
The items property can be set to an array or an object defining length and getItem(index) method.
@platform android
*/
  "android:items": any[] | ItemsSource;

  /**
* Gets or set the items collection of the ListView.
The items property can be set to an array or an object defining length and getItem(index) method.
@platform ios
*/
  "ios:items": any[] | ItemsSource;

  /**
   * Gets or set the item template of the ListView.
   */
  itemTemplate: string | string | Template;

  /**
* Gets or set the item template of the ListView.
@platform android
*/
  "android:itemTemplate": string | string | Template;

  /**
* Gets or set the item template of the ListView.
@platform ios
*/
  "ios:itemTemplate": string | string | Template;

  /**
   * Gets or set the list of item templates for the item template selector
   */
  itemTemplates: string | KeyedTemplate[];

  /**
* Gets or set the list of item templates for the item template selector
@platform android
*/
  "android:itemTemplates": string | KeyedTemplate[];

  /**
* Gets or set the list of item templates for the item template selector
@platform ios
*/
  "ios:itemTemplates": string | KeyedTemplate[];

  /**
   * A function that returns the appropriate ket template based on the data item.
   */
  itemTemplateSelector:
    | string
    | string
    | ((item: any, index: number, items: any) => string);

  /**
* A function that returns the appropriate ket template based on the data item.
@platform android
*/
  "android:itemTemplateSelector":
    | string
    | string
    | ((item: any, index: number, items: any) => string);

  /**
* A function that returns the appropriate ket template based on the data item.
@platform ios
*/
  "ios:itemTemplateSelector":
    | string
    | string
    | ((item: any, index: number, items: any) => string);

  /**
   * Gets or set row height of the ListView.
   */
  rowHeight: string | number | LengthType;

  /**
* Gets or set row height of the ListView.
@platform android
*/
  "android:rowHeight": string | number | LengthType;

  /**
* Gets or set row height of the ListView.
@platform ios
*/
  "ios:rowHeight": string | number | LengthType;

  /**
* Gets or set the estimated height of rows in the ListView.
The default value is 44px.
*/
  iosEstimatedRowHeight: string | number | LengthType;

  /**
* Gets or set the estimated height of rows in the ListView.
The default value is 44px.
@platform android
*/
  "android:iosEstimatedRowHeight": string | number | LengthType;

  /**
* Gets or set the estimated height of rows in the ListView.
The default value is 44px.
@platform ios
*/
  "ios:iosEstimatedRowHeight": string | number | LengthType;
}

export interface HTMLPageElementAttributes<
  T extends HTMLPageElement = HTMLPageElement
> extends HTMLViewElementAttributes<T> {
  "on:navigatingTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  "on:navigatedTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  "on:navigatingFrom": (
    payload: NativeNavigationEvent<HTMLPageElement>
  ) => void;

  "on:navigatedFrom": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   * Used to hide the Navigation Bar in iOS and the Action Bar in Android.
   */
  actionBarHidden: string | boolean;

  /**
* Used to hide the Navigation Bar in iOS and the Action Bar in Android.
@platform android
*/
  "android:actionBarHidden": string | boolean;

  /**
* Used to hide the Navigation Bar in iOS and the Action Bar in Android.
@platform ios
*/
  "ios:actionBarHidden": string | boolean;

  /**
   * Used to control if swipe back navigation in iOS is enabled. This property is iOS specific. Default value: true
   */
  enableSwipeBackNavigation: string | boolean;

  /**
* Used to control if swipe back navigation in iOS is enabled. This property is iOS specific. Default value: true
@platform android
*/
  "android:enableSwipeBackNavigation": string | boolean;

  /**
* Used to control if swipe back navigation in iOS is enabled. This property is iOS specific. Default value: true
@platform ios
*/
  "ios:enableSwipeBackNavigation": string | boolean;

  /**
   * Should page changed be annnounced to the screen reader.
   */
  accessibilityAnnouncePageEnabled: string | boolean;

  /**
* Should page changed be annnounced to the screen reader.
@platform android
*/
  "android:accessibilityAnnouncePageEnabled": string | boolean;

  /**
* Should page changed be annnounced to the screen reader.
@platform ios
*/
  "ios:accessibilityAnnouncePageEnabled": string | boolean;

  /**
   * A property that is used to pass a data from another page (while navigate to).
   */
  navigationContext: any;

  /**
* A property that is used to pass a data from another page (while navigate to).
@platform android
*/
  "android:navigationContext": any;

  /**
* A property that is used to pass a data from another page (while navigate to).
@platform ios
*/
  "ios:navigationContext": any;

  /**
   * Gets the ActionBar for this page.
   */
  actionBar: string | ActionBar;

  /**
* Gets the ActionBar for this page.
@platform android
*/
  "android:actionBar": string | ActionBar;

  /**
* Gets the ActionBar for this page.
@platform ios
*/
  "ios:actionBar": string | ActionBar;

  /**
   * Gets or sets the style of the status bar.
   */
  statusBarStyle: string | "light" | "dark";

  /**
* Gets or sets the style of the status bar.
@platform android
*/
  "android:statusBarStyle": string | "light" | "dark";

  /**
* Gets or sets the style of the status bar.
@platform ios
*/
  "ios:statusBarStyle": string | "light" | "dark";

  /**
   * Gets or sets the color of the status bar in Android.
   */
  androidStatusBarBackground: string | Color;

  /**
* Gets or sets the color of the status bar in Android.
@platform android
*/
  "android:androidStatusBarBackground": string | Color;

  /**
* Gets or sets the color of the status bar in Android.
@platform ios
*/
  "ios:androidStatusBarBackground": string | Color;
}

export interface HTMLListPickerElementAttributes<
  T extends HTMLListPickerElement = HTMLListPickerElement
> extends HTMLViewElementAttributes<T> {
  "on:selectedIndexChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLListPickerElement> | undefined
  ) => void;

  "on:selectedValueChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLListPickerElement> | undefined
  ) => void;

  /**
   * Gets or sets the selected index.
   */
  selectedIndex: number | string;

  /**
* Gets or sets the selected index.
@platform android
*/
  "android:selectedIndex": number | string;

  /**
* Gets or sets the selected index.
@platform ios
*/
  "ios:selectedIndex": number | string;

  /**
* Gets or set the items collection of the ListPicker.
The items property can be set to an array or an object defining length and getItem(index) method.
*/
  items: any;

  /**
* Gets or set the items collection of the ListPicker.
The items property can be set to an array or an object defining length and getItem(index) method.
@platform android
*/
  "android:items": any;

  /**
* Gets or set the items collection of the ListPicker.
The items property can be set to an array or an object defining length and getItem(index) method.
@platform ios
*/
  "ios:items": any;
}

export interface HTMLLabelElementAttributes<
  T extends HTMLLabelElement = HTMLLabelElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets whether the Label wraps text or not.
   */
  textWrap: string | boolean;

  /**
* Gets or sets whether the Label wraps text or not.
@platform android
*/
  "android:textWrap": string | boolean;

  /**
* Gets or sets whether the Label wraps text or not.
@platform ios
*/
  "ios:textWrap": string | boolean;

  /**
   * Gets or sets the text.
   */
  text: string;

  /**
* Gets or sets the text.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText: string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform android
*/
  "android:formattedText": string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform ios
*/
  "ios:formattedText": string | FormattedString;

  /**
   * Gets or sets font-size style property.
   */
  fontSize: number | string;

  /**
* Gets or sets font-size style property.
@platform android
*/
  "android:fontSize": number | string;

  /**
* Gets or sets font-size style property.
@platform ios
*/
  "ios:fontSize": number | string;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing: number | string;

  /**
* Gets or sets letterSpace style property.
@platform android
*/
  "android:letterSpacing": number | string;

  /**
* Gets or sets letterSpace style property.
@platform ios
*/
  "ios:letterSpacing": number | string;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight: number | string;

  /**
* Gets or sets lineHeight style property.
@platform android
*/
  "android:lineHeight": number | string;

  /**
* Gets or sets lineHeight style property.
@platform ios
*/
  "ios:lineHeight": number | string;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment: string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform android
*/
  "android:textAlignment": string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform ios
*/
  "ios:textAlignment": string | TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration: string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform android
*/
  "android:textDecoration": string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform ios
*/
  "ios:textDecoration": string | TextDecorationType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow: string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform android
*/
  "android:textShadow": string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform ios
*/
  "ios:textShadow": string | CSSShadow;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace: string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform android
*/
  "android:whiteSpace": string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform ios
*/
  "ios:whiteSpace": string | WhiteSpaceType;

  /**
   * Gets or sets padding style property.
   */
  padding: string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform android
*/
  "android:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform ios
*/
  "ios:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;
}

export interface HTMLImageElementAttributes<
  T extends HTMLImageElement = HTMLImageElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the image source of the image.
   */
  imageSource: string | ImageSource;

  /**
* Gets or sets the image source of the image.
@platform android
*/
  "android:imageSource": string | ImageSource;

  /**
* Gets or sets the image source of the image.
@platform ios
*/
  "ios:imageSource": string | ImageSource;

  /**
   * Gets or sets the source of the Image. This can be either an URL string or a native image instance.
   */
  src: string | string | ImageSource | ImageAsset;

  /**
* Gets or sets the source of the Image. This can be either an URL string or a native image instance.
@platform android
*/
  "android:src": string | string | ImageSource | ImageAsset;

  /**
* Gets or sets the source of the Image. This can be either an URL string or a native image instance.
@platform ios
*/
  "ios:src": string | string | ImageSource | ImageAsset;

  /**
   * Gets or sets the image stretch mode.
   */
  stretch: string | ImageStretchType;

  /**
* Gets or sets the image stretch mode.
@platform android
*/
  "android:stretch": string | ImageStretchType;

  /**
* Gets or sets the image stretch mode.
@platform ios
*/
  "ios:stretch": string | ImageStretchType;

  /**
* Gets or sets the loading strategy for images on the local file system:
- **sync** - blocks the UI if necessary to display immediately, good for small icons.
- **async** *(default)* - will load in the background, may appear with short delay, good for large images.
When loading images from web they are always loaded **async** no matter of loadMode value.
*/
  loadMode: string | "sync" | "async";

  /**
* Gets or sets the loading strategy for images on the local file system:
- **sync** - blocks the UI if necessary to display immediately, good for small icons.
- **async** *(default)* - will load in the background, may appear with short delay, good for large images.
When loading images from web they are always loaded **async** no matter of loadMode value.
@platform android
*/
  "android:loadMode": string | "sync" | "async";

  /**
* Gets or sets the loading strategy for images on the local file system:
- **sync** - blocks the UI if necessary to display immediately, good for small icons.
- **async** *(default)* - will load in the background, may appear with short delay, good for large images.
When loading images from web they are always loaded **async** no matter of loadMode value.
@platform ios
*/
  "ios:loadMode": string | "sync" | "async";

  /**
   * A color used to tint template images.
   */
  tintColor: string | Color;

  /**
* A color used to tint template images.
@platform android
*/
  "android:tintColor": string | Color;

  /**
* A color used to tint template images.
@platform ios
*/
  "ios:tintColor": string | Color;

  /**
* Gets or sets the desired decode height of the image.
This property is Android specific.
*/
  decodeHeight: string | number | LengthType;

  /**
* Gets or sets the desired decode height of the image.
This property is Android specific.
@platform android
*/
  "android:decodeHeight": string | number | LengthType;

  /**
* Gets or sets the desired decode height of the image.
This property is Android specific.
@platform ios
*/
  "ios:decodeHeight": string | number | LengthType;

  /**
* Gets or sets the desired decode width of the image.
This property is Android specific.
*/
  decodeWidth: string | number | LengthType;

  /**
* Gets or sets the desired decode width of the image.
This property is Android specific.
@platform android
*/
  "android:decodeWidth": string | number | LengthType;

  /**
* Gets or sets the desired decode width of the image.
This property is Android specific.
@platform ios
*/
  "ios:decodeWidth": string | number | LengthType;
}

export interface HTMLHtmlViewElementAttributes<
  T extends HTMLHtmlViewElement = HTMLHtmlViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets html string for the HtmlView.
   */
  html: string;

  /**
* Gets or sets html string for the HtmlView.
@platform android
*/
  "android:html": string;

  /**
* Gets or sets html string for the HtmlView.
@platform ios
*/
  "ios:html": string;
}

export interface HTMLFrameElementAttributes<
  T extends HTMLFrameElement = HTMLFrameElement
> extends HTMLViewElementAttributes<T> {
  "on:navigatingTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  "on:navigatedTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   * Used to control the visibility the Navigation Bar in iOS and the Action Bar in Android.
   */
  actionBarVisibility: string | "auto" | "never" | "always";

  /**
* Used to control the visibility the Navigation Bar in iOS and the Action Bar in Android.
@platform android
*/
  "android:actionBarVisibility": string | "auto" | "never" | "always";

  /**
* Used to control the visibility the Navigation Bar in iOS and the Action Bar in Android.
@platform ios
*/
  "ios:actionBarVisibility": string | "auto" | "never" | "always";

  /**
   * Gets or sets if navigation transitions should be animated.
   */
  animated: string | boolean;

  /**
* Gets or sets if navigation transitions should be animated.
@platform android
*/
  "android:animated": string | boolean;

  /**
* Gets or sets if navigation transitions should be animated.
@platform ios
*/
  "ios:animated": string | boolean;

  /**
   * Gets or sets the default navigation transition for this frame.
   */
  transition: string | NavigationTransition;

  /**
* Gets or sets the default navigation transition for this frame.
@platform android
*/
  "android:transition": string | NavigationTransition;

  /**
* Gets or sets the default navigation transition for this frame.
@platform ios
*/
  "ios:transition": string | NavigationTransition;
}

export interface HTMLDatePickerElementAttributes<
  T extends HTMLDatePickerElement = HTMLDatePickerElement
> extends HTMLViewElementAttributes<T> {
  "on:dateChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLDatePickerElement>
  ) => void;

  /**
   * Gets or sets the year.
   */
  year: number | string;

  /**
* Gets or sets the year.
@platform android
*/
  "android:year": number | string;

  /**
* Gets or sets the year.
@platform ios
*/
  "ios:year": number | string;

  /**
   * Gets or sets the month. The months start from 1.
   */
  month: number | string;

  /**
* Gets or sets the month. The months start from 1.
@platform android
*/
  "android:month": number | string;

  /**
* Gets or sets the month. The months start from 1.
@platform ios
*/
  "ios:month": number | string;

  /**
   * Gets or sets the day. The days start from 1.
   */
  day: number | string;

  /**
* Gets or sets the day. The days start from 1.
@platform android
*/
  "android:day": number | string;

  /**
* Gets or sets the day. The days start from 1.
@platform ios
*/
  "ios:day": number | string;

  /**
   * Gets or sets the entire date.
   */
  date: string | Date;

  /**
* Gets or sets the entire date.
@platform android
*/
  "android:date": string | Date;

  /**
* Gets or sets the entire date.
@platform ios
*/
  "ios:date": string | Date;

  /**
   * Gets or sets the max date.
   */
  maxDate: string | Date;

  /**
* Gets or sets the max date.
@platform android
*/
  "android:maxDate": string | Date;

  /**
* Gets or sets the max date.
@platform ios
*/
  "ios:maxDate": string | Date;

  /**
   * Gets or sets the min date.
   */
  minDate: string | Date;

  /**
* Gets or sets the min date.
@platform android
*/
  "android:minDate": string | Date;

  /**
* Gets or sets the min date.
@platform ios
*/
  "ios:minDate": string | Date;

  /**
* Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
*/
  iosPreferredDatePickerStyle: number | string;

  /**
* Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
@platform android
*/
  "android:iosPreferredDatePickerStyle": number | string;

  /**
* Gets or set the UIDatePickerStyle of the date picker in iOS 13.4+. Defaults to 0.
Valid values are numbers:
 - 0: automatic (system picks the concrete style based on the current platform and date picker mode)
 - 1: wheels (the date picker displays as a wheel picker)
 - 2: compact (the date picker displays as a label that when tapped displays a calendar-style editor)
 - 3: inline  (the date pickers displays as an inline, editable field)
@platform ios
*/
  "ios:iosPreferredDatePickerStyle": number | string;
}

export interface HTMLContentViewElementAttributes<
  T extends HTMLContentViewElement = HTMLContentViewElement
> extends HTMLViewElementAttributes<T> {
  content: string | View;

  /**
* 
@platform android
*/
  "android:content": string | View;

  /**
* 
@platform ios
*/
  "ios:content": string | View;
}

export interface HTMLButtonElementAttributes<
  T extends HTMLButtonElement = HTMLButtonElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets whether the Button wraps text or not.
   */
  textWrap: string | boolean;

  /**
* Gets or sets whether the Button wraps text or not.
@platform android
*/
  "android:textWrap": string | boolean;

  /**
* Gets or sets whether the Button wraps text or not.
@platform ios
*/
  "ios:textWrap": string | boolean;

  /**
   * Gets or sets the text.
   */
  text: string;

  /**
* Gets or sets the text.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets a formatted string.
   */
  formattedText: string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform android
*/
  "android:formattedText": string | FormattedString;

  /**
* Gets or sets a formatted string.
@platform ios
*/
  "ios:formattedText": string | FormattedString;

  /**
   * Gets or sets font-size style property.
   */
  fontSize: number | string;

  /**
* Gets or sets font-size style property.
@platform android
*/
  "android:fontSize": number | string;

  /**
* Gets or sets font-size style property.
@platform ios
*/
  "ios:fontSize": number | string;

  /**
   * Gets or sets letterSpace style property.
   */
  letterSpacing: number | string;

  /**
* Gets or sets letterSpace style property.
@platform android
*/
  "android:letterSpacing": number | string;

  /**
* Gets or sets letterSpace style property.
@platform ios
*/
  "ios:letterSpacing": number | string;

  /**
   * Gets or sets lineHeight style property.
   */
  lineHeight: number | string;

  /**
* Gets or sets lineHeight style property.
@platform android
*/
  "android:lineHeight": number | string;

  /**
* Gets or sets lineHeight style property.
@platform ios
*/
  "ios:lineHeight": number | string;

  /**
   * Gets or sets text-alignment style property.
   */
  textAlignment: string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform android
*/
  "android:textAlignment": string | TextAlignmentType;

  /**
* Gets or sets text-alignment style property.
@platform ios
*/
  "ios:textAlignment": string | TextAlignmentType;

  /**
   * Gets or sets text decorations style property.
   */
  textDecoration: string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform android
*/
  "android:textDecoration": string | TextDecorationType;

  /**
* Gets or sets text decorations style property.
@platform ios
*/
  "ios:textDecoration": string | TextDecorationType;

  /**
   * Gets or sets text shadow style property.
   */
  textShadow: string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform android
*/
  "android:textShadow": string | CSSShadow;

  /**
* Gets or sets text shadow style property.
@platform ios
*/
  "ios:textShadow": string | CSSShadow;

  /**
   * Gets or sets white space style property.
   */
  whiteSpace: string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform android
*/
  "android:whiteSpace": string | WhiteSpaceType;

  /**
* Gets or sets white space style property.
@platform ios
*/
  "ios:whiteSpace": string | WhiteSpaceType;

  /**
   * Gets or sets padding style property.
   */
  padding: string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform android
*/
  "android:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
* Gets or sets padding style property.
@platform ios
*/
  "ios:padding": string | number | LengthDipUnit | LengthPxUnit;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;
}

export interface HTMLActivityIndicatorElementAttributes<
  T extends HTMLActivityIndicatorElement = HTMLActivityIndicatorElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets a value indicating whether the widget is currently displaying progress.
   */
  busy: string | boolean;

  /**
* Gets or sets a value indicating whether the widget is currently displaying progress.
@platform android
*/
  "android:busy": string | boolean;

  /**
* Gets or sets a value indicating whether the widget is currently displaying progress.
@platform ios
*/
  "ios:busy": string | boolean;
}

export interface HTMLActionBarElementAttributes<
  T extends HTMLActionBarElement = HTMLActionBarElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the action bar title.
   */
  title: string;

  /**
* Gets or sets the action bar title.
@platform android
*/
  "android:title": string;

  /**
* Gets or sets the action bar title.
@platform ios
*/
  "ios:title": string;

  /**
   * Gets or sets the title view. When set - replaces the title with a custom view.
   */
  titleView: string | View;

  /**
* Gets or sets the title view. When set - replaces the title with a custom view.
@platform android
*/
  "android:titleView": string | View;

  /**
* Gets or sets the title view. When set - replaces the title with a custom view.
@platform ios
*/
  "ios:titleView": string | View;

  /**
   * Gets or sets the navigation button (a.k.a. the back button).
   */
  navigationButton: string | NavigationButton;

  /**
* Gets or sets the navigation button (a.k.a. the back button).
@platform android
*/
  "android:navigationButton": string | NavigationButton;

  /**
* Gets or sets the navigation button (a.k.a. the back button).
@platform ios
*/
  "ios:navigationButton": string | NavigationButton;

  /**
* Removes the shadow/border at the bottom of the ActionBar and removes translucency on iOS.
Default false.
*/
  flat: string | boolean;

  /**
* Removes the shadow/border at the bottom of the ActionBar and removes translucency on iOS.
Default false.
@platform android
*/
  "android:flat": string | boolean;

  /**
* Removes the shadow/border at the bottom of the ActionBar and removes translucency on iOS.
Default false.
@platform ios
*/
  "ios:flat": string | boolean;

  /**
   * Gets the collection of action items.
   */
  actionItems: string | ActionItems;

  /**
* Gets the collection of action items.
@platform android
*/
  "android:actionItems": string | ActionItems;

  /**
* Gets the collection of action items.
@platform ios
*/
  "ios:actionItems": string | ActionItems;

  /**
* Gets or set the UIImageRenderingMode of the action bar icons in iOS. Defaults to "alwaysOriginal"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
*/
  iosIconRenderingMode:
    | string
    | "automatic"
    | "alwaysOriginal"
    | "alwaysTemplate";

  /**
* Gets or set the UIImageRenderingMode of the action bar icons in iOS. Defaults to "alwaysOriginal"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
@platform android
*/
  "android:iosIconRenderingMode":
    | string
    | "automatic"
    | "alwaysOriginal"
    | "alwaysTemplate";

  /**
* Gets or set the UIImageRenderingMode of the action bar icons in iOS. Defaults to "alwaysOriginal"
Valid values are:
 - automatic
 - alwaysOriginal
 - alwaysTemplate
@platform ios
*/
  "ios:iosIconRenderingMode":
    | string
    | "automatic"
    | "alwaysOriginal"
    | "alwaysTemplate";
}

export interface HTMLActionItemElementAttributes<
  T extends HTMLActionItemElement = HTMLActionItemElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the text of the action item.
   */
  text: string;

  /**
* Gets or sets the text of the action item.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text of the action item.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets the icon of the action item.
   */
  icon: string;

  /**
* Gets or sets the icon of the action item.
@platform android
*/
  "android:icon": string;

  /**
* Gets or sets the icon of the action item.
@platform ios
*/
  "ios:icon": string;
}

export interface HTMLNavigationButtonElementAttributes<
  T extends HTMLNavigationButtonElement = HTMLNavigationButtonElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Gets or sets the text of the action item.
   */
  text: string;

  /**
* Gets or sets the text of the action item.
@platform android
*/
  "android:text": string;

  /**
* Gets or sets the text of the action item.
@platform ios
*/
  "ios:text": string;

  /**
   * Gets or sets the icon of the action item.
   */
  icon: string;

  /**
* Gets or sets the icon of the action item.
@platform android
*/
  "android:icon": string;

  /**
* Gets or sets the icon of the action item.
@platform ios
*/
  "ios:icon": string;
}

export interface HTMLStackLayoutElementAttributes<
  T extends HTMLStackLayoutElement = HTMLStackLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
* Gets or sets if layout should be horizontal or vertical.
The default value is vertical.
*/
  orientation: string | OrientationType;

  /**
* Gets or sets if layout should be horizontal or vertical.
The default value is vertical.
@platform android
*/
  "android:orientation": string | OrientationType;

  /**
* Gets or sets if layout should be horizontal or vertical.
The default value is vertical.
@platform ios
*/
  "ios:orientation": string | OrientationType;
}

export interface HTMLWrapLayoutElementAttributes<
  T extends HTMLWrapLayoutElement = HTMLWrapLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
* Gets or sets the flow direction. Default value is horizontal.
If orientation is horizontal items are arranged in rows, else items are arranged in columns.
*/
  orientation: string | OrientationType;

  /**
* Gets or sets the flow direction. Default value is horizontal.
If orientation is horizontal items are arranged in rows, else items are arranged in columns.
@platform android
*/
  "android:orientation": string | OrientationType;

  /**
* Gets or sets the flow direction. Default value is horizontal.
If orientation is horizontal items are arranged in rows, else items are arranged in columns.
@platform ios
*/
  "ios:orientation": string | OrientationType;

  /**
* Gets or sets the width used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
*/
  itemWidth: string | number | LengthType;

  /**
* Gets or sets the width used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
@platform android
*/
  "android:itemWidth": string | number | LengthType;

  /**
* Gets or sets the width used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
@platform ios
*/
  "ios:itemWidth": string | number | LengthType;

  /**
* Gets or sets the height used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
*/
  itemHeight: string | number | LengthType;

  /**
* Gets or sets the height used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
@platform android
*/
  "android:itemHeight": string | number | LengthType;

  /**
* Gets or sets the height used to measure and layout each child.
Default value is Number.NaN which does not restrict children.
@platform ios
*/
  "ios:itemHeight": string | number | LengthType;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;
}

export interface HTMLRootLayoutElementAttributes<
  T extends HTMLRootLayoutElement = HTMLRootLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;
}

export interface HTMLGridLayoutElementAttributes<
  T extends HTMLGridLayoutElement = HTMLGridLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;

  rows: string;

  /**
* 
@platform android
*/
  "android:rows": string;

  /**
* 
@platform ios
*/
  "ios:rows": string;

  columns: string;

  /**
* 
@platform android
*/
  "android:columns": string;

  /**
* 
@platform ios
*/
  "ios:columns": string;
}

export interface HTMLFlexboxLayoutElementAttributes<
  T extends HTMLFlexboxLayoutElement = HTMLFlexboxLayoutElement
> extends HTMLViewElementAttributes<T> {
  flexDirection: string | FlexDirection;

  /**
* 
@platform android
*/
  "android:flexDirection": string | FlexDirection;

  /**
* 
@platform ios
*/
  "ios:flexDirection": string | FlexDirection;

  flexWrap: string | FlexWrap;

  /**
* 
@platform android
*/
  "android:flexWrap": string | FlexWrap;

  /**
* 
@platform ios
*/
  "ios:flexWrap": string | FlexWrap;

  justifyContent: string | JustifyContent;

  /**
* 
@platform android
*/
  "android:justifyContent": string | JustifyContent;

  /**
* 
@platform ios
*/
  "ios:justifyContent": string | JustifyContent;

  alignItems: string | AlignItems;

  /**
* 
@platform android
*/
  "android:alignItems": string | AlignItems;

  /**
* 
@platform ios
*/
  "ios:alignItems": string | AlignItems;

  alignContent: string | AlignContent;

  /**
* 
@platform android
*/
  "android:alignContent": string | AlignContent;

  /**
* 
@platform ios
*/
  "ios:alignContent": string | AlignContent;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;
}

export interface HTMLDockLayoutElementAttributes<
  T extends HTMLDockLayoutElement = HTMLDockLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
* Gets or sets a value that indicates whether the last child element within a DockLayout stretches to fill the remaining available space.
The default value is true.
*/
  stretchLastChild: string | boolean;

  /**
* Gets or sets a value that indicates whether the last child element within a DockLayout stretches to fill the remaining available space.
The default value is true.
@platform android
*/
  "android:stretchLastChild": string | boolean;

  /**
* Gets or sets a value that indicates whether the last child element within a DockLayout stretches to fill the remaining available space.
The default value is true.
@platform ios
*/
  "ios:stretchLastChild": string | boolean;

  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;
}

export interface HTMLAbsoluteLayoutElementAttributes<
  T extends HTMLAbsoluteLayoutElement = HTMLAbsoluteLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
   * Specify the bottom padding of this layout.
   */
  paddingBottom: string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform android
*/
  "android:paddingBottom": string | number | LengthType;

  /**
* Specify the bottom padding of this layout.
@platform ios
*/
  "ios:paddingBottom": string | number | LengthType;

  /**
   * Specify the left padding of this layout.
   */
  paddingLeft: string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform android
*/
  "android:paddingLeft": string | number | LengthType;

  /**
* Specify the left padding of this layout.
@platform ios
*/
  "ios:paddingLeft": string | number | LengthType;

  /**
   * Specify the right padding of this layout.
   */
  paddingRight: string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform android
*/
  "android:paddingRight": string | number | LengthType;

  /**
* Specify the right padding of this layout.
@platform ios
*/
  "ios:paddingRight": string | number | LengthType;

  /**
   * Specify the top padding of this layout.
   */
  paddingTop: string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform android
*/
  "android:paddingTop": string | number | LengthType;

  /**
* Specify the top padding of this layout.
@platform ios
*/
  "ios:paddingTop": string | number | LengthType;

  /**
   * Gets or sets a value indicating whether to clip the content of this layout.
   */
  clipToBounds: string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform android
*/
  "android:clipToBounds": string | boolean;

  /**
* Gets or sets a value indicating whether to clip the content of this layout.
@platform ios
*/
  "ios:clipToBounds": string | boolean;
}

export interface HTMLContainerViewElementAttributes<
  T extends HTMLContainerViewElement = HTMLContainerViewElement
> extends HTMLViewElementAttributes<T> {}

export interface HTMLCustomLayoutViewElementAttributes<
  T extends HTMLCustomLayoutViewElement = HTMLCustomLayoutViewElement
> extends HTMLViewElementAttributes<T> {}

// allow arbitrary props on all elements.
type JSXElementAttributes<T extends HTMLViewBaseElementAttributes> =
  Partial<T> & {
    [name: string]: any;
  };

interface CoreIntrinsicElements {
  /**
   * Represents a standard WebView widget.
   */
  webview: JSXElementAttributes<HTMLWebViewElementAttributes>;

  /**
   * Represents an time picker.
   */
  timepicker: JSXElementAttributes<HTMLTimePickerElementAttributes>;

  /**
   * Represents an editable multiline text view.
   */
  textview: JSXElementAttributes<HTMLTextViewElementAttributes>;

  /**
   * Represents an editable text field.
   */
  textfield: JSXElementAttributes<HTMLTextFieldElementAttributes>;

  /**
   * A class used to create a single part of formatted string with a common text properties.
   */
  span: JSXElementAttributes<HTMLSpanElementAttributes>;

  /**
   * A class used to create a formatted (rich text) string.
   */
  formattedstring: JSXElementAttributes<HTMLFormattedStringElementAttributes>;

  /**
   * Represents a tab view entry.
   */
  tabviewitem: JSXElementAttributes<HTMLTabViewItemElementAttributes>;

  /**
   * Represents a tab view.
   */
  tabview: JSXElementAttributes<HTMLTabViewElementAttributes>;

  /**
   * Represents a switch component.
   */
  switch: JSXElementAttributes<HTMLSwitchElementAttributes>;

  /**
   * Represents a SegmentedBar item.
   */
  segmentedbaritem: JSXElementAttributes<HTMLSegmentedBarItemElementAttributes>;

  /**
   * Represents a UI SegmentedBar component.
   */
  segmentedbar: JSXElementAttributes<HTMLSegmentedBarElementAttributes>;

  /**
   * Represents a slider component.
   */
  slider: JSXElementAttributes<HTMLSliderElementAttributes>;

  /**
   * Represents a search bar component.
   */
  searchbar: JSXElementAttributes<HTMLSearchBarElementAttributes>;

  /**
   * Represents a UI Repeater component.
   */
  repeater: JSXElementAttributes<HTMLRepeaterElementAttributes>;

  /**
* Proxy view container that adds all its native children directly to the parent.
To be used as a logical grouping container of views.
*/
  proxyviewcontainer: JSXElementAttributes<HTMLProxyViewContainerElementAttributes>;

  /**
   * Represents a scrollable area that can have content that is larger than its bounds.
   */
  scrollview: JSXElementAttributes<HTMLScrollViewElementAttributes>;

  /**
   * Represents a progress component.
   */
  progress: JSXElementAttributes<HTMLProgressElementAttributes>;

  /**
   * Represents a Placeholder, which is used to add a native view to the visual tree.
   */
  placeholder: JSXElementAttributes<HTMLPlaceholderElementAttributes>;

  /**
   * Represents a view that shows items in a vertically scrolling list.
   */
  listview: JSXElementAttributes<HTMLListViewElementAttributes>;

  /**
   * Represents a logical unit for navigation (inside Frame).
   */
  page: JSXElementAttributes<HTMLPageElementAttributes>;

  /**
   * Represents an list picker.
   */
  listpicker: JSXElementAttributes<HTMLListPickerElementAttributes>;

  /**
   * Represents a text label.
   */
  label: JSXElementAttributes<HTMLLabelElementAttributes>;

  /**
   * Represents a class that provides functionality for loading and streching image(s).
   */
  image: JSXElementAttributes<HTMLImageElementAttributes>;

  /**
* Represents a view with html content. Use this component instead WebView when you want to show just static HTML content.
[iOS support](https://developer.apple.com/documentation/foundation/nsattributedstring/1524613-initwithdata)
[android support](http://developer.android.com/reference/android/text/Html.html)
*/
  htmlview: JSXElementAttributes<HTMLHtmlViewElementAttributes>;

  /**
* Represents the logical View unit that is responsible for navigation within an application.
Nested frames are supported, enabling hierarchical navigation scenarios.
*/
  frame: JSXElementAttributes<HTMLFrameElementAttributes>;

  /**
   * Represents an date picker.
   */
  datepicker: JSXElementAttributes<HTMLDatePickerElementAttributes>;

  contentview: JSXElementAttributes<HTMLContentViewElementAttributes>;

  /**
   * Represents a standard Button widget.
   */
  button: JSXElementAttributes<HTMLButtonElementAttributes>;

  /**
   * Represents a UI widget which displays a progress indicator hinting the user for some background operation running.
   */
  activityindicator: JSXElementAttributes<HTMLActivityIndicatorElementAttributes>;

  /**
   * Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).
   */
  actionbar: JSXElementAttributes<HTMLActionBarElementAttributes>;

  /**
   * Represents an action item in the action bar.
   */
  actionitem: JSXElementAttributes<HTMLActionItemElementAttributes>;

  /**
   * Represents the navigation (a.k.a. "back") button.
   */
  navigationbutton: JSXElementAttributes<HTMLNavigationButtonElementAttributes>;

  /**
   * A Layout that arranges its children horizontally or vertically. The direction can be set by orientation property.
   */
  stacklayout: JSXElementAttributes<HTMLStackLayoutElementAttributes>;

  /**
* WrapLayout position children in rows or columns depending on orientation property
until space is filled and then wraps them on new row or column.
*/
  wraplayout: JSXElementAttributes<HTMLWrapLayoutElementAttributes>;

  rootlayout: JSXElementAttributes<HTMLRootLayoutElementAttributes>;

  /**
   * Defines a rectangular layout area that consists of columns and rows.
   */
  gridlayout: JSXElementAttributes<HTMLGridLayoutElementAttributes>;

  flexboxlayout: JSXElementAttributes<HTMLFlexboxLayoutElementAttributes>;

  /**
   * A Layout that arranges its children at its outer edges, and allows its last child to take up the remaining space.
   */
  docklayout: JSXElementAttributes<HTMLDockLayoutElementAttributes>;

  /**
   * A layout that lets you specify exact locations (left/top coordinates) of its children.
   */
  absolutelayout: JSXElementAttributes<HTMLAbsoluteLayoutElementAttributes>;

  /**
   * Base class for all UI components that are containers.
   */
  containerview: JSXElementAttributes<HTMLContainerViewElementAttributes>;

  /**
   * Base class for all UI components that implement custom layouts.
   */
  customlayoutview: JSXElementAttributes<HTMLCustomLayoutViewElementAttributes>;
}

export namespace JSX {
  export interface IntrinsicElements extends CoreIntrinsicElements {}

  export interface IntrinsicElements {
    // allow arbitrary native elements and props
    // @ts-ignore suppress ts:2374 = Duplicate string index signature.
    [name: string]: JSXElementAttributes<HTMLViewElementAttributes>;
  }

  export function mapElementTag<K extends keyof IntrinsicElements>(
    tag: K
  ): IntrinsicElements[K];

  export function createElement<
    Element extends IntrinsicElements,
    Key extends keyof IntrinsicElements
  >(element: Key | undefined | null, attrs: Element[Key]): Element[Key];

  export function createElement<
    Element extends IntrinsicElements,
    Key extends keyof IntrinsicElements,
    T
  >(
    element: Key | undefined | null,
    attrsEnhancers: T,
    attrs: Element[Key] & T
  ): Element[Key];

  export type Element = SolidJSX.Element;
  export interface ArrayElement extends Array<Element> {}

  export interface FunctionElement {
    (): Element;
  }

  interface IntrinsicAttributes {
    ref?: unknown | ((e: unknown) => void);
  }

  export interface ElementClass {
    // empty, libs can define requirements downstream
  }
  export interface ElementAttributesProperty {
    // empty, libs can define requirements downstream
  }
  export interface ElementChildrenAttribute {
    children: {};
  }

  interface ArrayElement extends Array<Element> {}

  type Accessor<T> = () => T;

  interface CustomEvents {}
  interface CustomCaptureEvents {}
}

declare global {
  namespace JSX {
    export interface IntrinsicElements extends CoreIntrinsicElements {}

    export interface IntrinsicElements {
      // allow arbitrary elements
      // @ts-ignore suppress ts:2374 = Duplicate string index signature.
      [name: string]: any;
    }

    export function mapElementTag<K extends keyof IntrinsicElements>(
      tag: K
    ): IntrinsicElements[K];

    export function createElement<
      Element extends IntrinsicElements,
      Key extends keyof IntrinsicElements
    >(element: Key | undefined | null, attrs: Element[Key]): Element[Key];

    export function createElement<
      Element extends IntrinsicElements,
      Key extends keyof IntrinsicElements,
      T
    >(
      element: Key | undefined | null,
      attrsEnhancers: T,
      attrs: Element[Key] & T
    ): Element[Key];

    export type Element = SolidJSX.Element;
    export interface ArrayElement extends Array<Element> {}

    export interface FunctionElement {
      (): Element;
    }

    interface IntrinsicAttributes {
      ref?: unknown | ((e: unknown) => void);
    }

    export interface ElementClass {
      // empty, libs can define requirements downstream
    }
    export interface ElementAttributesProperty {
      // empty, libs can define requirements downstream
    }
    export interface ElementChildrenAttribute {
      children: {};
    }

    interface ArrayElement extends Array<Element> {}

    type Accessor<T> = () => T;

    interface CustomEvents {}
    interface CustomCaptureEvents {}
  }
}
