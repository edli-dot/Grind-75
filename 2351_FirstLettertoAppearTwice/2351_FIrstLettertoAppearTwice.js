/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let cache = {};
  for (let letters of s) {
    if (cache[letters]) return letters;
    cache[letters] = true;
  }
  return null;
};
