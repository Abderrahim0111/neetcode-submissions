class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        const stack = []
        for(const c of s){
            if(map[c]){
                if(stack[stack.length - 1] === map[c]){
                    stack.pop()
                }else{
                    return false
                }
            }else{
                stack.push(c)
            }
        }
        return stack.length === 0
    }
}
