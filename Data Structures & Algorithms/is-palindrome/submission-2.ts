class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const text = s.toLowerCase().replace(/[^a-z0-9]+/g ,"")
        console.log(text)
        console.log(text.split("").reverse().join(""))
        return text === text.split("").reverse().join("")
    }
}
