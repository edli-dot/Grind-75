/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let cache = [a, b, c];
  cache.sort((x, y) => x - y);
  let count = 0;
  while (cache.length > 1) {
    cache[0] -= 1;
    cache[cache.length - 1] -= 1;
    count++;
    cache = cache.filter((x) => x > 0).sort((x, y) => x - y);
  }
  return count;
};

/**
 * continue to subtract two from the smallest and largest in the sorted array
 */

var maximumScore = function (a, b, c) {
  const piles = [a, b, c].sort((a, b) => a - b);
  return piles[0] + piles[1] < piles[2]
    ? piles[0] + piles[1]
    : (a + b + c) >> 1;
};

/**
 * this was a fun one to learn from
 *
 * the math behind this is that:
 * if two smaller piles is less than the largest pile, you can only make moves up to the sum of the smallest piles
 * if not, then the max moves is the sum of half the total amount of stones
 *
 * >> is a bitwise right shift operator
 * equivalent to dividing the sum by 2
 * divides by 2 and flors the result
 */
