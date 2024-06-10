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
