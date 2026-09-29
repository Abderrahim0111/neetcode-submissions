class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let res = 0
        let l=0
        let r=height.length-1
        let maxLeft=height[l]
        let maxRigth=height[r]

        while(l<r){
            if(maxLeft < maxRigth){
                l++
                maxLeft = Math.max(maxLeft, height[l])
                res += maxLeft - height[l]
            }else{
                r--
                maxRigth = Math.max(maxRigth, height[r])
                res += maxRigth - height[r]
            }
        }
        return res
    }
}
