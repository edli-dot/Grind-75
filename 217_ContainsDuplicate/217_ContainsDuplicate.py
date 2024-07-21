class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        cache = defaultdict(int)
        for num in nums:
            if cache[num] == 1:
                return True
            else:
                cache[num] += 1