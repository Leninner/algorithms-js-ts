/*
 * Complete the 'chocolateFeast' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n - the amount of money
 *  2. INTEGER c - the cost of a chocolate bar
 *  3. INTEGER m - number of wrappers for one chocolate bar
 * @link https://www.hackerrank.com/challenges/chocolate-feast/problem?isFullScreen=true
 */

const chocolateFeast = (n: number, c: number, m: number): number => {
  let bars = Math.floor(n / c) // 5
  let totalBars = bars

  while (bars >= m) {
    totalBars++
    bars = bars - m + 1
  }

  return totalBars
}

chocolateFeast(15, 3, 2) // 9
chocolateFeast(10, 2, 5) // 6
chocolateFeast(12, 4, 4) // 3
chocolateFeast(6, 2, 2) // 5
