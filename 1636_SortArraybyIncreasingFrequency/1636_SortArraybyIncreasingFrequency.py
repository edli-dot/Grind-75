class Solution:
    def frequencySort(self, nums: List[int]) -> List[int]:
        count = Counter(nums)
        return sorted(nums, key = lambda x: (count[x], -x))

"""
lambda function - anonymous function
sorts by count[x] frequency first
    if frequencies match, go by descending order

    nums = [1,3,2,1,1]
    3 : (1, -3)
    2: (1, -2)
    1 : (3, -1)


"""