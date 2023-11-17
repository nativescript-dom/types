export const OmittedStyleObjectKeys = [
  "PropertyBag",
  "_createPropertyChangeData",
  "_emit",
  "_isViewBase",
  "_fontScale",
  "addEventListener",
  "get",
  "hasCssVariable",
  "hasListeners",
  "notify",
  "notifyPropertyChange",
  "on",
  "off",
  "once",
  "removeEventListener",
  "removeScopedCssVariable",
  "removeUnscopedCssVariable",
  "resetScopedCssVariables",
  "resetUnscopedCssVariables",
  "set",
  "setProperty",
  "setScopedCssVariable",
  "setUnscopedCssVariable",
  "toString",
  "getCssVariable",
];

export const HTMLViewBaseElementAttributeKeys = [
  "class",
  "className",
  "hidden",
  "recycleNativeView",
  "reusable",
  "style",
  // Styles
  "dock",
  "alignSelf",
  "flexGrow",
  "flexShrink",
  "flexWrapBefore",
  "top",
  "left",
  "order",
  "col",
  "colSpan",
  "column",
  "columnSpan",
  "row",
  "rowSpan",
];

export const HTMLViewElementAttributeKeys = [
  "testID",
  "visibility",
  "isUserInteractionEnabled",
  "iosOverflowSafeAreaEnabled",
  "iosOverflowSafeArea",
  "sharedTransitionTag",
  "sharedTransitionIgnore",
  // Style props
  "css",
  "color",
  "boxShadow",
  "opacity",
  "verticalAlignment",
  "horizontalAlignment",
  // Position
  "originX",
  "originY",
  // Transforms
  "textTransform",
  "translateX",
  "translateY",
  "scaleX",
  "scaleY",
  "rotateX",
  "rotateY",
  "rotate",
  "perspective",
  // Size
  "height",
  "width",
  "minWidth",
  "minHeight",
  // margin
  "margin",
  "marginTop",
  "marginLeft",
  "marginRight",
  "marginBottom",
  // border width
  "borderWidth",
  "borderBottomWidth",
  "borderTopWidth",
  "borderLeftWidth",
  "borderRigthWidth",
  // border radius
  "borderTopRightRadius",
  "borderTopLeftRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
  // border color
  "borderColor",
  "borderTopColor",
  "borderLeftColor",
  "borderRightColor",
  // Background
  "backgroundSize",
  "backgroundColor",
  "backgroundRepeat",
  "backgroundImage",
  "backgroundPosition",
  "backgroundSize",
  "automationText",
  "androidElevation",
  // Accessibility props
  "accessible",
  "accessibilityValue",
  "accessibilityState",
  "accessibilityRole",
  "accessibilityMediaSession",
  "accessibilityLiveRegion",
  "accessibilityLanguage",
  "accessibilityLabel",
  "accessibilityIgnoresInvertColors",
  "accessibilityIdentifier",
  "accessibilityHint",
  "accessibilityHidden",
];

export const HTMLPageElementAttributeKeys = [
  "accessibilityAnnouncePageEnabled",
  "actionBar",
  "actionBarHidden",
  "androidStatusBarBackground",
  "enableSwipeBackNavigation",
  "navigationContext",
  "statusBarStyle",
];

export const HTMLFrameElementAttributeKeys = [
  "actionBarVisibility",
  "animated",
  "navigationBarHeight",
  "transition",
];

export const HTMLLayoutBaseAttributeKeys = [
  ..."padding",
  "paddingBottom",
  "paddingTop",
  "paddingLeft",
  "paddingRight",
  "clipToBounds",
  "isPassThroughEnabled",
];

export const HTMLAbsoluteLayoutAttributeKeys = [...HTMLLayoutBaseAttributeKeys];
export const HTMLRootLayoutAttributeKeys = [...HTMLLayoutBaseAttributeKeys];
export const HTMLRepeaterAttributeKeys = [...HTMLLayoutBaseAttributeKeys];
export const HTMLProxyViewContainerAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
];

export const HTMLDatePickerAttributeKeys = [
  "year",
  "month",
  "day",
  "date",
  "maxDate",
  "minDate",
  "iosPreferredDatePickerStyle",
];

export const HTMLPlaceholderAttributeKeys = [...HTMLLayoutBaseAttributeKeys];

export const HTMLCustomLayoutViewAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
];

export const HTMLGridLayoutAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
  "columns",
  "rows",
];

export const HTMLWrapLayoutElementAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
  "itemHeight",
  "itemWidth",
  "orientation",
];

export const HTMLDockLayoutElementAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
  "stretchLastChild",
];

export const HTMLFlexboxLayoutAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
  "justifyContent",
  "flexWrap",
  "flexDirection",
  "alignItems",
  "alignContent",
];

export const HTMLContentViewElementAttributeKeys = [
  ...HTMLLayoutBaseAttributeKeys,
  "content",
  "layoutView",
];

