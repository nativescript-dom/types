# svelte-types

Typescript types for svelte-native that work in `.svelte` files to give you proper and complete intellisense in code editors.

## Installtion

1. Install the `core` and `svelte` types in your project

```
npm install @nativescript-dom/core-types @nativescript-dom/svelte-types --save-dev
```

2. Configure `tsconfig.json` as below

```json
{
  "compilerOptions": {
    ...
    "types": [
        "node",
        "@nativescript-dom/core-types",
        "@nativescript-dom/svelte-types"
        ],
...
  }
```

That's it, enjoy a fully typed svelte-native experience.

#

MIT Licensed
