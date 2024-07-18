class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:
        bulk = False
        hefy = False
        if mass >= 100:
            hefy = True
        if length >= 10000 or width >= 10000 or height >= 10000 or length*width*height>=1000000000:
            bulk = True
        case = {
            (True, True): "Both",
            (True, False): "Bulky",
            (False, True): "Heavy",
            (False, False): "Neither"
        }
        return case[(bulk, hefy)]
    
# there isn't switch cases in python. but can create a dictionary to mimic that