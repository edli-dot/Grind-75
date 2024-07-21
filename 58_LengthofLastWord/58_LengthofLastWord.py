class Solution:
    def lengthOfLastWord(self, s: str) -> int:
       return len(s.strip().split(" ")[-1]) 

"""
indexing w/ negative numbers indicate positons from the end

"""