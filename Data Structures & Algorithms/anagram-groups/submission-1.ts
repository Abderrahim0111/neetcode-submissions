class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // function isAnagram(str1: string, str2: string): boolean {
        //     return str1.split("").sort().join() === str2.split("").sort().join()
        // }
        // let result: string[][] = []
        // for(let i=0; i<strs.length; i++){
        //     if(result.flat().includes(strs[i])) continue
        //     let anagrams:string[] = [strs[i]]
        //     for(let j=i+1; j<strs.length; j++){
        //         if(isAnagram(strs[i], strs[j])){
        //             anagrams.push(strs[j])
        //         }
        //     }
        //     result.push(anagrams)
        // }
        // return result
        const map = new Map<string, string[]>()
        for(const str of strs){
            const key = str.split("").sort().join()
            if(!map.has(key)){
                map.set(key, [])
            }
            map.get(key).push(str)
        }
        return Array.from(map.values())
    }
}
