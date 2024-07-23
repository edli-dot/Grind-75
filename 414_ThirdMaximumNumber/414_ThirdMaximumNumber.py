class Solution:
       def thirdMax(self, nums: List[int]) -> int:
        first = second = third = -math.inf
        for num in nums:
            if num > third and num != second and num != first:
                first, second, third = second, third, num
            elif num > second and num != third and num != first:
                first, second = second, num
            elif num > first and num != second and num != third:
                first = num
        return first if first != -math.inf else third
       
       """
       
       getting this done in o(n)
       """