module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "eslint-config-airbnb",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        'import/extensions': 'off',
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-mixed-spaces-and-tabs': 0,
        'no-tabs': 0,
        'no-param-reassign': 0,
        'no-nested-ternary': 0,
    }
}
