import uncouple from 'uncouple';

const {
  slice: shallowCloneArray,
  reverse,
  reduce: reduceLeft,
  reduceRight,
} = uncouple(Array.prototype);

/**
 * `Array.prototype.reduceRight` or a polyfill.
 */
const reduce = reduceRight || ((value, λ, initial) => {
  const items = reverse(shallowCloneArray(value));
  return reduceLeft(items, λ, initial);
});

/**
 * Compose functions into a new one (RTL).
 * @template T, U
 * @param  {...function(T):U} λs
 * @returns {U}
 */
export const compose = (...λs) => (value) => reduce(λs, (value, λ) => λ(value), value);

/**
 * Returns received value.
 * @param {T} value
 * @returns {T}
 * @template T
 */
export const identity = (value) => value;
