/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let volume = capacity;
  let index = 0;
  while (index < plants.length) {
    if (volume >= plants[index]) {
      steps += 1;
      volume -= plants[index];
      index++;
    } else {
      steps += 2 * index + 1;
      volume = capacity - plants[index];
      index++;
    }
  }
  return steps;
};
