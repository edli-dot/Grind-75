/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    let current = asteroids[i],
      last = stack[stack.length - 1];
    if (!stack.length || current > 0 || last < 0) {
      //cases where no collision

      //if top of stack is going right, asteroids going right won't collide
      //if top of stack is goign left, asteroids going right would be in the opposite direction. asteroids goign left won't collide
      stack.push(current);
    }
    //collision where they break
    else if (last + current === 0) {
      stack.pop();
    }
    //collision that destroys one
    else if (last + current < 0) {
      stack.pop();
      i--;
    }
  }
  return stack;
};
