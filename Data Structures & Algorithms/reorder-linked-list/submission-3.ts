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
        const vals = []
        let curr = head
        while(curr){
            vals.push(curr.val)
            curr = curr.next
        }
        const reordered = []
        let l=0
        let r=vals.length-1
        for(let i=0; i<vals.length; i++){
            if(i%2 === 0){
                reordered.push(vals[l])
                l++
            }else{
                reordered.push(vals[r])
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
