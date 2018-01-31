# Normalize Text

[![Build Status][ci-status-badge]][ci-status]

Provides an API with useful normalization functions.

## Getting Started

```sh
npm i normalize-text
```

```js
import normalize, { normalizeWhitespaces, normalizeDiacritics } from 'normalize-text'

const input = document.querySelector('input[name="name"]')
const name = normalize(input.value)
```

## API

### `normalize: (string|Array<string>) => string`

Join arguments (when receives an `Array`), transform to lower case and normalize its whitespaces and diacritics.

```js
normalize([
  '     Olá, \n',
  'Vitor LUIz  \tcavalcanti'
]) === 'ola, vitor luiz cavalcanti'
```

### `normalizeWhitespaces: (string) => string`

Normalizes whitespaces, line-endings and tabs.

```js
normalizeWhitespaces('  Vitor \nLuiz\tCavalcanti  ') === 'Vitor Luiz Cavalcanti'
```

### `normalizeDiacritics: (string) => string`

Normalizes character accents and diacritics.

```js
normalizeDiacritics('Olá, você aí!') === 'Ola, voce ai!'
```

### `normalizeParagraph: (string) => string`

Normalize whitespaces, coloca ponto final

```js
normalizeParagraph('era uma vez no mundo encantando ') === 'Era uma vez no mundo encantado.'
```

## License

Released under MIT license. You can see it [here][license].

<!-- Links -->
[license]: ./LICENSE
[ci-status]: https://travis-ci.org/VitorLuizC/normalize-text
[ci-status-badge]: https://travis-ci.org/VitorLuizC/normalize-text.svg?branch=master
