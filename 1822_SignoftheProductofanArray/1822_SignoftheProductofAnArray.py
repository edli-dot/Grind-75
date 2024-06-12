def arraySign(nums):
    num = 1
    if 0 in nums:
            return 0
    for i in range(len(nums)):
          if nums[i] <0:
                num *= -1
    return num


print(arraySign([-1,3,1,2,3,4,6,-3,-2]))