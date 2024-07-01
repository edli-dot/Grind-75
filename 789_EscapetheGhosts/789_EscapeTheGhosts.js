/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
  let moves = Math.abs(target[0]) + Math.abs(target[1]);
  for (let i = 0; i < ghosts.length; i++) {
    const [first, second] = ghosts[i];
    let gMoves = Math.abs(first - target[0]) + Math.abs(second - target[1]);
    if (gMoves <= moves) return false;
  }
  return true;
};
/**
 * logic was simple
 * can you get there in less moves than the ghosts. if not then you lose
 */
