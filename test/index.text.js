import test from 'ava';
import normalizeText, { normalizeWhitespaces, normalizeDiacritics } from '../'

test('normalizeWhitespaces -> Normalizes string whitespaces', (context) => {
  context.is(
    normalizeWhitespaces(' ola   '),
    'ola',
    'Should remove spaces from start and end of string'
  )

  context.is(
    normalizeWhitespaces('ola,   tudo bem\n com voce\t?'),
    'ola, tudo bem com voce ?',
    'Should normalize spaces, line-endings and tabs'
  )
})

test('normalizeDiacritics -> Normalizes string accents and special characters', (context) => {
  context.is(
    normalizeDiacritics('Olá, tudo bem com você?'),
    'Ola, tudo bem com voce?',
    'Should remove accents'
  )
})

test('normalizeText -> Merge text and compose other API functions', (context) => {
  context.is(
    normalizeText(['     Olá, \n', 'Tudo bem     com você\t?']),
    'ola, tudo bem com voce ?'
  )
})
