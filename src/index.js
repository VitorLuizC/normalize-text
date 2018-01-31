import compose from './compose';
import uncouple from 'uncouple';

const { join } = uncouple(Array);
const {
  normalize,
  replace,
  trim,
  toLowerCase: lower,
  toUpperCase: upper,
  indexOf
} = uncouple(String);

const WHITESPACE = ' ';

/**
 * Normalize whitespaces.
 * @example ```js
 * ('  Vitor\n  Luiz\t  Cavalcanti   ') => 'Vitor Luiz Cavalcanti'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeWhitespaces = compose(
  (value) => replace(value, /\s{2,}|\r?\n|\t/g, WHITESPACE),
  (value) => trim(value)
);

/**
 * Normalize diacritics.
 * @example ```js
 * ('Olá, você aí') => 'Ola, voce ai'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeDiacritics = compose(
  (value) => replace(value, /[\u0080-\uF8FF]/g, ''),
  (value) => normalize(value, 'NFKD')
);

/**
 * Normalize paragraph.
 * @example ```js
 * ('era uma vez no mundo encantado') => 'Era um vez no mundo encantado.'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeParagraph = compose(
  (value) => replace(value, value[0], upper(value[0])),
  (value) => value[value.length - 1] === '.' ? value : value + '.',
  normalizeWhitespaces
);

/**
 * Normalize texts.
 * @example ```js
 * ([ 'Olá, \n', 'Vitor  LUIz Cavalcanti' ]) => 'ola, vitor luiz cavalcanti'
 * ```
 * @param {(string|Array.<string>)} value
 * @returns {string}
 */
export default compose(
  (value) => lower(value),
  normalizeWhitespaces,
  normalizeDiacritics,
  (values) => Array.isArray(values) ? join(values, WHITESPACE) : values
);
