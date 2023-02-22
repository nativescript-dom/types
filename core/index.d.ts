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
  > = DOMEvent<T> & D;

  interface DOMEvent<T extends EventTarget = EventTarget> extends Event {
    currentTarget: T;
    target: T;
  }

  type NativeScriptViewOmittedProps =
    | "addEventListener"
    | "removeEventListener"
    | "parentNode"
    | "style"
    | "focus"
    | "removeChild"
    | "animate";

  interface HTMLViewBaseElementEventsMap<T extends EventTarget = EventTarget> {
    loaded: DOMEvent<T>;
    unloaded: DOMEvent<T>;
    created: DOMEvent<T>;
    disposeNativeView: DOMEvent<T>;
  }

  interface HTMLViewBaseElement
    extends Omit<NS.ViewBase, NativeScriptViewOmittedProps>,
      HTMLElement {
    addEventListener<K extends keyof HTMLViewBaseElementEventsMap>(
      type: K,
      listener: (
        this: HTMLViewBaseElement,
        ev: HTMLViewBaseElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLViewBaseElementEventsMap>(
      type: K,
      listener: (
        this: HTMLViewBaseElement,
        ev: HTMLViewBaseElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
  }

  var HTMLViewBaseElement: {
    prototype: HTMLViewBaseElement;
    new (): HTMLViewBaseElement;
  };

  interface HTMLViewElementEventsMap<T extends EventTarget = EventTarget>
    extends HTMLViewBaseElementEventsMap<T> {
    layoutChanged: DOMEvent<T>;
    shownModally: DOMEvent<T>;
    showingModally: DOMEvent<T>;
    accessibilityBlur: DOMEvent<T>;
    accessibilityFocus: DOMEvent<T>;
    accessibilityPerformEscape: DOMEvent<T>;
    accessibilityFocusChanged: DOMEvent<T>;
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

  interface HTMLViewElement
    extends Omit<NS.View, NativeScriptViewOmittedProps>,
      HTMLElement {
    addEventListener<K extends keyof HTMLViewElementEventsMap>(
      type: K,
      listener: (this: HTMLViewElement, ev: HTMLViewElementEventsMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLViewElementEventsMap>(
      type: K,
      listener: (this: HTMLViewElement, ev: HTMLViewElementEventsMap[K]) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLViewElement: {
    prototype: HTMLViewElement;
    new (): HTMLViewElement;
  };

  interface HTMLPageElementEventsMap extends HTMLViewElementEventsMap {
    navigatingTo: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatedTo: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatingFrom: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
    navigatedFrom: NativeDOMEventWithData<HTMLPageElement, NavigatedData>;
  }

  interface HTMLPageElement
    extends Omit<NS.Page, NativeScriptViewOmittedProps>,
      HTMLElement {
    addEventListener<K extends keyof HTMLPageElementEventsMap>(
      type: K,
      listener: (this: HTMLPageElement, ev: HTMLPageElementEventsMap[K]) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLPageElementEventsMap>(
      type: K,
      listener: (this: HTMLPageElement, ev: HTMLPageElementEventsMap[K]) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLPageElement: {
    prototype: HTMLPageElement;
    new (): HTMLPageElement;
  };

  interface HTMLFrameElementEventsMap extends HTMLViewElementEventsMap {
    navigatingTo: NativeDOMEventWithData<HTMLFrameElement, NavigatedData>;
    navigatedTo: NativeDOMEventWithData<HTMLFrameElement, NavigatedData>;
  }

  interface HTMLFrameElement
    extends Omit<NS.Page, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLFrameElementEventsMap>(
      type: K,
      listener: (
        this: HTMLFrameElement,
        ev: HTMLFrameElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLFrameElementEventsMap>(
      type: K,
      listener: (
        this: HTMLFrameElement,
        ev: HTMLFrameElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new (): HTMLFrameElement;
  };

  type DOMPropertyChangeEvent<T extends EventTarget = EventTarget> =
    NativeDOMEventWithData<T, NS.PropertyChangeData>;

  // Layouts

  interface HTMLLayoutBaseElement
    extends Omit<NS.LayoutBase, NativeScriptViewOmittedProps>,
      HTMLElement {}
  interface HTMLAbsoluteLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.AbsoluteLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLAbsoluteLayoutElement: {
    prototype: HTMLAbsoluteLayoutElement;
    new (): HTMLAbsoluteLayoutElement;
  };

  interface HTMLFlexboxLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.FlexboxLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLFlexboxLayoutElement: {
    prototype: HTMLFlexboxLayoutElement;
    new (): HTMLFlexboxLayoutElement;
  };

  interface HTMLGridLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.GridLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLFlexboxLayoutElement: {
    prototype: HTMLFlexboxLayoutElement;
    new (): HTMLFlexboxLayoutElement;
  };

  interface HTMLDockLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.DockLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLDockLayoutElement: {
    prototype: HTMLDockLayoutElement;
    new (): HTMLDockLayoutElement;
  };

  interface HTMLRootLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.RootLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLRootLayoutElement: {
    prototype: HTMLRootLayoutElement;
    new (): HTMLRootLayoutElement;
  };

  interface HTMLWrapLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.WrapLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLWrapLayoutElement: {
    prototype: HTMLWrapLayoutElement;
    new (): HTMLWrapLayoutElement;
  };

  interface HTMLStackLayoutElement
    extends HTMLLayoutBaseElement,
      Omit<NS.StackLayout, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLStackLayoutElement: {
    prototype: HTMLStackLayoutElement;
    new (): HTMLStackLayoutElement;
  };

  interface HTMLCustomLayoutViewElement
    extends HTMLLayoutBaseElement,
      Omit<NS.CustomLayoutView, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLCustomLayoutViewElement: {
    prototype: HTMLCustomLayoutViewElement;
    new (): HTMLCustomLayoutViewElement;
  };

  interface HTMLContentViewElement
    extends HTMLLayoutBaseElement,
      Omit<NS.ContentView, NativeScriptViewOmittedProps> {
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLContentViewElement: {
    prototype: HTMLContentViewElement;
    new (): HTMLContentViewElement;
  };

  interface HTMLActionBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLActionBarElement> {}

  interface HTMLActionBarElement
    extends Omit<HTMLViewElement, "android">,
      Omit<NS.ActionBar, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLActionBarElementEventsMap>(
      type: K,
      listener: (
        this: HTMLActionBarElement,
        ev: HTMLActionBarElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLActionBarElementEventsMap>(
      type: K,
      listener: (
        this: HTMLActionBarElement,
        ev: HTMLActionBarElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }
  var HTMLActionBarElement: {
    prototype: HTMLActionBarElement;
    new (): HTMLActionBarElement;
  };

  interface HTMLActionItemElementEventsMap
    extends HTMLViewElementEventsMap<HTMLActionItemElement> {}

  interface HTMLActionItemElement
    extends HTMLElement,
      Omit<NS.ActionItem, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLActionItemElementEventsMap>(
      type: K,
      listener: (
        this: HTMLActionItemElement,
        ev: HTMLActionItemElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLActionItemElementEventsMap>(
      type: K,
      listener: (
        this: HTMLActionItemElement,
        ev: HTMLActionItemElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLActionItemElement: {
    prototype: HTMLActionItemElement;
    new (): HTMLActionItemElement;
  };

  interface HTMLActivityIndicatorElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLActivityIndicatorElement> {}

  interface HTMLActivityIndicatorElement
    extends HTMLViewElement,
      Omit<NS.ActivityIndicator, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLActivityIndicatorElementEventsMap>(
      type: K,
      listener: (
        this: HTMLActivityIndicatorElement,
        ev: HTMLActivityIndicatorElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLActivityIndicatorElementEventsMap>(
      type: K,
      listener: (
        this: HTMLActivityIndicatorElement,
        ev: HTMLActivityIndicatorElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLActivityIndicatorElement: {
    prototype: HTMLActivityIndicatorElement;
    new (): HTMLActivityIndicatorElement;
  };

  interface HTMLTextBaseElementEventsMap<
    T extends HTMLTextBaseElement = HTMLTextBaseElement
  > extends HTMLViewBaseElementEventsMap<T> {}
  interface HTMLTextBaseElement
    extends HTMLViewElement,
      Omit<NS.TextBase, NativeScriptViewOmittedProps | "on"> {}

  interface HTMLNButtonElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLButtonElement> {}

  interface HTMLButtonElement
    extends Omit<NS.Button, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLNButtonElementEventsMap>(
      type: K,
      listener: (
        this: HTMLButtonElement,
        ev: HTMLNButtonElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLNButtonElementEventsMap>(
      type: K,
      listener: (
        this: HTMLButtonElement,
        ev: HTMLNButtonElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new (): HTMLButtonElement;
  };

  interface HTMLDatePickerElementEventsMap extends HTMLViewElementEventsMap {
    dateChange: DOMPropertyChangeEvent<HTMLDatePickerElement>;
  }

  interface HTMLDatePickerElement
    extends HTMLViewElement,
      Omit<NS.DatePicker, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLDatePickerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLDatePickerElement,
        ev: HTMLDatePickerElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLDatePickerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLDatePickerElement,
        ev: HTMLDatePickerElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLDatePickerElement: {
    prototype: HTMLDatePickerElement;
    new (): HTMLDatePickerElement;
  };

  interface HTMLFormattedStringElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLFormattedStringElement> {}

  interface HTMLFormattedStringElement
    extends HTMLElement,
      Omit<NS.FormattedString, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLFormattedStringElementEventsMap>(
      type: K,
      listener: (
        this: HTMLFormattedStringElement,
        ev: HTMLFormattedStringElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLFormattedStringElementEventsMap>(
      type: K,
      listener: (
        this: HTMLFormattedStringElement,
        ev: HTMLFormattedStringElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLFormattedStringElement: {
    prototype: HTMLFormattedStringElement;
    new (): HTMLFormattedStringElement;
  };

  interface HTMLHTMLViewElementEventsMap
    extends HTMLViewElementEventsMap<HTMLHTMLViewElement> {}

  interface HTMLHTMLViewElement
    extends HTMLViewElement,
      Omit<NS.HtmlView, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLHTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLHTMLViewElement,
        ev: HTMLHTMLViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLHTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLHTMLViewElement,
        ev: HTMLHTMLViewElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLHTMLViewElement: {
    prototype: HTMLHTMLViewElement;
    new (): HTMLHTMLViewElement;
  };

  interface HTMLImageElementEventsMap
    extends HTMLViewElementEventsMap<HTMLImageElement> {}

  interface HTMLImageElement
    extends Omit<NS.Image, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLImageElementEventsMap>(
      type: K,
      listener: (
        this: HTMLImageElement,
        ev: HTMLImageElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLImageElementEventsMap>(
      type: K,
      listener: (
        this: HTMLImageElement,
        ev: HTMLImageElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLImageElement: {
    prototype: HTMLImageElement;
    new (): HTMLImageElement;
  };

  interface HTMLLabelElementEventsMap
    extends HTMLViewElementEventsMap<HTMLLabelElement> {}

  interface HTMLLabelElement
    extends Omit<NS.Label, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLLabelElementEventsMap>(
      type: K,
      listener: (
        this: HTMLLabelElement,
        ev: HTMLLabelElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLLabelElementEventsMap>(
      type: K,
      listener: (
        this: HTMLLabelElement,
        ev: HTMLLabelElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new (): HTMLLabelElement;
  };

  interface HTMLListPickerElementEventsMap
    extends HTMLViewElementEventsMap<HTMLListPickerElement> {
    selectedIndexChange?: (
      event: DOMPropertyChangeEvent<HTMLListPickerElement>
    ) => void;
    selectedValueChange?: (
      event: DOMPropertyChangeEvent<HTMLListPickerElement>
    ) => void;
  }

  interface HTMLListPickerElement
    extends Omit<HTMLElement, "animate">,
      Omit<NS.ListPicker, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLListPickerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLListPickerElement,
        ev: HTMLListPickerElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLListPickerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLListPickerElement,
        ev: HTMLListPickerElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLListPickerElement: {
    prototype: HTMLListPickerElement;
    new (): HTMLListPickerElement;
  };

  interface HTMLListViewElementEventsMap
    extends HTMLViewElementEventsMap<HTMLListViewElement> {
    itemLoading: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>;
    itemTap: NativeDOMEventWithData<HTMLListViewElement, ItemEventData>;
    loadMoreItems: DOMEvent<HTMLListViewElement>;
  }

  interface HTMLListViewElement
    extends HTMLElement,
      Omit<NS.ListView, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLListViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLListViewElement,
        ev: HTMLListViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLListViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLListViewElement,
        ev: HTMLListViewElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLListViewElement: {
    prototype: HTMLListViewElement;
    new (): HTMLListViewElement;
  };

  interface HTMLNavigationButtonElementEventsMap
    extends HTMLViewElementEventsMap<HTMLNavigationButtonElement> {}

  interface HTMLNavigationButtonElement
    extends HTMLElement,
      Omit<NS.NavigationButton, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLNavigationButtonElementEventsMap>(
      type: K,
      listener: (
        this: HTMLNavigationButtonElement,
        ev: HTMLNavigationButtonElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLNavigationButtonElementEventsMap>(
      type: K,
      listener: (
        this: HTMLNavigationButtonElement,
        ev: HTMLNavigationButtonElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLNavigationButtonElement: {
    prototype: HTMLNavigationButtonElement;
    new (): HTMLNavigationButtonElement;
  };

  interface HTMLPlaceholderElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLPlaceholderElement> {
    creatingView: NativeDOMEventWithData<
      HTMLPlaceholderElement,
      CreateViewEventData
    >;
  }
  interface HTMLPlaceholderElement
    extends HTMLElement,
      Omit<NS.Placeholder, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLPlaceholderElementEventsMap>(
      type: K,
      listener: (
        this: HTMLPlaceholderElement,
        ev: HTMLPlaceholderElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLPlaceholderElementEventsMap>(
      type: K,
      listener: (
        this: HTMLPlaceholderElement,
        ev: HTMLPlaceholderElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLPlaceholderElement: {
    prototype: HTMLPlaceholderElement;
    new (): HTMLPlaceholderElement;
  };

  interface HTMLProgressElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLProgressElement> {
    valueChange: DOMPropertyChangeEvent<HTMLProgressElement>;
  }
  interface HTMLProgressElement
    extends Omit<NS.Progress, NativeScriptViewOmittedProps | "on" | "animate"> {
    addEventListener<K extends keyof HTMLProgressElementEventsMap>(
      type: K,
      listener: (
        this: HTMLProgressElement,
        ev: HTMLProgressElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLProgressElementEventsMap>(
      type: K,
      listener: (
        this: HTMLProgressElement,
        ev: HTMLProgressElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new (): HTMLProgressElement;
  };

  interface HTMLProxyViewContainerElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLProxyViewContainerElement> {}
  interface HTMLProxyViewContainerElement
    extends HTMLElement,
      Omit<NS.ProxyViewContainer, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLProxyViewContainerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLProxyViewContainerElement,
        ev: HTMLProxyViewContainerElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLProxyViewContainerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLProxyViewContainerElement,
        ev: HTMLProxyViewContainerElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLProxyViewContainerElement: {
    prototype: HTMLProxyViewContainerElement;
    new (): HTMLProxyViewContainerElement;
  };

  interface HTMLScrollViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLScrollViewElement> {
    scroll: NativeDOMEventWithData<HTMLScrollViewElement, ScrollEventData>;
  }
  interface HTMLScrollViewElement
    extends HTMLElement,
      Omit<NS.ScrollView, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLScrollViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLScrollViewElement,
        ev: HTMLScrollViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLScrollViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLScrollViewElement,
        ev: HTMLScrollViewElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLScrollViewElement: {
    prototype: HTMLScrollViewElement;
    new (): HTMLScrollViewElement;
  };

  interface HTMLSearchBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSearchBarElement> {
    submit: DOMEvent<HTMLSearchBarElement>;
    clear: DOMEvent<HTMLSearchBarElement>;
    close: DOMEvent<HTMLSearchBarElement>;
  }
  interface HTMLSearchBarElement
    extends HTMLElement,
      Omit<NS.SearchBar, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLSearchBarElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSearchBarElement,
        ev: HTMLSearchBarElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLSearchBarElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSearchBarElement,
        ev: HTMLSearchBarElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLSearchBarElement: {
    prototype: HTMLSearchBarElement;
    new (): HTMLSearchBarElement;
  };

  interface HTMLSegmentedBarElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSegmentedBarElement> {
    selectedIndexChanged: NativeDOMEventWithData<
      HTMLSegmentedBarElement,
      SelectedIndexChangedEventData
    >;
  }
  interface HTMLSegmentedBarElement
    extends HTMLElement,
      Omit<NS.SearchBar, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLSegmentedBarElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSegmentedBarElement,
        ev: HTMLSegmentedBarElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLSegmentedBarElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSegmentedBarElement,
        ev: HTMLSegmentedBarElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLSegmentedBarElement: {
    prototype: HTMLSegmentedBarElement;
    new (): HTMLSegmentedBarElement;
  };

  interface HTMLSegmentedBarItemElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSegmentedBarElement> {}
  interface HTMLSegmentedBarItemElement
    extends HTMLElement,
      Omit<NS.SegmentedBarItem, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLSegmentedBarItemElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSegmentedBarItemElement,
        ev: HTMLSegmentedBarItemElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLSegmentedBarItemElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSegmentedBarItemElement,
        ev: HTMLSegmentedBarItemElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLSegmentedBarItemElement: {
    prototype: HTMLSegmentedBarItemElement;
    new (): HTMLSegmentedBarItemElement;
  };

  interface HTMLNSpanElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSpanElement> {
    linkTap: DOMEvent<HTMLSpanElement>;
  }

  interface HTMLSpanElement
    extends HTMLElement,
      Omit<NS.Span, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLNSpanElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSpanElement,
        ev: HTMLNSpanElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLNSpanElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSpanElement,
        ev: HTMLNSpanElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLNSpanElement: {
    prototype: HTMLSpanElement;
    new (): HTMLSpanElement;
  };

  interface HTMLSwitchELementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLSwitchELement> {
    checkedChange: DOMPropertyChangeEvent<HTMLSwitchELement>;
  }

  interface HTMLSwitchELement
    extends HTMLElement,
      Omit<NS.Switch, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLSwitchELementEventsMap>(
      type: K,
      listener: (
        this: HTMLSwitchELement,
        ev: HTMLSwitchELementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLSwitchELementEventsMap>(
      type: K,
      listener: (
        this: HTMLSwitchELement,
        ev: HTMLSwitchELementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLSwitchELement: {
    prototype: HTMLSwitchELement;
    new (): HTMLSwitchELement;
  };

  interface HTMLTabViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTabViewELement> {
    selectedIndexChanged: NativeDOMEventWithData<
      HTMLTabViewELement,
      SelectedIndexChangedEventData
    >;
  }

  interface HTMLTabViewELement
    extends HTMLElement,
      Omit<NS.TabView, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLTabViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTabViewELement,
        ev: HTMLTabViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLTabViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTabViewELement,
        ev: HTMLTabViewElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLTabViewELement: {
    prototype: HTMLTabViewELement;
    new (): HTMLTabViewELement;
  };

  interface HTMLTabViewItemElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTabViewItemElement> {}

  interface HTMLTabViewItemElement
    extends HTMLElement,
      Omit<NS.TabViewItem, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLTabViewItemElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTabViewItemElement,
        ev: HTMLTabViewItemElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLTabViewItemElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTabViewItemElement,
        ev: HTMLTabViewItemElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLTabViewItemElement: {
    prototype: HTMLTabViewItemElement;
    new (): HTMLTabViewItemElement;
  };

  interface HTMLEditableTextBaseElementEventsMap {}

  interface HTMLEditableTextBaseElement
    extends HTMLTextBaseElement,
      Omit<NS.EditableTextBase, NativeScriptViewOmittedProps | "on"> {}

  interface HTMLTextFieldElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTextFieldElement> {
    focus: DOMPropertyChangeEvent<HTMLTextFieldElement>;
    returnPress: DOMPropertyChangeEvent<HTMLTextFieldElement>;
    blur: DOMPropertyChangeEvent<HTMLTextFieldElement>;
    textChange: DOMPropertyChangeEvent<HTMLTextFieldElement>;
  }

  interface HTMLTextFieldElement
    extends HTMLEditableTextBaseElement,
      Omit<NS.TextField, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLTextFieldElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTextFieldElement,
        ev: HTMLTextFieldElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLTextFieldElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTextFieldElement,
        ev: HTMLTextFieldElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLTextFieldElement: {
    prototype: HTMLTextFieldElement;
    new (): HTMLTextFieldElement;
  };

  interface HTMLTextViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTextViewElement> {
    //focus: DOMPropertyChangeEvent<HTMLTextViewElement>;
    returnPress: DOMPropertyChangeEvent<HTMLTextViewElement>;
    blur: DOMPropertyChangeEvent<HTMLTextViewElement>;
    textChange: DOMPropertyChangeEvent<HTMLTextViewElement>;
  }

  interface HTMLTextViewElement
    extends HTMLElement,
      Omit<NS.TextView, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLTextViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTextViewElement,
        ev: HTMLTextViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLTextViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTextViewElement,
        ev: HTMLTextViewElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLTextViewElement: {
    prototype: HTMLTextViewElement;
    new (): HTMLTextViewElement;
  };

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

  interface HTMLSliderElement
    extends HTMLElement,
      Omit<NS.Slider, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLSliderElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSliderElement,
        ev: HTMLSliderElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLSliderElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSliderElement,
        ev: HTMLSliderElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLSliderElement: {
    prototype: HTMLSliderElement;
    new (): HTMLSliderElement;
  };

  interface HTMLTimePickerElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLTimePickerElement> {
    timeChange?: (event: DOMPropertyChangeEvent<HTMLTimePickerElement>) => void;
  }

  interface HTMLTimePickerElement
    extends HTMLElement,
      Omit<NS.Slider, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLTimePickerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTimePickerElement,
        ev: HTMLTimePickerElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLTimePickerElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTimePickerElement,
        ev: HTMLTimePickerElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLTimePickerElement: {
    prototype: HTMLTimePickerElement;
    new (): HTMLTimePickerElement;
  };

  interface HTMLWebViewElementEventsMap
    extends HTMLViewBaseElementEventsMap<HTMLWebViewElement> {
    loadStarted: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>;
    loadFinished: NativeDOMEventWithData<HTMLWebViewElement, LoadEventData>;
  }

  interface HTMLWebViewElement
    extends HTMLElement,
      Omit<NS.Slider, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLWebViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLWebViewElement,
        ev: HTMLWebViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLWebViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLWebViewElement,
        ev: HTMLWebViewElementEventsMap[K]
      ) => any,
      options?: boolean | EventListenerOptions
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options
    ): void;
    animate(
      keyframes: Keyframe[] | PropertyIndexedKeyframes | null,
      options?: number | KeyframeAnimationOptions
    ): Animation;
    animate(options: AnimationDefinition): AnimationPromise;
  }

  var HTMLWebViewElement: {
    prototype: HTMLWebViewElement;
    new (): HTMLWebViewElement;
  };
}