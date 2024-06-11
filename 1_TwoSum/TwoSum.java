import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
          HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            map.put(nums[i], i);
        }
    return null; //needed in case of no match found
    }

    public static void main(String[] args) {
        // Example usage
        Solution solution = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 26;
        int[] result = solution.twoSum(nums, target); //call upon class Solution and its method twoSum; passing in two arguments
        
        // Print the result
        System.out.println("Indices: " + result[0] + ", " + result[1]);
    }

}