import "solid-js";
import "@nativescript-dom/core-types";

declare module "solid-js" {
  export namespace JSX {
    // Omit keys from Style interface that should not be exposed in JSX.
    type OmittedStyleObjectKeys =
      | "PropertyBag"
      | "_createPropertyChangeData"
      | "_emit"
      | "_isViewBase"
      | "_fontScale"
      | "addEventListener"
      | "get"
      | "hasCssVariable"
      | "hasListeners"
      | "notify"
      | "notifyPropertyChange"
      | "on"
      | "off"
      | "once"
      | "removeEventListener"
      | "removeScopedCssVariable"
      | "removeUnscopedCssVariable"
      | "resetScopedCssVariables"
      | "resetUnscopedCssVariables"
      | "set"
      | "setProperty"
      | "setScopedCssVariable"
      | "setUnscopedCssVariable"
      | "toString"
      | "getCssVariable";

    // Converts camelCase to kebab-case
    type Kebab<
      T extends string,
      A extends string = ""
    > = T extends `${infer F}${infer R}`
      ? Kebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`>
      : A;
    type KebabKeys<T> = {
      [K in keyof T as K extends string ? Kebab<K> : K]: T[K];
    } & T;

    // Allows both kebab-case & camelCase keys on the style object.
    type Style = KebabKeys<
      Omit<import("@nativescript/core").Style, OmittedStyleObjectKeys>
    >;
    /**
     * Generates `on:eventName` from `eventName.
     */
    type OnNativeViewEvents<T> = {
      [Key in keyof T as `on:${Key}`]?: (event: T[Key]) => void;
    };

    type PlatformIOSKeyMap<T> = {
      [K in keyof T as `ios:${K}`]: string | T[K];
    };

    type PlatformAndroidKeyMap<T> = {
      [K in keyof T as `android:${K}`]: string | T[K];
    };

    type PickAttributes<T, Keys> = Pick<T, Keys>;

    type BaseAttributes<T> = {
      [K in keyof T]: string | T[K];
    };

    type HTMLExtendedAttributes<T> = BaseAttributes<T> &
      PlatformAndroidKeyMap<T> &
      PlatformIOSKeyMap<T>;

    type HTMLViewBaseAttributeKeys =
      | "class"
      | "className"
      | "hidden"
      | "recycleNativeView"
      | "reusable"
      | "style"
      // Styles
      | "dock"
      | "alignSelf"
      | "flexGrow"
      | "flexShrink"
      | "flexWrapBefore"
      | "top"
      | "left"
      | "order"
      | "col"
      | "colSpan"
      | "column"
      | "columnSpan"
      | "row"
      | "rowSpan";

    interface HTMLViewBaseElementAttributes<T = HTMLViewBaseElement>
      extends DOMAttributes<T>,
        OnNativeViewEvents<HTMLViewBaseElementEventsMap<T>>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLViewBaseElement, HTMLViewBaseAttributeKeys>
        > {
      style: string | Style;
    }

    type HTMLViewElementAttributeKeys =
      | "testID"
      | "visibility"
      | "isUserInteractionEnabled"
      | "iosOverflowSafeAreaEnabled"
      | "iosOverflowSafeArea"
      // Style props
      | "css"
      | "color"
      | "boxShadow"
      | "opacity"
      | "verticalAlignment"
      | "horizontalAlignment"
      // Position
      | "originX"
      | "originY"
      // Transforms
      | "textTransform"
      | "translateX"
      | "translateY"
      | "scaleX"
      | "scaleY"
      | "rotateX"
      | "rotateY"
      | "rotate"
      | "perspective"
      // Size
      | "height"
      | "width"
      | "minWidth"
      | "minHeight"
      // margin
      | "margin"
      | "marginTop"
      | "marginLeft"
      | "marginRight"
      | "marginBottom"
      // border width
      | "borderWidth"
      | "borderBottomWidth"
      | "borderTopWidth"
      | "borderLeftWidth"
      | "borderRigthWidth"
      // border radius
      | "borderTopRightRadius"
      | "borderTopLeftRadius"
      | "borderBottomRightRadius"
      | "borderBottomLeftRadius"
      // border color
      | "borderColor"
      | "borderTopColor"
      | "borderLeftColor"
      | "borderRightColor"
      // Background
      | "backgroundSize"
      | "backgroundColor"
      | "backgroundRepeat"
      | "backgroundImage"
      | "backgroundPosition"
      | "backgroundSize"
      | "automationText"
      | "androidElevation"
      // Accessibility props
      | "accessible"
      | "accessibilityValue"
      | "accessibilityState"
      | "accessibilityRole"
      | "accessibilityMediaSession"
      | "accessibilityLiveRegion"
      | "accessibilityLanguage"
      | "accessibilityLabel"
      | "accessibilityIgnoresInvertColors"
      | "accessibilityIdentifier"
      | "accessibilityHint"
      | "accessibilityHidden";

