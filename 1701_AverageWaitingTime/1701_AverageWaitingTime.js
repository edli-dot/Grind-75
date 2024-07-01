/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let curr = customers[0][0];
  let totalTime = 0;
  for (let i = 0; i < customers.length; i++) {
    //destructure
    const [arrival, prep] = customers[i];
    if (arrival > curr) {
      curr = arrival;
    }
    curr += prep;
    totalTime += curr - arrival;
  }
  return totalTime / customers.length;
};
