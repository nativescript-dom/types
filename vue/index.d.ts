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
import * as RuntimeCore from "@vue/runtime-core";
import "@vue/runtime-dom";
import { ElementAttrs } from "@vue/runtime-dom";

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

type ReservedProps<T extends Element> = {
  key?: string | number | symbol;
  ref?:
    | string
    | RuntimeCore.Ref<T>
    | ((ref: T, refs: Record<string, any>) => void);
  ref_for?: boolean;
  ref_key?: string;
};

type ElementAttrs<T> = T & ReservedProps<T>;

// Omit the following keys from Style interface that should not be exposed in JSX.

// Allows both kebab-case & camelCase keys in style object.
/**
 * Generates `onEventName` from `eventName which is required by vue to
 * detect which props are events.
 */
type OnNativeViewEvents<T> = {
  [Key in keyof T as `on${Capitalize<Key>}`]?:
    | ((payload: T[Key]) => void)
    | undefined;
};

/**
 * Generates ios:propertyName
 */
type PlatformIOSKeyMap<T> = {
  [K in keyof T as `ios:${K}`]?: string | T[K];
};

/**
 * Generates android:propertyName
 */
type PlatformAndroidKeyMap<T> = {
  [K in keyof T as `android:${K}`]?: string | T[K];
};

type PickAttributes<T, Keys> = Pick<T, Keys>;

type BaseAttributes<T> = {
  [K in keyof T]?: string | T[K];
};
type Style = Omit<import("@nativescript/core").Style, OmittedStyleObjectKeys>;
/**
 * Extend attributes with `android:attribute` & `ios:attribute` variants.
 */
type HTMLExtendedAttributes<T> = BaseAttributes<T> &
  PlatformAndroidKeyMap<T> &
  PlatformIOSKeyMap<T>;

interface HTMLViewBaseElementAttributes<
  T extends HTMLViewBaseElement = HTMLViewBaseElement
