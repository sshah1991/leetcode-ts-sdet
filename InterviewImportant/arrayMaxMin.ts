/**
 * 2. Find Minimum and Maximum Values in an Array
 * 
 * Given an array of integers nums, find and return both the minimum 
 * and maximum elements in the array.
 * 
 * Example 1:
 * Input: nums = [5, 2, 9, 1]
 * Output: { min: 1, max: 9 }
 * 
 * Example 2:
 * Input: nums = [-3, 0, 7, -8, 12]
 * Output: { min: -8, max: 12 }
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 */

function findMinMax(input:number[]):{min:number;max:number}{

    let min=input[0]
    let max=input[0]

    for(let i=1;i<input.length;i++){
        if(input[i]<min){
            min=input[i]
        }else if(input[i]>max){
            max=input[i]
        }
    }
    return {min,max}

}
console.log(findMinMax([5, 2, 9, 1]));        // { min: 1, max: 9 }
console.log(findMinMax([-3, 0, 7, -8, 12]));  // { min: -8, max: 12 }


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find both the smallest AND largest value in an unsorted array in a single pass.
 * Return them together as an object { min, max }.
 * You cannot sort first (that would be O(n log n)) — the goal is O(n) with one scan.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is the LINEAR SCAN with RUNNING EXTREMES pattern.
 * Whenever a problem asks for min/max (or both) without sorting, use two tracking variables:
 * - Initialize both min and max to the FIRST element (not 0 or Infinity, to handle negatives).
 * - For each subsequent element, update min if it's smaller, or max if it's larger.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = [-3, 0, 7, -8, 12]
 * Start: min=-3, max=-3
 * i=1, val=0:  0 > -3 → max=0       → min=-3, max=0
 * i=2, val=7:  7 > 0  → max=7       → min=-3, max=7
 * i=3, val=-8: -8 < -3 → min=-8     → min=-8, max=7
 * i=4, val=12: 12 > 7 → max=12      → min=-8, max=12
 * Return { min: -8, max: 12 } ✅
 *
 * INTERVIEW TIPS:
 * - Always initialize min and max to input[0], NOT to 0 — arrays with all-negative numbers
 *   would break if you initialize max to 0.
 * - The else-if means each element only triggers ONE comparison branch per iteration.
 *   (An element can't be both a new min AND a new max simultaneously.)
 * - Single-element array: loop starts at i=1 (never runs), returns { min: input[0], max: input[0] }.
 * - Built-in alternative: Math.min(...input) and Math.max(...input) work for small arrays,
 *   but can cause stack overflow for very large arrays due to spread operator limits.
 * - Mention: this is essentially one pass of a selection algorithm.
 *
 * Time Complexity:  O(n) — single pass through the array.
 * Space Complexity: O(1) — only two variables (min, max) are tracked.
 */


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find both the smallest AND largest value in an unsorted array in a single pass.
 * Return them together as an object { min, max }.
 * You cannot sort first (that would be O(n log n)) — the goal is O(n) with one scan.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is the LINEAR SCAN with RUNNING EXTREMES pattern.
 * Whenever a problem asks for min/max (or both) without sorting, use two tracking variables:
 * - Initialize both min and max to the FIRST element (not 0 or Infinity, to handle negatives).
 * - For each subsequent element, update min if it's smaller, or max if it's larger.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = [-3, 0, 7, -8, 12]
 * Start: min=-3, max=-3
 * i=1, val=0:  0 > -3 → max=0       → min=-3, max=0
 * i=2, val=7:  7 > 0  → max=7       → min=-3, max=7
 * i=3, val=-8: -8 < -3 → min=-8     → min=-8, max=7
 * i=4, val=12: 12 > 7 → max=12      → min=-8, max=12
 * Return { min: -8, max: 12 } ✅
 *
 * INTERVIEW TIPS:
 * - Always initialize min and max to input[0], NOT to 0 — arrays with all-negative numbers
 *   would break if you initialize max to 0.
 * - The else-if means each element only triggers ONE comparison branch per iteration.
 *   (An element can't be both a new min AND a new max simultaneously.)
 * - Single-element array: loop starts at i=1 (never runs), returns { min: input[0], max: input[0] }.
 * - Built-in alternative: Math.min(...input) and Math.max(...input) work for small arrays,
 *   but can cause stack overflow for very large arrays due to spread operator limits.
 * - Mention: this is essentially one pass of a selection algorithm.
 *
 * Time Complexity:  O(n) — single pass through the array.
 * Space Complexity: O(1) — only two variables (min, max) are tracked.
 */
console.log(findMinMax([-3, 0, 7, -8, 12]));  // { min: -8, max: 12 }