    interface HTMLViewElementAttributes<
      T extends HTMLViewElement = HTMLViewElement
    > extends HTMLViewBaseElementAttributes<T>,
        OnNativeViewEvents<HTMLViewElementEventsMap<T>>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLViewElement, HTMLViewElementAttributeKeys>
        > {}

    type HTMLPageElementAttributeKeys =
      | "accessibilityAnnouncePageEnabled"
      | "actionBar"
      | "actionBarHidden"
      | "androidStatusBarBackground"
      | "enableSwipeBackNavigation"
      | "navigationContext"
      | "statusBarStyle";
    interface HTMLPageElementAttributes
      extends HTMLViewElementAttributes<HTMLPageElement>,
        OnNativeViewEvents<HTMLPageElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLPageElement, HTMLPageElementAttributeKeys>
        > {}

    type HTMLFrameElementAttributeKeys =
      | "actionBarVisibility"
      | "animated"
      | "navigationBarHeight"
      | "transition";
    interface HTMLFrameElementAttributes
      extends HTMLViewElementAttributes<HTMLFrameElement>,
        OnNativeViewEvents<HTMLFrameElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLFrameElement, HTMLFrameElementAttributeKeys>
        > {
      defaultPage?: string;
    }

    type HTMLLayoutBaseAttributeKeys =
      | "padding"
      | "paddingBottom"
      | "paddingTop"
      | "paddingLeft"
      | "paddingRight"
      | "clipToBounds"
      | "isPassThroughEnabled";

    interface HTMLAbsoluteLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLAbsoluteLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLAbsoluteLayoutElement, HTMLLayoutBaseAttributeKeys>
        > {}

    type HTMLGridLayoutAttributeKeys =
      | HTMLLayoutBaseAttributeKeys
      | "columns"
      | "rows";
    interface HTMLGridLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLGridLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLGridLayoutElement, HTMLGridLayoutAttributeKeys>
        > {}
    type HTMLStackLayoutAttributeKeys = "orientation";
    interface HTMLStackLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLStackLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLStackLayoutElement, HTMLStackLayoutAttributeKeys>
        > {}

    type HTMLWrapLayoutElementAttributeKeys =
      | HTMLLayoutBaseAttributeKeys
      | "itemHeight"
      | "itemWidth"
      | "orientation";
    interface HTMLWrapLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLWrapLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLWrapLayoutElement,
            HTMLWrapLayoutElementAttributeKeys
          >
        > {}

    type HTMLDockLayoutElementAttributeKeys =
      | HTMLLayoutBaseAttributeKeys
      | "stretchLastChild";
    interface HTMLDockLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLDockLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLWrapLayoutElement,
            HTMLDockLayoutElementAttributeKeys
          >
        > {}

    type HTMLFlexboxLayoutAttributeKeys =
      | HTMLLayoutBaseAttributeKeys
      | "justifyContent"
      | "flexWrap"
      | "flexDirection"
      | "alignItems"
      | "alignContent";
    interface HTMLFlexboxLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLFlexboxLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLFlexboxLayoutElement,
            HTMLFlexboxLayoutAttributeKeys
          >
        > {}

    interface HTMLRootLayoutElementAttributes
      extends HTMLViewElementAttributes<HTMLFlexboxLayoutElement>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLRootLayoutElement, HTMLGridLayoutAttributeKeys>
        > {}

    type HTMLContentViewElementAttributeKeys =
      | HTMLLayoutBaseAttributeKeys
      | "content"
      | "layoutView";
    interface HTMLContentViewElementAttributes
      extends HTMLViewElementAttributes<HTMLContentViewElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLContentViewElement,
            HTMLContentViewElementAttributeKeys
          >
        > {}

    type HTMLActionBarElementAttributeKeys =
      | "actionItems"
      | "androidContentInset"
      | "androidContentInsetRight"
      | "androidContentInsetLeft"
      | "iosIconRenderingMode"
      | "navigationButton"
      | "flat"
      | "title"
      | "titleView";

