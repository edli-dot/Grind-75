/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let hash = {};
  let hash2 = {};
  pattern = pattern.split('');
  s = s.split(' ');

  if (pattern.length != s.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (!hash[pattern[i]] && !hash2[s[i]]) {
      hash[pattern[i]] = s[i];
    }
    if (!hash2[s[i]]) {
      hash2[s[i]] = pattern[i];
    }
    console.log(hash, 'hash');
    console.log(hash2);
    if (hash[pattern[i]] !== s[i]) return false;
  }
  return true;
};
