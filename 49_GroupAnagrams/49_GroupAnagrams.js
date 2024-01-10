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

//Very slow computationally but good with memory

var groupAnagrams = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split('').sort().join('');
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};
// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)

//Store the sorted entries into the object
//push the actual anagrams as values into the object
//return out the values of the anagram extracted from the obj
