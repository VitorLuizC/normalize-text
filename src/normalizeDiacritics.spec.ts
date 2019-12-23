import normalizeDiacritics from './normalizeDiacritics';

describe('normalizeDiacritics', () => {
  it('Normalize diacritics from words', () => {
    expect(
      normalizeDiacritics('àáãâäéèêëíìîïóòõôöúùûüñçÀÁÃÂÄÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÑÇ')
    ).toEqual('aaaaaeeeeiiiiooooouuuuncAAAAAEEEEIIIIOOOOOUUUUNC');
  });

  it('Does not normalize special characters', () => {
    expect(normalizeDiacritics('@_$><=-#!,.`\'"')).toEqual('@_$><=-#!,.`\'"');
  });
});
