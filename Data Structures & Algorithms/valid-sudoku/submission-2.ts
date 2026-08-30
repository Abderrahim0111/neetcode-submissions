class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map()
        const cols = new Map()
        const boxes = new Map()
        for(let i=0; i<9; i++){
            rows.set(i, new Set())
            cols.set(i, new Set())
        }
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                const val = board[i][j]
                if(val === ".") continue
                const boxKey = `${Math.floor(i/3)},${Math.floor(j/3)}`
                if(!boxes.has(boxKey)){
                    boxes.set(boxKey, new Set())
                }
                if(
                    rows.get(i).has(val) ||
                    cols.get(j).has(val) ||
                    boxes.get(boxKey).has(val)
                ){
                    return false
                }
                rows.get(i).add(val)
                cols.get(j).add(val)
                boxes.get(boxKey).add(val)
            }
        }
        return true
    }
}
