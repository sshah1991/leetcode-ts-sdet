/**
 * Find Second Minimum Value in an Array
 * 
 * Given an array of integers nums, find and return the second smallest 
 * distinct value in the array. If no distinct second minimum exists 
 * (e.g., fewer than two elements, or all elements are identical), 
 * return null or -1 depending on the requirement.
 * 
 * Example 1:
 * Input: nums = [5, 2, 9, 1]
 * Output: 2
 * Explanation: The minimum is 1, and the second minimum is 2.
 * 
 * Example 2:
 * Input: nums = [1, 1, 1, 1]
 * Output: null
 * Explanation: All elements are identical; no second distinct minimum exists.
 * 
 * Example 3:
 * Input: nums = [10, -2, 4, -2, 0]
 * Output: 0
 * Explanation: Distinct sorted values are [-2, 0, 4, 10]; the second minimum is 0.
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */