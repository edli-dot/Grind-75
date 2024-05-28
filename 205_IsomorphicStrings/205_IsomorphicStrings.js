/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let cache = {};
  let values = new Set();
  for (let i = 0; i < s.length; i++) {
    if (values.has(t[i]) || cache[s[i]]) {
      if (cache[s[i]] !== t[i]) {
        return false;
      }
    }
    values.add(t[i]);
    if (!cache[s[i]]) {
      cache[s[i]] = t[i];
    }
  }
  return true;
};

/**
 * a two way tracker. values track if something has been converted into a letter already
 *  then checks if the letter converted is unique or not
 */
