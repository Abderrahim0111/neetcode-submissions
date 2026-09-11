class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let res = 0
        const set = new Set(nums)
        for(const num of set){
            let length = 0
            if(!set.has(num-1)){
                while(set.has(num + length)){
                    length++
                }
            }
            res = Math.max(res, length)
        }
        return res
    }
}
