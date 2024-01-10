/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let slow = 0;
  let fast = 0;
  let status = false;
  for (const el of t) {
    if (s[slow] == el) slow++;
  }

  status = slow === s.length;
  return status;
};
