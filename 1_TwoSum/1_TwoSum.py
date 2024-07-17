class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}
        for index, num in enumerate(nums):
            complement = target - num
            if complement in num_dict:
                return [num_dict[complement], index]
            num_dict[num] = index
        return []
    

    class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_dict = {}
        n = len(nums)
        for i in range(n):
            complement = target - nums[i]
            if complement in num_dict:
                return [num_dict[complement], i]
            num_dict[nums[i]] = i   
            
        return []