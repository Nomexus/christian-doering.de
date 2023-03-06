module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parser: "vue-eslint-parser",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/attributes-order": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-self-closing": "off",
    "vue/no-v-for-template-key": "off",
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["default"],
      },
    ],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  overrides: [
    {
      files: ["assets/**/*.vue"],
      rules: {
        "vue/multi-word-component-names": 0,
      },
    },
  ],
};
