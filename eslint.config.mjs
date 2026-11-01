import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import { loadConfig } from "@sveltejs/load-config";

const svelteConfig = (await loadConfig("./", { traverse: false }))?.config;

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        svelteConfig,
        parser: tsParser,
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: [".svelte-kit/**"],
  },
];
