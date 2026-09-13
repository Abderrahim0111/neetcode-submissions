class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const mat = matrix.flat()
        let l=0
        let r=mat.length-1
        while(l<=r){
            const m = l + Math.floor((r-l)/2)
            if(mat[m] < target){
                l = m+1
            }else if(mat[m] > target){
                r = m-1
            }else{
                return true
            }
        }
        return false
    }
}
