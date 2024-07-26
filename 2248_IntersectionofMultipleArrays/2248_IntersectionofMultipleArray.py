class Solution:
    def intersection(self, nums: List[List[int]]) -> List[int]:
        cache = defaultdict(int)
        for i in range(len(nums)):
            for num in nums[i]:
                cache[num] += 1
        ans = []
        for num in cache:
            if cache[num] == len(nums):
                ans.append(num)
        ans.sort()
        return ans
    
    """
    linear time complexity
    o(2n) == o(n)
    hashmap
    """