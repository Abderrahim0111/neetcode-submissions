class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let res = 0
        let freq = 0
        let l = 0
        const map = new Map()
        for(let r = 0; r<s.length; r++){
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            freq = Math.max(freq, map.get(s[r]))
            if((r-l+1) - freq > k){
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
            res = Math.max(res, (r-l+1))
        }
        return res
    }
}
