module.exports = {
    root: true,
    env: {
        node: true
    },
    //extends: "eslint:recommended",
    extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
    rules: {
        //'indent': ['off', 2],
        //"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        //"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    },
    parserOptions: {
        //parser: "@typescript-eslint/parser"
    }
};
