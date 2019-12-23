/**
 * Normalize all white-space characters and remove trailing ones received text.
 * @example
 * normalizeWhiteSpaces(' What exactly is it?   ');
 * //=> "What exactly is it?"
 *
 * normalizeWhiteSpaces('Hi,   how is \r\n everything  \t?');
 * //=> 'Hi, how is everything ?'
 * ```
 * @param {string} text - A `string` value.
 * @returns {string}
 */
const normalizeWhiteSpaces = (text: string) => text.replace(/\s+/g, ' ').trim();

export default normalizeWhiteSpaces;
