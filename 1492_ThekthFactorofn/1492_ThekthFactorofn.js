/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function kthFactor(n, k) {
  let lowerFactors = [];
  let upperFactors = [];

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      lowerFactors.push(i);
      if (i !== n / i) {
        upperFactors.push(n / i);
      }
    }
  }

  if (k <= lowerFactors.length) {
    return lowerFactors[k - 1];
  } else if (k <= lowerFactors.length + upperFactors.length) {
    return upperFactors[upperFactors.length - (k - lowerFactors.length)];
  } else {
    return -1;
  }
}

/**
 * Solving in less than O(n) complexity
 * Other methods end up using sort() but that would make it n log n where n is the number of factors
 *
 * some logic in place to retain a kth factor using two arrays
 *
 * */
