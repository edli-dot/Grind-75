/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let cache = {};
  for (let char of s) {
    if (!cache[char]) cache[char] = 1;
    else cache[char]++;
  }
  let values = Object.values(cache);
  let comparison = values[0];
  return values.every((x) => x === comparison);
};
