var MinStack = function () {
  this.cache = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.cache.push({
    value: x,
    min: this.cache.length === 0 ? x : Math.min(x, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.cache.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.cache[this.cache.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.cache[this.cache.length - 1].min;
};

/**
 * this method utilizes pushing in an object. that keeps track of the val of the stack but also the lowest value at that time
 *
 */

var MinStack = function () {
  this.stack = [];
  this.minstack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minstack.length === 0
    ? this.minstack.push(val)
    : this.minstack.push(
        Math.min(val, this.minstack[this.minstack.length - 1])
      );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minstack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minstack[this.minstack.length - 1];
};

/** 
* this would be the otehr way of doing the problem
initilizing two different arrays to read from
*/
