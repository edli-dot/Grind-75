class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = 0
        for num in range(len(nums)):
            if nums[num] != val:
                nums[count] = nums[num]
                count += 1
        return count