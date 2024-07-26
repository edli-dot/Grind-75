class Solution:
    def findIntersectionValues(self, nums1: List[int], nums2: List[int]) -> List[int]:
        set_nums1 = set(nums1)
        set_nums2 = set(nums2)
        count1 = sum(1 for item in nums1 if item in set_nums2)
        count2 = sum(1 for item in nums2 if item in set_nums1)
        return [count1, count2]
        
        """
        sets still have a look up time of o(1)
        """