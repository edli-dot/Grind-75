/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let answer = [];
  let compare = strs.map((x) => x.split('').sort().join(''));

  for (let i = 0; i < strs.length; i++) {
    let modify = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (compare[i] === compare[j]) {
        modify.push(strs[j]);
        strs.splice(j, 1);
        compare.splice(j, 1);
        j--;
      }
    }
    answer.push(modify);
  }
  return answer;
};
