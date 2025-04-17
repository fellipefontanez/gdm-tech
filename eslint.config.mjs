import tsEslint from "typescript-eslint";
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";

export default tsEslint.config(
  {
    ignores: [".next/", "node_modules/", "dist/"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    ...js.configs.recommended,
    ...tsEslint.configs.recommended,
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
      "@next/next": nextPlugin,
    },
    rules: {
      // Permite explicitamente o uso de 'any' com comentário de justificativa
      "@typescript-eslint/no-explicit-any": [
        "warn",
        {
          fixToUnknown: true,
          ignoreRestArgs: false,
        },
      ],

      // Outras regras recomendadas
      "@typescript-eslint/no-unused-vars": "warn",
      "@next/next/no-html-link-for-pages": "error",
    },
  },
  {
    files: ["**/*.js"],
    ...js.configs.recommended,
  }
);
