class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const count1 = Array(26).fill(0)
        const count2 = Array(26).fill(0)

        for(let i=0; i<s1.length; i++){
            count1[s1.charCodeAt(i) - 97]++
            count2[s2.charCodeAt(i) - 97]++
        }

        if(count1.every((val, i) => count2[i] === val)) return true

        let l = 0
        for(let r=s1.length; r<s2.length; r++){
            count2[s2.charCodeAt(r) - 97]++
            count2[s2.charCodeAt(l) - 97]--
            l++
            if(count1.every((val, i) => count2[i] === val)) return true            
        }
        return false
    }
}
