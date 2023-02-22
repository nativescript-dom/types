export {};

declare global {
  interface HTMLElementTagNameMap {
    /**
     * A UI component used to display <Page> elements. Every app needs at least a single <Frame> element, usually set as the root element.
     */
    frame: HTMLFrameElement;
    /**
     * A UI component that represents an application screen. NativeScript apps typically consist of one or more `<Page>` that wrap content such as an `<ActionBar>` and other UI widgets.
     */
    page: HTMLPageElement;
    /**
     * This class is the base class for all UI components. A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within.
     */
    view: HTMLViewElement;
    /**
     * A layout container that lets you stack the child elements vertically (default) or horizontally.
     */
    stacklayout: HTMLStackLayoutElement;
    /**
     * A layout container that provides a non-exact implementation of the CSS Flexbox layout. This layout lets you arrange child components both horizontally and vertically.
     */
    flexboxlayout: HTMLFlexboxLayoutElement;
    /**
     * A layout container that lets you arrange its child elements in a table-like manner.

The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. 
It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.

By default, <GridLayout> has one column and one row. You can add columns and rows by configuring the columns and the rows properties. 
In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, 
separated by a comma. You set the number of rows by listing their heights, separated by a comma.
     */
    gridlayout: HTMLGridLayoutElement;
    /**
     * A UI component that shows an editable or a read-only multi-line text container. You can use it to let users type large text in your app or to show longer, multi-line text on the screen.
     */
    textview: HTMLTextViewElement;
    /**
     * An input component that creates an editable single-line box.
     */
    textfield: HTMLTextFieldElement;
    /**
     * A layout container that lets you position items in rows or columns, based on the orientation property.
     * When the space is filled, the container automatically wraps items onto a new row or column.
     */
    wraplayout: HTMLWrapLayoutElement;
    /**
     * The WebView component is used to display web content within your application.
     * You use the control by providing a `src` attribute that accepts a URL,a path
     * to a local HTML file or directly HTML string.
     */
    webview: HTMLWebViewElement;
    /**
     * A layout that lets you specify exact locations (left/top coordinates) of its children.
     */
    absolutelayout: HTMLAbsoluteLayoutElement;
    /**
     * Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).
     */
    actionbar: HTMLActionBarElement;
    /**
     * Represents an action item in the action bar.
     */
    actionitem: HTMLActionItemElement;
    /**
     * Represents a UI widget which displays a progress indicator hinting the user for some background operation running.
     */
    activityindicator: HTMLActivityIndicatorElement;
    contentview: HTMLContentViewElement;
    /**
     * A UI component that lets users select a date from a pre-configured range.
     */
    datepicker: HTMLDatePickerElement;
    /**
     * a layout container that lets you dock child elements to the sides or the center of the layout.
     *
     * Use the `dock` property to dock its children to the `left`, `right`, `top`, `bottom` or `center` of the layout.
     * To dock a child element to the center, it must be the last child of the container and you must set
     * the `stretchLastChild` property of the parent to `true`.
     */
    docklayout: HTMLDockLayoutElement;
    /**
     * A View to support various text transformations and decorations. The FormattedString class can be used
     * with all text-related components like `Label`, `TextView`, `TextField` and even `Button`.
     *
     * FormattedString only accepts `span` as it's children.
     */
    formattedstring: HTMLFormattedStringElement;
    /**
     * The HtmlView represents a view with HTML content. Use this component instead of a WebView when you want to show static HTML content with base HTML support.
     */
    htmlview: HTMLHTMLViewElement;
    /**
     * The Image widget shows an image in your mobile application.
     */
    image: HTMLImageElement;
    /**
     * The ListPicker is a spinner type component for listing options.
     */
    listpicker: HTMLListPickerElement;
    /**
     * A UI component that is used to render large lists of data.
     */
    listview: HTMLListViewElement;
    /**
     *
     */
    navigationbutton: HTMLNavigationButtonElement;
    /**
     * `<Placeholder>` allows you to add any native widget to your application. To do that, you need to put a Placeholder somewhere in
     * the UI hierarchy and then create and configure the native widget that you want to appear there. Finally,
     * pass your native widget to the event arguments of the creatingView event.
     */
    placeholder: HTMLPlaceholderElement;
    /**
     * A UI component that shows a bar to indicate the progress of a task.
     */
    progress: HTMLProgressElement;

    proxyview: HTMLProxyViewContainerElement;
    /**
     * A layout container designed to be used as the primary root layout container for your app with a built in api to easily control dynamic view layers. It extends a GridLayout so has all the features of a grid but enhanced with additional apis.
     */
    rootlayout: HTMLRootLayoutElement;
    /**
     * A UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.
     */
    scrollview: HTMLScrollViewElement;
    /**
     * A UI component that provides a user interface for entering search queries and submitting requests to the search provider.
     */
    searchbar: HTMLSearchBarElement;
    /**
     * A UI bar component that displays a set of buttons for discrete selection. Can show text or images.
     */
    segmentedbar: HTMLSegmentedBarElement;
    /**
     * An item displayed inside SegmentedBar.
     */
    segmentedbaritem: HTMLSegmentedBarElement;
    /**
     * A UI component that provides a slider control for picking values within a specified numeric range.
     */
    slider: HTMLSliderElement;
    /**
     * A UI component that lets users toggle between two states.
     */
    switch: HTMLSwitchELement;
    /**
     * A navigation component that shows content grouped into tabs and lets users switch between tabs.
     */
    tabview: HTMLTabViewELement;
    /**
     * A screen inside TabView.
     *
     * Currently, TabViewItem expects a single child element. In most cases, you might want to wrap your content in a layout.
     */
    tabitem: HTMLTabViewItemElement;
    /**
     * A UI component that lets users select time.
     */
    timepicker: HTMLTimePickerElement;
  }
}
