/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function (forts) {
  let count = 0;
  let ans = 0;
  let emptyBool = false;
  let allyBool = false;
  for (let i = 0; i < forts.length; i++) {
    if (forts[i] == 1 && emptyBool == true) {
      allyBool = true;
      emptyBool = false;
      ans = Math.max(count, ans);
      count = 0;
    } else if (forts[i] == -1 && allyBool) {
      emptyBool = true;
      allyBool = false;
      ans = Math.max(count, ans);
      count = 0;
    } else if (forts[i] == 1 && !allyBool && !emptyBool) {
      count = 0;
      allyBool = true;
    } else if (forts[i] == -1 && !allyBool && !emptyBool) {
      count = 0;
      emptyBool = true;
    } else if ((forts[i] == -1 && emptyBool) || (forts[i] == 1 && allyBool)) {
      count = 0;
    } else {
      count++;
    }
  }
  return ans;
};
/**
 * o(n)
 * idea of having two bool statements that keep track of whether or not the position passed doesnt posesss a fort or is an ally fort
 * only a couple of conditions to check through
 */
