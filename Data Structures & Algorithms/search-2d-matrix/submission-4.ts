class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length
        const cols = matrix[0].length
        let l=0
        let r=rows*cols-1
        while(l<=r){
            const mid = Math.floor((r+l)/2)
            const row = Math.floor(mid/cols)
            const col = mid%cols
            const val = matrix[row][col]
            if(val < target){
                l = mid + 1
            }else if(val > target){
                r = mid - 1
            }else{
                return true
            }
        }
        return false
    }
}
