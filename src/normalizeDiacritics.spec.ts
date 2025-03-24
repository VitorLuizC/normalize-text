import normalizeDiacritics from './normalizeDiacritics';

describe('normalizeDiacritics', () => {
  it('Normalize diacritics from words', () => {
    expect(
      normalizeDiacritics('àáãâäéèêëíìîïóòõôöúùûüñçÀÁÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÑÇ'),
    ).toEqual('aaaaaeeeeiiiiooooouuuuncAAAAAEEEEIIIIOOOOOUUUUNC');
  });

  it("Don't normalize special characters", () => {
    expect(normalizeDiacritics('@_$><=-#!,.`\'"')).toEqual('@_$><=-#!,.`\'"');
  });

  it("Don't normalize german letter ß", () => {
    expect(normalizeDiacritics('ß')).toEqual('ß');
  });
});
