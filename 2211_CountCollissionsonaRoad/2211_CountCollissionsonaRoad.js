/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  let stack = [];
  let collisions = 0;
  let index = 0;
  while (index < directions.length) {
    //no collision
    if (
      !stack.length ||
      directions[index] == 'R' ||
      stack[stack.length - 1] == 'L' ||
      (stack[stack.length - 1] == 'S' && directions[index] == 'S')
    ) {
      stack.push(directions[index]);
      index++;
    }
    //events there are a collision
    else if (stack[stack.length - 1] == 'S' && directions[index] == 'L') {
      collisions += 1;
      index++;
    } else if (stack[stack.length - 1] == 'R') {
      if (directions[index] == 'S') {
        collisions += 1;
      } else if (directions[index] == 'L') {
        collisions += 2;
      }
      stack.pop();
      stack.push('S');
      index++;
    }
  }
  //remainder of stack
  while (stack.length) {
    if (stack[stack.length - 1] == 'S' && stack[stack.length - 2] == 'R') {
      stack.pop();
      stack.pop();
      stack.push('S');
      collisions++;
    } else stack.pop();
  }
  return collisions;
};
