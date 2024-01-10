/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;
  while (left < right) {
    let smaller = height[left] > height[right] ? height[right] : height[left];
    let comparison = smaller * (right - left);
    area = Math.max(area, comparison);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return area;
  //area = the smaller value times the difference between their index
};

//Logic quite simple. just want to find the largest rectangle.
//Come with a left and right pointer and keep comparing hte largest area
//want to move in from the side with the smaller value b/c that side is capped
