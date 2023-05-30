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

function reverseList(head) {
  if (!head) return null;
  if (!head.next) return head;
  else {
    let newHead = reverseList(head.next);
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
const reversed = reverseList(head);
console.log(reversed);
