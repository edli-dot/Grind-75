/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let answer = 0;
  let cache = {};
  num = num.toString();
  if (num.length == 1) return 1;
  for (let i = 0; i < num.length - k + 1; i++) {
    let beauty = num.slice(i, i + k);
    //The Usage of continue is to move on to the next increment within the for loop
    if (cache[beauty]) {
      answer++;
      continue;
    }
    if (parseInt(num) % parseInt(beauty) == 0 && parseInt(beauty) != 0) {
      answer++;
      cache[beauty] = true;
    }
  }
  return answer;
};
