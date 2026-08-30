class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const text = s.toLowerCase().replace(/[^a-z0-9]+/g , "")
        let l = 0
        let r = text.length - 1
        for(let i=0; i<text.length; i++){
            if(text[l] !== text[r]) return false
            l++
            r--
        }
        return true
    }
}
