import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import boundariesPlugin from "eslint-plugin-boundaries";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: importPlugin,
      boundaries: boundariesPlugin,
    },
    settings: {
      "import/resolver": {
        typescript: {}, // Suporta o alias "@/" do tsconfig
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      // ✅ ORGANIZAÇÃO DOS IMPORTS
      "import/order": ["error", {
        groups: [
          "builtin",       // react, next
          "external",      // libs externas
          "internal",      // alias "@/"
          ["parent", "sibling", "index"], // ../, ./, index
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "next/**",
            group: "builtin",
            position: "after",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      }],

      // ✅ RESTRIÇÃO ENTRE CAMADAS
      "boundaries/element-types": ["error", {
        default: "disallow",
        rules: [
          { from: "app", allow: ["view-model", "shared", "config"] },
          { from: "view-model", allow: ["controller", "shared", "config"] },
          { from: "controller", allow: ["model", "shared", "config"] },
          { from: "model", allow: ["shared", "config"] },
          { from: "shared", allow: [] },
          { from: "config", allow: [] },
        ],
      }],
    },
  },
];

export default eslintConfig;
