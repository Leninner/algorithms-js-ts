import { countCharacters } from '../code/countCharacters'

test.skip('La función debe devolver el tamaño de una cadena de texto', () => {
  expect(countCharacters('Hola Mundo')).toBe(10)
  expect(countCharacters('Leninner')).toBe(8)
})

test.skip('La función solo debe aceptar cadenas de texto', () => {
  expect(countCharacters(11230)).toBe(false)
  expect(countCharacters(true)).toBe(false)
  expect(countCharacters([4, 1, 2, 4, 5, '', 'Yes'])).toBe(false)
})
