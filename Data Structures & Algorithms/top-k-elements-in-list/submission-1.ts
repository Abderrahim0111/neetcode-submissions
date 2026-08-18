class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map: Record<number, number> = {};
        for (const num of nums) {
            map[num] = (map[num] ?? 0) + 1;
        }

        return Object.keys(map)
            .map(Number)
            .sort((a, b) => map[b] - map[a])
            .slice(0, k);
    }
}
