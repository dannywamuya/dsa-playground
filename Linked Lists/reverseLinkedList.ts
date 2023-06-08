/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
/*
    reverse(head.next) head.val === 1
        reverse(head.next) head.val === 2
            reverese(head.next) head.val === 3
                reverse(head.next) head.next === null

*/

// class ListNode {
//   val: number;
//   next: ListNode | null;

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

function reverseListRecursively(head) {
  if (!head) return null;
  if (!head.next) return head;
  else {
    let newHead = reverseListRecursively(head.next);
    console.log(newHead);
    head.next.next = head;
    head.next = null;

    return newHead;
  }
}

let head = {
  val: 0,
  next: {
    val: 1,
    next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
  },
};
const reversed = reverseListRecursively(head);
// console.log(reversed);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListIteratively = function (head) {
  let newHead = null;

  while (head) {
    let next = head.next;
    head.next = newHead;
    newHead = head;
    head = next;
  }

  return newHead;
};

console.log(reverseListIteratively(head));
