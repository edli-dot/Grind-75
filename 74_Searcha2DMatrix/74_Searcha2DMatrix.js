/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let arrayLength = matrix[0].length;
  for (let i = 0; i < matrix.length; i++) {
    if (target <= matrix[i][arrayLength - 1]) {
      return matrix[i].includes(target);
    }
  }
  return false;
};

//this is sitll m *n

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const mid_val = matrix[Math.floor(mid / n)][mid % n];
    if (mid_val == target) {
      return true;
    } else if (mid_val < target) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return false;
};

/** This method adopts more of that sliding window methodology
 * Time complexity (log (m * n))
 * some logic required in parsing through the matrix
 * Math.floor (mid/n) returns the row #
 * where as mid % n returns the nth element of the mth row
 */
