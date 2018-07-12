module.exports = {
    "extends": "airbnb"
}; module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true
    },
    "settings": {
        "ecmascript": 6,
        "jsx": true
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "extends": "airbnb",
    "rules": {
        "max-len": 0,
        "react/no-unescaped-entities": 0,
        "react/no-did-mount-set-state": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "react/jsx-filename-extension": 0,
        "function-paren-newline": 0,
        "no-underscore-dangle": 0,
        "react/jsx-indent-props": 0,
    }
};