    interface HTMLActionBarElementAttributes
      extends HTMLViewElementAttributes<HTMLActionBarElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLActionBarElement,
            HTMLActionBarElementAttributeKeys
          >
        > {}

    type HTMLActionItemElementAttributeKeys = "icon" | "text" | "visibility";
    interface HTMLActionItemElementAttributes
      extends HTMLViewElementAttributes<HTMLActionItemElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLActionBarElement,
            HTMLActionItemElementAttributeKeys
          >
        > {}

    type HTMLActivityIndicatorElementAttributeKeys = "busy";
    interface HTMLActivityIndicatorElementAttributes
      extends HTMLViewElementAttributes<HTMLActivityIndicatorElement>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLActionBarElement,
            HTMLActivityIndicatorElementAttributeKeys
          >
        > {}

    type HTMLTextBaseElementAttributeKeys =
      | "textShadow"
      | "whiteSpace"
      | "textTransform"
      | "textDecoration"
      | "textAlignment"
      | "text"
      | "paddingTop"
      | "paddingBottom"
      | "paddingRight"
      | "paddingLeft"
      | "padding"
      | "lineHeight"
      | "letterSpacing"
      | "formattedText"
      | "fontWeight"
      | "fontStyle"
      | "fontFamily"
      | "fontSize";

    interface HTMLTextBaseElementAttributes<
      T extends HTMLTextBaseElement = HTMLTextBaseElement
    > extends HTMLViewElementAttributes<T>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLTextBaseElement, HTMLTextBaseElementAttributeKeys>
        > {}

    type HTMLButtonAttributeKeys =
      | "textWrap"
      | "accessible"
      | "accessibilityRole";

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
          PickAttributes<
            HTMLDatePickerElement,
            HTMLDatePickerElementAttributeKeys
          >
        > {}

    type HTMLFormattedStringElementAttributeKeys =
      | "backgroundColor"
      | "color"
      | "fontSize"
      | "fontFamily"
      | "fontWeight"
      | "fontStyle"
      | "textDecoration";

    type FormattedStringElementStyle = KebabKeys<
      Pick<Style, HTMLFormattedStringElementAttributeKeys>
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

    type HTMLHTMLViewElementAttributes = "html";
    interface HTMLHTMLViewElementAttributes
      extends HTMLViewElementAttributes<HTMLHTMLViewElement>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLHTMLViewElement, HTMLHTMLViewElementAttributes>
        > {}

    type HTMLImageElementAttributeKeys =
      | "imageSource"
      | "loadMode"
      | "src"
      | "stretch"
      | "decodeHeight"
      | "decodeWidth"
      | "tintColor";
    interface HTMLImageElementAttributes
      extends HTMLViewElementAttributes<HTMLImageElementAttributes>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLImageElement, HTMLImageElementAttributeKeys>
        > {}
    // Label
    type HTMLLabelElementAttributeKeys = "textWrap";
    interface HTMLLabelElementAttributes
      extends HTMLTextBaseElementAttributes<HTMLLabelElement>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLLabelElement, HTMLLabelElementAttributeKeys>
        > {}
    // Extends html label element attributes with nativescript button attributes
    interface LabelHTMLAttributes extends HTMLLabelElementAttributes {}
    // ListPicker
    type HTMLListPickerElementAttributeKeys =
      | "items"
      | "textField"
      | "valueField"
      | "selectedIndex"
      | "selectedValue"
      | "isItemsSource";
    interface HTMLListPickerElementAttributes
      extends HTMLViewElementAttributes<HTMLListPickerElement>,
        OnNativeViewEvents<HTMLListPickerElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLListPickerElement,
            HTMLListPickerElementAttributeKeys
          >
        > {}
    // ListView
    type HTMLListViewElementAttributeKeys =
      | "iosEstimatedRowHeight"
      | "itemTemplate"
      | "itemTemplateSelector"
      | "itemTemplates"
      | "items"
      | "rowHeight"
      | "sepratorColor";
    interface HTMLListViewElementAttributes
      extends HTMLViewElementAttributes<HTMLListViewElement>,
        OnNativeViewEvents<HTMLListViewElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLListViewElement, HTMLListViewElementAttributeKeys>
        > {}

    type HTMLNavigationButtonElementAttributeKeys =
      HTMLActionItemElementAttributeKeys;
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
    type HTMLProgressElementAttributeKeys = "maxValue" | "value";
    interface HTMLProgressElementAttributes
      extends HTMLViewElementAttributes<HTMLProgressElement>,
        OnNativeViewEvents<HTMLProgressElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLProgressElement, HTMLProgressElementAttributeKeys>
        > {}

