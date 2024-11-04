# Translate Readme Action

## README Translation
- [English](README.md)
- [简体中文](README.zh-CN.md)
- [繁体中文](README.zh-TW.md)
- [हिंदी](README.hi.md)
- [Française](README.fr.md)
- [عربى](README.ar.md)

**GitHub Action to translate Readme to any language**

This is a GitHub Action that automatically translate the readme in your repo to a specified language.

## Setup

1. **Add a workflow file** to your project (e.g. `.github/workflows/readme.yml`):
```yaml
name: Translate README

on:
  push:
    branches:
      - main
      - master
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 16.x
      # ISO Language Codes: https://cloud.google.com/translate/docs/languages  
      - name: Adding README - Chinese Simplified
        uses: vanHeemstraSystems/translate-readme@main
        with:
          LANG: zh-CN
      - name: Adding README - Chinese Traditional
        uses: vanHeemstraSystems/translate-readme@main
        with:
          LANG: zh-TW
      - name: Adding README - Hindi
        uses: vanHeemstraSystems/translate-readme@main
        with:
          LANG: hi
      - name: Adding README - Arabic
        uses: vanHeemstraSystems/translate-readme@main
        with:
          LANG: ar
      - name: Adding README - French
        uses: vanHeemstraSystems/translate-readme@main
        with:
          LANG: fr
```

## Configuration

### Options

You can configure the action further with the following options:

- `LANG`: The language you want to translate your readme to. The default is Simplified Chinese. The supported languages can be found below.
  (default: `zh-CH`) (required: `false`)

## Supported Languages

Languages supported can be found here https://cloud.google.com/translate/docs/languages

### Issues

Check [here](https://github.com/vanHeemstraSystems/translate-readme/issues/1) for issues related to this action.

### Development

Suggestions and contributions are always welcome!

### LICENSE

[MIT](./LICENSE)
