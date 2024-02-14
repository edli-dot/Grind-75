/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let answer = 0;
  let sorted = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (sorted[i] !== heights[i]) answer++;
  }
  return answer;
};

//Initial thought process was to make a sorted array and then just compare the two
// have to use [...] so that it makes a copy of teh array

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let sorted = [...heights].sort((a, b) => a - b);
  return heights.reduce(
    (total, height, index) =>
      sorted[index] !== heights[index] ? total + 1 : total,
    0
  );
};

//Interesting usage in reduce
//pass in height to compare the current element height in the array
