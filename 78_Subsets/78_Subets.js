/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  for (let num of nums) {
    addV = [];
    for (let entry of res) {
      addV.push([...entry, num]);
    }
    res.push(...addV);
  }
  return res;
};

module.exports = subsets;
