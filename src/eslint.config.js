module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2021, // Use the latest ECMAScript version
        sourceType: "module" // Allow usage of imports
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        "indentation": ["error", 2], // Enforce 2-space indentation
        "max-lines": ["error", 200], // Limit number of lines per file
        "no-console": "warn", // Warn about console logs
        "no-unused-vars": "warn" // Warn about unused variables
    },
};
