/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  let a,
    b = '';
  if (word1.length == 1) {
    a = word1[0];
  } else a = word1.reduce((current, next) => current.concat(next));

  if (word2.length == 1) {
    b = word2[0];
  } else b = word2.reduce((current, next) => current.concat(next));
  return a == b;
};

//A one liner
var arrayStringsAreEqual = function (word1, word2) {
  return word1.join('') == word2.join('');
};
