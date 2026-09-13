/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        const temp = []
        let curr = head
        while(curr){
            temp.push(curr.val)
            curr = curr.next
        }
        let l=0
        let r=temp.length-1
        let reordered = []
        for(let i=0; i<temp.length; i++){
            if(i%2 === 0){
                reordered.push(temp[l])
                l++
            }else{
                reordered.push(temp[r])
                r--
            }
        }

        curr = head

        for(let i=0; i<reordered.length; i++){
            curr.val = reordered[i]
            curr = curr.next
        }
    }
}