export const HTMLActionBarElementAttributeKeys = [
  "actionItems",
  "androidContentInset",
  "androidContentInsetRight",
  "androidContentInsetLeft",
  "iosIconRenderingMode",
  "navigationButton",
  "flat",
  "title",
  "titleView",
];

export const HTMLActionItemElementAttributeKeys = [
  "icon",
  "text",
  "visibility",
];
export const HTMLActivityIndicatorElementAttributeKeys = ["busy"];
export const HTMLTextBaseElementAttributeKeys = [
  "textShadow",
  "whiteSpace",
  "textTransform",
  "textDecoration",
  "textAlignment",
  "text",
  "paddingTop",
  "paddingBottom",
  "paddingRight",
  "paddingLeft",
  "padding",
  "lineHeight",
  "letterSpacing",
  "formattedText",
  "fontWeight",
  "fontStyle",
  "fontFamily",
  "fontSize",
];
export const HTMLButtonAttributeKeys = [
  "textWrap",
  "accessible",
  "accessibilityRole",
  ...HTMLTextBaseElementAttributeKeys,
];
export const HTMLFormattedStringElementAttributeKeys = [
  "backgroundColor",
  "color",
  "fontSize",
  "fontFamily",
  "fontWeight",
  "fontStyle",
  "textDecoration",
];
export const HTMLHtmlViewElementAttributeKeys = ["html"];
export const HTMLImageElementAttributeKeys = [
  "imageSource",
  "loadMode",
  "src",
  "stretch",
  "decodeHeight",
  "decodeWidth",
  "tintColor",
];
export const HTMLLabelElementAttributeKeys = [
  "textWrap",
  ...HTMLTextBaseElementAttributeKeys,
];
export const HTMLListPickerElementAttributeKeys = [
  "items",
  "textField",
  "valueField",
  "selectedIndex",
  "selectedValue",
  "isItemsSource",
];
export const HTMLListViewElementAttributeKeys = [
  "iosEstimatedRowHeight",
  "itemTemplate",
  "itemTemplateSelector",
  "itemTemplates",
  "items",
  "rowHeight",
  "sepratorColor",
];
export const HTMLProgressElementAttributeKeys = ["maxValue", "value"];
export const HTMLNavigationButtonElementAttributeKeys =
  HTMLActionItemElementAttributeKeys;
export const HTMLScrollViewElementAttributeKeys = [
  "isScrollEnabled",
  "verticalOffset",
  "scrollableWidth",
  "scrollableHeight",
  "scrollBarIndicatorVisible",
  "orientation",
  "horizontalOffset",
];
export const HTMLSearchBarElementAttributeKeys = [
  "textFieldHintColor",
  "textFieldBackgroundColor",
  "text",
  "hint",
];
export const HTMLSegmentedBarElementAttributeKeys = [
  "items",
  "selectedBackgroundColor",
  "selectedIndex",
];
export const HTMLSegmentedBarItemElementAttributeKeys = ["title"];
export const HTMLSpanElementAttributeKeys = [
  "tappable",
  "text",
  ...HTMLFormattedStringElementAttributeKeys,
];
export const HTMLSwitchElementAttributeKeys = ["offBackgroundColor", "checked"];
export const HTMLTabViewElementAttributeKeys = [
  "androidOffscreenTabLimit",
  "androidSelectedTabHighlightColor",
  "androidSwipeEnabled",
  "androidTabsPosition",
  "iosIconRenderingMode",
  "items",
  "selectedIndex",
  "selectedTabTextColor",
  "tabBackgroundColor",
  "tabTextColor",
  "tabTextFontSize",
];
export const HTMLTabViewItemElementAttributeKeys = [
  "canBeLoaded",
  "textTransform",
  "iconSource",
  "title",
];
export const HTMLEditableTextBaseElementAttributeKeys = [
  "updateTextTrigger",
  "autocapitalizationType",
  "autocorrect",
  "autofillType",
  "editable",
  "hint",
  "keyboardType",
  "maxLength",
  "maxLines",
  "returnKeyType",
];
export const HTMLTextFieldElementAttributeKeys = [
  "closeOnReturn",
  "secure",
  "secureWithoutAutofill",
  "title",
  ...HTMLTextBaseElementAttributeKeys,
];

export const HTMLTextViewElementAttributeKeys = [
  "maxLines",
  ...HTMLTextBaseElementAttributeKeys,
];
export const HTMLSliderElementAttributeKeys = [
  "maxValue",
  "minValue",
  "value",
  "accessible",
  "accessibilityStep",
  "accessibilityRole",
];
export const HTMLTimePickerElementAttributeKeys = [
  "hour",
  "iosPreferredDatePickerStyle",
  "maxHour",
  "maxMinute",
  "minute",
  "minuteInterval",
  "time",
];
export const HTMLWebViewElementAttributeKeys = [
  "src",
  "disableZoom",
  "canGoForward",
  "canGoBackward",
];

export const HTMLStackLayoutAttributeKeys = ["orientation"];
