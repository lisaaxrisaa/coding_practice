// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
// ---------------------------------------------------------
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
  // We create a dummy node with value 0
  const dummy = new ListNode(0);

  // The dummy points to the real head of the list
  dummy.next = head;

  // We initialize both pointers (first and second) at the dummy
  let first = dummy;
  let second = dummy;

  // Move the 'first' pointer n + 1 steps ahead to create a gap of n between first and second
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // Move both pointers forward together until 'first' reaches the end of the list
  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  // Now, 'second' is just before the node we want to remove
  // This line removes the nth node from the end by skipping it
  second.next = second.next.next;

  // Return the node after dummy, which is the (possibly new) head of the list
  return dummy.next;
};

// ---------------------------------------------------------

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;

  // Step 1: Create a dummy node to simplify edge cases (e.g., reversing from head)
  let dummy = new ListNode(0);
  dummy.next = head;

  // Step 2: Traverse to the node just before 'left'
  let prev = dummy;
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }

  // Step 3: Start reversing from 'left' to 'right'
  let curr = prev.next; // current node at position 'left'
  let next = null;

  for (let i = 0; i < right - left; i++) {
    next = curr.next;
    curr.next = next.next;
    next.next = prev.next;
    prev.next = next;
  }

  return dummy.next;
};
