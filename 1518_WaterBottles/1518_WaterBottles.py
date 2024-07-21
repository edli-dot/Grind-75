class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        ans = 0
        empty = 0
        while numBottles > 0:
            ans += numBottles
            newBottles = math.floor((numBottles + empty)/ numExchange)
            empty = (numBottles + empty) % numExchange
            numBottles = newBottles
        return ans