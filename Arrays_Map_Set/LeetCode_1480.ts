/**
 * 1480. Running Sum of 1d Array
 *
 * Given an array nums, we define a running sum of the array as:
 * runningSum[i] = sum(nums[0]...nums[i]).
 *
 * Return the running sum of nums.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 *
 * Example 2:
 * Input: nums = [1,1,1,1]
 * Output: [1,2,3,4]
 *
 * Example 3:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 * Constraints:
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 */

function runningSum(input:number[]){
    let myArray:number[] =[]
    let counter=0
    for(let i=0;i<input.length;i++){
        // Add the current value to the sum of all previous values.
        counter=counter+input[i]
        // The updated total is the running sum for this index.
        myArray.push(counter)
    }
    return myArray
}
console.log(runningSum([1,2,3,4]))
console.log(runningSum([1,1,1,1]))
console.log(runningSum([3,1,2,10,1]))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * A running sum means each element in the output is the sum of ALL elements
 * from the start up to that index. It is like a cumulative total that grows
 * as you move through the array.
 * runningSum[i] = nums[0] + nums[1] + ... + nums[i]
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a PREFIX SUM pattern — one of the most fundamental array patterns.
 * Recognise it when: "output[i] depends on all elements before it (inclusive)."
 * The trick is to carry a running counter and update it at each step instead
 * of recalculating the sum from scratch every time (which would be O(n²)).
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = [3, 1, 2, 10, 1], counter starts at 0
 * - i=0: counter = 0+3  = 3  → append 3
 * - i=1: counter = 3+1  = 4  → append 4
 * - i=2: counter = 4+2  = 6  → append 6
 * - i=3: counter = 6+10 = 16 → append 16
 * - i=4: counter = 16+1 = 17 → append 17
 * Result: [3, 4, 6, 16, 17]
 *
 * INTERVIEW TIPS:
 * - This is often a warm-up or prerequisite for harder problems (e.g., subarray sum, range queries).
 * - Mention that you could also do it in-place: nums[i] += nums[i-1], saving extra array space.
 * - It is also the foundation for difference arrays and Kadane's algorithm concepts.
 * - Edge case: single-element array → output is the same single-element array.
 *
 * Time Complexity:  O(n) — single pass through the array.
 * Space Complexity: O(n) — the result array holds one value per input element.
 */


