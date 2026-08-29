class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const n = nums.length
        for(let i=0; i<n; i++){
            for(let j=i+1; j<n; j++){
                if((nums[i] + nums[j] === target) && (i !== j)){
                    return [i, j]
                }
            }
        }
    }
}
