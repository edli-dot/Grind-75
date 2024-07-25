class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        targetLocations, answers = [], []
        for i in range(len(nums)):
            if nums[i] == x:
                targetLocations.append(i)
        for i in range(len(queries)):
            if queries[i] - 1 < len(targetLocations):
                answers.append(targetLocations[queries[i] - 1])
            else: answers.append(-1)
        return answers
    



    """
     for i, num in enumerate(nums):
            if num == x: 
                arr.append(i)
 
        for q in queries:
            if len(arr) < q: ans.append(-1)
            else: ans.append(arr[q-1])

    works as well        
    """