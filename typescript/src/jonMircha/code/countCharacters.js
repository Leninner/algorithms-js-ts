// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const countCharacters = (cadena) =>
  typeof cadena === 'string' ? cadena.length : false

export { countCharacters }
