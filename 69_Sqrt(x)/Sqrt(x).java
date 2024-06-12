class Solution{
    public int Sqrt(int x){
    //explicit type declarations. no optional
    if (x < 0){
        throw new IllegalArgumentException("Input should not be negative");
    }
    //quick exit cases 
    int l = 0;
    int r = x;
    while (l <= r){
        int mid = Math.floorDiv(l+r, 2);
        if (Math.pow(mid,2) <= x && Math.pow(mid+1,2) > x){
            return mid;
        }else if (mid * mid < x){
            l = mid + 1;
        } else r = mid - 1;
    }
    //compiler requires this return statement to ensure all paths should return a value
    //this ideally should never be reached
    return -1;
 }

    public static void main(String[] args) {
        // Example usage
        Solution solution = new Solution();
        int nums = 36;
        int result = solution.Sqrt(nums); //call upon class Solution and its method twoSum; passing in two
        
        // Print the result
        if (result != -1) {
            System.out.println("Square root of " + nums + " is " + result);
        } else {
            System.out.println("No integer square root for " + nums);
        }
    }

}
