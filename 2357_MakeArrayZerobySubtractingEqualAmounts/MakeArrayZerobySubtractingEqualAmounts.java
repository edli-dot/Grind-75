import java.util.HashSet;
import java.util.Set;

class Solution {
    public int minimumOperations(int[] nums) {
        // unable to directly intialize a set with the values of the array
        Set<Integer> h = new HashSet<>();
        // add all elements from nums to the set
        for (int num : nums) {
            h.add(num);
        }
        // remove zero if it exists
        h.remove(0);
        return h.size();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {1, 5, 0, 3, 0, 3};
        System.out.println(solution.minimumOperations(nums));  // Output: 3
    }
}


/**
 * can use a for each loop like above
 * 
 * for loop w/ a counter
 * 
 * 
 */