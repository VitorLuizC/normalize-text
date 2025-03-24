import resolveToArray from './resolveToArray.js';

describe('resolveToArray', () => {
  it('when receives an array returns it', () => {
    expect(resolveToArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('when receives non-array values add them to an array', () => {
    expect(resolveToArray(1)).toEqual([1]);
  });
});
