/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((x) => x + extraCandies >= max);
};
//Could improve on memory by modifying in line

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  candies.forEach((currentValue, index, array) => {
    array[index] = currentValue + extraCandies >= max;
  });
  return candies;
};
