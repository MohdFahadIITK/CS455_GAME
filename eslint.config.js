import globals from "globals";
import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";

export default [
  {
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
    rules: {
      "import/order": ["error", { "groups": [["builtin", "external", "internal"]] }],
      "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "no-duplicate-imports": "error",
      "no-var": "error",
      "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
      "semi": ["error", "always"],
    },
  },
  pluginJs.configs.recommended,
];