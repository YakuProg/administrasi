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
    // "parserOptions": {
    //     "parser": "babel-eslint"
    // }
}