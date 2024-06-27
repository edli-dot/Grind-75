/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
  asteroids.sort((x, y) => x - y);
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > mass) return false;
    else mass += asteroids[i];
  }
  return true;
};
