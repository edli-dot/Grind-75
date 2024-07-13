/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  if (s.length == 1) return 1;
  let ans = 0;
  let count = 1;
  for (let i = 0; i < s.length - 1; i++) {
    const first = s[i].charCodeAt(0);
    const second = s[i + 1].charCodeAt(0);
    if (second - first == 1) count++;
    else count = 1;
    if (count > ans) ans = count;
  }
  return ans;
};
/**
 * running counter
 * get largest counter or reset
 */
