import normalizeWhiteSpaces from './normalizeWhiteSpaces';
import capitalizeFirstLetter from './capitalizeFirstLetter';

/**
 * Split text into words.
 * @param {string} text - A `string` value.
 * @returns {string[]}
 */
const splitWords = (text: string) =>
  normalizeWhiteSpaces(text.toLocaleLowerCase()).split(' ');

/**
 * Capitalize word if it isn't an exception.
 * @param {string[]} exceptions - A list of exceptions in lower-case.
 * @returns {(word: string) => string}
 */
const capitalizeWordExcept = (exceptions: string[]) => (word: string) =>
  exceptions.indexOf(word) > -1 ? word : capitalizeFirstLetter(word);

/**
 * Normalize received name by normalizing it's white-spaces and capitalizing
 * first letter of every word but exceptions (received in lower-case).
 * @example
 * normalizeName(' fernanDA  MONTENEGRO');
 * //=> "Fernanda Montenegro"
 *
 * normalizeName(' wilson da costa', ['da']);
 * //=> "Wilson da Costa"
 * @param {string} name - A `string` value.
 * @param {string[]} [exceptions] - A list of exceptions in lower-case.
 * @returns {string}
 */
const normalizeName = (name: string, exceptions: string[] = []) =>
  splitWords(name).map(capitalizeWordExcept(exceptions)).join(' ');

export default normalizeName;
