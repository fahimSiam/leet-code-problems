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
 let result =[];
 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
     let carry= 0;
     let previousNode = new ListNode();
     const headNode = previousNode;
     while(l1 || l2 || carry){
         let val1 =0, val2 = 0;
         if(l1){
             val1 = l1.val;
             l1 = l1.next;
         }
         if(l2){
             val2 = l2.val;
             l2 = l2.next;
         }
         const sum = val1 + val2 + carry;
         carry = Math.floor(sum/10);
         const digit = sum%10;
         const currentNode = new ListNode(digit);
         previousNode.next = currentNode;
         previousNode = currentNode;
     }
     return headNode.next;
 };