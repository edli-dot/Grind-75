class Solution:
    def findDifference(self, nums1: List[int], nums2: List[int]) -> List[List[int]]:
        ans = []
        a = [set(nums1) - set(nums2)]
        b = [set(nums2) - set(nums1)]
        ans.append(a)
        ans.append(b)
        return ans
    #can also just return [set(nums1) - set(nums2), set(num2) - set(nums1)]
    #utilizing sets in python
    