module.exports = {
    env: {
        browser: true,
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
            rules: {
                "prettier/prettier": [
                    "error",
                    {
                        endOfLine: "auto",
                    },
                ],
            }
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
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    },
    settings: {
        "import/core-modules": ["aws-sdk", "aws-xray-sdk-core","snowflake-sdk"],
    },    
};
