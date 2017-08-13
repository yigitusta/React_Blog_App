module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "max-len": 0,
        "react/prop-types": 0,
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-alert": 0
    },
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
  },
};