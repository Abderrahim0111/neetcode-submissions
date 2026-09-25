class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        return String(Number(digits.join("")) + 1).split("").map(Number)
    }
}
