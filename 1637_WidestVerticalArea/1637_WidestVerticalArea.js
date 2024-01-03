/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  if (!points.length) return 0;

  // Extract x-coordinates from points and sort them in ascending order
  let xCoordinates = points.map((point) => point[0]);
  xCoordinates.sort((a, b) => a - b);

  // Calculate the maximum width of vertical area
  let maxWidth = 0;
  for (let i = 1; i < xCoordinates.length; i++) {
    let width = xCoordinates[i] - xCoordinates[i - 1];
    maxWidth = Math.max(maxWidth, width);
  }

  return maxWidth;
};
