var RecentCounter = function () {
  this.store = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.store.push(t);
  while (this.store[0] < t - 3000) {
    this.store.shift();
  }
  return this.store.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
