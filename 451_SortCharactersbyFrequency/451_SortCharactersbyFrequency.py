class Solution:
    def frequencySort(self, s: str) -> str:
        cache = {}
        for letter in s:
            cache[letter] = cache[letter] + 1 if letter in cache else 1
        vals = sorted(cache.keys(), key=lambda x: cache[x], reverse=True)
        ans = ''.join(char * cache[char] for char in vals)
    
        return ans