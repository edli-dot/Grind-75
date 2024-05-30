/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let arr = {};
  for (let num of this) {
    if (arr[fn(num)]) {
      arr[fn(num)].push(num);
    } else arr[fn(num)] = [num];
  }
  return arr;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
