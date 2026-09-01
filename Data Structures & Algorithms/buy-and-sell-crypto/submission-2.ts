class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxP = 0
        let l=0
        let r=1
        while(r<prices.length){
            if(prices[r] > prices[l]){
                maxP = Math.max(maxP, prices[r] - prices[l])
            }else{
                l = r
            }
            r++
        }
        return maxP
    }
}
