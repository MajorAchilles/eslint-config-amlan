module.exports  = {
    "extends": "airbnb-base",
    "rules": {
        "arrow-body-style": "off",
		"no-plusplus": "off",
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "max-len": ["error", 120, 2, { "ignoreComments": true }],
        "quotes": ["error", "double"],
    }
};