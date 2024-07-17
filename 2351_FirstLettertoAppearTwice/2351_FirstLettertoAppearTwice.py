class Solution:
    def repeatedCharacter(self, s: str) -> str:
        cache = {}
        for i in range(len(s)):
            #can't perform cache[s[i]] in the case it doesnt exist
            if s[i] in cache:
                return s[i]
            cache[s[i]] = True
    

#can't perform if cache[s[i]]   unsafe as it might not exist

#alternative
            
class Solution:
    def repeatedCharacter(self, s: str) -> str:
        cache = {}
        for char in s:
            if cache.get(char):
                return char
            cache[char] = True
 # get default value is None so won't break code