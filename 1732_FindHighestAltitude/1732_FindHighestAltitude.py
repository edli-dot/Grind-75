class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        curr = 0
        highest = 0
        for gains in gain:
            curr += gains
            if curr > highest:
                highest = curr
        return highest
    


class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
       return max(accumulate(gain, initial = 0))
    

    """
    accumulate is part of python itertools module
    
    parameters are (something iterable, optional function but addition by default)
    """