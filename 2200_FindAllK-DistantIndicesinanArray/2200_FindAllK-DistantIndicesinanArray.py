class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        ans = []
        pos = []
        for i in range(len(nums)):
            if nums[i] == key:
                pos.append(i)
        for i in range(len(nums)): 
            for j in range(len(pos)):
                diff = abs(i - pos[j])
                if diff <= k:
                    ans.append(i)
                    break
        return ans