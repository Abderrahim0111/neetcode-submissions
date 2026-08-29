class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = {}
        for(const str of strs){
            const key = str.split("").sort().toString()
            if(!map[key]){
                map[key] = []
            }
            map[key].push(str)
        }
        return Object.values(map)
    }
}
