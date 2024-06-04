var minimumSum = function (num) {
  //we have a four digit number
  //which combination of two digits added will be the smallest value

  let cache = [...num.toString().split('')];
  cache.sort((a, b) => Number(a) - Number(b));
  let first = cache[0] + cache[2];
  let second = cache[1] + cache[3];
  return Number(first) + Number(second);
};

/**
 * @param {number} num
 * @return {number}
 */
const minimumSum = (num) => {
  const str = num + '';
  const arr = str.split('').toSorted();
  return arr[0] * 10 + arr[1] * 10 + +arr[2] + +arr[3];
};
