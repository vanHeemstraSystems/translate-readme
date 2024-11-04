# रीडमी एक्शन का अनुवाद करें

## रीडमे अनुवाद

-   [अंग्रेज़ी](README.md)
-   [सरलीकृत चीनी](README.zh-CN.md)
-   [परंपरागत चीनी](README.zh-TW.md)
-   [हिंदी](README.hi.md)
-   [फ्रेंच](README.fr.md)
-   [अरब](README.ar.md)

**रीडमी का किसी भी भाषा में अनुवाद करने के लिए गिटहब एक्शन**

यह एक गिटहब एक्शन है जो आपके रेपो में रीडमी को एक निर्दिष्ट भाषा में स्वचालित रूप से अनुवादित करता है।

## स्थापित करना

1.  **कार्यप्रवाह फ़ाइल जोड़ें**आपकी परियोजना के लिए (उदा।`.github/workflows/readme.yml`):

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

## विन्यास

### विकल्प

आप निम्न विकल्पों के साथ कार्रवाई को और कॉन्फ़िगर कर सकते हैं:

-   `LANG`: The language you want to translate your readme to. The default is Simplified Chinese. The supported languages can be found below.
    (default: `zh-CH`) (आवश्यक:`false`)

## समर्थित भाषाएँ

समर्थित भाषाएँ यहाँ पाई जा सकती हैं[हत्तपः://क्लाउड.गूगल.कॉम/ट्रांसलेट/डॉक्स/लैंग्वेजेज](https://cloud.google.com/translate/docs/languages)

### मुद्दे

जांच[यहां](https://github.com/vanHeemstraSystems/translate-readme/issues/1)इस कार्रवाई से संबंधित मुद्दों के लिए।

### विकास

सुझावों और योगदानों का हमेशा स्वागत है!

### लाइसेंस

[साथ](./LICENSE)
