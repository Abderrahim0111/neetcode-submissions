class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const text = s.toLowerCase().replace(/[^a-z0-9]+/g ,"")
        return text === text.split("").reverse().join("")
    }
}
