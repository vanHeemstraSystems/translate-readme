# ترجمة الإجراء التمهيدي

## README الترجمة

-   [إنجليزي](README.md)
-   [الصينية المبسطة](README.zh-CN.md)
-   [الصينية التقليدية](README.zh-TW.md)
-   [هندي](README.hi.md)
-   [فرنسي](README.fr.md)
-   [عربى](README.ar.md)

**GitHub Action لترجمة الملف التمهيدي إلى أي لغة**

هذا إجراء GitHub يقوم تلقائيًا بترجمة الملف التمهيدي في الريبو الخاص بك إلى لغة محددة.

## اقامة

1.  **أضف ملف سير عمل**لمشروعك (على سبيل المثال`.github/workflows/readme.yml`):

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

## ترتيب

### خيارات

يمكنك تكوين الإجراء بشكل أكبر باستخدام الخيارات التالية:

-   `LANG`: The language you want to translate your readme to. The default is Simplified Chinese. The supported languages can be found below.
    (default: `zh-CH`) (مطلوب:`false`)

## اللغات المعتمدة

يمكن العثور على اللغات المدعومة هنا[هتبس://كلود.جوجل.كوم/ترانسلت/دكس/لانججس](https://cloud.google.com/translate/docs/languages)

### مشاكل

يفحص[هنا](https://github.com/vanHeemstraSystems/translate-readme/issues/1)للقضايا المتعلقة بهذا الإجراء.

### تطوير

الاقتراحات والمساهمات مرحب بها دائمًا!

### رخصة

[مع](./LICENSE)
