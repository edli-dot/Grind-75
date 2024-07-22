class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:
        cache = defaultdict(int)
        for i, restaurant in enumerate(list1):
            cache[restaurant] = i
        
        lowest = float('inf')
        ans = []
    
        for i, restaurant in enumerate(list2):
            if restaurant in cache:
                total_index = cache[restaurant] + i
                if total_index < lowest:
                    lowest = total_index
                    ans = [restaurant]
                elif total_index == lowest:
                    ans.append(restaurant)
    
        return ans

        