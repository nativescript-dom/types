import {
  NSDOMAttributes,
  ViewAttributes,
  ViewBaseAttributes,
  NSDOMEvent,
  ColorValue,
  Style,
} from "ns-vue/jsx-runtime";
import {} from "@nativescript/core";
import {
  CollectionView,
  Orientation,
  CollectionViewItemEventData,
} from "@nativescript-community/ui-collectionview";
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
export interface CollectionViewAttributes
  extends ViewAttributes<CollectionView> {
  isScrollEnabled?: string | boolean;

  orientation?: Orientation;

  /**
   *
   */
  onItemLoading?: (event: NSDOMEvent<CollectionViewItemEventData>) => void;
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    CollectionView: DefineComponent<CollectionViewAttributes>;
  }
}
