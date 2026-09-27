class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        nums.sort((a,b)=>a-b)
        let missing = 1
        for(let i=0; i<nums.length; i++){
            if(nums[i] > 0 && missing === nums[i]){
                missing++
            }
        }
        return missing
    }
}
