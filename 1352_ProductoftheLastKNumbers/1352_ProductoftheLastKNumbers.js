var ProductOfNumbers = function () {
  this.cache = [];
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  this.cache.push(num);
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  let ans = 1;
  let i = 0;
  while (i < k) {
    ans *= this.cache[this.cache.length - 1 - i];
    i++;
  }
  return ans;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
