/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let hash = Object.create(null);
  let hash2 = Object.create(null);
  pattern = pattern.split('');
  s = s.split(' ');

  if (pattern.length != s.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] || hash2[s[i]]) {
      if (hash[pattern[i]] !== s[i] || hash2[s[i]] !== pattern[i]) return false;
    }
    if (!hash[pattern[i]]) hash[pattern[i]] = s[i];
    if (!hash2[s[i]]) hash2[s[i]] = pattern[i];
  }
  return true;
};

/**
 * 
 *pattern="abba" and s="dog constructor constructor dog". results in the test case failing
 requires the Object.create(null)

 because constructor is a prototype of Object. this is fixed by creating Object.create(null)
 this creates an object with NO PROTOTYPES
 */
