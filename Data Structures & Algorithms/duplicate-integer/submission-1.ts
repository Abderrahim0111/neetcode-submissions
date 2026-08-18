class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set<number>(nums);
        return Array.from(set).toString() !== nums.toString();
    }
}
