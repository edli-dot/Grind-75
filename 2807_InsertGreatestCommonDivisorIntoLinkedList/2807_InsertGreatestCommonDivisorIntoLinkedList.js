var insertGreatestCommonDivisors = function (head) {
  if (!head || !head.next) return head;

  /**
   * Described here is essentally Eucldian Algorithm to fiund the Greatest Common Divisor
   * Using the smaller of the two numbers, utilize the remainder and the smallest of the number
   * until the reaminder is equal to 0. then you have your GCD
   */
  const GCD = (fNum, sNum) => {
    let smallerNum = Math.min(fNum, sNum);
    let largerNum = Math.max(fNum, sNum);
    if (smallerNum === 0) {
      return largerNum;
    }
    const remainder = largerNum % smallerNum;
    return GCD(smallerNum, remainder);
  };

  let current = head;
  /** Business as usual. iterate through the linked list passing in the two values
   * inserting GCD in between
   */
  while (current && current.next) {
    const gcd = GCD(current.val, current.next.val);
    const newNode = new ListNode(gcd);
    newNode.next = current.next;
    current.next = newNode;
    current = current.next.next;
  }

  return head;
};
