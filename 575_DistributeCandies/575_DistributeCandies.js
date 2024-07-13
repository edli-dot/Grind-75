/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const diffTypes = new Set(candyType);
  const canEat = candyType.length / 2;
  return canEat >= diffTypes.size ? diffTypes.size : canEat;
};
