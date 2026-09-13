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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        const set = new Set<ListNode>()
        let curr = head
        while(curr){
            if(set.has(curr)){
                return true
            }
            set.add(curr)
            curr = curr.next
        }
        return false
    }
}
