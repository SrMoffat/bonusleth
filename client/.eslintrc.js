/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        trailingComma: "none",
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        curly: ["error", "multi-line"],
        indent: ["error", 2, { SwitchCase: 1 }],
        quotes: ["error", "single", { avoidEscape: true }],
        "no-void": ["error", { allowAsStatement: true }],
        "comma-dangle": ["error", "only-multiline"],
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
				"linebreak-style": 0
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
