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

/**
 * using in built methods
 */

var countGoodRectangles = function (rectangles) {
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < rectangles.length; i++) {
    const l = rectangles[i][0];
    const w = rectangles[i][1];
    const side = Math.min(l, w);

    if (side > maxLen) {
      maxLen = side;
      count = 1;
    } else if (side === maxLen) {
      count++;
    }
  }

  return count;
};

/**
 * works b/c we are loooking for the largest square possible. not the most frequency of the largest square that can be cut from all of the similar size
 */
