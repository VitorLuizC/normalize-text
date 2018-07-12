# Normalize Text

[![Build Status][ci-status-badge]][ci-status]

Provides a simple API to normalize texts, whitespaces, paragraphs & diacritics.

## Install

`normalize-text` is published under NPM registry, so you can install using any Node.js package manager.

```sh
npm install normalize-text --save

# If you're using Yarn.
yarn add normalize-text
```

## Usage

```js
import normalize from 'normalize-text';

const input = document.querySelector('input[name="name"]');
const name = normalize(input.value);
```

## API

### `normalize`

Join arguments (when receives an `Array`), normalize it's whitespaces, normalize it's diacritics and transform to lower case.

```js
normalize([
  '     Olá, \r\n',
  'Fernanda \t MONtenegro'
])
// => 'ola, fernanda montenegro'
```

#### Type definition

```ts
export default function normalize (values: string | string[]): string;
```


### `normalizeWhitespaces`

Remove spaces from start and end, transform multiple spaces into single one and every space character into whitespace character.

```js
normalizeWhitespaces('  Fernanda \t Montenegro\r\n')
// => 'Fernanda Montenegro'
```

#### Type definition

```ts
export function normalizeWhitespaces (value: string): string;
```

### `normalizeDiacritics`

Normalize diacritics removing diacritics (accents) from letters.

```js
normalizeDiacritics('Olá, você aí!')
// => 'Ola, voce ai!'
```

#### Type definition

```ts
export function normalizeDiacritics (value: string): string;
```

### `normalizeParagraph`

Normalize a paragraph. Normalize it's whitespaces, transform first letter to upper case and put a dot at end.

```js
normalizeParagraph('hello world, my friend\r\n')
// => 'Hello world, my friend.'
```

#### Type definition

```ts
export function normalizeParagraph (value: string): string;
```

### `normalizeName`

Normalize a name. Normalize it's whitespaces and capitalize letters.

```js
normalizeName(' fernanda \tMONTENEGRO')
// => 'Fernanda Montenegro'
```

#### Type definition

```ts
export function normalizeName (value: string): string;
```

## License

Released under MIT license. You can see it [here][license].

<!-- Links -->
[license]: ./LICENSE
[ci-status]: https://travis-ci.org/VitorLuizC/normalize-text
[ci-status-badge]: https://travis-ci.org/VitorLuizC/normalize-text.svg?branch=master
