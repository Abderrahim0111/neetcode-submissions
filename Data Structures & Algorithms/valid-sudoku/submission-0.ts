class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<string, Set<string>>()
        const cols = new Map<string, Set<string>>()
        const subBoxes = new Map<string, Set<string>>()

        for(let i=0; i<9; i++){
            rows.set(String(i), new Set())
            cols.set(String(i), new Set())
        }

        for(let r=0; r<9; r++){
            for(let c=0; c<9; c++){
                const val = board[r][c]
                const squareKey = Math.floor(r/3) + "," + Math.floor(c/3)
                if(val === ".") continue
                if (!subBoxes.has(squareKey)) {
                    subBoxes.set(squareKey, new Set())
                }
                if(rows.get(String(r)).has(val) ||
                    cols.get(String(c)).has(val) ||
                    subBoxes.get(squareKey).has(val)) return false
                
                rows.get(String(r)).add(val)
                cols.get(String(c)).add(val)
                subBoxes.get(squareKey).add(val)
            }
        }
        return true
    }
}
