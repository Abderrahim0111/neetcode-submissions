class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number | string, Set<string>>()
        const cols = new Map<number | string, Set<string>>()
        const boxes = new Map<number | string, Set<string>>()

        for(let i=0; i<9; i++){
            rows.set(i, new Set())
            cols.set(i, new Set())
        }

        for(let r=0; r<9; r++){
            for(let c=0; c<9; c++){
                const val = board[r][c]
                if(val === ".") continue
                const boxKey = `(${Math.floor(r/3)},${Math.floor(c/3)})`
                if(!boxes.get(boxKey)){
                    boxes.set(boxKey, new Set())
                }
                if(rows.get(r).has(val) ||
                    cols.get(c).has(val) ||
                    boxes.get(boxKey).has(val)
                ){
                    return false
                }
                rows.get(r).add(val)
                cols.get(c).add(val)
                boxes.get(boxKey).add(val)
            }
        }
        return true
    }
}
