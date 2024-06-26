/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let count = 0;
  let left = 0;
  let cache = new Set();
  for (let i = 0; i < s.length; i++) {
    while (cache.has(s[i])) {
      cache.delete(s[left]);
      left++;
    }
    cache.add(s[i]);
    count = i - left + 1 > count ? i - left + 1 : count;
  }
  return count;
};

/**
 * if character isn't in set then add it
 * while adding a new position for the string, if this character already in the string, continue to delete until there is only unique characters
 * modify count to be the max
 */

module.exports = lengthOfLongestSubstring;
