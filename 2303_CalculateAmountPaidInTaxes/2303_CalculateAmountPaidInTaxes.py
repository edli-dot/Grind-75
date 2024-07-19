class Solution:
    def calculateTax(self, brackets: List[List[int]], income: int) -> float:
        taxesPaid = 0
        lastbrackets = 0
        for i in range(len(brackets)):
            #destructure in python
            x, y = brackets[i]
            if income >= x:
                taxesPaid += (x - lastbrackets)*y/100
                lastbrackets = x
            else:
                taxesPaid += (income - lastbrackets)*y/100
                break
        return taxesPaid
