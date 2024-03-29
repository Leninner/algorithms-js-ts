const lookForDDifference = (sortedArray: number[], d: number): number[] => {
  for (let i = 0; i < sortedArray.length - 1; i++) {
    const element = sortedArray[i]
    if (Math.abs(element - sortedArray[i + 1]) === d) {
      return [element, sortedArray[i + 1]]
    }
  }

  return []
}

lookForDDifference([1, 3, 3, 4, 5, 6, 7, 12, 13, 100], 1)
