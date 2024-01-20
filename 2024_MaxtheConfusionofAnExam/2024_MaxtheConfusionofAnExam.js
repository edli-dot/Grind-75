/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  // Initialize pointers and counts
  let left = 0;
  let maxCount = 0;
  let tCount = 0;
  let fCount = 0;
  // Iterate through the answerKey
  for (let right = 0; right < answerKey.length; right++) {
    // Update counts based on the current character
    if (answerKey[right] === 'T') {
      tCount++;
    } else {
      fCount++;
    }
    // Check if the current window violates the constraint
    while (tCount + k < right - left + 1 && fCount + k < right - left + 1) {
      // Adjust counts and move the left pointer
      if (answerKey[left] === 'T') {
        tCount--;
      } else {
        fCount--;
      }
      left++;
    }
    // Update maxCount with the length of the current valid window
    if (right - left + 1 > maxCount) {
      maxCount = right - left + 1;
    }
  }
  // Return the maximum consecutive count
  return maxCount;
};
