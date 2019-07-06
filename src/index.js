import uncouple from "uncouple";
import { compose, identity } from "./functional";

const { join } = uncouple(Array);

const {
  trim: removeTrailingWhitespaces,
  replace,
  substring,
  normalize,
  toLowerCase,
  toUpperCase,
  toLocaleLowerCase: transformToLowerCase = toLowerCase,
  toLocaleUpperCase: transformToUpperCase = toUpperCase
} = uncouple(String);

/**
 * Remove spaces from start and end, transform multiple spaces into single one
 * and every space character into whitespace character.
 * @example ```js
 * ('  Fernanda \t Montenegro\r\n') => 'Fernanda Montenegro'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeWhitespaces = compose(
  removeTrailingWhitespaces,
  value => replace(value, /\s{2,}|\s/g, " ")
);

/**
 * Normalize diacritics removing diacritics (accents) from letters.
 * @example ```js
 * ('Olá, você aí') => 'Ola, voce ai'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeDiacritics = !normalize
  ? identity
  : compose(
      value => replace(value, /[\u0080-\uF8FF]/g, ""),
      value => normalize(value, "NFKD")
    );

/**
 * Normalize a paragraph. Normalize it's whitespaces, transform first letter to
 * upper case and put a dot at end.
 * @example ```js
 * ('hello world, my friend\r\n') => 'Hello world, my friend.'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeParagraph = compose(
  value => transformToUpperCase(value[0]) + substring(value, 1),
  value => (value[value.length - 1] === "." ? value : value + "."),
  normalizeWhitespaces
);

/**
 * Normalize a name. Normalize it's whitespaces and capitalize letters.
 * @example ```js
 * (' fernanda \tMONTENEGRO') => 'Fernanda Montenegro'
 * ```
 * @param {string} value
 * @returns {string}
 */
export const normalizeName = compose(
  value => replace(value, /^\w|\ \w/g, transformToUpperCase),
  transformToLowerCase,
  normalizeWhitespaces
);

/**
 * Join arguments (when receives an `Array`), normalize it's whitespaces,
 * normalize it's diacritics and transform to lower case.
 * @example ```js
 * ([ '    Olá, \r\n', 'Fernanda \t MONtenegro' ]) => 'ola, fernanda montenegro'
 * ```
 * @param {(string|Array.<string>)} value
 * @returns {string}
 */
export default compose(
  transformToLowerCase,
  normalizeWhitespaces,
  normalizeDiacritics,
  values => (Array.isArray(values) ? join(values, " ") : values)
);