    interface HTMLProxyViewContainerElementAttributes
      extends HTMLViewElementAttributes<HTMLProxyViewContainerElement> {}
    // ScrollView
    type HTMLScrollViewElementAttributeKeys =
      | "isScrollEnabled"
      | "verticalOffset"
      | "scrollableWidth"
      | "scrollableHeight"
      | "scrollBarIndicatorVisible"
      | "orientation"
      | "horizontalOffset";
    interface HTMLScrollViewElement
      extends HTMLViewElementAttributes<HTMLScrollViewElement>,
        OnNativeViewEvents<HTMLScrollViewElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLScrollViewElement,
            HTMLScrollViewElementAttributeKeys
          >
        > {}
    //#region SearchBar
    type HTMLSearchBarElementAttributeKeys =
      | "textFieldHintColor"
      | "textFieldBackgroundColor"
      | "text"
      | "hint";
    interface HTMLSearchBarElementAttributes
      extends HTMLViewElementAttributes<HTMLSearchBarElement>,
        OnNativeViewEvents<HTMLSearchBarElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLSearchBarElement,
            HTMLSearchBarElementAttributeKeys
          >
        > {}
    //#endregion SearchBar

    //#region  SegementedBar
    type HTMLSegmentedBarElementAttributeKeys =
      | "items"
      | "selectedBackgroundColor"
      | "selectedIndex";
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
    type HTMLSegmentedBarItemElementAttributeKeys = "title";
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
    type HTMLSpanElementAttributeKeys =
      | "tappable"
      | "text"
      | HTMLFormattedStringElementAttributeKeys;
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
    type HTMLSwitchElementAttributeKeys = "offBackgroundColor" | "checked";
    interface HTMLSwitchELementAttributes
      extends HTMLViewElementAttributes<HTMLSwitchELement>,
        OnNativeViewEvents<HTMLSwitchELementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLSwitchELement, HTMLSwitchElementAttributeKeys>
        > {}
    //#endregion Switch

    //#region TabView
    type HTMLTabViewElementAttributeKeys =
      | "androidOffscreenTabLimit"
      | "androidSelectedTabHighlightColor"
      | "androidSwipeEnabled"
      | "androidTabsPosition"
      | "iosIconRenderingMode"
      | "items"
      | "selectedIndex"
      | "selectedTabTextColor"
      | "tabBackgroundColor"
      | "tabTextColor"
      | "tabTextFontSize";
    interface HTMLTabViewELementAttributes
      extends HTMLViewElementAttributes<HTMLTabViewELement>,
        OnNativeViewEvents<HTMLTabViewElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLTabViewELement, HTMLTabViewElementAttributeKeys>
        > {}
    //#endregion TabView

    //#region TabViewItem
    type HTMLTabViewItemELementAttributeKeys =
      | "canBeLoaded"
      | "textTransform"
      | "iconSource"
      | "title";
    interface HTMLTabViewItemELementAttributes
      extends HTMLViewElementAttributes<HTMLTabViewItemELement>,
        OnNativeViewEvents<HTMLTabViewItemElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLTabViewItemELement,
            HTMLTabViewItemElementAttributeKeys
          >
        > {}

    //#endregion TabViewItem

    type HTMLEditableTextBaseElementAttributeKeys =
      | "updateTextTrigger"
      | "autocapitalizationType"
      | "autocorrect"
      | "autofillType"
      | "editable"
      | "hint"
      | "keyboardType"
      | "maxLength"
      | "maxLines"
      | "returnKeyType";

    interface HTMLEditableTextBaseElementAttributes<
      T extends HTMLEditableTextBaseElement = HTMLEditableTextBaseElement
    > extends HTMLTextBaseElementAttributes<T>,
        HTMLExtendedAttributes<
          PickAttributes<T, HTMLEditableTextBaseElementAttributeKeys>
        > {}

    //#region TextField
    type HTMLTextFieldElementAttributeKeys =
      | "closeOnReturn"
      | "secure"
      | "secureWithoutAutofill"
      | "title";
    interface HTMLTextFieldElementAttributes
      extends HTMLEditableTextBaseElementAttributes<HTMLTextFieldElement>,
        HTMLViewElementAttributes<HTMLTextFieldElement>,
        OnNativeViewEvents<HTMLTextFieldElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLTextFieldElement,
            HTMLTextFieldElementAttributeKeys
          >
        > {}

