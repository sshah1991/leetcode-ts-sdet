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