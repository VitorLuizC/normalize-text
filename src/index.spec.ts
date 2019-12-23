import normalizeText, {
  normalizeName,
  normalizeParagraph,
  normalizeDiacritics,
  normalizeWhitespaces
} from '.';

test('normalizeWhitespaces -> Normalizes string whitespaces', () => {
  expect(normalizeWhitespaces(' ola   ')).toBe('ola');

  expect(normalizeWhitespaces('ola,   tudo bem\n com voce\t?')).toBe(
    'ola, tudo bem com voce ?'
  );
});

test('normalizeDiacritics -> Normalizes string accents and special characters', () => {
  expect(normalizeDiacritics('Olá, tudo bem com você?')).toBe(
    'Ola, tudo bem com voce?'
  );
});

test('normalizeText -> Merge text and compose other API functions', () => {
  expect(normalizeText(['     Olá, \n', 'Tudo bem     com você\t?'])).toBe(
    'ola, tudo bem com voce ?'
  );
});

test('normalizeParagraph -> normalizes a string into a paragraph', () => {
  expect(normalizeParagraph('  era uma vez no mundo  encantado')).toBe(
    'Era uma vez no mundo encantado.'
  );
});

test('normalizeName -> normalizes a string into a name', () => {
  expect(normalizeName('aloísio nunes')).toBe('Aloísio Nunes');
  expect(normalizeName('   evan  \n  you')).toBe('Evan You');
});
