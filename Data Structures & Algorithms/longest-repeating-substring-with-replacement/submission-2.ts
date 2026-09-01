class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = new Map()
        let l = 0
        let res = 0
        let maxFreq = 0
        for(let r=0; r<s.length; r++){
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            maxFreq = Math.max(maxFreq, map.get(s[r]))
            if((r-l+1) - maxFreq > k){
                const leftChar = s[l]
                map.set(leftChar, map.get(leftChar) - 1)
                l++
            }
            res = Math.max(res, r-l+1)
        }
        return res
    }
}
