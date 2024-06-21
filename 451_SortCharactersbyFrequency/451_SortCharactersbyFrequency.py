class Solution:
    def frequencySort(self, s: str) -> str:
        cache = {}
        for letter in s:
            # python's version of a tertiary operator
            cache[letter] = cache[letter] + 1 if letter in cache else 1
            # array being sorted, anonymous function being applied, sorts the number in descending order
        vals = sorted(cache.keys(), key=lambda x: cache[x], reverse=True)
        ans = ''.join(char * cache[char] for char in vals)
    
        return ans