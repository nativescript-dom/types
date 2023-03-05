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
import "event-maps/plain-event-maps";

export type ItemLoadingEventData = {
  view?: NS.ViewBase;
  index?: number;
  item?: any;
  data?: any;
};

declare global {
  type NativeScriptViewOmittedProps =
    | "addEventListener"
    | "removeEventListener"
    | "parentNode"
    | "style"
    | "focus"
    | "removeChild"
    | "animate";

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

  // Layouts

  interface HTMLLayoutBaseElement<T = HTMLViewElement>
    extends Omit<NS.LayoutBase, NativeScriptViewOmittedProps>,
      HTMLViewElementEventsMap<T>,
      HTMLElement {}

  interface HTMLAbsoluteLayoutElement
    extends HTMLLayoutBaseElement<HTMLAbsoluteLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLFlexboxLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLGridLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLDockLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLRootLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLWrapLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLStackLayoutElement>,
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
    extends HTMLLayoutBaseElement<HTMLCustomLayoutViewElement>,
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
    extends HTMLLayoutBaseElement<HTMLContentViewElement>,
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

  interface HTMLHtmlViewElement
    extends HTMLViewElement,
      Omit<NS.HtmlView, NativeScriptViewOmittedProps> {
    addEventListener<K extends keyof HTMLHTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLHtmlViewElement,
        ev: HTMLHtmlViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLHtmlViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLHtmlViewElement,
        ev: HTMLHtmlViewElementEventsMap[K]
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

  var HTMLHtmlViewElement: {
    prototype: HTMLHtmlViewElement;
    new (): HTMLHtmlViewElement;
  };

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

  interface HTMLSwitchElement
    extends HTMLElement,
      Omit<NS.Switch, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLSwitchElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSwitchElement,
        ev: HTMLSwitchElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLSwitchElementEventsMap>(
      type: K,
      listener: (
        this: HTMLSwitchElement,
        ev: HTMLSwitchElementEventsMap[K]
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

  var HTMLSwitchElement: {
    prototype: HTMLSwitchElement;
    new (): HTMLSwitchElement;
  };

  interface HTMLTabViewElement
    extends HTMLElement,
      Omit<NS.TabView, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLTabViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLTabViewElement,
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
        this: HTMLTabViewElement,
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

  var HTMLTabViewElement: {
    prototype: HTMLTabViewElement;
    new (): HTMLTabViewElement;
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

  interface HTMLTimePickerElement
    extends HTMLElement,
      Omit<NS.TimePicker, NativeScriptViewOmittedProps | "on"> {
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

  interface HTMLWebViewElement
    extends HTMLElement,
      Omit<NS.WebView, NativeScriptViewOmittedProps | "on"> {
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

  interface HTMLRepeaterElement
    extends HTMLElement,
      Omit<NS.Repeater, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLRepeaterElement,
        ev: HTMLViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLRepeaterElement,
        ev: HTMLViewElementEventsMap[K]
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

  var HTMLRepeaterElement: {
    prototype: HTMLRepeaterElement;
    new (): HTMLRepeaterElement;
  };

  interface HTMLContainerViewElement
    extends HTMLElement,
      Omit<NS.ContainerView, NativeScriptViewOmittedProps | "on"> {
    addEventListener<K extends keyof HTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLContainerViewElement,
        ev: HTMLViewElementEventsMap[K]
      ) => any,
      options?: boolean | AddEventListenerOptions
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions
    ): void;
    removeEventListener<K extends keyof HTMLViewElementEventsMap>(
      type: K,
      listener: (
        this: HTMLContainerViewElement,
        ev: HTMLViewElementEventsMap[K]
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

  var HTMLContainerViewElement: {
    prototype: HTMLContainerViewElement;
    new (): HTMLContainerViewElement;
  };
}
