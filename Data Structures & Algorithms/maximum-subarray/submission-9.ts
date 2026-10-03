class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let sum = 0
        let res = nums[0]
        for(const num of nums){
            if(sum < 0){
                sum = 0
            }
            sum += num
            res = Math.max(res, sum)
        }
        return res
    }
}
