import { createComponent } from "@nativescript-community/solid-js/src/renderer";

function Fragment(props) {
  return props.children;
}

function jsx(type, props) {
  return createComponent(type, props);
}

export { Fragment, jsx, jsx as jsxDEV, jsx as jsxs };
