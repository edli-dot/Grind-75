/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let squares = rectangles.map((x) => Math.min(x[0], x[1]));
  const highest = Math.max(...squares);
  const count = [];
  for (let nums of squares) {
    if (nums >= highest) count.push(nums);
  }
  return count.length;
};
