module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "none",
        printWidth: 100,
        semi: false,
        tabWidth: 2
      }
    ]
  }
}
