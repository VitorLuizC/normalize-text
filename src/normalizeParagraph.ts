import pipe from '@bitty/pipe';

import capitalizeFirstLetter from './capitalizeFirstLetter';
import normalizeWhiteSpaces from './normalizeWhiteSpaces';

/**
 * Get the last character of received text.
 * @param {string} text - A `string` value.
 * @returns {string}
 */
const getLastChar = (text: string) => text.charAt(text.length - 1);

/**
 * Add a period at end of a text, if you don't already have one.
 * @param {string} text - A `string` value.
 */
const addPeriodAtEnd = (text: string) =>
  getLastChar(text) === '.' ? text : text + '.';

/**
 * Normalize a paragraph by normalizing its white-spaces, capitalizing first
 * letter and putting a period at end.
 * @example
 * normalizeParagraph(' once upon a time');
 * //=> "Once upon a time."
 * @param {string} value
 * @returns {string}
 */
const normalizeParagraph = /*#__PURE__*/ pipe(
  normalizeWhiteSpaces,
  addPeriodAtEnd,
  capitalizeFirstLetter
);

export default normalizeParagraph;
