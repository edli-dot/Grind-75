var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let totalArea = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      totalArea += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      totalArea += maxRight - height[right];
    }
  }
  return totalArea;
};

/**
 *
 * Initial thought process was to have two pointers going the same way.
 * problem was I was unable to update my positions to cover a point where the left wasn't the min
 *
 *
 * This solution is a two prong approach using two pointer
 * At each point from the left or the right, you would be looking at the potential to capture water at that index
 * based off the currentMax coming from the left or the right
 * will never have a negative value
 */
