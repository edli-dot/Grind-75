/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let cache = {};
  for (let letter of ransomNote) {
    if (!cache[letter]) cache[letter] = 1;
    else cache[letter]++;
  }
  for (let letter of magazine) {
    if (cache[letter] && cache[letter] > 0) cache[letter]--;
  }
  const output = Object.values(cache).every((x) => x === 0); //Boolean
  return output;
};

//Basically a hash map. expect values to be 0 if the word can be properly made up
