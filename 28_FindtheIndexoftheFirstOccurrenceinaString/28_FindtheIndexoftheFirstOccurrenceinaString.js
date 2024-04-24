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

var strStr = function (haystack, needle) {
  var m = haystack.length,
    n = needle.length;
  if (!n) return 0;
  var lps = kmpProcess(needle);
  for (var i = 0, j = 0; i < m; ) {
    if (haystack[i] == needle[j]) {
      i++, j++;
    }
    if (j == n) return i - j;
    if (i < m && haystack[i] != needle[j]) {
      if (j) j = lps[j - 1];
      else i++;
    }
  }
  return -1;
};

var kmpProcess = function (needle) {
  var n = needle.length;
  var lps = new Array(n).fill(0);
  for (var i = 1, length = 0; i < n; ) {
    if (needle[i] === needle[length]) {
      length++;
      lps[i] = length;
      i++;
    } else if (length) length = lps[length - 1];
    else {
      lps[i] = 0;
      i++;
    }
  }
  return lps;
};

//update. this would be KMP algorithm
