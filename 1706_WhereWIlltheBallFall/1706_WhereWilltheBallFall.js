/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  let numCols = grid[0].length;
  let results = Array(numCols).fill(-1);

  for (let col = 0; col < numCols; col++) {
    //have to keep track of the direction
    let currentCol = col;
    for (let row = 0; row < grid.length; row++) {
      let direction = grid[row][currentCol];
      //ball going same way
      if (direction === 1) {
        //if boundary is reached or a V-shape is created, early exit
        // 1 followed by a -1 results in a V
        if (currentCol === numCols - 1 || grid[row][currentCol + 1] === -1) {
          currentCol = -1;
          break;
        }
        currentCol++;
      } else if (direction === -1) {
        // Move left
        if (currentCol === 0 || grid[row][currentCol - 1] === 1) {
          currentCol = -1;
          break;
        }
        currentCol--;
      }
    }

    if (currentCol !== -1) {
      results[col] = currentCol;
    }
  }

  return results;
  /**
   * difficult part was figuring out how to read the data and what the question as asking
   */
};
