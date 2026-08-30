class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums)
        let longest = 0
        for(const num of set){
            let length = 0
            if(!set.has(num - 1)){
                while(set.has(num + length)){
                    length++
                }
            }
            longest = Math.max(longest, length)
        }
        return longest
    }
}
