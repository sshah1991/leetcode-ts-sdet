/**
 * Problem: Move Zeroes (LeetCode 283)
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note: You must do this in-place without making a copy of the array.
 *
 * Example 1:
 *   Input: nums = [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]
 *
 * Example 2:
 *   Input: nums = [0]
 *   Output: [0]
 *
 * Constraints:
 *   - 1 <= nums.length <= 10^4
 *   - -2^31 <= nums[i] <= 2^31 - 1
 *
 */

function moveZeroes(nums: number[]): void {

    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== k) {
                let temp = nums[i]
                nums[i] = nums[k]
                nums[k] = temp
            }
            k++
        }
    }
    console.log(nums)

}
moveZeroes([0, 1, 0, 3, 12]);    // [1, 3, 12, 0, 0] — Standard mixed
moveZeroes([0]);                // [0]             — Single zero
moveZeroes([1, 2, 3]);          // [1, 2, 3]       — No zeroes
moveZeroes([0, 0, 1]);          // [1, 0, 0]       — Leading zeroes
moveZeroes([-1, 0, 2, -3, 0]);  // [-1, 2, -3, 0, 0] — Negative numbers

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Move all zeros to the end of the array while preserving the relative order
 * of non-zero elements. This must be done in-place (no copy of the array).
 * Example: [0,1,0,3,12] → [1,3,12,0,0]
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TWO POINTER (slow-fast) in-place partitioning problem.
 * - k (slow pointer): points to the next slot where a non-zero value should go.
 * - i (fast pointer): scans the entire array.
 * When i finds a non-zero value, swap it with position k (if i != k to avoid useless swaps),
 * then advance k.
 * After the loop, all non-zeros are compacted to the front, and all zeros have been swapped to the end.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums = [0, 1, 0, 3, 12], k = 0
 * i=0: nums[0]=0  → skip (zero)
 * i=1: nums[1]=1  → 1!=k(0), swap nums[1]↔nums[0] → [1,0,0,3,12], k=1
 * i=2: nums[2]=0  → skip
 * i=3: nums[3]=3  → 3!=k(1), swap nums[3]↔nums[1] → [1,3,0,0,12], k=2
 * i=4: nums[4]=12 → 4!=k(2), swap nums[4]↔nums[2] → [1,3,12,0,0], k=3
 * Result: [1, 3, 12, 0, 0]
 *
 * INTERVIEW TIPS:
 * - The check (i !== k) before swapping avoids unnecessary swaps when there are no zeros yet.
 * - A simpler but slightly less efficient approach: overwrite k with non-zeros first,
 *   then fill positions [k..end] with zeros. Fewer swaps, but two passes.
 * - The swap approach does it in one pass.
 * - This is a common in-place partition pattern — also seen in Quick Sort's partition step.
 * - Mention that the relative order of non-zeros is maintained because i always moves forward
 *   and we only swap forward (never backward).
 *
 * Time Complexity:  O(n) — single pass through the array.
 * Space Complexity: O(1) — in-place swapping, no extra data structures.
 */
