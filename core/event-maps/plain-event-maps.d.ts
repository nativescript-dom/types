import * as NS from "@nativescript/core";
import {
  AnimationDefinition,
  CreateViewEventData,
  ItemEventData,
  LoadEventData,
  NavigatedData,
  ScrollEventData,
} from "@nativescript/core";
import { AnimationPromise } from "@nativescript/core/ui/animation";
import { SelectedIndexChangedEventData } from "@nativescript/core/ui/segmented-bar";
import {
  AccessibilityDecrementEventData,
  AccessibilityIncrementEventData,
} from "@nativescript/core/ui/slider";

export type ItemLoadingEventData = {
  view?: NS.ViewBase;
  index?: number;
  item?: any;
  data?: any;
};

declare global {
  type NativeDOMEventWithData<
    T extends EventTarget = EventTarget,
    D = any
  > = NativeDOMEvent<T> & D;

  interface NativeDOMEvent<T extends EventTarget = EventTarget> extends Event {
    currentTarget: T;
    target: T;
    /**
     * Name of the event
     */
    eventName: string;
    /**
     * The native object that emitted the event.
     */
    object: T;
  }

  type NativeDOMPropertyChangeEvent<T extends EventTarget = EventTarget> =
    NativeDOMEventWithData<T, NS.PropertyChangeData>;

  interface HTMLViewBaseElementEventsMap<T extends EventTarget = EventTarget> {
    loaded: NativeDOMEvent<T>;
    unloaded: NativeDOMEvent<T>;
    created: NativeDOMEvent<T>;
    disposeNativeView: NativeDOMEvent<T>;
  }

  interface HTMLViewElementEventsMap<T extends EventTarget = EventTarget>
    extends HTMLViewBaseElementEventsMap<T> {
    layoutChanged: NativeDOMEvent<T>;
    shownModally: NativeDOMEvent<T>;
    showingModally: NativeDOMEvent<T>;
    accessibilityBlur: NativeDOMEvent<T>;
    accessibilityFocus: NativeDOMEvent<T>;
    accessibilityPerformEscape: NativeDOMEvent<T>;
    accessibilityFocusChanged: NativeDOMEvent<T>;
    tap: NativeDOMEventWithData<T, NS.TapGestureEventData>;
    doubleTap: NativeDOMEventWithData<T, NS.TapGestureEventData>;
    pan: NativeDOMEventWithData<T, NS.PanGestureEventData>;
    swipe: NativeDOMEventWithData<T, NS.SwipeGestureEventData>;
    rotation: NativeDOMEventWithData<T, NS.RotationGestureEventData>;
    longPress: NativeDOMEventWithData<T, NS.GestureEventData>;
    touch: NativeDOMEventWithData<T, NS.TouchGestureEventData>;
    pinch: NativeDOMEventWithData<T, NS.PinchGestureEventData>;
    androidBackPressed: NativeDOMEventWithData<
      T,
      NS.AndroidActivityBackPressedEventData
    >;
  }

  interface HTMLPageElementEventsMap extends HTMLViewElementEventsMap {
    navigatingTo: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatedTo: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatingFrom: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatedFrom: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
  }

  interface HTMLFrameElementEventsMap extends HTMLViewElementEventsMap {
    navigatingTo: NativeDOMEventWithData<HTMLFrameElement, NavigatedData>;
    navigatedTo: NativeDOMEventWithData<HTMLFrameElement, NavigatedData>;
  }

  interface HTMLDatePickerElementEventsMap extends HTMLViewElementEventsMap {
    dateChange: NativeDOMPropertyChangeEvent<HTMLDatePickerElement>;
  }

  interface HTMLListPickerElementEventsMap
    extends HTMLViewElementEventsMap<HTMLListPickerElement> {
    selectedIndexChange?: NativeDOMPropertyChangeEvent<HTMLListPickerElement>;
    selectedValueChange?: NativeDOMPropertyChangeEvent<HTMLListPickerElement>;
  }

  interface HTMLListViewElementEventsMap
    extends HTMLViewElementEventsMap<HTMLListViewElement> {
    itemLoading: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>;
    itemTap: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>;
    loadMoreItems: NativeDOMEvent<HTMLListViewElement>;
  }

  interface HTMLPlaceholderElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLPlaceholderElement> {
    creatingView: NativeDOMEventWithData<
      HTMLPlaceholderElement,
      CreateViewEventData
    >;
  }

  interface HTMLProgressElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLProgressElement> {
    valueChange: NativeDOMPropertyChangeEvent<HTMLProgressElement>;
  }

  interface HTMLSearchBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSearchBarElement> {
    submit: NativeDOMEvent<HTMLSearchBarElement>;
    clear: NativeDOMEvent<HTMLSearchBarElement>;
    close: NativeDOMEvent<HTMLSearchBarElement>;
    textChange: NativeDOMEvent<HTMLSearchBarElement>;
  }

  interface HTMLScrollViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLScrollViewElement> {
    scroll: NativeDOMEventWithData<HTMLScrollViewElement, ScrollEventData>;
  }

  interface HTMLSegmentedBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSegmentedBarElement> {
    selectedIndexChanged: NativeDOMEventWithData<
      HTMLSegmentedBarElement,
      SelectedIndexChangedEventData
    >;
  }

  interface HTMLNSpanElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSpanElement> {
    linkTap: NativeDOMEvent<HTMLSpanElement>;
  }

  interface HTMLSwitchELementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSwitchELement> {
    checkedChange: NativeDOMPropertyChangeEvent<HTMLSwitchELement>;
  }

  interface HTMLTabViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTabViewELement> {
    selectedIndexChanged: NativeDOMEventWithData<
      HTMLTabViewELement,
      SelectedIndexChangedEventData
    >;
  }

  interface HTMLTextFieldElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTextFieldElement> {
    focus: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
    returnPress: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
    blur: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
    textChange: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
  }

  interface HTMLTextViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTextViewElement> {
    focus: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
    returnPress: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
    blur: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
    textChange: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
  }

  interface HTMLSliderElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSliderElement> {
    accessibilityDecrement: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityIncrementEventData
    >;
    accessibilityIncrement: NativeDOMEventWithData<
      HTMLSliderElement,
      AccessibilityDecrementEventData
    >;
  }

  interface HTMLWebViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLWebViewElement> {
    loadStarted: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>;
    loadFinished: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>;
  }

  interface HTMLTimePickerElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTimePickerElement> {
    timeChange?: (
      event: NativeDOMPropertyChangeEvent<HTMLTimePickerElement>
    ) => void;
  }

  interface HTMLEditableTextBaseElementEventsMap<
    T extends HTMLTextBaseElement = HTMLTextBaseElement
  > extends HTMLViewBaseElementEventsMap<T> {}

  interface HTMLTabViewItemElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTabViewItemElement> {}

  interface HTMLSegmentedBarItemElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSegmentedBarElement> {}

  interface HTMLProxyViewContainerElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLProxyViewContainerElement> {}

  interface HTMLNavigationButtonElementEventsMap
    extends HTMLViewElementEventsMap<HTMLNavigationButtonElement> {}

  interface HTMLLabelElementEventsMap
    extends HTMLViewElementEventsMap<HTMLLabelElement> {}

  interface HTMLTextBaseElementEventsMap<
    T extends HTMLTextBaseElement = HTMLTextBaseElement
  > extends HTMLViewBaseElementEventsMap<T> {}

  interface HTMLNButtonElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLButtonElement> {}

  interface HTMLFormattedStringElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLFormattedStringElement> {}

  interface HTMLHTMLViewElementEventsMap
    extends HTMLViewElementEventsMap<HTMLHTMLViewElement> {}

  interface HTMLImageElementEventsMap
    extends HTMLViewElementEventsMap<HTMLImageElement> {}
}
