import normalizeWhiteSpaces from './normalizeWhiteSpaces';
import capitalizeFirstLetter from './capitalizeFirstLetter';

/**
 * @param {string} word - A `string` value.
 * @param {string[]} exceptions - A list of exceptions in lower-case.
 * @returns {(_: string, word: string) => string}
 */
const byNormalizedNameExceptFor =
  (exceptions: string[]) =>
  /**
   * @param {string} _
   * @param {string} word
   * @returns {string}
   */
  (_: string, word: string) =>
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
  normalizeWhiteSpaces(name)
    .toLowerCase()
    .replace(/([^ -]+)/g, byNormalizedNameExceptFor(exceptions));

export default normalizeName;
