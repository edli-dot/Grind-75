/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const current = grid[i][j];
      const adjacent = j + 1 < grid[i].length ? grid[i][j + 1] : null;
      const below = i + 1 < grid.length ? grid[i + 1][j] : current;
      if (adjacent !== null && current === adjacent) return false;
      if (current !== below) return false;
    }
  }
  return true;
};
