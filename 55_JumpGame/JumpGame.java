class Solution {
    public boolean canJump(int[] nums) {
        int goal = nums.length - 1;
        for (int i = nums.length -2; i >= 0; i--){
            if (i + nums[i] >= goal){
                goal = i;
            }
         }   
    return goal == 0;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {2, 3, 1, 1, 4};
        Boolean result = solution.canJump(nums);
        System.out.println(result);
    }
}