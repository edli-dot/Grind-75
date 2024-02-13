/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  let cache = new Set();
  let cache2 = new Set();
  for (let i = 0; i < matrix.length; i++) {
    cache.clear();
    cache2.clear();
    for (let j = 0; j < matrix.length; j++) {
      cache.add(matrix[i][j]);
      cache2.add(matrix[j][i]);
    }
    if (cache.size != matrix.length || cache2.size != matrix.length)
      return false;
  }
  return true;
};

/** This essential boils down to "do every row and column posess n unique numbers"
 * can use Set to check if there are duplicates and then just compare the lengths to original
 * Set.clear() seems to incrementally improve run time
 */
