/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let i = 0;
  let right = plants.length - 1;
  let refills = 0;
  let A = capacityA;
  let B = capacityB;
  while (i < right) {
    if (plants[i] <= A) {
      A -= plants[i];
    } else {
      A = capacityA - plants[i];
      refills++;
    }
    if (plants[right] <= B) {
      B -= plants[right];
    } else {
      B = capacityB - plants[right];
      refills++;
    }
    i++;
    right--;
  }
  if (i === right && A < plants[i] && B < plants[right]) refills++;
  return refills;
};
