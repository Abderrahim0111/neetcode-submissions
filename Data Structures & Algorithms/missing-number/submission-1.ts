class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const sorted = nums.sort((a,b) => a-b)
        for(let i=0; i<sorted.length; i++){
            if(nums[i] !== i){
                return i
            }
        }
        return sorted.length
    }
}
