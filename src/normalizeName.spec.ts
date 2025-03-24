import normalizeName from './normalizeName';

describe('normalizeName', () => {
  it("Normalize name's white-spaces and capitalize words", () => {
    expect(normalizeName(' fernanDA  MONTENEGRO')).toEqual(
      'Fernanda Montenegro'
    );
  });

  it("Capitalize names after and before '-' character", () => {
    expect(normalizeName('Jane DOE-SMITH')).toEqual('Jane Doe-Smith');
  });

  it('Ignore exceptions when capitalizing', () => {
    expect(normalizeName(' wilson da costa', ['da'])).toBe('Wilson da Costa');
  });
});
