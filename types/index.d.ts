/**
 * Remove spaces from start and end, transform multiple spaces into single one
 * and every space character into whitespace character.
 * @example ```js
 * ('  Fernanda \t Montenegro\r\n') => 'Fernanda Montenegro'
 * ```
 * @param value
 */
export function normalizeWhitespaces (value: string): string;

/**
 * Normalize diacritics removing diacritics (accents) from letters.
 * @example ```js
 * ('Olá, você aí!') => 'Ola, voce ai!'
 * ```
 * @param value
 */
export function normalizeDiacritics (value: string): string;

/**
 * Normalize a paragraph. Normalize it's whitespaces, transform first letter to
 * upper case and put final dot at end.
 * @example ```js
 * ('hello world, my friend\r\n') => 'Hello world, my friend.'
 * ```
 * @param value
 */
export function normalizeParagraph (value: string): string;

/**
 * Join arguments (when receives an `Array`), normalize it's whitespaces,
 * normalize it's diacritics and transform to lower case.
 * @example ```js
 * ([ '    Olá, \r\n', 'Fernanda \t MONtenegro' ]) => 'ola, fernanda montenegro'
 * ```
 * @param values
 */
export default function normalize (values: string | Array<string>): string;
