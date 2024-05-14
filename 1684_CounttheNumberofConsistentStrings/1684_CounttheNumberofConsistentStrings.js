/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let setAllowed = new Set(allowed);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let isConsistent = true;
    for (let j = 0; j < words[i].length; j++) {
      if (!setAllowed.has(words[i][j])) {
        isConsistent = false;
        break;
      }
    }
    if (isConsistent) count++;
  }
  return count;
};

//cheap in memory to have a bool to monitor whether a word should be added to the count
