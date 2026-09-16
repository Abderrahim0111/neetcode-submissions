class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        // we have to pick the min(maxLeft, MaxRight)
        // so the amount would be min(maxLeft, MaxRight) - height[i]
        let res=0
        let l=0
        let r=height.length-1
        let maxLeft=height[l]
        let maxRight=height[r]
        while(l<r){
            if(maxLeft < maxRight){
                l++
                maxLeft = Math.max(maxLeft, height[l])
                res += maxLeft - height[l]
            }else{
                r--
                maxRight = Math.max(maxRight, height[r])
                res += maxRight - height[r]
            }
        }
        return res
    }
}
