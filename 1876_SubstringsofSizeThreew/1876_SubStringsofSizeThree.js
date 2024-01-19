/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0;

  for (let i = 1; i < s.length - 1; i++) {
    let char1 = s[i - 1];
    let char2 = s[i];
    let char3 = s[i + 1];

    if (char1 !== char2 && char2 !== char3 && char1 !== char3) {
      count++;
    }
  }

  return count;
};

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let count = 0;
  for (let i = 1; i < s.length - 1; i++) {
    let cache = new Set([s[i - 1], s[i], s[i + 1]]);
    if (cache.size === 3) count++;
  }
  return count;
};
