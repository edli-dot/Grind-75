class Solution:
    def bestHand(self, ranks: List[int], suits: List[str]) -> str:
        # all with a condition
        if all([x == suits[0] for x in suits]): 
            return "Flush"
        #if len(set(suits)) == 1:
        #return "Flush"
        #another way to check
        cache = {}
        pairStatus = False
        for rank in ranks:
            cache[rank] = cache.get(rank, 0) + 1
            if cache[rank] == 3:
                return "Three of a Kind"
            elif cache[rank] == 2:
                pairStatus = True
        if pairStatus:
            return "Pair"
            
        return "High Card"