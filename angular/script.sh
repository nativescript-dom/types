#!/bin/bash
# Copy nativescript sources
rm -rf @nativescript | true && cp -r node_modules/@nativescript @nativescript

COREUI=@nativescript/core/ui
COREVIEWS=$COREUI/core
COREUILAYOUTS=$COREUI/layouts

VIEW_CLASS=ViewBase
HTML_NAME="view-base"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREVIEWS/$HTML_NAME/index.d.ts
wca analyze $COREVIEWS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=View
HTML_NAME="view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREVIEWS/$HTML_NAME/index.d.ts
echo "customElements.define('custom-layout-view', CustomLayoutView)" >> $COREVIEWS/$HTML_NAME/index.d.ts
wca analyze $COREVIEWS/view/index.d.ts --outFile $(pwd)/metadata/view.json --format=json

VIEW_CLASS=TextBase
HTML_NAME="text-base"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=LayoutBase
HTML_NAME="layout-base"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/layouts/$HTML_NAME.d.ts
wca analyze $COREUI/layouts/$HTML_NAME.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=EditableTextBase
HTML_NAME="editable-text-base"
echo "customElements.define('editable-text-base', $VIEW_CLASS)" >> $COREUI/editable-text-base/index.d.ts
wca analyze $COREUI/editable-text-base/index.d.ts --outFile $(pwd)/metadata/editable-text-base.json --format=json

VIEW_CLASS=ActionBar
HTML_NAME="action-bar"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=ActivityIndicator
HTML_NAME="activity-indicator"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Button
HTML_NAME="button"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=ContentView
HTML_NAME="content-view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=DatePicker
HTML_NAME="date-picker"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Frame
HTML_NAME="frame"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=HtmlView
HTML_NAME="html-view"
echo "customElements.define('html-view', HtmlView)" >> $COREUI/html-view/index.d.ts
wca analyze $COREUI/html-view/index.d.ts --outFile $(pwd)/metadata/html-view.json --format=json

VIEW_CLASS=Image
HTML_NAME="image"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Label
HTML_NAME="label"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=FormattedString
HTML_NAME="formatted-string"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/text-base/$HTML_NAME.d.ts
wca analyze $COREUI/text-base/$HTML_NAME.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Span
HTML_NAME="span"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/text-base/span.d.ts
wca analyze $COREUI/text-base/span.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=AbsoluteLayout
HTML_NAME="absolute-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=DockLayout
HTML_NAME="dock-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=FlexboxLayout
HTML_NAME="flexbox-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=GridLayout
HTML_NAME="grid-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=RootLayout
HTML_NAME="root-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=StackLayout
HTML_NAME="stack-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=WrapLayout
HTML_NAME="wrap-layout"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUILAYOUTS/$HTML_NAME/index.d.ts
wca analyze $COREUILAYOUTS/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=ListPicker
HTML_NAME="list-picker"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=ListView
HTML_NAME="list-view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Page
HTML_NAME="page"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Placeholder
HTML_NAME="placeholder"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Progress
HTML_NAME="progress"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=ProxyViewContainer
HTML_NAME="proxy-view-container"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Repeater
HTML_NAME="repeater"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=ScrollView
HTML_NAME="scroll-view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=SearchBar
HTML_NAME="search-bar"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=SegmentedBar
HTML_NAME="segmented-bar"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
echo "customElements.define('$HTML_NAME-item', SegmentedBarItem)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Slider
HTML_NAME="slider"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=Switch
HTML_NAME="switch"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=TabView
HTML_NAME="tab-view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
echo "customElements.define('$HTML_NAME-item', TabViewItem)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=TextField
HTML_NAME="text-field"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=TextView
HTML_NAME="text-view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=TimePicker
HTML_NAME="time-picker"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json

VIEW_CLASS=WebView
HTML_NAME="web-view"
echo "customElements.define('$HTML_NAME', $VIEW_CLASS)" >> $COREUI/$HTML_NAME/index.d.ts
wca analyze $COREUI/$HTML_NAME/index.d.ts --outFile $(pwd)/metadata/$HTML_NAME.json --format=json