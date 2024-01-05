/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let output = '';
  let i = 0;
  while (word1[i] != undefined || word2[i] != undefined) {
    if (word1[i]) output += word1[i];
    if (word2[i]) output += word2[i];
    i++;
  }
  return output;
};

//While Loop

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let output = '';
  let Max = Math.max(word1.length, word2.length);
  for (let i = 0; i < Max; i++) {
    output += word1[i] || '';
    output += word2[i] || '';
  }
  return output;
};

// Solving it iteratively
