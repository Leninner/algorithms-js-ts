export const runLength = (str: string) => {
  const contAndLetters = []
  let cont = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cont++
    } else {
      contAndLetters.push([cont, str[i]])
      cont = 1
    }
  }

  return contAndLetters.flat().join('')
}

export const runLenghtDecode = (str: string) => {
  let result = ''
  for (let i = 0; i < str.length; i += 2) {
    for (let y = 0; y < parseInt(str[i]); y++) {
      result += str[i + 1]
    }
  }

  return result
}
