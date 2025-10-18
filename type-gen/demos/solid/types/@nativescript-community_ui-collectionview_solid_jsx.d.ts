import {
  UILongPressGestureRecognizer,
  ReorderLongPressImpl,
  CGPoint,
  Template,
  CoreTypesLength,
  View,
  TouchAnimationOptions,
  VisionHoverOptions,
  FlexFlow,
  Flex,
  Color,
  Color,
  LinearGradient,
  ShadowCSSValues,
  AccessibilityRole,
  AccessibilityState,
  AccessibilityLiveRegion,
  DOMNode,
  UICollectionView,
  ViewBase,
  AlignSelf,
  Page,
  ScrollEventData,
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
  Template,
  TouchAnimationOptions,
  VisionHoverOptions,
  LinearGradient,
  ShadowCSSValues,
} from "@nativescript/core";
import {
  CollectionView,
  Orientation,
  CollectionViewItemEventData,
  CollectionViewBase,
} from "@nativescript-community/ui-collectionview";
import {
  NSDOMAttributes,
  NSDOMEvent,
  ColorValue,
  Style,
} from "ns-solid/jsx-runtime";
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
declare module "ns-solid/jsx-runtime" {
  export namespace JSX {
    export interface CollectionViewAttributes
      extends NSDOMAttributes<CollectionView> {
      [name: string]: any;

      autoSize?: string | boolean;

      reorderLongPressGesture?: UILongPressGestureRecognizer;

      reorderLongPressHandler?: ReorderLongPressImpl;

      reorderStartingRow?: string | number;

      reorderEndingRow?: string | number;

      manualDragging?: string | boolean;

      scrollEnabledBeforeDragging?: string | boolean;

      estimatedItemSize?: string | boolean;

      draggingStartDelta?: [number, number];

      verticalOffsetX?: string | number;

      verticalOffsetY?: string | number;

      lastContentOffset?: CGPoint;

      needsScrollStartEvent?: string | boolean;

      isScrolling?: string | boolean;

      itemLoadingEvent?: string;

      itemRecyclingEvent?: string;

      itemDisposingEvent?: string;

      bindedEvent?: string;

      scrollEvent?: string;

      scrollStartEvent?: string;

      scrollEndEvent?: string;

      itemTapEvent?: string;

      displayItemEvent?: string;

      itemReorderedEvent?: string;

      itemReorderCheckEvent?: string;

      itemReorderStartingEvent?: string;

      itemReorderStartedEvent?: string;

      loadMoreItemsEvent?: string;

      dataPopulatedEvent?: string;

      knownFunctions?: string[];

      isBounceEnabled?: string | boolean;

      isScrollEnabled?: string | boolean;

      reverseLayout?: string | boolean;

      orientation?: Orientation;

      itemTemplate?: string | Template;

      itemTemplates?: string | KeyedTemplate[];

      isItemsSourceIn?: string | boolean;

      rowHeight?: CoreTypesLength;

      colWidth?: CoreTypesLength;

      verticalSpacing?: LengthType;

      horizontalSpacing?: LengthType;

      spanSize?: (item: any, index: number) => number;

      itemOverlap?: (
        item: any,
        index: number,
      ) => [number, number, number, number];

      loadMoreThreshold?: string | number;

      reorderEnabled?: string | boolean;

      /**
     * Used on iOS to auto update cells size if the cell request a layout change (like image itemLoading).
Experimental and true by default
*/
      autoReloadItemOnLayout?: string | boolean;

      reorderLongPressEnabled?: string | boolean;

      scrollBarIndicatorVisible?: string | boolean;

      layoutStyle?: string;

      plugins?: string[];

      layoutStyles?: {
        [k: string]: {
          createLayout: Function;
          createDelegate?: Function | undefined;
        };
      };

      items?: any[] | ItemsSource;

      itemViewLoader?: string;

      padding?: string | number | LengthDipUnit | LengthPxUnit;

      paddingTop?: LengthType;

      paddingRight?: LengthType;

      paddingBottom?: LengthType;

      paddingLeft?: LengthType;

      onSpanSizeChanged?: (oldValue: any, newValue: any) => void;

      onItemOverlapChanged?: (oldValue: any, newValue: any) => void;

      draggingView?: View;

      scrollOffset?: string | number;

      /**
       * String value used when hooking to layoutChanged event.
       */
      layoutChangedEvent?: string;

      /**
       * String value used when hooking to shownModally event.
       */
      shownModallyEvent?: string;

      /**
       * String value used when hooking to showingModally event.
       */
      showingModallyEvent?: string;

      /**
       * String value used when hooking to accessibilityBlur event.
       */
      accessibilityBlurEvent?: string;

      /**
       * String value used when hooking to accessibilityFocus event.
       */
      accessibilityFocusEvent?: string;

      /**
       * String value used when hooking to accessibilityFocusChanged event.
       */
      accessibilityFocusChangedEvent?: string;

      accessibilityPerformEscapeEvent?: string;

      /**
       * String value used when hooking to androidOverflowInset event.
       */
      androidOverflowInsetEvent?: string;

      /**
     * The view's unique accessibilityIdentifier.

This is used for automated testing.
*/
      accessibilityIdentifier?: string;

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

      accessibilityIgnoresInvertColors?: string | boolean;

      testID?: string;

      touchAnimation?: string | boolean | TouchAnimationOptions;

      ignoreTouchAnimation?: string | boolean;

      touchDelay?: string | number;

      /**
       * visionOS only
       */
      visionHoverStyle?: string | VisionHoverOptions;

      /**
       * visionOS only
       */
      visionIgnoreHoverStyle?: string | boolean;

      /**
       * Active transition instance id for tracking state
       */
      transitionId?: string | number;

      css?: string;

      /**
       * Returns the current modal view that this page is showing (is parent of), if any.
       */
      modal?: View;

      /**
       * The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
       */
      flexFlow?: FlexFlow;

      /**
       * The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
       */
      flex?: Flex;

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

      backgroundSize?: string;

      backgroundPosition?: string;

      backgroundRepeat?: BackgroundRepeatType;

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

      textTransform?: TextTransformType;

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
       * If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
       */
      accessible?: string | boolean;

      /**
       * Hide the view and its children from the a11y service
       */
      accessibilityHidden?: string | boolean;

      /**
       * Which role should this view be treated by the a11y service?
       */
      accessibilityRole?: AccessibilityRole;

      /**
       * Which state should this view be treated as by the a11y service?
       */
      accessibilityState?: AccessibilityState;

      /**
       * When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.
       */
      accessibilityLiveRegion?: AccessibilityLiveRegion;

      /**
     * Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.
*/
      accessibilityLanguage?: string;

      /**
       * This view starts a media session. Equivalent to trait = startsMedia
       */
      accessibilityMediaSession?: string | boolean;

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
       * Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
       */
      originX?: string | number;

      /**
       * Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
       */
      originY?: string | number;

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

      androidOverflowEdge?: string;

      /**
       * Gets is layout is valid. This is a read-only property.
       */
      isLayoutValid?: string | boolean;

      /**
     * Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.
*/
      cssType?: string;

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

      isLayoutRequired?: string | boolean;

      needsNativeDrawableFill?: string | boolean;

      /**
       * String value used when hooking to loaded event.
       */
      loadedEvent?: string;

      /**
       * String value used when hooking to unloaded event.
       */
      unloadedEvent?: string;

      /**
       * String value used when hooking to creation event
       */
      createdEvent?: string;

      /**
       * String value used when hooking to disposeNativeView event
       */
      disposeNativeViewEvent?: string;

      domNode?: DOMNode;

      recycleNativeView?: "auto" | "always" | "never";

      /**
       * returns the native UIViewController.
       */
      viewController?: string;

      /**
       * Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.
       */
      bindingContext?: string;

      /**
       * read-only. If you want to set out-of-band the nativeView use the setNativeView method.
       */
      nativeViewProtected?: UICollectionView;

      /**
       * Gets the parent view. This property is read-only.
       */
      parent?: ViewBase;

      /**
     * Returns true if visibility is set to 'collapse'.
Default(false) set in prototype
Readonly property
*/
      isCollapsed?: string;

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

      effectiveLeft?: string | number;

      effectiveTop?: string | number;

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

      effectiveMinWidth?: string | number;

      effectiveMinHeight?: string | number;

      effectiveWidth?: string | number;

      effectiveHeight?: string | number;

      effectiveMarginTop?: string | number;

      effectiveMarginRight?: string | number;

      effectiveMarginBottom?: string | number;

      effectiveMarginLeft?: string | number;

      effectivePaddingTop?: string | number;

      effectivePaddingRight?: string | number;

      effectivePaddingBottom?: string | number;

      effectivePaddingLeft?: string | number;

      effectiveBorderTopWidth?: string | number;

      effectiveBorderRightWidth?: string | number;

      effectiveBorderBottomWidth?: string | number;

      effectiveBorderLeftWidth?: string | number;

      /**
       * Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.
       */
      reusable?: string | boolean;

      cssClasses?: Set<string>;

      cssPseudoClasses?: Set<string>;

      /**
       * Gets the template parent or the native parent. Sets the template parent.
       */
      parentNode?: ViewBase;

      nativeView?: string;

      /**
       * Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".
       */
      typeName?: string;

      /**
       * Gets the style object associated to this view.
       */
      style?: Style;

      /**
       * Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.
       */
      android?: string;

      /**
       * Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.
       */
      ios?: string;

      isLoaded?: string | boolean;

      /**
       * Gets owner page. This is a read-only property.
       */
      page?: Page;

      /**
     * if _setupAsRootView is called it means it is not supposed to be
added to a parent. However parent can be set before for the purpose
of CSS variables/classes. That variable ensures that _addViewToNativeVisualTree
is not called in _setupAsRootView
*/
      mIsRootView?: string | boolean;

      visualState?: string;

      /**
       * String value used when hooking to propertyChange event.
       */
      propertyChangeEvent?: string;

      /**
       *
       */
      "on:itemLoading"?: (
        event: NSDOMEvent<CollectionViewItemEventData>,
      ) => void;

      /**
       *
       */
      "on:itemRecycling"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemDisposing"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:binded"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:scroll"?: (event: NSDOMEvent<ScrollEventData>) => void;

      /**
       *
       */
      "on:scrollStart"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:scrollEnd"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemTap"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:displayItem"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReordered"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReorderCheck"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReorderStarting"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReorderStarted"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:loadMoreItems"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:dataPopulated"?: (event: NSDOMEvent<EventData>) => void;

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
      "on:shownModally"?: (event: NSDOMEvent<EventData>) => void;

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
      "on:androidOverflowInset"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:accessibilityPerformEscape"?: (event: NSDOMEvent<EventData>) => void;

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
      "on:doubleTap"?: (event: EventData) => void;

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

    export interface CollectionViewBaseAttributes
      extends NSDOMAttributes<CollectionViewBase> {
      [name: string]: any;

      itemLoadingEvent?: string;

      itemRecyclingEvent?: string;

      itemDisposingEvent?: string;

      bindedEvent?: string;

      scrollEvent?: string;

      scrollStartEvent?: string;

      scrollEndEvent?: string;

      itemTapEvent?: string;

      displayItemEvent?: string;

      itemReorderedEvent?: string;

      itemReorderCheckEvent?: string;

      itemReorderStartingEvent?: string;

      itemReorderStartedEvent?: string;

      loadMoreItemsEvent?: string;

      dataPopulatedEvent?: string;

      knownFunctions?: string[];

      isBounceEnabled?: string | boolean;

      isScrollEnabled?: string | boolean;

      reverseLayout?: string | boolean;

      orientation?: Orientation;

      itemTemplate?: string | Template;

      itemTemplates?: string | KeyedTemplate[];

      isItemsSourceIn?: string | boolean;

      rowHeight?: CoreTypesLength;

      colWidth?: CoreTypesLength;

      verticalSpacing?: LengthType;

      horizontalSpacing?: LengthType;

      spanSize?: (item: any, index: number) => number;

      itemOverlap?: (
        item: any,
        index: number,
      ) => [number, number, number, number];

      loadMoreThreshold?: string | number;

      reorderEnabled?: string | boolean;

      /**
     * Used on iOS to auto update cells size if the cell request a layout change (like image itemLoading).
Experimental and true by default
*/
      autoReloadItemOnLayout?: string | boolean;

      reorderLongPressEnabled?: string | boolean;

      scrollBarIndicatorVisible?: string | boolean;

      layoutStyle?: string;

      plugins?: string[];

      layoutStyles?: {
        [k: string]: {
          createLayout: Function;
          createDelegate?: Function | undefined;
        };
      };

      items?: any[] | ItemsSource;

      itemViewLoader?: string;

      padding?: string | number | LengthDipUnit | LengthPxUnit;

      paddingTop?: LengthType;

      paddingRight?: LengthType;

      paddingBottom?: LengthType;

      paddingLeft?: LengthType;

      onSpanSizeChanged?: (oldValue: any, newValue: any) => void;

      onItemOverlapChanged?: (oldValue: any, newValue: any) => void;

      draggingView?: View;

      scrollOffset?: string | number;

      /**
       * String value used when hooking to layoutChanged event.
       */
      layoutChangedEvent?: string;

      /**
       * String value used when hooking to shownModally event.
       */
      shownModallyEvent?: string;

      /**
       * String value used when hooking to showingModally event.
       */
      showingModallyEvent?: string;

      /**
       * String value used when hooking to accessibilityBlur event.
       */
      accessibilityBlurEvent?: string;

      /**
       * String value used when hooking to accessibilityFocus event.
       */
      accessibilityFocusEvent?: string;

      /**
       * String value used when hooking to accessibilityFocusChanged event.
       */
      accessibilityFocusChangedEvent?: string;

      accessibilityPerformEscapeEvent?: string;

      /**
       * String value used when hooking to androidOverflowInset event.
       */
      androidOverflowInsetEvent?: string;

      /**
     * The view's unique accessibilityIdentifier.

This is used for automated testing.
*/
      accessibilityIdentifier?: string;

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

      accessibilityIgnoresInvertColors?: string | boolean;

      testID?: string;

      touchAnimation?: string | boolean | TouchAnimationOptions;

      ignoreTouchAnimation?: string | boolean;

      touchDelay?: string | number;

      /**
       * visionOS only
       */
      visionHoverStyle?: string | VisionHoverOptions;

      /**
       * visionOS only
       */
      visionIgnoreHoverStyle?: string | boolean;

      /**
       * Active transition instance id for tracking state
       */
      transitionId?: string | number;

      css?: string;

      /**
       * Returns the current modal view that this page is showing (is parent of), if any.
       */
      modal?: View;

      /**
       * The flex-flow Shorthand property specifies the direction of a flex container, as well as its wrapping behavior.
       */
      flexFlow?: FlexFlow;

      /**
       * The flex shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.
       */
      flex?: Flex;

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

      backgroundSize?: string;

      backgroundPosition?: string;

      backgroundRepeat?: BackgroundRepeatType;

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

      textTransform?: TextTransformType;

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
       * If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
       */
      accessible?: string | boolean;

      /**
       * Hide the view and its children from the a11y service
       */
      accessibilityHidden?: string | boolean;

      /**
       * Which role should this view be treated by the a11y service?
       */
      accessibilityRole?: AccessibilityRole;

      /**
       * Which state should this view be treated as by the a11y service?
       */
      accessibilityState?: AccessibilityState;

      /**
       * When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.
       */
      accessibilityLiveRegion?: AccessibilityLiveRegion;

      /**
     * Sets the language in which to speak the element's label and value.
Accepts language ID tags that follows the "BCP 47" specification.
*/
      accessibilityLanguage?: string;

      /**
       * This view starts a media session. Equivalent to trait = startsMedia
       */
      accessibilityMediaSession?: string | boolean;

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
       * Gets or sets the X component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
       */
      originX?: string | number;

      /**
       * Gets or sets the Y component of the origin point around which the view will be transformed. The default value is 0.5 representing the center of the view.
       */
      originY?: string | number;

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

      androidOverflowEdge?: string;

      /**
       * Gets is layout is valid. This is a read-only property.
       */
      isLayoutValid?: string | boolean;

      /**
     * Gets the CSS fully qualified type name.
Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.
*/
      cssType?: string;

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

      isLayoutRequired?: string | boolean;

      needsNativeDrawableFill?: string | boolean;

      /**
       * String value used when hooking to loaded event.
       */
      loadedEvent?: string;

      /**
       * String value used when hooking to unloaded event.
       */
      unloadedEvent?: string;

      /**
       * String value used when hooking to creation event
       */
      createdEvent?: string;

      /**
       * String value used when hooking to disposeNativeView event
       */
      disposeNativeViewEvent?: string;

      domNode?: DOMNode;

      recycleNativeView?: "auto" | "always" | "never";

      /**
       * returns the native UIViewController.
       */
      viewController?: string;

      /**
       * Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.
       */
      bindingContext?: string;

      /**
       * read-only. If you want to set out-of-band the nativeView use the setNativeView method.
       */
      nativeViewProtected?: string;

      /**
       * Gets the parent view. This property is read-only.
       */
      parent?: ViewBase;

      /**
     * Returns true if visibility is set to 'collapse'.
Default(false) set in prototype
Readonly property
*/
      isCollapsed?: string;

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

      effectiveLeft?: string | number;

      effectiveTop?: string | number;

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

      effectiveMinWidth?: string | number;

      effectiveMinHeight?: string | number;

      effectiveWidth?: string | number;

      effectiveHeight?: string | number;

      effectiveMarginTop?: string | number;

      effectiveMarginRight?: string | number;

      effectiveMarginBottom?: string | number;

      effectiveMarginLeft?: string | number;

      effectivePaddingTop?: string | number;

      effectivePaddingRight?: string | number;

      effectivePaddingBottom?: string | number;

      effectivePaddingLeft?: string | number;

      effectiveBorderTopWidth?: string | number;

      effectiveBorderRightWidth?: string | number;

      effectiveBorderBottomWidth?: string | number;

      effectiveBorderLeftWidth?: string | number;

      /**
       * Gets or sets if the view is reusable. Reusable views are not automatically destroyed when removed from the View tree.
       */
      reusable?: string | boolean;

      cssClasses?: Set<string>;

      cssPseudoClasses?: Set<string>;

      /**
       * Gets the template parent or the native parent. Sets the template parent.
       */
      parentNode?: ViewBase;

      nativeView?: string;

      /**
       * Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".
       */
      typeName?: string;

      /**
       * Gets the style object associated to this view.
       */
      style?: Style;

      /**
       * Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.
       */
      android?: string;

      /**
       * Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.
       */
      ios?: string;

      isLoaded?: string | boolean;

      /**
       * Gets owner page. This is a read-only property.
       */
      page?: Page;

      /**
     * if _setupAsRootView is called it means it is not supposed to be
added to a parent. However parent can be set before for the purpose
of CSS variables/classes. That variable ensures that _addViewToNativeVisualTree
is not called in _setupAsRootView
*/
      mIsRootView?: string | boolean;

      visualState?: string;

      /**
       * String value used when hooking to propertyChange event.
       */
      propertyChangeEvent?: string;

      /**
       *
       */
      "on:itemLoading"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemRecycling"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemDisposing"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:binded"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:scroll"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:scrollStart"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:scrollEnd"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemTap"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:displayItem"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReordered"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReorderCheck"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReorderStarting"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:itemReorderStarted"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:loadMoreItems"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:dataPopulated"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to layoutChanged event.
       */
      "on:layoutChanged"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to showingModally event.
       */
      "on:showingModally"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to shownModally event.
       */
      "on:shownModally"?: (event: NSDOMEvent<EventData>) => void;

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
      "on:accessibilityFocusChanged"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * String value used when hooking to androidOverflowInset event.
       */
      "on:androidOverflowInset"?: (event: NSDOMEvent<EventData>) => void;

      /**
       *
       */
      "on:accessibilityPerformEscape"?: (event: NSDOMEvent<EventData>) => void;

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
      "on:propertyChange"?: (event: NSDOMEvent<EventData>) => void;

      /**
       * Gesture Event
       */
      "on:tap"?: (event: EventData) => void;

      /**
       * Gesture Event
       */
      "on:doubleTap"?: (event: EventData) => void;

      /**
       * Gesture Event
       */
      "on:pan"?: (event: EventData) => void;

      /**
       * Gesture Event
       */
      "on:swipe"?: (event: EventData) => void;

      /**
       * Gesture Event
       */
      "on:rotation"?: (event: EventData) => void;

      /**
       * Gesture Event
       */
      "on:longPress"?: (event: EventData) => void;

      /**
       * Gesture Event
       */
      "on:touch"?: (event: EventData) => void;
    }

    export interface IntrinsicElements {
      collectionview: CollectionViewAttributes;
      collectionviewbase: CollectionViewBaseAttributes;
    }
  }
}
