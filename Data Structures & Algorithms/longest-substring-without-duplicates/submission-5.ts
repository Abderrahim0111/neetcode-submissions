class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set()
        let res = []
        let resLength=0
        let l=0
        for(let r=0; r<s.length; r++){
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
            set.add(s[r])
            if(r-l+1 > resLength){
                resLength = r-l+1
                res = [l,r]
            }
        }
        console.log(s.slice(res[0], res[1]+1))
        return resLength
    }
}
