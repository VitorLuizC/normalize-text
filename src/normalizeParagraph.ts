import capitalizeFirstLetter from './capitalizeFirstLetter';
import normalizeWhiteSpaces from './normalizeWhiteSpaces';

/**
 * Get the last character of received text.
 * @param {string} text - A `string` value.
 * @returns {string}
 */
const getLastChar = (text: string) => text.charAt(text.length - 1);

/**
 * Normalize a paragraph by normalizing its white-spaces, capitalizing first
 * letter and putting a period at end.
 * @example
 * normalizeParagraph(' once upon a time');
 * //=> "Once upon a time."
 * @param {string} value
 * @returns {string}
 */
const normalizeParagraph = (text: string) => {
  const whiteSpacesNormalizedText = normalizeWhiteSpaces(text);
  return capitalizeFirstLetter(
    getLastChar(whiteSpacesNormalizedText) === '.'
      ? whiteSpacesNormalizedText
      : whiteSpacesNormalizedText + '.'
  );
};

export default normalizeParagraph;
