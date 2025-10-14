import {
  CoreTypes,
  Color,
  AccessibilityRole,
  AccessibilityState,
  LinearGradient,
  ShadowCSSValues,
  FlexFlow,
  Flex,
  VisionHoverOptions,
  TouchAnimationOptions,
  AlignSelf,
  EventData,
  ShownModallyData,
  EventDataValue,
  PropertyChangeData,
  TapGestureEventData,
  PanGestureEventData,
  SwipeGestureEventData,
  RotationGestureEventData,
  GestureEventDataWithState,
  TouchGestureEventData,
} from "@nativescript/core";
import {
  CollectionView,
  CollectionViewItemEventData,
} from "@nativescript-community/ui-collectionview";
import { NSDOMAttributes, NSDOMEvent, ColorValue } from "ns-solid/jsx-runtime";
declare module "ns-solid/jsx-runtime" {
  export namespace JSX {
    export interface CollectionViewAttributes
      extends NSDOMAttributes<CollectionView> {
      [name: string]: any;

      isScrollEnabled?: string | boolean;

      orientation?: Orientation;

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
      margin?:
        | string
        | number
        | LengthDipUnit
        | LengthPxUnit
        | LengthPercentUnit;

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
       * Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.
       */
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
      dock?: "left" | "right" | "top" | "bottom";

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
       * undefined
       */
      "on:itemLoading"?: (
        event: NSDOMEvent<CollectionViewItemEventData>,
      ) => void;

      /**
       * String value used when hooking to layoutChanged event.
       */
      "on:layoutChanged"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to showingModally event.
       */
      "on:showingModally"?: (event: NSDOMEvent<ShownModallyData>) => void;

      /**
       * String value used when hooking to shownModally event.
       */
      "on:shownModally"?: (event: NSDOMEvent<ShownModallyData>) => void;

      /**
       * String value used when hooking to accessibilityBlur event.
       */
      "on:accessibilityBlur"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to accessibilityFocus event.
       */
      "on:accessibilityFocus"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to accessibilityFocusChanged event.
       */
      "on:accessibilityFocusChanged"?: (
        event: NSDOMEvent<EventDataValue>,
      ) => void;

      /**
       * String value used when hooking to androidOverflowInset event.
       */
      "on:androidOverflowInset"?: (event: NSDOMEvent<EventDataValue>) => void;

      /**
       * String value used when hooking to loaded event.
       */
      "on:loaded"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to unloaded event.
       */
      "on:unloaded"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to creation event
       */
      "on:created"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to disposeNativeView event
       */
      "on:disposeNativeView"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to propertyChange event.
       */
      "on:propertyChange"?: (event: NSDOMEvent<PropertyChangeData>) => void;

      /**
       * Gesture Event
       */
      "on:tap"?: (event: TapGestureEventData) => void;

      /**
       * Gesture Event
       */
      "on:doubleTap"?: (event: TapGestureEventData) => void;

      /**
       * Gesture Event
       */
      "on:pan"?: (event: PanGestureEventData) => void;

      /**
       * Gesture Event
       */
      "on:swipe"?: (event: SwipeGestureEventData) => void;

      /**
       * Gesture Event
       */
      "on:rotation"?: (event: RotationGestureEventData) => void;

      /**
       * Gesture Event
       */
      "on:longPress"?: (event: GestureEventDataWithState) => void;

      /**
       * Gesture Event
       */
      "on:touch"?: (event: TouchGestureEventData) => void;
    }

    export interface IntrinsicElements {
      collectionview: CollectionViewAttributes;
    }
  }
}
