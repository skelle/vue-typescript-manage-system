module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: "eslint:recommended",
    rules: {
        'indent': ['off', 2],
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    }
};
