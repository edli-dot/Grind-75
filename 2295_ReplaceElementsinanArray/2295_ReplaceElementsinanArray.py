class Solution:
    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
        cache = defaultdict(int)
        for num in range(len(nums)):
            cache[nums[num]] = num
        for x,y in operations:   
            nums[cache[x]] = y
            cache[y] = cache[x]
        return nums
"""
another instance of default dictionary int to provide 
instead of iterating and deconstructing in the loop, you can deconstructure in the actual for loop
"""