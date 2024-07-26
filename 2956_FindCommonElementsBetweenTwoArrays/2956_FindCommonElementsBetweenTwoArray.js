/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
  let set_nums1 = new Set(nums1);
  let set_nums2 = new Set(nums2);
  let count1 = nums1.reduce((x, y) => {
    const add = set_nums2.has(y) ? 1 : 0;
    return x + add;
  }, 0);
  let count2 = nums2.reduce((x, y) => {
    const add = set_nums1.has(y) ? 1 : 0;
    return x + add;
  }, 0);
  return [count1, count2];
};
