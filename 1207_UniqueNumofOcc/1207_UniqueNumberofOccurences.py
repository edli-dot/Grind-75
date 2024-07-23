class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count = Counter(arr)
        myset = {count[x] for x in count}
        return len(myset) == len(count)


"""
{expression for item in iterable if condtion}  - set comprehension
expresson = value added to set
item in iterable 
if condition - filters whihc item to include

conditionals to add unique values into a set

for example can find the common element in two lists
"""