# Highlight Dup Regex

Fork By https://github.com/fabiospampinato/vscode-highlight

Expanded to highlight only duplicate strings.

## Install

Not published in margetplace.

Install from VSIX.

## Settings

See the original repo for details.

```js
"highlight.decorations": { "rangeBehavior": 3 },
"highlight.regexFlags": "gi",
"highlight.maxMatches": 250,
"highlight.regexes": {
    "(https?|ftp)(:\/\/[-_.!~*\\'()a-zA-Z0-9;\/?:\\@&=+\\$,%#]+)": [
        {
          "backgroundColor": "rgba(255, 255, 0, 0.2)",
        },
        {
          "backgroundColor": "rgba(255, 255, 0, 0.2)",
        }
    ],
}
```

## License

MIT © netooo
