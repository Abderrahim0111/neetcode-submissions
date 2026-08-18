class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const res = []
        for(const str of strs){
            res.push(str.length, "#", str)
        }
        return res.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = []
        let i = 0
        while(i < str.length){
            let j = i
            while(str[j] != "#"){
                j++
            }
            const length = Number(str.slice(i, j))
            i = j + 1
            res.push(str.slice(i, i + length))
            i += length
        }
        return res
    }
}
