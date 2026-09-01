class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max = 0
        let area = 0
        let l = 0
        let r = heights.length - 1
        while(l<r){
            area = (r - l) * Math.min(heights[r], heights[l])
            max = Math.max(max, area)
            if(heights[l] < heights[r]){
                l++
            }else{
                r--
            }
        }
        return max
    }
}
