<div align="center" >

<img src="./dom.png" width="150" height="150" />

</div>

<h2 align="center">
Single, centralized TypeScript types for NativeScript web frameworks.
</h2>

NativeScript's core has been first-class Typescript since very long but sadly the benefits in terms of better auto-complete/intellisense for end-developers in code editors hasn't been properly propgated down especially when you use NativeScript with Vue, Svelte, React and other web frameworks. The main reason for this is that all these frameworks require all the core views to be like HTML elements. Hence it requires rewriting the types or generating them from core which are hard to maintain and do not have the best quality as compared to @nativescript/core. If types change in core or a new prop is added or some part of the JSDoc get's updated, it's not transferred down to the end-developer until a new version of the flavor is released.

We need something better.

## A single types system

Finally we have a solution to this. A single & undocked type system that combines DOM & core into a single interface that can be used across all web frameworks. So now we update the types in one place and everyone will get improved and better types automatically without doing any extra work or any flavor updates.

- Types work like a bridge between core, dom & the web renderer
- JSDoc support, If some prop has JSDoc in core, it shows up in code-editor automatically, better core, better types
- Fully conforms & extends `libdom.d.ts` to provide complete HTML DOM types
- Prop filtering, props and attributes are filtered, only types that should be exposed in DOM are there. No pollution from @nativescript/core
- Easy to maintain, we just need to update types in one place and everyone gets better and updated types automatically.
- Easy to support new frameworks, takes 10 minutes at most.
- Work hand-in-hand with existing renderers, just install and get better intellisense
- Platform prefixed props such as `android:text` or `ios:backgroundColor`
- Fully typed Events for each View
- Support for Plugins

## Installation

Get the types packages for your project and boost DX of your team while developing NativeScript apps to the next level.

**[@nativescript-dom/core-types](/package/@nativescript-dom/core-types)**

Renderer agnostic typeScript definitions for [@nativescript/core](https://github.com/NativeScript/NativeScript) views exposed as HTML DOM elements

**[@nativescript-dom/react-types](/package/@nativescript-dom/react-types)**

TypeScript definitions for [@nativescript/core](https://github.com/NativeScript/NativeScript) views exposed as JSX intrinsic elements for react

**[@nativescript-dom/solidjs-types](/package/@nativescript-dom/solidjs-types)**

TypeScript definitions for[@nativescript/core](https://github.com/NativeScript/NativeScript) views exposed as JSX intrinsic elements for solidjs

**[@nativescript-dom/svelte-types](/package/@nativescript-dom/svelte-types)**

TypeScript definitions for [@nativescript/core](https://github.com/NativeScript/NativeScript) views exposed as JSX intrinsic elements for svelte

**[@nativescript-dom/vue-types](/package/@nativescript-dom/vue-types)**

TypeScript definitions for [@nativescript/core](https://github.com/NativeScript/NativeScript) views exposed as JSX intrinsic elements for vue

#

MIT Licensed
