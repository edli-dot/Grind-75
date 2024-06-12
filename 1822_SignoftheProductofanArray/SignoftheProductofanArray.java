class Solution{
    public int SignoftheProductofanArray(int[] x){
        int sign = 1;
        for (int i = 0; i < x.length; i++){
            if (x[i] == 0) return 0;
            else if (x[i] < 0) sign *= -1;
        }
        return sign;
    }
    

    public static void main(String[] args){
        Solution solution = new Solution();
        int[] nums = {-1, -5, -3, 2, 4, 10};
        int result = solution.SignoftheProductofanArray(nums);

        //print result
        System.out.println("Sign of Product of Array is " + result);


    }




}