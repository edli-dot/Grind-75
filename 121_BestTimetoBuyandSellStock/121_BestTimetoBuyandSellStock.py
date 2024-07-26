class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buyDate = prices[0]
        profit = 0
        for i in range(1, len(prices)):
            if prices[i] < buyDate:
                buyDate = prices[i]
            else:
                profit = max(profit, prices[i] - buyDate)
        return profit