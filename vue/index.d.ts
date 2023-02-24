import "@nativescript-dom/core-types/event-maps/plain-event-maps";
import "@nativescript-dom/core-types";
import "@nativescript-dom/core-types/name-maps/pascal-cased";
import "@vue/runtime-dom";
import { ElementAttrs, HTMLAttributes } from "@vue/runtime-dom";
import * as RuntimeCore from "@vue/runtime-core";
import {
  OmittedStyleObjectKeys,
  HTMLActionBarElementAttributeKeys,
  HTMLActionItemElementAttributeKeys,
  HTMLActivityIndicatorElementAttributeKeys,
  HTMLButtonAttributeKeys,
  HTMLContentViewElementAttributeKeys,
  HTMLDockLayoutElementAttributeKeys,
  HTMLEditableTextBaseElementAttributeKeys,
  HTMLFlexboxLayoutAttributeKeys,
  HTMLFormattedStringElementAttributeKeys,
  HTMLFrameElementAttributeKeys,
  HTMLGridLayoutAttributeKeys,
  HTMLHTMLViewElementAttributes,
  HTMLImageElementAttributeKeys,
  HTMLLabelElementAttributeKeys,
  HTMLLayoutBaseAttributeKeys,
  HTMLListPickerElementAttributeKeys,
  HTMLListViewElementAttributeKeys,
  HTMLNavigationButtonElementAttributeKeys,
  HTMLPageElementAttributeKeys,
  HTMLProgressElementAttributeKeys,
  HTMLScrollViewElementAttributeKeys,
  HTMLSearchBarElementAttributeKeys,
  HTMLSegmentedBarElementAttributeKeys,
  HTMLSegmentedBarItemElementAttributeKeys,
  HTMLSliderElementAttributeKeys,
  HTMLSpanElementAttributeKeys,
  HTMLStackLayoutAttributeKeys,
  HTMLSwitchElementAttributeKeys,
  HTMLTabViewElementAttributeKeys,
  HTMLTabViewItemElementAttributeKeys,
  HTMLTextBaseElementAttributeKeys,
  HTMLTextFieldElementAttributeKeys,
  HTMLTextViewElementAttributeKeys,
  HTMLTimePickerElementAttributeKeys,
  HTMLViewBaseElementAttributeKeys,
  HTMLViewElementAttributeKeys,
  HTMLWebViewElementAttributeKeys,
  HTMLWrapLayoutElementAttributeKeys,
} from "@nativescript-dom/core-types/attr-literals/index";

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

interface HTMLViewBaseElementAttributes<T = HTMLViewBaseElement>
  extends ElementAttrs<T>,
    HTMLAttributes,
    OnNativeViewEvents<HTMLViewBaseElementEventsMap<T>>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLViewBaseElement, HTMLViewBaseElementAttributeKeys>
    > {
  style: string | Style;
}

declare module "@vue/runtime-dom" {
  interface HTMLAttributes<T> extends HTMLViewBaseElementAttributes<T> {
    style: string | Style;
  }
}

interface HTMLViewElementAttributes<T extends HTMLViewElement = HTMLViewElement>
  extends HTMLAttributes<T>,
    OnNativeViewEvents<HTMLViewElementEventsMap<T>>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLViewElement, HTMLViewElementAttributeKeys>
    > {}

interface HTMLPageElementAttributes
  extends HTMLViewElementAttributes<HTMLPageElement>,
    OnNativeViewEvents<HTMLPageElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLPageElement, HTMLPageElementAttributeKeys>
    > {}

interface HTMLFrameElementAttributes
  extends HTMLViewElementAttributes<HTMLFrameElement>,
    OnNativeViewEvents<HTMLFrameElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLFrameElement, HTMLFrameElementAttributeKeys>
    > {
  defaultPage?: string;
}

interface HTMLAbsoluteLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLAbsoluteLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLAbsoluteLayoutElement, HTMLLayoutBaseAttributeKeys>
    > {}

interface HTMLGridLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLGridLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLGridLayoutElement, HTMLGridLayoutAttributeKeys>
    > {}
interface HTMLStackLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLStackLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLStackLayoutElement, HTMLStackLayoutAttributeKeys>
    > {}

interface HTMLWrapLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLWrapLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLWrapLayoutElement, HTMLWrapLayoutElementAttributeKeys>
    > {}

interface HTMLDockLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLDockLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLWrapLayoutElement, HTMLDockLayoutElementAttributeKeys>
    > {}

interface HTMLFlexboxLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLFlexboxLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLFlexboxLayoutElement, HTMLFlexboxLayoutAttributeKeys>
    > {}

