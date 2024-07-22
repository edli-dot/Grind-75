class Solution:
    def checkRecord(self, s: str) -> bool:
        absentDays = 0
        lateStatus = 0
        for i in range(len(s)):
            if s[i] == 'L':
                lateStatus += 1
                if lateStatus == 3:
                    return False
            elif s[i]  == 'A':
                absentDays += 1
                lateStatus = 0
                if absentDays > 1:
                    return False
            else:
                lateStatus = 0
        return True
            


class Solution:
    def checkRecord(self, s: str) -> bool:
        c = Counter(s)
        if c['A'] > 1 or s.find('LLL') != -1:
            return False
        return True
    """
    there is a python subclass Counter()
    that creates a hashmap counting the frequency of the elements 
    """