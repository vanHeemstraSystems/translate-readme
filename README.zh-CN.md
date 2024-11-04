# 翻译自述文件操作

## 自述文件翻译

-   [英语](README.md)
-   [简体中文](README.zh-CN.md)
-   [繁体中文](README.zh-TW.md)
-   [印地语](README.hi.md)
-   [法语](README.fr.md)
-   [阿拉伯](README.ar.md)

**GitHub Action 将自述文件翻译成任何语言**

这是一个 GitHub Action，可以自动将你的 repo 中的自述文件翻译成指定的语言。

## 设置

1.  **添加工作流文件**到您的项目（例如`.github/workflows/readme.yml`):

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

## 配置

### 选项

您可以使用以下选项进一步配置操作：

-   `LANG`：您要将自述文件翻译成的语言。默认为简体中文。 可在下方找到支持的语言。
    （默认：`zh-CH`） （必需的：`false`)

## 支持的语言

可在此处找到支持的语言[HTTPS://cloud.Google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages)

### 问题

查看[这里](https://github.com/vanHeemstraSystems/translate-readme/issues/1)与此操作相关的问题。

### 发展

随时欢迎提出建议和贡献！

### 执照

[和](./LICENSE)
