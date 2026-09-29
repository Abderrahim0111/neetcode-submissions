class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const need = new Map()
        for(const c of t){
            need.set(c, (need.get(c) || 0) + 1)
        }
        const needCount = need.size
        let haveCount = 0
        const window = new Map()
        let l=0
        let resLength = Infinity
        let res = []
        for(let r=0; r<s.length; r++){
            window.set(s[r], (window.get(s[r]) || 0) + 1)
            if(window.get(s[r]) === need.get(s[r])){
                haveCount++
            }
            while(haveCount === needCount){
                if(r-l+1 < resLength){
                    resLength = r-l+1
                    res = [l, r]
                }
                window.set(s[l], window.get(s[l]) - 1)
                if(window.get(s[l]) < need.get(s[l])){
                    haveCount--
                }
                l++
            }
        }
        return s.slice(res[0], res[1]+1)
    }
}
