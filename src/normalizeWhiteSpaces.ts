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
 * ```
 * @returns {string}
 * @param parts - A `string` or `tagged template` value
 * @param {unknown[]} values
 */

export const normalizeWhiteSpaces = (
  parts: TemplateStringsArray | string,
  ...values: unknown[]
): string => {
  if (typeof parts === 'string') return parts.replace(/\s+/g, ' ').trim();

  return parts
    .reduce(
      (accumulator: string, part: string, index: number) =>
        accumulator + values[index - 1] + part
    )
    .replace(/\s+/g, ' ')
    .trim();
};

export default normalizeWhiteSpaces;
