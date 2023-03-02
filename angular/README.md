# angular-types

Typescript definitions for @nativescript/angular that expose @nativescript/core views as DOM elements in HTML templates and provide 100% complete intellisense in code editors

## Installtion

1. Install the `core` and `angular` types in your project

```
npm install @nativescript-dom/core-types @nativescript-dom/angular-types --save-dev
```

2. Configure `tsconfig.json` as below

```json
{
  "compilerOptions": {
    ...
    "types": [
        "node",
        "@nativescript-dom/core-types",
        "@nativescript-dom/angular-types"
        ],
...
  }
```

3. Configure `.vscode/settings.json`

Create a `.vscode` folder inside the root of your project and add a `settings.json` file with the following contents:

```json
{
  "html.customData": [
    "./node_modules/@nativescript-dom/angular-types/metadata.json"
  ]
}
```

That's it, enjoy a fully typed @nativescript/angular experience.

#

MIT Licensed
