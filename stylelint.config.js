module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
        "stylelint-scss"
    ],
    "rules": {
        "selector-nested-pattern": "^&",
        "indentation": 2,
        "no-descending-specificity": null,
        "no-eol-whitespace": null,
        "declaration-empty-line-before": null,
        "value-keyword-case": null,
        "block-closing-brace-newline-before": null,
        "block-closing-brace-empty-line-before": null,
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "tailwind",
                    "apply",
                    "responsive",
                    "variants",
                    "screen",
                    "use",
                    "layer"
                ]
            }
        ]
    }
}