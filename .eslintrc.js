module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
    rules: {
        'indent': ['off', 2],
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    }
};
