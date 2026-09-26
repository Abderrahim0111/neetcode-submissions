class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let l = 0
        let r = height.length-1
        let minHeight = height[l]
        let maxHeight = height[r]
        let res = 0

        while(l<r){
            if(minHeight < maxHeight){
                l++
                minHeight = Math.max(minHeight, height[l])
                res += minHeight - height[l]
            }else{
                r--
                maxHeight = Math.max(maxHeight, height[r])
                res += maxHeight - height[r]
            }
        }
        return res
    }
}
