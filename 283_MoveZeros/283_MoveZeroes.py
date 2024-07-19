class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        if len(nums) == 1: return nums
        non_zero = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[non_zero] = nums[i]
                non_zero += 1
        for i in range(non_zero, len(nums)):
            nums[i] = 0
        return nums
        """
        Do not return anything, modify nums in-place instead.
        """
        