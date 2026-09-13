class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let rows = matrix.length
        let cols = matrix[0].length

        let l=0
        let r=rows*cols-1

        while(l<=r){
            const mid = Math.floor((l+r)/2)
            const row = Math.floor(mid/cols)
            const col = mid % cols
            const value = matrix[row][col]

            if(value<target){
                l = mid + 1
            }else if(value>target){
                r = mid - 1
            }else{
                return true
            }
        }

        return false
    }
}
