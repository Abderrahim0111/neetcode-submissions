class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res=0
        let l=0
        let r=1
        while(r<prices.length){
            const profit = prices[r] - prices[l]
            if(prices[l] < prices[r]){
                res = Math.max(res, profit)
            }else{
                l=r
            }
            r++
        }
        return res
    }
}
