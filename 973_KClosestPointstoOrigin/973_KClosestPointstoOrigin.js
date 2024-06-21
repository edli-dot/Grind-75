/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  if (points.length == k) return points;
  // returns a combined array
  let combined = points.map((x) => [x, x[0] ** 2 + x[1] ** 2]);
  combined.sort((a, b) => a[1] - b[1]);
  return combined.slice(0, k).map((first) => first[0]);

  //   const square = ([x,y]) => x*x + y*y
  //   points.sort((a, b) => square(a) - square(b))
  //   return points.slice(0, k)
};
