class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left = 0
        right = len(numbers) - 1
        while left < right:
            compare = numbers[left] + numbers[right]
            if target < compare:
                right -= 1
            elif target > compare:
                left += 1
            else:
                return [left + 1, right + 1]
    
            
