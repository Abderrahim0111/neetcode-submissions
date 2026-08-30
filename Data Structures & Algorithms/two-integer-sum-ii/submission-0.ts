class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let start = 0
        let end = numbers.length - 1

        while(start < end){
            const sum = numbers[start] + numbers[end]
            if(sum > target){
                end--
            }else if(sum < target){
                start++
            }else{
                return [start+1, end+1]
            }
        }
    }
}
