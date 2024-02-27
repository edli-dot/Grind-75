/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  const firstString = strs[0];
  let prefix = '';

  for (let i = 0; i < firstString.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== firstString[i]) {
        return prefix;
      }
    }
    prefix += firstString[i];
  }
  return prefix;
};
