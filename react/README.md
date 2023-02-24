# svelte-types

Typescript types for react-nativescript that give you proper and complete intellisense in code editors.

## Installtion

1. Install the `core` and `react` types in your project

```
npm install @nativescript-dom/core-types @nativescript-dom/react-types --save-dev
```

2. Configure `tsconfig.json` as below

```json
{
  "compilerOptions": {
    ...
    "types": [
        "node",
        "@nativescript-dom/core-types",
        "@nativescript-dom/react-types"
        ],
...
  }
```

That's it, enjoy a fully typed react-nativescript experience.

#

MIT Licensed
