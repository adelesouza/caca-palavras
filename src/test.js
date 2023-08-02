import { calculateWordsQuantity, generateRandomChar } from './utils.js'

test('testa a calculateWordsQuantity', () => {
  expect(calculateWordsQuantity(30)).toBe(10)
  expect(calculateWordsQuantity(30, 3)).toBe(10)
  expect(calculateWordsQuantity(15, 3)).toBe(5)
  expect(calculateWordsQuantity(15, 'pedro')).toBe(NaN)
})

test('testa se a generateRandomChar retorna uma string', () => {
  expect(typeof generateRandomChar()).toBe('string')
})

test('testa se a generateRandomChar retorna uma string de um caractere', () => {
  expect(generateRandomChar().length).toBe(1)
})
