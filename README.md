# Highlight Dup Regex

Fork By https://github.com/fabiospampinato/vscode-highlight

Expanded to highlight only duplicate strings.

## Install

Not published in margetplace.

Install from VSIX.

## Settings

See the original repo for details.

```json
"highlight.decorations": { "rangeBehavior": 3 },
"highlight.regexFlags": "gi",
"highlight.maxMatches": 250,
"highlight.regexes": {
    "(https?|ftp)(:\/\/[-_.!~*\\'()a-zA-Z0-9;\/?:\\@&=+\\$,%#]+)": [],
}
```

## License

MIT © netooo
