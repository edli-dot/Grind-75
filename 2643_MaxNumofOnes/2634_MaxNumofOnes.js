/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let max = -Infinity;
  let answer;
  for (let i = 0; i < mat.length; i++) {
    const curr = mat[i].reduce((x, y) => x + y);
    if (curr > max) {
      max = curr;
      answer = [i, curr];
    }
  }
  return answer;
};
