class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        ans = [[]]
        for n in nums:
            new = []
            for l in ans:
                new.append(l+[n])

            ans.extend(new)
        return ans
