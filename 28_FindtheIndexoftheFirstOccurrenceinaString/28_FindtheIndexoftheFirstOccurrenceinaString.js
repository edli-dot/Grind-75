/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack || !needle) return -1;
  if (needle.length > haystack.length) return -1;
  let i = 0;
  let left = 0;
  let compare = '';
  while (i < needle.length) {
    compare = compare.concat(haystack[i]);
    i++;
  }
  if (compare === needle) return left;
  /**
   * Similar to a sliding window, keeps track of position of the first character
   * continues to shift the window until a substring matches
   * time complexity of o(n)
   */
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    compare = compare.substring(1) + haystack[i + needle.length];
    left++;
    if (compare === needle) return left;
  }
  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

//In-built method
//time complexity of n+ m
