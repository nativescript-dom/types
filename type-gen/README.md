# @nativescript-dom/type-gen

Generate framework-friendly types for NativeScript views from source code. This CLI scans NativeScript libraries (including your app) and produces:

- React/Solid/Svelte/Vue: a single .d.ts “JSX runtime” file exposing NativeScript views as strongly typed intrinsic elements.
- Angular: VS Code HTML Custom Data (metadata.json) and JetBrains Web Types (web-types.json) for template IntelliSense.

It works by analyzing TypeScript sources using web-component-analyzer with a NativeScript-specific flavor. Views are discovered via JSDoc markers or, optionally, a legacy mode.

## Why use it?

- First-class IntelliSense on view attributes and events in templates/JSX.
- Per-framework event naming and attribute casing out of the box.
- Works for @nativescript/core and third‑party plugins.
- Incremental generation with a dependency lock to avoid regenerating unchanged libraries.

## Quick start

The simplest way to use type-gen is via npx. You can run type-gen once using the `--all` flag to generate types for all your dependencies, or run it multiple times to generate core and plugin types separately.

1. Generate framework “core” types once per project

```bash
npx @nativescript-dom/type-gen --core --framework <framework>
```

2. Generate types for dependencies you use (plugins)

```bash
npx @nativescript-dom/type-gen --package @nativescript-community/ui-collectionview --framework  <framework> --output types
```

3. (Optional) Generate types for all dependencies listed in your package.json

```bash
npx @nativescript-dom/type-gen --all --framework  <framework> --output types
```

Where files go

- By default, output is written to ./types. Use --output to change the folder.

## CLI reference

Every flag has a short and long form. You can also pass values as --flag=value.

- -p, --package <name>
  - Generate types for a specific installed package (e.g. @nativescript-community/ui-collectionview).
  - The package must be resolvable from your project (node_modules).

- -o, --output <dir>
  - Directory to write output files into. Default: ./types (created if missing).

- -f, --framework <react|solid|svelte|vue|angular>
  - Target framework. Required for all commands that produce output.
  - Important: Use solid (not solidjs).

- -c, --core
  - Generate the framework’s “core” types for @nativescript/core.

- -a, --all
  - Generate for all dependencies listed in your project’s package.json.
  - Uses a lock file to skip unchanged entries between runs (see --reset).

- -d, --directory <path>
  - Generate from a local directory of sources (not a package). Use when developing a library locally.

- -r, --reset
  - Reset the dependency lock (forces --all to regenerate everything).

- -n, --filename <name>
  - Override the output file name. Helpful for “core” files (e.g. core_react_jsx.d.ts).

- -l, --legacy
  - Legacy discovery mode. Scans classes/interfaces that extend ViewBase and infers events (e.g. textChangeEvent -> TextChangeEventData). Prefer the JSDoc markers below for accuracy.

- -h, --help
  - Print usage.

### Lock file

- Path: node_modules/.ns-type-gen/.ns-type-gen.lock.json
- Written automatically on `--all` runs. Stores dependency versions to know what changed next time.

## How views are discovered (for library authors)

The CLI scans TypeScript source files to find NativeScript views and their properties/events based on the following JSDoc markers.

- @nsView on the class or interface that represents a NativeScript view.
- @nsProperty on public properties that should appear as attributes.
- @nsEvent name EventType on event fields to expose them as events.

Example View that will be discovered:

```ts
class ClickEventData extends EventData {
  // Must extend EventData
  public x: number;
  public y: number;
}

/**
 * @nsView PluginView
 */
class ClickView extends View {
  /**
   *
   * @nsProperty
   */
  public disable: string;

  /**
   *
   * @nsEvent {ClickEventData} click
   */
  public clickEvent: string;
}
```

Gesture events

- Common gesture events (tap, doubleTap, pan, swipe, rotation, longPress, touch) are added automatically to all views.

Legacy mode

- If you can’t add JSDoc, use --legacy. The analyzer will detect classes extending ViewBase and infer events with a ...Event string field. This is best‑effort, may be incomplete.

## Framework setup guides

Below are minimal steps distilled from the demo projects in [demos](demos/). Each demo contains a working setup you can copy.

### React

```json
{
  "compilerOptions": {
    "paths": {
      "ns-react/jsx-runtime": ["./types/core_react_jsx.d.ts"],
    },
  },
}
```

### Solid

```json
{
  "compilerOptions": {
    "jsx": "preserve",
    "jsxImportSource": "ns-solid",
    "paths": {
      "ns-solid/jsx-runtime": ["./types/core_solid_jsx.d.ts"],
    },
  },
}
```

### Svelte

```json
{
  "compilerOptions": {
    "jsxFactory": "svelteNS.JSX",
    "paths": {
      "ns-svelte/jsx-runtime": ["./types/core_svelte_jsx.d.ts"],
    },
  },
  "svelteOptions": {
    "namespace": "svelteNS.JSX",
  },
}
```

### Vue (NativeScript-Vue 3)

```json
{
  "compilerOptions": {
    "paths": {
      "ns-vue/jsx-runtime": ["./types/core_vue_jsx.d.ts"],
    },
  },
}
```

### Angular

In .vscode/settings.json:

```json
{
  "html.customData": ["./types/core_angular_metadata.json"],
}
```

You can add plugin metadata.json files here as well.

## License

MIT
