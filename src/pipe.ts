/**
 * Performs LTR (Left-To-Reft) function composition.
 * @example
 * const getName = pipe(
 *   (user: User) => [user.firstName, user.lastName],
 *   ([firstName, lastName]: [string, string]) => `${firstName} ${lastName}`
 * );
 *
 * getName({ firstName: 'Marcos', lastName: 'Vinícius' });
 * //=> "Marcos Vinícius"
 * @param {Array.<function(*):*>} fns - Functions to be composed.
 * @returns {function(*):*}
 */
const pipe: {
  <A>(): (value: A) => A;
  <A, B>(fn1: (value: A) => B): (value: A) => B;
  <A, B, C>(fn1: (value: A) => B, fn2: (value: B) => C): (value: A) => B;
  <A, B, C, D>(fn1: (value: A) => B, fn2: (value: B) => C, fn3: (value: C) => D): (value: A) => D;
  <A, B, C, D, E>(fn1: (value: A) => B, fn2: (value: B) => C, fn3: (value: C) => D, fn4: (value: D) => E): (value: A) => E;
  <A, B, C, D, E, F>(fn1: (value: A) => B, fn2: (value: B) => C, fn3: (value: C) => D, fn4: (value: D) => E, fn5: (value: E) => F): (value: A) => F;
  <A, B, C, D, E, F, G>(fn1: (value: A) => B, fn2: (value: B) => C, fn3: (value: C) => D, fn4: (value: D) => E, fn5: (value: E) => F, fn6: (value: F) => G): (value: A) => G;
} = (...fns: Function[]) => (value: any) =>
  fns.reduce((value, fn) => fn(value), value);

export default pipe;
