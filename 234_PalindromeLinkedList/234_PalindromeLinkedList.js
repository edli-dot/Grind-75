/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let cache = [];
  while (head != null) {
    cache.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < Math.floor(cache.length / 2); i++) {
    if (cache[i] != cache[cache.length - i - 1]) return false;
  }
  return true;
};

//this intiial implementation is basically just caching the values and iterating through to check
//essentially o(2n)

var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev,
    temp;
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow)
    (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
  (fast = head), (slow = prev);
  while (slow)
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);
  return true;
};

/**
 * This menthod performs the same result but in linear time complexity
 * The thought process is that we have a fast and slow pointer. by the time
 * the fast pointer reaches the end, the slow pointer will be in the middle
 * we then reverse the second half of the linked list
 * and check the values
 */
