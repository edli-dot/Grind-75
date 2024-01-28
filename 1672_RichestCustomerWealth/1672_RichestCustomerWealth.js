/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    accounts[i] = accounts[i].reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    if (accounts[i] > max) {
      max = accounts[i];
    }
  }
  return max;
};
