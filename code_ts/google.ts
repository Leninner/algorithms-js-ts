/**
 * @description you are given a list of rectangles represented by min and max, x and y coordinates. Compute whether or not a pair of rectangles overlap each other. If one rectangle completely covers another, it is considered overlapping.
 *
 */

interface Rectangle {
  top_left: number[];
  dimensions: number[];
}

const getBoxesCoordinates = (rectangles: Rectangle[]): number[][] => {
  const boxesCoordinates: number[][] = [];

  rectangles.forEach(({ top_left, dimensions }: Rectangle) => {
    const boxCoordinates: number[][] = [];

    boxCoordinates.push([top_left[0], top_left[1] - dimensions[0]]); // bottom_left
    boxCoordinates.push([top_left[0] + dimensions[1], top_left[1]]); // top_right

    boxesCoordinates.push(boxCoordinates.flat());
  });

  return boxesCoordinates;
};

const google = (rectangles: Rectangle[]): boolean => {
  const boxesCoordinates = getBoxesCoordinates(rectangles);
  console.log(boxesCoordinates);

  for (let i = 0; i < boxesCoordinates.length; i++) {
    const [x1, y1, x2, y2] = boxesCoordinates[i];

    for (let j = 0; j < boxesCoordinates.length; j++) {
      const [x3, y3, x4, y4] = boxesCoordinates[j];

      if (x2 < x4 && x2 > x3 && y4 < y2 && y4 > y1) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  google([
    {
      top_left: [1, 4],
      dimensions: [3, 3],
    },
    {
      top_left: [-1, 3],
      dimensions: [2, 1],
    },
    {
      top_left: [0, 5],
      dimensions: [4, 3],
    },
  ])
); // True as the first and third rectangle overlap each other

console.log(
  google([
    {
      top_left: [-1, 3],
      dimensions: [2, 1],
    },
    {
      top_left: [0, 5],
      dimensions: [4, 3],
    },
    {
      top_left: [2, 6],
      dimensions: [2, 2],
    },
  ])
); // False as the first and fourth rectangle do not overlap each other
