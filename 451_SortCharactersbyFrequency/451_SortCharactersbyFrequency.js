/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let cache = {};
  for (const letters of s) {
    cache[letters] ? cache[letters]++ : (cache[letters] = 1);
  }
  const vals = Object.keys(cache).sort((a, b) => cache[b] - cache[a]);
  let ans = '';
  for (let i = 0; i < vals.length; i++) {
    ans += vals[i].repeat(cache[vals[i]]);
  }
  return ans;
};
