import normalizeText from './normalizeText';

describe('normalizeText', () => {
  it('Normalize white-spaces', () => {
    expect(normalizeText("   so there's  a\r\n  way\t to normalize ")).toEqual(
      "so there's a way to normalize"
    );
  });

  it('Normalize diacritics', () => {
    expect(normalizeText('moça, então é você que está')).toEqual(
      'moca, entao e voce que esta'
    );
  });

  it('Join texts into one', () => {
    expect(normalizeText(['hi', "how u're doing?", 'good?'])).toEqual(
      "hi how u're doing? good?"
    );
  });

  it('Transform to lower-case', () => {
    expect(normalizeText('It WOULD be tranSFORMED')).toEqual(
      'it would be transformed'
    );
  });
});
