/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  let ans = [];
  let i = 0;
  while (i < arr.length) {
    let temp = [];
    while (temp.length < size && arr[i] != null) {
      temp.push(arr[i++]);
    }
    ans.push(temp);
  }
  return ans;
};
