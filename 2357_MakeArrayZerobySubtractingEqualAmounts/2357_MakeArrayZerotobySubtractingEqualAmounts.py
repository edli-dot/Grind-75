class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        cache = set(nums)
        #cache.remove will return an error if 0 is not in the set
        cache.discard(0)  # Removes 0 if it is in the set, does nothing otherwise
        return len(cache)