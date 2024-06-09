/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let cache = new Set();
  let des = new Set();
  for (let i = 0; i < paths.length; i++) {
    cache.add(paths[i][0]);
    des.add(paths[i][1]);
  }
  for (let path of des) {
    if (!cache.has(path)) return path;
  }
  return '';
};
