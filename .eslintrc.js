module.exports = {
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                'max-len': 'off'
            }
        }
    ],
    "extends": ["plugin:vue/base"],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "babel-eslint",
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "legacyDecorators": true
        }
    }
}