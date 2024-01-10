/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let cache = {};
  let cache2 = {};
  nums1.forEach((x) => {
    if (!cache[x]) cache[x] = true;
  });

  nums2.forEach((x) => {
    if (!cache2[x]) cache2[x] = true;
  });

  for (let i = 0; i < nums1.length; i++) {
    if (cache2[nums1[i]]) {
      nums1.splice(i, 1);
      i--;
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (cache[nums2[i]]) {
      nums2.splice(i, 1);
      i--;
    }
  }

  return [Array.from(new Set(nums1)), Array.from(new Set(nums2))];
};

//Brute force way of doing it

var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1),
    set2 = new Set(nums2);

  nums1.forEach(set2.delete, set2);
  nums2.forEach(set1.delete, set1);

  return [[...set1], [...set2]];
};

//Using prototype of Set to delete exntries
