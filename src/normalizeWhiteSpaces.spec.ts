import normalizeWhiteSpaces from './normalizeWhiteSpaces';

describe('normalizeWhiteSpaces', () => {
  it('Remove trailing white-spaces', () => {
    expect(normalizeWhiteSpaces(' What exactly is it?   ')).toEqual(
      'What exactly is it?'
    );
  });

  it('Normalize white-space characters', () => {
    expect(normalizeWhiteSpaces('Hi,   how is \r\n everything  \t?')).toBe(
      'Hi, how is everything ?'
    );
  });

  it('Normalize white-space in string template', () => {
    const student = { name: 'John   Doe' };
    expect(
      normalizeWhiteSpaces(` Hi,  ${student.name}!\n How are you doing? `)
    ).toBe('Hi, John Doe! How are you doing?');
  });
});
