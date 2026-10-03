class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const window = new Map()
        const need = new Map()
        let haveCount = 0
        let needCount
        let l = 0
        let resLength = Infinity
        let res = []
        for(let i=0; i<t.length; i++){
            need.set(t[i], (need.get(t[i]) || 0) + 1)
        }
        needCount = need.size
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
