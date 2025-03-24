/**
 * Resolves a value to an array, if it isn't already an array.
 * @template T
 * @param {T | readonly T[]} value
 * @returns {readonly T[]}
 */
const resolveToArray = <T>(value: T | readonly T[]): readonly T[] =>
  Array.isArray(value) ? value : [value as T];

export default resolveToArray;
