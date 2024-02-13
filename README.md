# Normalize Text

[![Build Status](https://travis-ci.org/VitorLuizC/normalize-text.svg?branch=master)](https://travis-ci.org/VitorLuizC/normalize-text)
[![License](https://badgen.net/github/license/VitorLuizC/normalize-text)](./LICENSE)
[![Package tree-shaking](https://badgen.net/bundlephobia/tree-shaking/normalize-text)](https://bundlephobia.com/package/normalize-text)
[![Package minified & gzipped size](https://badgen.net/bundlephobia/minzip/normalize-text)](https://bundlephobia.com/package/normalize-text)
[![Package dependency count](https://badgen.net/bundlephobia/dependency-count/normalize-text)](https://bundlephobia.com/package/normalize-text)

Provides a simple API to normalize texts, white-spaces, names, paragraphs & diacritics (accents).

- 📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.
  - Supports NodeJS ESM and CommonJS;

- ⚡ Lightweight:
  - It's bundled with [Rollup](https://rollupjs.org/) and [Bublé](https://buble.surge.sh/).
  - Smaller than 1KB (min + gzip).
  - Supports _tree shaking_.

- 🔋 Bateries included:
  - Its not based on newer browser's APIs or es2015+ features.
  - Only needs `String.prototype.normalize` polyfill for older browsers, and don't crashes without it.

- 🏷 Safe:
  - Type declarations for IDEs and editor's autocomplete/intellisense.
  - Made with TypeScript as strict as possible.
  - Unit tests with Jest.
  - Travis CI that keeps tests running.

## Install

`normalize-text` is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install normalize-text --save

# If you're using Yarn.
yarn add normalize-text
```

### Install from CDN

The bundles of this module are also available on JSDelivr and UNPKG CDNs.

In both you can import just the bundle you want or use default one, UMD.

```html
<!-- Using default bundle from JSDelivr -->
<script src="https://cdn.jsdelivr.net/npm/normalize-text"></script>

<!-- Using default bundle from UNPKG -->
<script src="https://unpkg.com/normalize-text"></script>

<script>
  /**
   * UMD bundle expose brazilian-values through `normalizeText` object.
   */
  normalizeText.capitalizeFirstLetter('vitor');
  //=> "Vitor"
</script>
```

## Usage

All the functions are named exported from module.

```js
import { normalizeText } from 'normalize-text';

normalizeText([
  'Olá\r\n',
  '  como  está a   senhorita?'
]);
//=> "ola como esta a senhorita?"
```

## API

### `capitalizeFirstLetter`

Capitalize first character of received text.

```js
capitalizeFirstLetter('vitorLuizC');
//=> "VitorLuizC"
```

### `normalizeDiacritics`

If `String.prototype.normalize` is supported it normalizes diacritics by replacing them with "clean" character from received text.

> It doesn't normalize special characters.

```js
normalizeDiacritics('Olá, você aí');
//=> 'Ola, voce ai'

normalizeDiacritics('àáãâäéèêëíìîïóòõôöúùûüñçÀÁÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÑÇ');
//=> "aaaaaeeeeiiiiooooouuuuncAAAAAEEEEIIIIOOOOOUUUUNC"

normalizeDiacritics('@_$><=-#!,.`\'"');
//=> "@_$><=-#!,.`'\"";
```

### `normalizeName`

Normalize received name by normalizing it's white-spaces and capitalizing first letter of every word but exceptions (received in lower-case).

```js
normalizeName(' fernanDA  MONTENEGRO');
//=> "Fernanda Montenegro"

normalizeName(' wilson da costa', ['da']);
//=> "Wilson da Costa"
```

### `normalizeParagraph`

Normalize a paragraph by normalizing its white-spaces, capitalizing first letter and adding a period at end.

```js
normalizeParagraph(' once upon a time');
//=> "Once upon a time."

normalizeParagraph('hello world, my friend\r\n');
// => 'Hello world, my friend.'
```

### `normalizeText`

Resolve received texts (when receives an `Array`) by normalizing its white-spaces and its diacritics and transforming to lower-case.

```js
normalizeText(' so there\'s  a  Way to NORMALIZE ');
//=> "so there\'s a way to normalize"

normalizeText(['Olá\r\n', 'como está a   senhorita?']);
//=> "ola como esta a senhorita?"
```

### `normalizeWhiteSpaces`

Normalize all white-space characters and remove trailing ones received text.

```js
normalizeWhiteSpaces(' What exactly is it?   ');
//=> "What exactly is it?"

normalizeWhiteSpaces('Hi,   how is \r\n everything  \t?');
//=> 'Hi, how is everything ?'

normalizeWhiteSpaces`It is ${temperature}\n  degree\r outside.  `
//=> 'It is 25 degree outside.'
```

## License

Released under MIT license. You can see it [here](./LICENSE).
