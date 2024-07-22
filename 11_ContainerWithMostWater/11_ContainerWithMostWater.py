class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        area = 0
        while left < right:
            xAxis = right - left
            volume = xAxis*(min(height[left], height[right]))
            if height[left] > height[right]:
                right -= 1
            else: left +=1
            area = max(area,volume)
        return area
                