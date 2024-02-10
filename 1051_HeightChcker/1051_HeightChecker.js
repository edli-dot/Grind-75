/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => a - b);
  return heights.reduce(
    (total, height, index) =>
      sorted[index] !== heights[index] ? total + 1 : total,
    0
  );
};
