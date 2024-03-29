const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const posApples = []
  const posOranges = []
  let contApples = 0
  let contOranges = 0

  for (let i = 0; i < apples.length; i++) {
    posApples.push(a + apples[i])
  }
  for (let i = 0; i < oranges.length; i++) {
    posOranges.push(b + oranges[i])
  }
  for (let i = 0; i < posApples.length; i++) {
    if (posApples[i] >= s && posApples[i] <= t) {
      contApples++
    }
  }
  for (let i = 0; i < posOranges.length; i++) {
    if (posOranges[i] >= s && posOranges[i] <= t) contOranges++
  }

  return { contApples, contOranges }
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])
