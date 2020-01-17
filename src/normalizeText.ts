import normalizeDiacritics from './normalizeDiacritics';
import normalizeWhiteSpaces from './normalizeWhiteSpaces';
import pipe from './pipe';

/**
 * Resolve one or multiple texts into a single one.
 * @param {string | string[]} values - A `string` or an array of `string` values.
 * @returns {string}
 */
const resolveToText = (values: string | string[]) =>
  Array.isArray(values) ? values.join(' ') : values;

/**
 * Transforms a text to lower case.
 * @param {string} text - A `string` value.
 * @returns {string}
 */
const transformToLowerCase = (text: string) => text.toLocaleLowerCase();

/**
 * Resolve received texts (when receives an `Array`) by normalizing its
 * white-spaces and its diacritics and transforming to lower-case.
 * @example
 * normalizeText(' so there\'s  a  Way to NORMALIZE ');
 * //=> "so there\'s a way to normalize"
 *
 * normalizeText(['Olá\r\n', 'como está a   senhorita?']);
 * //=> "ola como esta a senhorita?"
 * @param {string | string[]} values - A `string` or an array of `string` values.
 * @returns {string}
 */
const normalizeText = pipe(
  resolveToText,
  normalizeDiacritics,
  normalizeWhiteSpaces,
  transformToLowerCase
);

export default normalizeText;
