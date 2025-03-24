import resolveToArray from './resolveToArray';

/**
 * Normalize all white-space characters and remove trailing ones received text.
 * @example
 * normalizeWhiteSpaces`It is ${temperature}\n  degree\r outside.  `
 * //=> 'It is 25 degree outside.'
 * @param parts
 * @param values
 */
function normalizeWhiteSpaces(
  parts: TemplateStringsArray,
  ...values: unknown[]
): string;

/**
 * Normalize all white-space characters and remove trailing ones received text.
 * @example
 * normalizeWhiteSpaces(' What exactly is it?   ');
 * //=> "What exactly is it?"
 *
 * normalizeWhiteSpaces('Hi,   how is \r\n everything  \t?');
 * //=> 'Hi, how is everything ?'
 * @param text
 */
function normalizeWhiteSpaces(text: string): string;

/**
 * Normalize all white-space characters and remove trailing ones received text.
 * @example
 * normalizeWhiteSpaces(' What exactly is it?   ');
 * //=> "What exactly is it?"
 *
 * normalizeWhiteSpaces('Hi,   how is \r\n everything  \t?');
 * //=> 'Hi, how is everything ?'
 *
 * normalizeWhiteSpaces`It is ${temperature}\n  degree\r outside.  `
 * //=> 'It is 25 degree outside.'
 * @param {TemplateStringsArray | string} partsOrText
 * @param {unknown[]} values
 * @returns {string}
 */
function normalizeWhiteSpaces(
  partsOrText: TemplateStringsArray | string,
  ...values: unknown[]
): string {
  return resolveToArray(partsOrText)
    .reduce((text, part, index) => text + values[index - 1] + part)
    .replace(/\s+/g, ' ')
    .trim();
}

export default normalizeWhiteSpaces;
