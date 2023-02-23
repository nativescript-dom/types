# vue-types

Typescript types for nativescript-vue 3 that work in `.vue` files to give you proper and complete intellisense in code editors.

## Installtion

1. Install the `core` and `vue` types in your project

```
npm install @nativescript-dom/core-types @nativescript-dom/vue-types --save-dev
```

2. Configure `tsconfig.json` as below

```json
{
  "compilerOptions": {
    ...
    "types": [
        "node",
        "@nativescript-dom/core-types",
        "@nativescript-dom/vue-types"
        ],
...
  }
```

That's it, enjoy a fully typed nativescript-vue experience.

#

MIT Licensed
