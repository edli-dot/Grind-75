/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let cache = {};
  nums.map((x) => {
    !cache[x] ? (cache[x] = 1) : cache[x]++;
  });
  let answer = 0;
  Object.keys(cache).forEach((x) => {
    cache[x] == 1 ? (answer += parseInt(x)) : (answer += 0);
  });
  return answer;
};

//a bit slower because after iterating to make the hashmap, we go back and add all keys that havea value of 1

var sumOfUnique = function (nums) {
  let map = {};
  let sum = 0;
  for (let num of nums) {
    if (map[num]) {
      if (map[num] === 1) {
        sum -= num;
      }
      map[num]++;
    } else {
      map[num] = 1;
      sum += num;
    }
  }
  return sum;
};

//Computationally faster. o(n) because we only iterate once as oppose to the solution above that iterates over the entire array/object twice.
