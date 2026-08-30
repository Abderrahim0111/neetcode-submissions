class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<string, Set<string>>()
        const cols = new Map<string, Set<string>>()
        const boxes = new Map<string, Set<string>>()
        for(let i=0; i<9; i++){
            rows.set(String(i), new Set())
            cols.set(String(i), new Set())
        }
        for(let r=0; r<9; r++){
            for(let c=0; c<9; c++){
                const val = board[r][c]
                if(val === ".") continue
                const boxKey = Math.floor(r/3) + "," + Math.floor(c/3)
                if(!boxes.has(boxKey)){
                    boxes.set(boxKey, new Set())
                }
                if(rows.get(String(r)).has(val) ||
                cols.get(String(c)).has(val) ||
                boxes.get(boxKey).has(val)
                ){
                    return false
                }
                rows.get(String(r)).add(val)
                cols.get(String(c)).add(val)
                boxes.get(boxKey).add(val)
            }
        }
        return true
    }
}