    //#endregion TextField

    //#region TextView
    type HTMLTextViewElementAttributeKeys = "maxLines";
    interface HTMLTextViewElementAttributes
      extends HTMLEditableTextBaseElementAttributes<HTMLTextViewElement>,
        HTMLViewElementAttributes<HTMLTextViewElement>,
        OnNativeViewEvents<HTMLTextViewElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLTextViewElement, HTMLTextViewElementAttributeKeys>
        > {}
    //#endregion TextView

    //#region Slider
    type HTMLSliderElementAttributeKeys =
      | "maxValue"
      | "minValue"
      | "value"
      | "accessible"
      | "accessibilityStep"
      | "accessibilityRole";
    interface HTMLSliderElementAttributes
      extends HTMLViewElementAttributes<HTMLSliderElement>,
        OnNativeViewEvents<HTMLSliderElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<HTMLSliderElement, HTMLSliderElementAttributeKeys>
        > {}
    //#endregion Slider
    //#region TimePicker
    type HTMLTimePickerElementAttributeKeys =
      | "hour"
      | "iosPreferredDatePickerStyle"
      | "maxHour"
      | "maxMinute"
      | "minute"
      | "minuteInterval"
      | "time";
    interface HTMLTimePickerElementAttributes<
      T extends HTMLTimePickerElement = HTMLTimePickerElement
    > extends HTMLViewElementAttributes<HTMLTimePickerElement>,
        OnNativeViewEvents<HTMLTimePickerElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<
            HTMLTimePickerElement,
            HTMLTimePickerElementAttributeKeys
          >
        > {}

    //#endregion TimePicker

    //#region WebView
    type HTMLWebViewElementAttributeKeys =
      | "src"
      | "disableZoom"
      | "canGoForward"
      | "canGoBackward";
    interface HTMLWebViewElementAttributes<
      T extends HTMLWebViewElement = HTMLWebViewElement
    > extends HTMLViewElementAttributes<T>,
        OnNativeViewEvents<HTMLWebViewElementEventsMap>,
        HTMLExtendedAttributes<
          PickAttributes<T, HTMLWebViewElementAttributeKeys>
        > {}
    //#endregion WebView