interface HTMLRootLayoutElementAttributes
  extends HTMLViewElementAttributes<HTMLFlexboxLayoutElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLRootLayoutElement, HTMLGridLayoutAttributeKeys>
    > {}

interface HTMLContentViewElementAttributes
  extends HTMLViewElementAttributes<HTMLContentViewElement>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLContentViewElement,
        HTMLContentViewElementAttributeKeys
      >
    > {}

interface HTMLActionBarElementAttributes
  extends HTMLViewElementAttributes<HTMLActionBarElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLActionBarElement, HTMLActionBarElementAttributeKeys>
    > {}

interface HTMLActionItemElementAttributes
  extends HTMLViewElementAttributes<HTMLActionItemElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLActionBarElement, HTMLActionItemElementAttributeKeys>
    > {}

interface HTMLActivityIndicatorElementAttributes
  extends HTMLViewElementAttributes<HTMLActivityIndicatorElement>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLActionBarElement,
        HTMLActivityIndicatorElementAttributeKeys
      >
    > {}

interface HTMLTextBaseElementAttributes<
  T extends HTMLTextBaseElement = HTMLTextBaseElement
> extends HTMLViewElementAttributes<T>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLTextBaseElement, HTMLTextBaseElementAttributeKeys>
    > {}

interface HTMLButtonElementAttributes
  extends HTMLTextBaseElementAttributes<HTMLButtonElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLButtonElement, HTMLButtonAttributeKeys>
    > {}
// Extends default button attributes with nativescript button attributes.
interface ButtonHTMLAttributes extends HTMLButtonElementAttributes {}

interface HTMLDatePickerElementAttributes
  extends HTMLViewElementAttributes<HTMLDatePickerElement>,
    OnNativeViewEvents<HTMLDatePickerElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLDatePickerElement, HTMLDatePickerElementAttributeKeys>
    > {}

type FormattedStringElementStyle = Pick<
  Style,
  HTMLFormattedStringElementAttributeKeys
>;

interface HTMLFormattedStringElementAttributes
  extends HTMLViewBaseElementAttributes<HTMLFormattedStringElement>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLFormattedStringElement,
        HTMLFormattedStringElementAttributeKeys
      >
    > {
  style: string | FormattedStringElementStyle;
}

interface HTMLHTMLViewElementAttributes
  extends HTMLViewElementAttributes<HTMLHTMLViewElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLHTMLViewElement, HTMLHTMLViewElementAttributes>
    > {}

interface HTMLImageElementAttributes
  extends HTMLViewElementAttributes<HTMLImageElementAttributes>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLImageElement, HTMLImageElementAttributeKeys>
    > {}
// Label

interface HTMLLabelElementAttributes
  extends HTMLTextBaseElementAttributes<HTMLLabelElement>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLLabelElement, HTMLLabelElementAttributeKeys>
    > {}
// Extends html label element attributes with nativescript button attributes
interface LabelHTMLAttributes extends HTMLLabelElementAttributes {}
// ListPicker

interface HTMLListPickerElementAttributes
  extends HTMLViewElementAttributes<HTMLListPickerElement>,
    OnNativeViewEvents<HTMLListPickerElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLListPickerElement, HTMLListPickerElementAttributeKeys>
    > {}
// ListView

interface HTMLListViewElementAttributes
  extends HTMLViewElementAttributes<HTMLListViewElement>,
    OnNativeViewEvents<HTMLListViewElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLListViewElement, HTMLListViewElementAttributeKeys>
    > {}

// NavigationButton
interface HTMLNavigationButtonElementAttributes
  extends HTMLViewElementAttributes<HTMLNavigationButtonElement>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLNavigationButtonElement,
        HTMLNavigationButtonElementAttributeKeys
      >
    > {}

interface HTMLPlaceholderElementAttributes
  extends HTMLViewElementAttributes<HTMLPlaceholderElement>,
    OnNativeViewEvents<HTMLPlaceholderElementEventsMap> {}
// Progress

interface HTMLProgressElementAttributes
  extends HTMLViewElementAttributes<HTMLProgressElement>,
    OnNativeViewEvents<HTMLProgressElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLProgressElement, HTMLProgressElementAttributeKeys>
    > {}

interface HTMLProxyViewContainerElementAttributes
  extends HTMLViewElementAttributes<HTMLProxyViewContainerElement> {}
// ScrollView

interface HTMLScrollViewElement
  extends HTMLViewElementAttributes<HTMLScrollViewElement>,
    OnNativeViewEvents<HTMLScrollViewElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLScrollViewElement, HTMLScrollViewElementAttributeKeys>
    > {}
//#region SearchBar

