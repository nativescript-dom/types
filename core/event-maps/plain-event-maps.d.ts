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
  /**
   * @element view-base-events
   */
  interface HTMLViewBaseElementEventsMap<T extends EventTarget = EventTarget> {
    /**
     * An event that fires when the native view is rendered in the
     * native view hierarchy.
     */
    loaded: NativeDOMEvent<T>;
    /**
     * An event that fires when the native view is removed from the
     * native view hierarchy.
     */
    unloaded: NativeDOMEvent<T>;
    /**
     * An event that fires as soon as a view is created. At this point, the native view has not been
     * created yet.
     */
    created: NativeDOMEvent<T>;
    /**
     * An event that fires when the native view is disposed. This gets called after the `unloaded`
     * event fires.
     */
    disposeNativeView: NativeDOMEvent<T>;
  }
  /**
   * @element view-events
   */
  interface HTMLViewElementEventsMap<T extends EventTarget = EventTarget>
    extends HTMLViewBaseElementEventsMap<T> {
    /**
     * An event that fires when the position or size of a rendered native view changes.
     */
    layoutChanged: NativeDOMEvent<T>;
    /**
     * An event that fires when a native view is shown modally.
     */
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
  /**
   * @element page-events
   */
  interface HTMLPageElementEventsMap extends HTMLViewElementEventsMap {
    navigatingTo: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatedTo: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatingFrom: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatedFrom: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
  }
  /**
   * @element frame-events
   */
  interface HTMLFrameElementEventsMap extends HTMLViewElementEventsMap {
    navigatingTo: NativeDOMEventWithData<HTMLFrameElement, NavigatedData>;
    navigatedTo: NativeDOMEventWithData<HTMLFrameElement, NavigatedData>;
  }
  /**
   * @element date-picker-events
   */
  interface HTMLDatePickerElementEventsMap extends HTMLViewElementEventsMap {
    dateChange: NativeDOMPropertyChangeEvent<HTMLDatePickerElement>;
  }
  /**
   * @element list-picker-events
   */
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
  /**
   * @element placeholder-events
   */
  interface HTMLPlaceholderElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLPlaceholderElement> {
    creatingView: NativeDOMEventWithData<
      HTMLPlaceholderElement,
      CreateViewEventData
    >;
  }
  /**
   * @element progress-events
   */
  interface HTMLProgressElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLProgressElement> {
    valueChange: NativeDOMPropertyChangeEvent<HTMLProgressElement>;
  }
  /**
   * @element search-bar-events
   */
  interface HTMLSearchBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSearchBarElement> {
    submit: NativeDOMEvent<HTMLSearchBarElement>;
    clear: NativeDOMEvent<HTMLSearchBarElement>;
    close: NativeDOMEvent<HTMLSearchBarElement>;
    textChange: NativeDOMEvent<HTMLSearchBarElement>;
  }
  /**
   * @element scroll-view-events
   */
  interface HTMLScrollViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLScrollViewElement> {
    scroll: NativeDOMEventWithData<HTMLScrollViewElement, ScrollEventData>;
  }
  /**
   * @element segmented-bar-events
   */
  interface HTMLSegmentedBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSegmentedBarElement> {
    selectedIndexChanged: NativeDOMEventWithData<
      HTMLSegmentedBarElement,
      SelectedIndexChangedEventData
    >;
  }
  /**
   * @element span-events
   */
  interface HTMLNSpanElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSpanElement> {
    linkTap: NativeDOMEvent<HTMLSpanElement>;
  }
  /**
   * @element switch-events
   */
  interface HTMLSwitchELementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSwitchELement> {
    checkedChange: NativeDOMPropertyChangeEvent<HTMLSwitchELement>;
  }
  /**
   * @element tab-view-events
   */
  interface HTMLTabViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTabViewELement> {
    selectedIndexChanged: NativeDOMEventWithData<
      HTMLTabViewELement,
      SelectedIndexChangedEventData
    >;
  }
  /**
   * @element text-field-events
   */
  interface HTMLTextFieldElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTextFieldElement> {
    focus: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
    returnPress: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
    blur: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
    textChange: NativeDOMPropertyChangeEvent<HTMLTextFieldElement>;
  }
  /**
   * @element text-view-events
   */
  interface HTMLTextViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTextViewElement> {
    focus: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
    returnPress: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
    blur: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
    textChange: NativeDOMPropertyChangeEvent<HTMLTextViewElement>;
  }
  /**
   * @element slider-events
   */
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
  /**
   * @element web-view-events
   */
  interface HTMLWebViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLWebViewElement> {
    loadStarted: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>;
    loadFinished: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>;
  }
  /**
   * @element time-picker-events
   */
  interface HTMLTimePickerElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTimePickerElement> {
    timeChange?: NativeDOMPropertyChangeEvent<HTMLTimePickerElement>;
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
