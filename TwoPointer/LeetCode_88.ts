/**
 * ============================================================================
 * Problem: 88. Merge Sorted Array (LeetCode)
 * Difficulty: Easy
 * ============================================================================
 * 
 * Description:
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2
 * respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be
 * stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged, and the
 * last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 * Examples:
 * - Example 1:
 *     Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
 *     Output: [1, 2, 2, 3, 5, 6]
 *     Explanation: The arrays we are merging are [1, 2, 3] and [2, 5, 6].
 *                  The result of the merge is [1, 2, 2, 3, 5, 6].
 * 
 * - Example 2:
 *     Input: nums1 = [1], m = 1, nums2 = [], n = 0
 *     Output: [1]
 *     Explanation: The arrays we are merging are [1] and [].
 *                  The result of the merge is [1].
 * 
 * - Example 3:
 *     Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 *     Output: [1]
 *     Explanation: The arrays we are merging are [] and [1].
 *                  The result of the merge is [1].
 *                  Note that because m = 0, there are no elements in nums1.
 *                  The 0 is only there to ensure the merge result can fit in nums1.
 * 
 * Constraints:
 * - nums1.length == m + n
 * - nums2.length == n
 * - 0 <= m, n <= 200
 * - 1 <= m + n <= 200
 * - -10^9 <= nums1[i], nums2[j] <= 10^9
 * 
 * Follow up: Can you come up with an algorithm that runs in O(m + n) time?
 * ============================================================================
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  
    let p=m+n-1
    let p1=m-1
    let p2=n-1

    while(p2>=0){
        if(p1>=0 && nums1[p1]>=nums2[p2]){
            nums1[p]=nums1[p1]
            p1--
        }else{
            nums1[p]=nums2[p2]
            p2--   
        }
        p--
    }
    console.log(nums1)
};

// Case 1: Standard merge
const a1 = [1, 2, 3, 0, 0, 0];
merge(a1, 3, [2, 5, 6], 3);

// Case 2: nums2 is empty
const a2 = [1];
merge(a2, 1, [], 0);

// Case 3: nums1 is empty (only has buffer zero)
const a3 = [0];
merge(a3, 0, [1], 1);

// Case 4: nums2 elements are all smaller
const a4 = [4, 5, 6, 0, 0, 0];
merge(a4, 3, [1, 2, 3], 3);

// Case 5: Duplicates and negatives
const a5 = [-2, 0, 2, 0, 0, 0];
merge(a5, 3, [-3, 0, 5], 3);

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Merge two sorted arrays (nums1 and nums2) into nums1 in-place.
 * nums1 has extra buffer space at the end (filled with 0s) to hold nums2's elements.
 * m = number of real elements in nums1, n = number of elements in nums2.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a THREE POINTER merge from the END pattern.
 * The naive approach (merge from front) causes overwrites of unprocessed elements in nums1.
 * The key insight: merge from the BACK — start filling from position m+n-1 downward.
 * - p1 points to the last real element in nums1 (index m-1).
 * - p2 points to the last element in nums2 (index n-1).
 * - p points to the last slot in nums1 (index m+n-1).
 * At each step, place the LARGER of nums1[p1] and nums2[p2] at position p, then advance that pointer.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums1 = [1,2,3,0,0,0], m=3, nums2 = [2,5,6], n=3
 * p=5, p1=2, p2=2
 * - nums1[2]=3 vs nums2[2]=6 → 6 > 3 → nums1[5]=6, p2=1, p=4
 * - nums1[2]=3 vs nums2[1]=5 → 5 > 3 → nums1[4]=5, p2=0, p=3
 * - nums1[2]=3 vs nums2[0]=2 → 3 > 2 → nums1[3]=3, p1=1, p=2
 * - nums1[1]=2 vs nums2[0]=2 → equal → take nums2[0]=2 → nums1[2]=2, p2=-1, p=1
 * - p2 < 0 → loop ends (nums1's remaining elements are already in place)
 * Result: [1,2,2,3,5,6]
 *
 * INTERVIEW TIPS:
 * - The core insight to mention first: "merge from the back to avoid overwriting unread elements."
 *   This is the most elegant part of the solution.
 * - The while loop only runs while p2 >= 0 — if nums2 is exhausted, nums1's elements are already in place.
 * - When p1 < 0 (nums1 is exhausted), we copy remaining nums2 elements (the else branch handles this).
 * - Edge case: nums2 is empty (n=0) → loop never runs, nums1 is unchanged.
 * - Edge case: all nums2 elements are smaller than nums1 → nums2 fills the tail; nums1 stays.
 * - This is a classic merge step from Merge Sort — mention that connection.
 *
 * Time Complexity:  O(m + n) — each element from both arrays is placed exactly once.
 * Space Complexity: O(1)     — in-place, no extra arrays used.
 */
