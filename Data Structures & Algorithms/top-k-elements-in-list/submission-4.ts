class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()
        for(const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }
        return Array.from(map).sort((a,b)=>b[1]-a[1]).map(num=>num[0]).slice(0, k)
    }
}
