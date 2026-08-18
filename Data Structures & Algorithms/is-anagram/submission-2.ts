class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        return s.split("").sort().toString() === t.split("").sort().toString()
    }
}