    interface IntrinsicElements {
      /**
       * A UI component used to display `<Page>` elements. Every app needs at least a single <Frame> element, usually set as the root element.
       */
      frame: HTMLFrameElementAttributes;
      /**
       * A UI component that represents an application screen. NativeScript apps typically consist of one or more `<Page>` that wrap content such as an `<ActionBar>` and other UI widgets.
       */
      page: HTMLPageElementAttributes;
      /**
       * This class is the base class for all UI components. A View occupies a rectangular area on the screen and is responsible for drawing and layouting of all UI components within.
       */
      view: HTMLViewElementAttributes;
      /**
       * A layout container that lets you stack the child elements vertically (default) or horizontally.
       */
      stacklayout: HTMLStackLayoutElementAttributes;
      /**
       * A layout container that provides a non-exact implementation of the CSS Flexbox layout. This layout lets you arrange child components both horizontally and vertically.
       */
      flexboxlayout: HTMLFlexboxLayoutElementAttributes;
      /**
     * A layout container that lets you arrange its child elements in a table-like manner.

The grid consists of rows, columns, and cells. A cell can span one or more rows and one or more columns. 
It can contain multiple child elements which can span over multiple rows and columns, and even overlap each other.

By default, <GridLayout> has one column and one row. You can add columns and rows by configuring the columns and the rows properties. 
In these properties, you need to set the number of columns and rows and their width and height. You set the number of columns by listing their widths, 
separated by a comma. You set the number of rows by listing their heights, separated by a comma.
     */
      gridlayout: HTMLGridLayoutElementAttributes;
      /**
       * A UI component that shows an editable or a read-only multi-line text container. You can use it to let users type large text in your app or to show longer, multi-line text on the screen.
       */
      textview: HTMLTextViewElementAttributes;
      /**
       * An input component that creates an editable single-line box.
       */
      textfield: HTMLTextFieldElementAttributes;
      /**
       * A layout container that lets you position items in rows or columns, based on the orientation property.
       * When the space is filled, the container automatically wraps items onto a new row or column.
       */
      wraplayout: HTMLWrapLayoutElementAttributes;
      /**
       * The WebView component is used to display web content within your application.
       * You use the control by providing a `src` attribute that accepts a URL,a path
       * to a local HTML file or directly HTML string.
       */
      webview: HTMLWebViewElementAttributes;
      /**
       * A layout that lets you specify exact locations (left/top coordinates) of its children.
       */
      absolutelayout: HTMLAbsoluteLayoutElementAttributes;
      /**
       * Provides an abstraction over the ActionBar (android) and NavigationBar (iOS).
       */
      actionbar: HTMLActionBarElementAttributes;
      /**
       * Represents an action item in the action bar.
       */
      actionitem: HTMLActionItemElementAttributes;
      /**
       * Represents a UI widget which displays a progress indicator hinting the user for some background operation running.
       */
      activityindicator: HTMLActivityIndicatorElementAttributes;
      contentview: HTMLContentViewElementAttributes;
      /**
       * A UI component that lets users select a date from a pre-configured range.
       */
      datepicker: HTMLDatePickerElementAttributes;
      /**
       * a layout container that lets you dock child elements to the sides or the center of the layout.
       *
       * Use the `dock` property to dock its children to the `left`, `right`, `top`, `bottom` or `center` of the layout.
       * To dock a child element to the center, it must be the last child of the container and you must set
       * the `stretchLastChild` property of the parent to `true`.
       */
      docklayout: HTMLDockLayoutElementAttributes;
      /**
       * A View to support various text transformations and decorations. The FormattedString class can be used
       * with all text-related components like `Label`, `TextView`, `TextField` and even `Button`.
       *
       * FormattedString only accepts `span` as it's children.
       */
      formattedstring: HTMLFormattedStringElementAttributes;
      /**
       * The HtmlView represents a view with HTML content. Use this component instead of a WebView when you want to show static HTML content with base HTML support.
       */
      htmlview: HTMLHTMLViewElementAttributes;
      /**
       * The Image widget shows an image in your mobile application.
       */
      image: HTMLImageElementAttributes;
      /**
       * The ListPicker is a spinner type component for listing options.
       */
      listpicker: HTMLListPickerElementAttributes;
      /**
       * A UI component that is used to render large lists of data.
       */
      listview: HTMLListViewElementAttributes;
      /**
       *
       */
      navigationbutton: HTMLNavigationButtonElementAttributes;
      /**
       * `<Placeholder>` allows you to add any native widget to your application. To do that, you need to put a Placeholder somewhere in
       * the UI hierarchy and then create and configure the native widget that you want to appear there. Finally,
       * pass your native widget to the event arguments of the creatingView event.
       */
      placeholder: HTMLPlaceholderElementAttributes;
      /**
       * A UI component that shows a bar to indicate the progress of a task.
       */
      progress: HTMLProgressElementAttributes;

      proxyview: HTMLProxyViewContainerElementAttributes;
      /**
       * A layout container designed to be used as the primary root layout container for your app with a built in api to easily control dynamic view layers. It extends a GridLayout so has all the features of a grid but enhanced with additional apis.
       */
      rootlayout: HTMLRootLayoutElementAttributes;
      /**
       * A UI component that shows a scrollable content area. Content can be scrolled vertically or horizontally.
       */
      scrollview: HTMLScrollViewElementAttributes;
      /**
       * A UI component that provides a user interface for entering search queries and submitting requests to the search provider.
       */
      searchbar: HTMLSearchBarElementAttributes;
      /**
       * A UI bar component that displays a set of buttons for discrete selection. Can show text or images.
       */
      segmentedbar: HTMLSegmentedBarElementAttributes;
      /**
       * An item displayed inside SegmentedBar.
       */
      segmentedbaritem: HTMLSegmentedBarElementAttributes;
      /**
       * A UI component that provides a slider control for picking values within a specified numeric range.
       */
      slider: HTMLSliderElementAttributes;
      /**
       * A UI component that lets users toggle between two states.
       */
      switch: HTMLSwitchELementAttributes;
      /**
       * A navigation component that shows content grouped into tabs and lets users switch between tabs.
       */
      tabview: HTMLTabViewELementAttributes;
      /**
       * A screen inside TabView.
       *
       * Currently, TabViewItem expects a single child element. In most cases, you might want to wrap your content in a layout.
       */
      tabitem: HTMLTabViewItemElementAttributes;
      /**
       * A UI component that lets users select time.
       */
      timepicker: HTMLTimePickerElementAttributes;
    }
  }
}
