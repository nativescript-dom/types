export type OmittedStyleObjectKeys =
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

export type HTMLViewBaseElementAttributeKeys =
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

export type HTMLViewElementAttributeKeys =
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

export type HTMLPageElementAttributeKeys =
  | "accessibilityAnnouncePageEnabled"
  | "actionBar"
  | "actionBarHidden"
  | "androidStatusBarBackground"
  | "enableSwipeBackNavigation"
  | "navigationContext"
  | "statusBarStyle";

export type HTMLFrameElementAttributeKeys =
  | "actionBarVisibility"
  | "animated"
  | "navigationBarHeight"
  | "transition";

export type HTMLLayoutBaseAttributeKeys =
  | "padding"
  | "paddingBottom"
  | "paddingTop"
  | "paddingLeft"
  | "paddingRight"
  | "clipToBounds"
  | "isPassThroughEnabled";

export type HTMLGridLayoutAttributeKeys =
  | HTMLLayoutBaseAttributeKeys
  | "columns"
  | "rows";

export type HTMLWrapLayoutElementAttributeKeys =
  | HTMLLayoutBaseAttributeKeys
  | "itemHeight"
  | "itemWidth"
  | "orientation";

export type HTMLDockLayoutElementAttributeKeys =
  | HTMLLayoutBaseAttributeKeys
  | "stretchLastChild";

export type HTMLFlexboxLayoutAttributeKeys =
  | HTMLLayoutBaseAttributeKeys
  | "justifyContent"
  | "flexWrap"
  | "flexDirection"
  | "alignItems"
  | "alignContent";

export type HTMLContentViewElementAttributeKeys =
  | HTMLLayoutBaseAttributeKeys
  | "content"
  | "layoutView";

export type HTMLActionBarElementAttributeKeys =
  | "actionItems"
  | "androidContentInset"
  | "androidContentInsetRight"
  | "androidContentInsetLeft"
  | "iosIconRenderingMode"
  | "navigationButton"
  | "flat"
  | "title"
  | "titleView";

export type HTMLActionItemElementAttributeKeys = "icon" | "text" | "visibility";
export type HTMLActivityIndicatorElementAttributeKeys = "busy";
export type HTMLTextBaseElementAttributeKeys =
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
export type HTMLButtonAttributeKeys =
  | "textWrap"
  | "accessible"
  | "accessibilityRole";
export type HTMLFormattedStringElementAttributeKeys =
  | "backgroundColor"
  | "color"
  | "fontSize"
  | "fontFamily"
  | "fontWeight"
  | "fontStyle"
  | "textDecoration";
export type HTMLHTMLViewElementAttributes = "html";
export type HTMLImageElementAttributeKeys =
  | "imageSource"
  | "loadMode"
  | "src"
  | "stretch"
  | "decodeHeight"
  | "decodeWidth"
  | "tintColor";
export type HTMLLabelElementAttributeKeys = "textWrap";
export type HTMLListPickerElementAttributeKeys =
  | "items"
  | "textField"
  | "valueField"
  | "selectedIndex"
  | "selectedValue"
  | "isItemsSource";
export type HTMLListViewElementAttributeKeys =
  | "iosEstimatedRowHeight"
  | "itemTemplate"
  | "itemTemplateSelector"
  | "itemTemplates"
  | "items"
  | "rowHeight"
  | "sepratorColor";
export type HTMLProgressElementAttributeKeys = "maxValue" | "value";
export type HTMLNavigationButtonElementAttributeKeys =
  HTMLActionItemElementAttributeKeys;
export type HTMLScrollViewElementAttributeKeys =
  | "isScrollEnabled"
  | "verticalOffset"
  | "scrollableWidth"
  | "scrollableHeight"
  | "scrollBarIndicatorVisible"
  | "orientation"
  | "horizontalOffset";
export type HTMLSearchBarElementAttributeKeys =
  | "textFieldHintColor"
  | "textFieldBackgroundColor"
  | "text"
  | "hint";
export type HTMLSegmentedBarElementAttributeKeys =
  | "items"
  | "selectedBackgroundColor"
  | "selectedIndex";
export type HTMLSegmentedBarItemElementAttributeKeys = "title";
export type HTMLSpanElementAttributeKeys =
  | "tappable"
  | "text"
  | HTMLFormattedStringElementAttributeKeys;
export type HTMLSwitchElementAttributeKeys = "offBackgroundColor" | "checked";
export type HTMLTabViewElementAttributeKeys =
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
export type HTMLTabViewItemELementAttributeKeys =
  | "canBeLoaded"
  | "textTransform"
  | "iconSource"
  | "title";
export type HTMLEditableTextBaseElementAttributeKeys =
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
export type HTMLTextFieldElementAttributeKeys =
  | "closeOnReturn"
  | "secure"
  | "secureWithoutAutofill"
  | "title";

export type HTMLTextViewElementAttributeKeys = "maxLines";
export type HTMLSliderElementAttributeKeys =
  | "maxValue"
  | "minValue"
  | "value"
  | "accessible"
  | "accessibilityStep"
  | "accessibilityRole";
export type HTMLTimePickerElementAttributeKeys =
  | "hour"
  | "iosPreferredDatePickerStyle"
  | "maxHour"
  | "maxMinute"
  | "minute"
  | "minuteInterval"
  | "time";
export type HTMLWebViewElementAttributeKeys =
  | "src"
  | "disableZoom"
  | "canGoForward"
  | "canGoBackward";

export type HTMLStackLayoutAttributeKeys = "orientation";
