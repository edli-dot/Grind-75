/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  // Use map to get an array of word counts for each sentence in parallel
  const wordCounts = sentences.map(
    (sentence) => sentence.trim().split(/\s+/).length
  );
  return Math.max(...wordCounts);
};
