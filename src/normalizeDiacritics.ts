/**
 * If `String.prototype.normalize` is supported it normalizes diacritics by
 * replacing them with "clean" character from received text.
 * @example
 * normalizeDiacritics('Olá, você aí');
 * //=> 'Ola, voce ai'
 * @param {string} text - A `string` value.
 * @returns {string}
 */
const normalizeDiacritics = (text: string) =>
  String.prototype.normalize
    ? text.normalize('NFKD').replace(/[\u0080-\uF8FF]/g, '')
    : text;

export default normalizeDiacritics;
