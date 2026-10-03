class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res = 0
        let l = 0
        let r = 1
        while(r<prices.length){
            const profit = prices[r] - prices[l]
            if(profit < 0){
                l = r
            }else{
                res = Math.max(res, profit)
            }
            r++
        }
        return res
    }
}
