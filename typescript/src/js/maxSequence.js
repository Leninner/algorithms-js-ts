// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

export const maxSequence = (arr) => {
  if (!arr.length) return 0
  if (arr.every((value) => value < 0)) return 0

  const arreglo = []

  for (let i = 0; i < arr.length; i++) {
    let sum = 0
    let z = i + 1

    for (let y = i; y < z; y++) {
      sum += arr[y]

      if (z < arr.length) {
        z++
      }

      arreglo.push(sum)
    }
  }

  return Math.max(...arreglo)
}

const maxSequence2 = (arr) => {
  let min = 0
  let ans = 0
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    min = Math.min(sum, min)
    ans = Math.max(ans, sum - min)
  }

  return ans
}

maxSequence2([-2, 1, -3, 4, -1, 2, 1, -5, 4]) // 6
