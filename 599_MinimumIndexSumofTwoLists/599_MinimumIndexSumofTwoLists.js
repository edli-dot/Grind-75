/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let cache = {};
  for (let i = 0; i < list1.length; i++) {
    cache[list1[i]] = i;
  }
  let min = Infinity;
  let ans = [];
  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in cache) {
      cache[list2[i]] += i;
      if (min > cache[list2[i]]) {
        min = cache[list2[i]];
        ans = [list2[i]];
      } else if (cache[list2[i]] == min) {
        ans.push(list2[i]);
      }
    }
  }
  return ans;
};
