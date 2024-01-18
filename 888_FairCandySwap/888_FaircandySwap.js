/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  let aliceCandy = aliceSizes.reduce((a, b) => a + b);
  let bobCandy = bobSizes.reduce((a, b) => a + b);
  let difference = (aliceCandy - bobCandy) >> 1;
  const setA = new Set(aliceSizes);
  for (const candy of bobSizes) {
    if (setA.has(candy + difference)) return [candy + difference, candy];
  }
};
