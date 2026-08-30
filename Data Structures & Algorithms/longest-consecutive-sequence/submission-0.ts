class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const unique = new Set(nums)
        let longest = 0
        for(const num of unique){
            if(!unique.has(num-1)){
                let current = num
                let length = 1
                while(unique.has(current + 1)){
                    current++
                    length++
                }
                longest = Math.max(longest, length)
            }
        }
        return longest
    }
}
