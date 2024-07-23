class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        cache = defaultdict(int)
        left = 0
        maxCount = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                cache[1] += 1
            else: cache[0] += 1
            if cache[0] > k:
                while cache[0] > k:
                    cache[nums[left]] -= 1
                    left += 1
            elif maxCount < cache[1] + cache[0]:
                maxCount = cache[1] + cache[0]
        return maxCount 
