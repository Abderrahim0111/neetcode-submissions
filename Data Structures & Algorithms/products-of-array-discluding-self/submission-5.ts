class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res = []
        let suffix = 1
        let prefix = 1
        for(let i=0; i<nums.length; i++){
            res[i] = suffix
            suffix *= nums[i]
        }
        for(let i=nums.length-1; i>=0; i--){
            res[i] *= prefix
            prefix *= nums[i]
        }
        return res
    }
}
