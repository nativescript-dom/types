import {
  DOMNode,
  AlignSelf,
  Page,
  EventData,
  PropertyChangeData,
  TapGestureEventData,
  PanGestureEventData,
  SwipeGestureEventData,
  RotationGestureEventData,
  GestureEventDataWithState,
  TouchGestureEventData,
  UILongPressGestureRecognizer,
  ReorderLongPressImpl,
  CGPoint,
  Template,
  KeyedTemplate,
  CoreTypesLength,
  ItemsSource,
  View,
  AccessibilityLiveRegion,
  UICollectionView,
} from "@nativescript/core";
import {
  ViewBase,
  CollectionView,
  Orientation,
  CollectionViewItemEventData,
  CollectionViewBase,
} from "@nativescript-community/ui-collectionview";
import {
  NSDOMAttributes,
  ViewAttributes,
  ViewBaseAttributes,
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
      extends ViewAttributes<CollectionView> {
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

      isScrolling?: string | boolean;

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
       * Active transition instance id for tracking state
       */
      transitionId?: string | number;

      css?: string;

      /**
       * Returns the current modal view that this page is showing (is parent of), if any.
       */
      modal?: View;

      backgroundSize?: string;

      backgroundPosition?: string;

      backgroundRepeat?: BackgroundRepeatType;

      textTransform?: TextTransformType;

      /**
       * If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
       */
      accessible?: string | boolean;

      /**
       * When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.
       */
      accessibilityLiveRegion?: AccessibilityLiveRegion;

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

      isLayoutRequired?: string | boolean;

      needsNativeDrawableFill?: string | boolean;

      recycleNativeView?: "auto" | "always" | "never";

      /**
       * read-only. If you want to set out-of-band the nativeView use the setNativeView method.
       */
      nativeViewProtected?: UICollectionView;

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
       *
       */
      "on:accessibilityPerformEscape"?: (event: NSDOMEvent<EventData>) => void;
    }

    export interface CollectionViewBaseAttributes
      extends ViewAttributes<CollectionViewBase> {
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
       * Active transition instance id for tracking state
       */
      transitionId?: string | number;

      css?: string;

      /**
       * Returns the current modal view that this page is showing (is parent of), if any.
       */
      modal?: View;

      backgroundSize?: string;

      backgroundPosition?: string;

      backgroundRepeat?: BackgroundRepeatType;

      textTransform?: TextTransformType;

      /**
       * If `true` the element is an accessibility element and all the children will be treated as a single selectable component.
       */
      accessible?: string | boolean;

      /**
       * When components dynamically change, we want TalkBack to alert the end user. This is made possible by the accessibilityLiveRegion property.
       */
      accessibilityLiveRegion?: AccessibilityLiveRegion;

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

      isLayoutRequired?: string | boolean;

      needsNativeDrawableFill?: string | boolean;

      recycleNativeView?: "auto" | "always" | "never";

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
       *
       */
      "on:accessibilityPerformEscape"?: (event: NSDOMEvent<EventData>) => void;
    }

    export interface IntrinsicElements {
      collectionview: CollectionViewAttributes;
      collectionviewbase: CollectionViewBaseAttributes;
    }
  }
}
