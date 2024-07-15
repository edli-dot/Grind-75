/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ans[ans.length - 1]) {
      ans.pop();
    } else ans.push(s[i]);
  }
  return ans.join('');
};

/**
 * in js can't change strings
 * work with array and return a string
 */
