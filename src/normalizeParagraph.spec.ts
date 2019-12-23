import normalizeParagraph from './normalizeParagraph';

describe('normalizeParagraph', () => {
  it("Normalize paragraph's white-spaces", () => {
    expect(normalizeParagraph(' Era \t  uma \n vez.')).toEqual('Era uma vez.');
  });

  it('Capitalize first letter ', () => {
    expect(normalizeParagraph('era uma vez.')).toEqual('Era uma vez.');
  });

  it('Add period at end, if needed', () => {
    expect(normalizeParagraph('Era uma vez')).toBe('Era uma vez.');
  });
});
