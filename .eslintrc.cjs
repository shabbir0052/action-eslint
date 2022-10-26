module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  ignorePatterns: [
    "**/UnitTest/*.js",
    "/bin/*.js",
    "/lib/*.js",
    "**/logging/lib/*.js",
    "**/logging/test/*.js",
    "/.vscode/*.*",
  ],
  overrides: [
    {
      files: ["**/*.js"],
      extends: ["airbnb-base", "prettier"],
      plugins: ["prettier"],
      parserOptions: {
        ecmaVersion: "latest",
      },
      rules: {},
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/core-modules": ["aws-sdk", "aws-xray-sdk-core"],
  },
};