> extends ElementAttrs<T>,
    HTMLAttributes<T> {
  /**
       * An event that fires when the native view is rendered in the
native view hierarchy.
       */
  onLoaded: (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires when the native view is rendered in the
native view hierarchy.
       */
  "@loaded": (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires when the native view is removed from the
native view hierarchy.
       */
  onUnloaded: (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires when the native view is removed from the
native view hierarchy.
       */
  "@unloaded": (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires as soon as a view is created. At this point, the native view has not been
created yet.
       */
  onCreated: (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires as soon as a view is created. At this point, the native view has not been
created yet.
       */
  "@created": (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires when the native view is disposed. This gets called after the `unloaded`
event fires.
       */
  onDisposeNativeView: (payload: NativeDOMEvent<T>) => void;

  /**
       * An event that fires when the native view is disposed. This gets called after the `unloaded`
event fires.
       */
  "@disposeNativeView": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  left: string | number | LengthType;

  /**
       * undefined
@platform android
       */
  "android:left": string | number | LengthType;

  /**
       * undefined
@platform ios
       */
  "ios:left": string | number | LengthType;

  /**
   *
   */
  top: string | number | LengthType;

  /**
       * undefined
@platform android
       */
  "android:top": string | number | LengthType;

  /**
       * undefined
@platform ios
       */
  "ios:top": string | number | LengthType;

  /**
   *
   */
  dock: string | "left" | "top" | "right" | "bottom";

  /**
       * undefined
@platform android
       */
  "android:dock": string | "left" | "top" | "right" | "bottom";

  /**
       * undefined
@platform ios
       */
  "ios:dock": string | "left" | "top" | "right" | "bottom";

  /**
   *
   */
  row: number | string;

  /**
       * undefined
@platform android
       */
  "android:row": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:row": number | string;

  /**
   *
   */
  col: number | string;

  /**
       * undefined
@platform android
       */
  "android:col": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:col": number | string;

  /**
   * Setting `column` property is the same as `col`
   */
  column: number | string;

  /**
       * Setting `column` property is the same as `col`
@platform android
       */
  "android:column": number | string;

  /**
       * Setting `column` property is the same as `col`
@platform ios
       */
  "ios:column": number | string;

  /**
   *
   */
  rowSpan: number | string;

  /**
       * undefined
@platform android
       */
  "android:rowSpan": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:rowSpan": number | string;

  /**
   *
   */
  colSpan: number | string;

  /**
       * undefined
@platform android
       */
  "android:colSpan": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:colSpan": number | string;

  /**
   * Setting `columnSpan` property is the same as `colSpan`
   */
  columnSpan: number | string;

  /**
       * Setting `columnSpan` property is the same as `colSpan`
@platform android
       */
  "android:columnSpan": number | string;

  /**
       * Setting `columnSpan` property is the same as `colSpan`
@platform ios
       */
  "ios:columnSpan": number | string;

  /**
   *
   */
  order: number | string;

  /**
       * undefined
@platform android
       */
  "android:order": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:order": number | string;

  /**
   *
   */
  flexGrow: number | string;

  /**
       * undefined
@platform android
       */
  "android:flexGrow": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:flexGrow": number | string;

  /**
   *
   */
  flexShrink: number | string;

  /**
       * undefined
@platform android
       */
  "android:flexShrink": number | string;

  /**
       * undefined
@platform ios
       */
  "ios:flexShrink": number | string;

  /**
   *
   */
  flexWrapBefore: string | boolean;

  /**
       * undefined
@platform android
       */
  "android:flexWrapBefore": string | boolean;

  /**
       * undefined
@platform ios
       */
  "ios:flexWrapBefore": string | boolean;

  /**
   *
   */
  alignSelf: string | AlignSelf;

  /**
       * undefined
@platform android
       */
  "android:alignSelf": string | AlignSelf;

  /**
       * undefined
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

  /**
   * Gets the style object associated to this view.
   */
  style: string | Style | Record<string, string | number>;

  /**
       * Gets the style object associated to this view.
@platform android
       */
  "android:style": string | Style | Record<string, string | number>;

  /**
       * Gets the style object associated to this view.
@platform ios
       */
  "ios:style": string | Style | Record<string, string | number>;

  /**
   *
   */
  recycleNativeView: string | "auto" | "always" | "never";

  /**
       * undefined
@platform android
       */
  "android:recycleNativeView": string | "auto" | "always" | "never";

  /**
       * undefined
@platform ios
       */
  "ios:recycleNativeView": string | "auto" | "always" | "never";
}

interface HTMLViewElementAttributes<T extends HTMLViewElement = HTMLViewElement>
  extends HTMLViewBaseElementAttributes<T> {
  /**
   * An event that fires when the position or size of a rendered native view changes.
   */
  onLayoutChanged: (payload: NativeDOMEvent<T>) => void;

  /**
   * An event that fires when the position or size of a rendered native view changes.
   */
  "@layoutChanged": (payload: NativeDOMEvent<T>) => void;

  /**
   * An event that fires when a native view is shown modally.
   */
  onShownModally: (payload: NativeDOMEvent<T>) => void;

  /**
   * An event that fires when a native view is shown modally.
   */
  "@shownModally": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  onShowingModally: (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  "@showingModally": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  onAccessibilityBlur: (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  "@accessibilityBlur": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  onAccessibilityFocus: (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  "@accessibilityFocus": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  onAccessibilityPerformEscape: (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  "@accessibilityPerformEscape": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  onAccessibilityFocusChanged: (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  "@accessibilityFocusChanged": (payload: NativeDOMEvent<T>) => void;

  /**
   *
   */
  onTap: (payload: NativeDOMTapGestureEvent<T>) => void;

  /**
   *
   */
  "@tap": (payload: NativeDOMTapGestureEvent<T>) => void;

  /**
   *
   */
  onDoubleTap: (payload: NativeDOMTapGestureEvent<T>) => void;

  /**
   *
   */
  "@doubleTap": (payload: NativeDOMTapGestureEvent<T>) => void;

  /**
   *
   */
  onPan: (payload: NativePanGestureEvent<T>) => void;

  /**
   *
   */
  "@pan": (payload: NativePanGestureEvent<T>) => void;

  /**
   *
   */
  onSwipe: (payload: NativeSwipeGestureEvent<T>) => void;

  /**
   *
   */
  "@swipe": (payload: NativeSwipeGestureEvent<T>) => void;

  /**
   *
   */
  onRotation: (payload: NativeRotationEvent<T>) => void;

  /**
   *
   */
  "@rotation": (payload: NativeRotationEvent<T>) => void;

  /**
   *
   */
  onLongPress: (payload: NativeGestureEvent<T>) => void;

  /**
   *
   */
  "@longPress": (payload: NativeGestureEvent<T>) => void;

  /**
   *
   */
  onTouch: (payload: NativeTouchEvent<T>) => void;

  /**
   *
   */
  "@touch": (payload: NativeTouchEvent<T>) => void;

  /**
   *
   */
  onPinch: (payload: NativePinchGestureEvent<T>) => void;

  /**
   *
   */
  "@pinch": (payload: NativePinchGestureEvent<T>) => void;

  /**
   *
   */
  onAndroidBackPressed: (payload: NativeAndroidBackPressedEvent<T>) => void;

  /**
   *
   */
  "@androidBackPressed": (payload: NativeAndroidBackPressedEvent<T>) => void;

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

  /**
   *
   */
  testID: string;

  /**
       * undefined
@platform android
       */
  "android:testID": string;

  /**
       * undefined
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

  /**
   *
   */
  backgroundSize: string;

  /**
       * undefined
@platform android
       */
  "android:backgroundSize": string;

  /**
       * undefined
@platform ios
       */
  "ios:backgroundSize": string;

  /**
   *
   */
  backgroundPosition: string;

  /**
       * undefined
@platform android
       */
  "android:backgroundPosition": string;

  /**
       * undefined
@platform ios
       */
  "ios:backgroundPosition": string;

  /**
   *
   */
  backgroundRepeat: string | BackgroundRepeatType;

  /**
       * undefined
@platform android
       */
  "android:backgroundRepeat": string | BackgroundRepeatType;

  /**
       * undefined
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

  /**
   *
   */
  textTransform: string | TextTransformType;

  /**
       * undefined
@platform android
       */
  "android:textTransform": string | TextTransformType;

  /**
       * undefined
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

  /**
   *
   */
  accessibilityLiveRegion: string | AccessibilityLiveRegion;

  /**
       * undefined
@platform android
       */
  "android:accessibilityLiveRegion": string | AccessibilityLiveRegion;

  /**
       * undefined
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

  /**
   *
   */
  automationText: string;

  /**
       * undefined
@platform android
       */
  "android:automationText": string;

  /**
       * undefined
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
   * Sets ID for Shared Element Transition
   */
    sharedTransitionTag: string;

    /**
         * Sets ID for Shared Element Transition
  @platform android
         */
    "android:sharedTransitionTag": string;
  
    /**
         * Sets ID for Shared Element Transition
  @platform ios
         */
    "ios:sharedTransitionTag": string;

   /**
   * Sets ID for ignore Shared Element Transition
   */
   sharedTransitionIgnore: string;

   /**
        * Sets ID for ignore Shared Element Transition
 @platform android
        */
   "android:sharedTransitionIgnore": string;
 
   /**
        * Sets ID for ignore Shared Element Transition
 @platform ios
        */
   "ios:sharedTransitionIgnore": string;
}

interface HTMLWebViewElementAttributes<
  T extends HTMLWebViewElement = HTMLWebViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onLoadStarted: (
    payload: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>
  ) => void;

  /**
   *
   */
  "@loadStarted": (
    payload: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>
  ) => void;

  /**
   *
   */
  onLoadFinished: (
    payload: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>
  ) => void;

  /**
   *
   */
  "@loadFinished": (
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

interface HTMLTimePickerElementAttributes<
  T extends HTMLTimePickerElement = HTMLTimePickerElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onTimeChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLTimePickerElement> | undefined
  ) => void;

  /**
   *
   */
  "@timeChange": (
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

interface HTMLTextViewElementAttributes<
  T extends HTMLTextViewElement = HTMLTextViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onFocus: (payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>) => void;

  /**
   *
   */
  "@focus": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  /**
   *
   */
  onReturnPress: (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  /**
   *
   */
  "@returnPress": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  /**
   *
   */
  onBlur: (payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>) => void;

  /**
   *
   */
  "@blur": (payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>) => void;

  /**
   *
   */
  onTextChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

  /**
   *
   */
  "@textChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextViewElement>
  ) => void;

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
}

interface HTMLTextFieldElementAttributes<
  T extends HTMLTextFieldElement = HTMLTextFieldElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onFocus: (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   *
   */
  "@focus": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   *
   */
  onReturnPress: (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   *
   */
  "@returnPress": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   *
   */
  onBlur: (payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>) => void;

  /**
   *
   */
  "@blur": (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   *
   */
  onTextChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>
  ) => void;

  /**
   *
   */
  "@textChange": (
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
}

interface HTMLSpanElementAttributes<T extends HTMLSpanElement = HTMLSpanElement>
  extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onLinkTap: (payload: NativeDOMEvent<HTMLSpanElement>) => void;

  /**
   *
   */
  "@linkTap": (payload: NativeDOMEvent<HTMLSpanElement>) => void;

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
  fontStyle: string | FontStyle;

  /**
         * Gets or sets the font style of the span.
@platform android
         */
  "android:fontStyle": string | FontStyle;

  /**
         * Gets or sets the font style of the span.
@platform ios
         */
  "ios:fontStyle": string | FontStyle;

  /**
   * Gets or sets the font weight of the span.
   */
  fontWeight: string | FontWeight;

  /**
         * Gets or sets the font weight of the span.
@platform android
         */
  "android:fontWeight": string | FontWeight;

  /**
         * Gets or sets the font weight of the span.
@platform ios
         */
  "ios:fontWeight": string | FontWeight;

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

interface HTMLFormattedStringElementAttributes<
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
  fontStyle: string | FontStyle;

  /**
         * Gets or sets the font style which will be used for all spans that doesn't have a specific value.
@platform android
         */
  "android:fontStyle": string | FontStyle;

  /**
         * Gets or sets the font style which will be used for all spans that doesn't have a specific value.
@platform ios
         */
  "ios:fontStyle": string | FontStyle;

  /**
   * Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
   */
  fontWeight: string | FontWeight;

  /**
         * Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
@platform android
         */
  "android:fontWeight": string | FontWeight;

  /**
         * Gets or sets the font weight which will be used for all spans that doesn't have a specific value.
@platform ios
         */
  "ios:fontWeight": string | FontWeight;

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

interface HTMLTabViewItemElementAttributes<
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

interface HTMLTabViewElementAttributes<
  T extends HTMLTabViewElement = HTMLTabViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onSelectedIndexChanged: (
    payload: NativeDOMEventWithData<
      HTMLTabViewELement,
      SelectedIndexChangedEventData
    >
  ) => void;

  /**
   *
   */
  "@selectedIndexChanged": (
    payload: NativeDOMEventWithData<
      HTMLTabViewELement,
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

interface HTMLSwitchElementAttributes<
  T extends HTMLSwitchElement = HTMLSwitchElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onCheckedChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLSwitchELement>
  ) => void;

  /**
   *
   */
  "@checkedChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLSwitchELement>
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

interface HTMLSliderElementAttributes<
  T extends HTMLSliderElement = HTMLSliderElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onAccessibilityDecrement: (
    payload: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityIncrementEventData
    >
  ) => void;

  /**
   *
   */
  "@accessibilityDecrement": (
    payload: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityIncrementEventData
    >
  ) => void;

  /**
   *
   */
  onAccessibilityIncrement: (
    payload: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityDecrementEventData
    >
  ) => void;

  /**
   *
   */
  "@accessibilityIncrement": (
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

interface HTMLSegmentedBarItemElementAttributes<
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

interface HTMLSegmentedBarElementAttributes<
  T extends HTMLSegmentedBarElement = HTMLSegmentedBarElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onSelectedIndexChanged: (
    payload: NativeDOMEventWithData<
      HTMLSegmentedBarElement,
      SelectedIndexChangedEventData
    >
  ) => void;

  /**
   *
   */
  "@selectedIndexChanged": (
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

interface HTMLSearchBarElementAttributes<
  T extends HTMLSearchBarElement = HTMLSearchBarElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onSubmit: (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  "@submit": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  onClear: (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  "@clear": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  onClose: (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  "@close": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  onTextChange: (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

  /**
   *
   */
  "@textChange": (payload: NativeDOMEvent<HTMLSearchBarElement>) => void;

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

interface HTMLScrollViewElementAttributes<
  T extends HTMLScrollViewElement = HTMLScrollViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onScroll: (payload: NativeScrollEvent<HTMLScrollViewElement>) => void;

  /**
   *
   */
  "@scroll": (payload: NativeScrollEvent<HTMLScrollViewElement>) => void;

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

interface HTMLRepeaterElementAttributes<
  T extends HTMLRepeaterElement = HTMLRepeaterElement
> extends HTMLViewElementAttributes<T> {}

interface HTMLProxyViewContainerElementAttributes<
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

interface HTMLProgressElementAttributes<
  T extends HTMLProgressElement = HTMLProgressElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onValueChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLProgressElement>
  ) => void;

  /**
   *
   */
  "@valueChange": (
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

interface HTMLPlaceholderElementAttributes<
  T extends HTMLPlaceholderElement = HTMLPlaceholderElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onCreatingView: (
    payload: NativeDOMEventWithData<HTMLPlaceholderElement, CreateViewEventData>
  ) => void;

  /**
   *
   */
  "@creatingView": (
    payload: NativeDOMEventWithData<HTMLPlaceholderElement, CreateViewEventData>
  ) => void;
}

interface HTMLPageElementAttributes<T extends HTMLPageElement = HTMLPageElement>
  extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onNavigatingTo: (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  "@navigatingTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  onNavigatedTo: (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  "@navigatedTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  onNavigatingFrom: (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  "@navigatingFrom": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  onNavigatedFrom: (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  "@navigatedFrom": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

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

interface HTMLListViewElementAttributes<
  T extends HTMLListViewElement = HTMLListViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onItemLoading: (
    payload: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>
  ) => void;

  /**
   *
   */
  "@itemLoading": (
    payload: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>
  ) => void;

  /**
   *
   */
  onItemTap: (
    payload: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>
  ) => void;

  /**
   *
   */
  "@itemTap": (
    payload: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>
  ) => void;

  /**
   *
   */
  onLoadMoreItems: (payload: NativeDOMEvent<HTMLListViewElement>) => void;

  /**
   *
   */
  "@loadMoreItems": (payload: NativeDOMEvent<HTMLListViewElement>) => void;

  /**
   *
   */
  onScroll: (payload: undefined) => void;

  /**
   *
   */
  "@scroll": (payload: undefined) => void;

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

interface HTMLListPickerElementAttributes<
  T extends HTMLListPickerElement = HTMLListPickerElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onSelectedIndexChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLListPickerElement> | undefined
  ) => void;

  /**
   *
   */
  "@selectedIndexChange": (
    payload: NativeDOMPropertyChangeEvent<HTMLListPickerElement> | undefined
  ) => void;

  /**
   *
   */
  onSelectedValueChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLListPickerElement> | undefined
  ) => void;

  /**
   *
   */
  "@selectedValueChange": (
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

interface HTMLLabelElementAttributes<
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
}

interface HTMLImageElementAttributes<
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
  src: any;

  /**
         * Gets or sets the source of the Image. This can be either an URL string or a native image instance.
@platform android
         */
  "android:src": any;

  /**
         * Gets or sets the source of the Image. This can be either an URL string or a native image instance.
@platform ios
         */
  "ios:src": any;

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

interface HTMLHtmlViewElementAttributes<
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

interface HTMLFrameElementAttributes<
  T extends HTMLFrameElement = HTMLFrameElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onNavigatingTo: (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  "@navigatingTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  onNavigatedTo: (payload: NativeNavigationEvent<HTMLPageElement>) => void;

  /**
   *
   */
  "@navigatedTo": (payload: NativeNavigationEvent<HTMLPageElement>) => void;

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

interface HTMLDatePickerElementAttributes<
  T extends HTMLDatePickerElement = HTMLDatePickerElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  onDateChange: (
    payload: NativeDOMPropertyChangeEvent<HTMLDatePickerElement>
  ) => void;

  /**
   *
   */
  "@dateChange": (
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

interface HTMLContentViewElementAttributes<
  T extends HTMLContentViewElement = HTMLContentViewElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  content: string | View;

  /**
         * undefined
@platform android
         */
  "android:content": string | View;

  /**
         * undefined
@platform ios
         */
  "ios:content": string | View;
}

interface HTMLButtonElementAttributes<
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
}

interface HTMLActivityIndicatorElementAttributes<
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

interface HTMLActionBarElementAttributes<
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

interface HTMLActionItemElementAttributes<
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

interface HTMLNavigationButtonElementAttributes<
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

interface HTMLWrapLayoutElementAttributes<
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

interface HTMLStackLayoutElementAttributes<
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

interface HTMLRootLayoutElementAttributes<
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

interface HTMLGridLayoutElementAttributes<
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
}

interface HTMLFlexboxLayoutElementAttributes<
  T extends HTMLFlexboxLayoutElement = HTMLFlexboxLayoutElement
> extends HTMLViewElementAttributes<T> {
  /**
   *
   */
  flexDirection: string | FlexDirection;

  /**
         * undefined
@platform android
         */
  "android:flexDirection": string | FlexDirection;

  /**
         * undefined
@platform ios
         */
  "ios:flexDirection": string | FlexDirection;

  /**
   *
   */
  flexWrap: string | FlexWrap;

  /**
         * undefined
@platform android
         */
  "android:flexWrap": string | FlexWrap;

  /**
         * undefined
@platform ios
         */
  "ios:flexWrap": string | FlexWrap;

  /**
   *
   */
  justifyContent: string | JustifyContent;

  /**
         * undefined
@platform android
         */
  "android:justifyContent": string | JustifyContent;

  /**
         * undefined
@platform ios
         */
  "ios:justifyContent": string | JustifyContent;

  /**
   *
   */
  alignItems: string | AlignItems;

  /**
         * undefined
@platform android
         */
  "android:alignItems": string | AlignItems;

  /**
         * undefined
@platform ios
         */
  "ios:alignItems": string | AlignItems;

  /**
   *
   */
  alignContent: string | AlignContent;

  /**
         * undefined
@platform android
         */
  "android:alignContent": string | AlignContent;

  /**
         * undefined
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

interface HTMLDockLayoutElementAttributes<
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

interface HTMLAbsoluteLayoutElementAttributes<
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

interface HTMLContainerViewElementAttributes<
  T extends HTMLContainerViewElement = HTMLContainerViewElement
> extends HTMLViewElementAttributes<T> {}

interface HTMLCustomLayoutViewElementAttributes<
  T extends HTMLCustomLayoutViewElement = HTMLCustomLayoutViewElement
> extends HTMLViewElementAttributes<T> {}

/**
 * Extend html elements that conflict with nativescript views.
 */
declare module "@vue/runtime-dom" {
  export interface LabelHTMLAttributes extends HTMLLabelElementAttributes {}
  export interface SpanHTMLAttributes extends HTMLSpanElementAttributes {}
  export interface ButtonHTMLAttributes extends HTMLButtonElementAttributes {}
}

declare module "@vue/runtime-core" {
  export type DefineNativeComponent<T> = DefineComponent<Partial<T>>;

  /**
   * @nativescript Define all components as both PascalCase & kebab-case since vue allows both.
   */
  export interface GlobalComponents {
    /**
     * A UI component used to display <Page> elements. Every app needs at least a single <Frame> element, usually set as the root element.
     */
    Frame: DefineNativeComponent<HTMLFrameElementAttributes>;
    /**
     * A UI component that represents an application screen. NativeScript apps typically consist of one or more `<Page>` that wrap content such as an `<ActionBar>` and other UI widgets.
     */
    Page: DefineNativeComponent<HTMLPageElementAttributes>;
    /**
     * This class is the base class for all UI components. A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within.
     */
    View: DefineNativeComponent<HTMLViewElementAttributes>;
    /**
     * A layout container that lets you stack the child elements vertically (default) or horizontally.
     */
    StackLayout: DefineNativeComponent<HTMLStackLayoutElementAttributes>;
    /**
     * A layout container that provides a non-exact implementation of the CSS Flexbox layout. This layout lets you arrange child components both horizontally and vertically.
     */
    FlexboxLayout: DefineNativeComponent<HTMLFlexboxLayoutElementAttributes>;
    /**
        * A layout container that lets you arrange its child elements in a table-like manner.
   
   The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. 
   It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.
   
   By default, <GridLayout> has one column and one row. You can add columns and rows by configuring the columns and the rows properties. 
   In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, 
   separated by a comma. You set the number of rows by listing their heights, separated by a comma.
        */
    GridLayout: DefineNativeComponent<HTMLGridLayoutElementAttributes>;
    /**
     * A UI component that shows an editable or a read-only multi-line text container. You can use it to let users type large text in your app or to show longer, multi-line text on the screen.
     */
    TextView: DefineNativeComponent<HTMLTextViewElementAttributes>;
    /**
     * An input component that creates an editable single-line box.
     */
    TextField: DefineNativeComponent<HTMLTextFieldElementAttributes>;
    /**
     * A layout container that lets you position items in rows or columns, based on the orientation property.
     * When the space is filled, the container automatically wraps items onto a new row or column.
     */
    WrapLayout: DefineNativeComponent<HTMLWrapLayoutElementAttributes>;
    /**
     * The WebView component is used to display web content within your application.
     * You use the control by providing a `src` attribute that accepts a URL,a path
     * to a local HTML file or directly HTML string.
     */
    WebView: DefineNativeComponent<HTMLWebViewElementAttributes>;
    /**
     * A layout that lets you specify exact locations (left/top coordinates) of its children.
     */
    AbsoluteLayout: DefineNativeComponent<HTMLAbsoluteLayoutElementAttributes>;
    /**
     * Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).
     */
    ActionBar: DefineNativeComponent<HTMLActionBarElementAttributes>;
    /**
     * Represents an action item in the action bar.
     */
    ActionItem: DefineNativeComponent<HTMLActionItemElementAttributes>;
    /**
     * Represents a UI widget which displays a progress indicator hinting the user for some background operation running.
     */
    ActivityIndicator: DefineNativeComponent<HTMLActivityIndicatorElementAttributes>;
    ContentView: DefineNativeComponent<HTMLContentViewElementAttributes>;
    /**
     * A UI component that lets users select a date from a pre-configured range.
     */
    DatePicker: DefineNativeComponent<HTMLDatePickerElementAttributes>;
    /**
     * a layout container that lets you dock child elements to the sides or the center of the layout.
     *
     * Use the `dock` property to dock its children to the `left`, `right`, `top`, `bottom` or `center` of the layout.
     * To dock a child element to the center, it must be the last child of the container and you must set
     * the `stretchLastChild` property of the parent to `true`.
     */
    DockLayout: DefineNativeComponent<HTMLDockLayoutElementAttributes>;
    /**
     * A View to support various text transformations and decorations. The FormattedString class can be used
     * with all text-related components like `Label`, `TextView`, `TextField` and even `Button`.
     *
     * FormattedString only accepts `span` as it's children.
     */
    FormattedString: DefineNativeComponent<HTMLFormattedStringElementAttributes>;
    /**
     * The HtmlView represents a view with HTML content. Use this component instead of a WebView when you want to show static HTML content with base HTML support.
     */
    HtmlView: DefineNativeComponent<HTMLHtmlViewElementAttributes>;
    /**
     * The Image widget shows an image in your mobile application.
     */
    Image: DefineNativeComponent<HTMLImageElementAttributes>;
    /**
     * The ListPicker is a spinner type component for listing options.
     */
    ListPicker: DefineNativeComponent<HTMLListPickerElementAttributes>;
    /**
     * A UI component that is used to render large lists of data.
     */
    ListView: DefineNativeComponent<HTMLListViewElementAttributes>;
    /**
     *
     */
    NavigationButton: DefineNativeComponent<HTMLNavigationButtonElementAttributes>;
    /**
     * `<Placeholder>` allows you to add any native widget to your application. To do that, you need to put a Placeholder somewhere in
     * the UI hierarchy and then create and configure the native widget that you want to appear there. Finally,
     * pass your native widget to the event arguments of the creatingView event.
     */
    Placeholder: DefineNativeComponent<HTMLPlaceholderElementAttributes>;
    /**
     * A UI component that shows a bar to indicate the progress of a task.
     */
    Progress: DefineNativeComponent<HTMLProgressElementAttributes>;

    ProxyView: DefineNativeComponent<HTMLProxyViewContainerElementAttributes>;
    /**
     * A layout container designed to be used as the primary root layout container for your app with a built in api to easily control dynamic view layers. It extends a GridLayout so has all the features of a grid but enhanced with additional apis.
     */
    RootLayout: DefineNativeComponent<HTMLRootLayoutElementAttributes>;
    /**
     * A UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.
     */
    ScrollView: DefineNativeComponent<HTMLScrollViewElementAttributes>;
    /**
     * A UI component that provides a user interface for entering search queries and submitting requests to the search provider.
     */
    SearchBar: DefineNativeComponent<HTMLSearchBarElementAttributes>;
    /**
     * A UI bar component that displays a set of buttons for discrete selection. Can show text or images.
     */
    SegmentedBar: DefineNativeComponent<HTMLSegmentedBarElementAttributes>;
    /**
     * An item displayed inside SegmentedBar.
     */
    SegmentedBarItem: DefineNativeComponent<HTMLSegmentedBarElementAttributes>;
    /**
     * A UI component that provides a slider control for picking values within a specified numeric range.
     */
    Slider: DefineNativeComponent<HTMLSliderElementAttributes>;
    /**
     * A UI component that lets users toggle between two states.
     */
    Switch: DefineNativeComponent<HTMLSwitchElementAttributes>;
    /**
     * A navigation component that shows content grouped into tabs and lets users switch between tabs.
     */
    TabView: DefineNativeComponent<HTMLTabViewElementAttributes>;
    /**
     * A screen inside TabView.
     *
     * Currently, TabViewItem expects a single child element. In most cases, you might want to wrap your content in a layout.
     */
    TabViewItem: DefineNativeComponent<HTMLTabViewItemElementAttributes>;
    /**
     * A UI component that lets users select time.
     */
    TimePicker: DefineNativeComponent<HTMLTimePickerElementAttributes>;

    Label: DefineNativeComponent<HTMLLabelElementAttributes>;

    Span: DefineNativeComponent<HTMLSpanElementAttributes>;

    Button: DefineNativeComponent<HTMLButtonElementAttributes>;

    /**
     * A UI component used to display <Page> elements. Every app needs at least a single <Frame> element, usually set as the root element.
     */
    frame: DefineNativeComponent<HTMLFrameElementAttributes>;
    /**
     * A UI component that represents an application screen. NativeScript apps typically consist of one or more `<Page>` that wrap content such as an `<ActionBar>` and other UI widgets.
     */
    page: DefineNativeComponent<HTMLPageElementAttributes>;
    /**
     * This class is the base class for all UI components. A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within.
     */
    view: DefineNativeComponent<HTMLViewElementAttributes>;
    /**
     * A layout container that lets you stack the child elements vertically (default) or horizontally.
     */
    "stack-layout": DefineNativeComponent<HTMLStackLayoutElementAttributes>;
    /**
     * A layout container that provides a non-exact implementation of the CSS Flexbox layout. This layout lets you arrange child components both horizontally and vertically.
     */
    "flexbox-layout": DefineNativeComponent<HTMLFlexboxLayoutElementAttributes>;
    /**
        * A layout container that lets you arrange its child elements in a table-like manner.
   
   The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. 
   It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.
   
   By default, <GridLayout> has one column and one row. You can add columns and rows by configuring the columns and the rows properties. 
   In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, 
   separated by a comma. You set the number of rows by listing their heights, separated by a comma.
        */
    "grid-layout": DefineNativeComponent<HTMLGridLayoutElementAttributes>;
    /**
     * A UI component that shows an editable or a read-only multi-line text container. You can use it to let users type large text in your app or to show longer, multi-line text on the screen.
     */
    "text-view": DefineNativeComponent<HTMLTextViewElementAttributes>;
    /**
     * An input component that creates an editable single-line box.
     */
    "text-field": DefineNativeComponent<HTMLTextFieldElementAttributes>;
    /**
     * A layout container that lets you position items in rows or columns, based on the orientation property.
     * When the space is filled, the container automatically wraps items onto a new row or column.
     */
    "wrap-layout": DefineNativeComponent<HTMLWrapLayoutElementAttributes>;
    /**
     * The WebView component is used to display web content within your application.
     * You use the control by providing a `src` attribute that accepts a URL,a path
     * to a local HTML file or directly HTML string.
     */
    "web-view": DefineNativeComponent<HTMLWebViewElementAttributes>;
    /**
     * A layout that lets you specify exact locations (left/top coordinates) of its children.
     */
    "absolute-layout": DefineNativeComponent<HTMLAbsoluteLayoutElementAttributes>;
    /**
     * Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).
     */
    "action-bar": DefineNativeComponent<HTMLActionBarElementAttributes>;
    /**
     * Represents an action item in the action bar.
     */
    "action-item": DefineNativeComponent<HTMLActionItemElementAttributes>;
    /**
     * Represents a UI widget which displays a progress indicator hinting the user for some background operation running.
     */
    "activity-indicator": DefineNativeComponent<HTMLActivityIndicatorElementAttributes>;
    "content-view": DefineNativeComponent<HTMLContentViewElementAttributes>;
    /**
     * A UI component that lets users select a date from a pre-configured range.
     */
    "date-picker": DefineNativeComponent<HTMLDatePickerElementAttributes>;
    /**
     * a layout container that lets you dock child elements to the sides or the center of the layout.
     *
     * Use the `dock` property to dock its children to the `left`, `right`, `top`, `bottom` or `center` of the layout.
     * To dock a child element to the center, it must be the last child of the container and you must set
     * the `stretchLastChild` property of the parent to `true`.
     */
    "dock-layout": DefineNativeComponent<HTMLDockLayoutElementAttributes>;
    /**
     * A View to support various text transformations and decorations. The FormattedString class can be used
     * with all text-related components like `Label`, `TextView`, `TextField` and even `Button`.
     *
     * FormattedString only accepts `span` as it's children.
     */
    "formatted-string": DefineNativeComponent<HTMLFormattedStringElementAttributes>;
    /**
     * The HtmlView represents a view with HTML content. Use this component instead of a WebView when you want to show static HTML content with base HTML support.
     */
    "html-view": DefineNativeComponent<HTMLHtmlViewElementAttributes>;
    /**
     * The Image widget shows an image in your mobile application.
     */
    image: DefineNativeComponent<HTMLImageElementAttributes>;
    /**
     * The ListPicker is a spinner type component for listing options.
     */
    "list-picker": DefineNativeComponent<HTMLListPickerElementAttributes>;
    /**
     * A UI component that is used to render large lists of data.
     */
    "list-view": DefineNativeComponent<HTMLListViewElementAttributes>;
    /**
     *
     */
    "navigation-button": DefineNativeComponent<HTMLNavigationButtonElementAttributes>;
    /**
     * `<Placeholder>` allows you to add any native widget to your application. To do that, you need to put a Placeholder somewhere in
     * the UI hierarchy and then create and configure the native widget that you want to appear there. Finally,
     * pass your native widget to the event arguments of the creatingView event.
     */
    placeholder: DefineNativeComponent<HTMLPlaceholderElementAttributes>;
    /**
     * A UI component that shows a bar to indicate the progress of a task.
     */
    progress: DefineNativeComponent<HTMLProgressElementAttributes>;

    "proxy-view": DefineNativeComponent<HTMLProxyViewContainerElementAttributes>;
    /**
     * A layout container designed to be used as the primary root layout container for your app with a built in api to easily control dynamic view layers. It extends a GridLayout so has all the features of a grid but enhanced with additional apis.
     */
    "root-layout": DefineNativeComponent<HTMLRootLayoutElementAttributes>;
    /**
     * A UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.
     */
    "scroll-view": DefineNativeComponent<HTMLScrollViewElementAttributes>;
    /**
     * A UI component that provides a user interface for entering search queries and submitting requests to the search provider.
     */
    "search-bar": DefineNativeComponent<HTMLSearchBarElementAttributes>;
    /**
     * A UI bar component that displays a set of buttons for discrete selection. Can show text or images.
     */
    segmentedbar: DefineNativeComponent<HTMLSegmentedBarElementAttributes>;
    /**
     * An item displayed inside SegmentedBar.
     */
    "segmentedbar-item": DefineNativeComponent<HTMLSegmentedBarElementAttributes>;
    /**
     * A UI component that provides a slider control for picking values within a specified numeric range.
     */
    slider: DefineNativeComponent<HTMLSliderElementAttributes>;
    /**
     * A UI component that lets users toggle between two states.
     */
    switch: DefineNativeComponent<HTMLSwitchElementAttributes>;
    /**
     * A navigation component that shows content grouped into tabs and lets users switch between tabs.
     */
    tabview: DefineNativeComponent<HTMLTabViewElementAttributes>;
    /**
     * A screen inside TabView.
     *
     * Currently, TabViewItem expects a single child element. In most cases, you might want to wrap your content in a layout.
     */
    "tabview-item": DefineNativeComponent<HTMLTabViewItemElementAttributes>;
    /**
     * A UI component that lets users select time.
     */
    "time-picker": DefineNativeComponent<HTMLTimePickerElementAttributes>;
    label: DefineNativeComponent<HTMLLabelElementAttributes>;
    span: DefineNativeComponent<HTMLSpanElementAttributes>;
    button: DefineNativeComponent<HTMLButtonElementAttributes>;
  }
}
