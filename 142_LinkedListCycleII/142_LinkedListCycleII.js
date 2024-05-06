var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    //The confirms that there is a cycle in this
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};

/**
 * A little quirk about the Floyd's Tortoise and Hare is in this logic
 * So, after identifying a cycle, advancing both pointers at the same pace
 * will inevitably lead them to converge at the start of the cycle.
 */