interface HTMLSearchBarElementAttributes
  extends HTMLViewElementAttributes<HTMLSearchBarElement>,
    OnNativeViewEvents<HTMLSearchBarElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLSearchBarElement, HTMLSearchBarElementAttributeKeys>
    > {}
//#endregion SearchBar

//#region  SegementedBar

interface HTMLSegmentedBarElementAttributes
  extends HTMLViewElementAttributes<HTMLSegmentedBarElement>,
    OnNativeViewEvents<HTMLSegmentedBarElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLSegmentedBarElement,
        HTMLSegmentedBarElementAttributeKeys
      >
    > {}
//#endregion SegmentedBar

//#region SegmentedBarItem

interface HTMLSegmentedBarItemElementAttributes
  extends HTMLViewElementAttributes<HTMLSegmentedBarItemElement>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLSegmentedBarItemElement,
        HTMLSegmentedBarElementAttributeKeys
      >
    > {}
//#endregion SegmentedBarItem

//#region Span

interface HTMLSpanElementAttributes
  extends HTMLViewBaseElementAttributes<HTMLSpanElement>,
    OnNativeViewEvents<HTMLNSpanElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLSpanElement, HTMLSpanElementAttributeKeys>
    > {
  style: string | FormattedStringElementStyle;
}
//#endregion Span

//#region Switch

interface HTMLSwitchElementAttributes
  extends HTMLViewElementAttributes<HTMLSwitchElement>,
    OnNativeViewEvents<HTMLSwitchElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLSwitchElement, HTMLSwitchElementAttributeKeys>
    > {}
//#endregion Switch

//#region TabView

interface HTMLTabViewElementAttributes
  extends HTMLViewElementAttributes<HTMLTabViewElement>,
    OnNativeViewEvents<HTMLTabViewElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLTabViewElement, HTMLTabViewElementAttributeKeys>
    > {}
//#endregion TabView

//#region TabViewItem

interface HTMLTabViewItemElementAttributes
  extends HTMLViewElementAttributes<HTMLTabViewItemElement>,
    OnNativeViewEvents<HTMLTabViewItemElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<
        HTMLTabViewItemElement,
        HTMLTabViewItemElementAttributeKeys
      >
    > {}

//#endregion TabViewItem

interface HTMLEditableTextBaseElementAttributes<
  T extends HTMLEditableTextBaseElement = HTMLEditableTextBaseElement
> extends HTMLTextBaseElementAttributes<T>,
    HTMLExtendedAttributes<
      PickAttributes<T, HTMLEditableTextBaseElementAttributeKeys>
    > {}

//#region TextField

interface HTMLTextFieldElementAttributes
  extends HTMLEditableTextBaseElementAttributes<HTMLTextFieldElement>,
    HTMLViewElementAttributes<HTMLTextFieldElement>,
    OnNativeViewEvents<HTMLTextFieldElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLTextFieldElement, HTMLTextFieldElementAttributeKeys>
    > {}

//#endregion TextField

//#region TextView
interface HTMLTextViewElementAttributes
  extends HTMLEditableTextBaseElementAttributes<HTMLTextViewElement>,
    HTMLViewElementAttributes<HTMLTextViewElement>,
    OnNativeViewEvents<HTMLTextViewElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLTextViewElement, HTMLTextViewElementAttributeKeys>
    > {}
//#endregion TextView

//#region Slider

interface HTMLSliderElementAttributes
  extends HTMLViewElementAttributes<HTMLSliderElement>,
    OnNativeViewEvents<HTMLSliderElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLSliderElement, HTMLSliderElementAttributeKeys>
    > {}
//#endregion Slider
//#region TimePicker

interface HTMLTimePickerElementAttributes<
  T extends HTMLTimePickerElement = HTMLTimePickerElement
> extends HTMLViewElementAttributes<HTMLTimePickerElement>,
    OnNativeViewEvents<HTMLTimePickerElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<HTMLTimePickerElement, HTMLTimePickerElementAttributeKeys>
    > {}

//#endregion TimePicker

//#region WebView

interface HTMLWebViewElementAttributes<
  T extends HTMLWebViewElement = HTMLWebViewElement
> extends HTMLViewElementAttributes<T>,
    OnNativeViewEvents<HTMLWebViewElementEventsMap>,
    HTMLExtendedAttributes<
      PickAttributes<T, HTMLWebViewElementAttributeKeys>
    > {}
//#endregion WebView

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
    HtmlView: DefineNativeComponent<HTMLHTMLViewElementAttributes>;
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
    "html-view": DefineNativeComponent<HTMLHTMLViewElementAttributes>;
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
