/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  //early exit if nothing greater than target
  if (target >= letters[right]) {
    return letters[0];
  }

  //binary search
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const letter = letters[mid];

    if (letter > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //upon the final, will present the smallest letter greater than target on the left pointer
  return letters[left];
};
