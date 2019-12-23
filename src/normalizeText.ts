import normalizeWhiteSpaces from './normalizeWhiteSpaces';
import normalizeDiacritics from './normalizeDiacritics';

/**
 * Resolve one or multiple texts into a single one.
 * @param {string | string[]} values - A `string` or an array of `string` values.
 * @returns {string}
 */
const resolveToText = (values: string | string[]) =>
  Array.isArray(values) ? values.join(' ') : values;

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
const normalizeText = (texts: string | string[]) =>
  normalizeWhiteSpaces(
    normalizeDiacritics(resolveToText(texts))
  ).toLocaleLowerCase();

export default normalizeText;
