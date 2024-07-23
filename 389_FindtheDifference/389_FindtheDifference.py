class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        # Count characters in both strings
        count_s = Counter(s)
        count_t = Counter(t)
        
        # Find the character with an extra count in 't'
        for char in count_t:
            if count_t[char] > count_s[char]:
                return char      