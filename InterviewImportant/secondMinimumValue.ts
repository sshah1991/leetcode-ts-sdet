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

function findSecondMin(input:number[]):number|null{

    let firstMin=Infinity
    let secondMin=Infinity

    for(let i=0;i<input.length;i++){
        let currentNumber=input[i]
        if(currentNumber<firstMin){
            secondMin=firstMin
            firstMin=currentNumber
        }else if(currentNumber>firstMin && currentNumber<secondMin){
            secondMin=currentNumber
        }
    }
    return secondMin === Infinity ? null : secondMin;
}

console.log(findSecondMin([5, 2, 9, 1]));       // 2 (min is 1, second min is 2)
console.log(findSecondMin([-3, 0, 7, -8, 12])); // -3 (min is -8, second min is -3)
console.log(findSecondMin([2, 2, 2]));          // null (no distinct second min)
console.log(findSecondMin([10, 5]));            // 10


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find the second SMALLEST DISTINCT value in the array.
 * Key constraints:
 * - "Distinct" means the second min must be strictly greater than the minimum.
 *   [2, 2, 2] has no second distinct min → return null.
 * - Duplicates of the minimum don't count as the second minimum.
 *   [1, 1, 3] → min=1, second min=3 (not 1 again).
 * If no second distinct min exists, return null.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TWO-VARIABLE TRACKING linear scan pattern.
 * Keep two running variables: firstMin and secondMin (initialized to Infinity).
 * - If current < firstMin → the old firstMin becomes the new secondMin, current becomes firstMin.
 * - Else if current > firstMin AND current < secondMin → current becomes the new secondMin.
 * The second condition ensures we only accept values strictly between the two minimums.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = [10, -2, 4, -2, 0], firstMin=Infinity, secondMin=Infinity
 * i=0, val=10:  10 < Infinity     → secondMin=Infinity, firstMin=10  → (10, ∞)
 * i=1, val=-2:  -2 < 10          → secondMin=10, firstMin=-2         → (-2, 10)
 * i=2, val=4:   4 > -2 && 4 < 10 → secondMin=4                      → (-2, 4)
 * i=3, val=-2:  -2 == firstMin   → neither condition → skip          → (-2, 4)
 * i=4, val=0:   0 > -2 && 0 < 4  → secondMin=0                      → (-2, 0)
 * secondMin=0, not Infinity → return 0 ✅
 *
 * input = [2, 2, 2], firstMin=Infinity, secondMin=Infinity
 * i=0: firstMin=2, secondMin=Infinity
 * i=1: 2 == firstMin, 2 is NOT > firstMin → skip
 * i=2: same → skip
 * secondMin is still Infinity → return null ✅
 *
 * INTERVIEW TIPS:
 * - Initializing to Infinity (not input[0]) is safe here because we handle the first element
 *   in the same loop — it naturally falls into the `< firstMin` branch.
 * - The `currentNumber > firstMin` condition in the else-if is what enforces DISTINCTNESS —
 *   it prevents duplicates of the minimum from being picked as the second min.
 * - Alternative approach: convert to a Set (deduplicate), sort, take index 1.
 *   Simpler to explain but O(n log n) time. The two-variable scan is O(n).
 * - Edge case: two-element array [10, 5] → firstMin=5, secondMin=10 → return 10.
 *   Single element → secondMin stays Infinity → return null.
 *
 * Time Complexity:  O(n) — single pass through the array.
 * Space Complexity: O(1) — only two tracking variables used.
 */


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find the second SMALLEST DISTINCT value in the array.
 * Key constraints:
 * - "Distinct" means the second min must be strictly greater than the minimum.
 *   [2, 2, 2] has no second distinct min → return null.
 * - Duplicates of the minimum don't count as the second minimum.
 *   [1, 1, 3] → min=1, second min=3 (not 1 again).
 * If no second distinct min exists, return null.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TWO-VARIABLE TRACKING linear scan pattern.
 * Keep two running variables: firstMin and secondMin (initialized to Infinity).
 * - If current < firstMin → the old firstMin becomes the new secondMin, current becomes firstMin.
 * - Else if current > firstMin AND current < secondMin → current becomes the new secondMin.
 * The second condition ensures we only accept values strictly between the two minimums.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = [10, -2, 4, -2, 0], firstMin=Infinity, secondMin=Infinity
 * i=0, val=10:  10 < Infinity     → secondMin=Infinity, firstMin=10  → (10, ∞)
 * i=1, val=-2:  -2 < 10          → secondMin=10, firstMin=-2         → (-2, 10)
 * i=2, val=4:   4 > -2 && 4 < 10 → secondMin=4                      → (-2, 4)
 * i=3, val=-2:  -2 == firstMin   → neither condition → skip          → (-2, 4)
 * i=4, val=0:   0 > -2 && 0 < 4  → secondMin=0                      → (-2, 0)
 * secondMin=0, not Infinity → return 0 ✅
 *
 * input = [2, 2, 2], firstMin=Infinity, secondMin=Infinity
 * i=0: firstMin=2, secondMin=Infinity
 * i=1: 2 == firstMin, 2 is NOT > firstMin → skip
 * i=2: same → skip
 * secondMin is still Infinity → return null ✅
 *
 * INTERVIEW TIPS:
 * - Initializing to Infinity (not input[0]) is safe here because we handle the first element
 *   in the same loop — it naturally falls into the `< firstMin` branch.
 * - The `currentNumber > firstMin` condition in the else-if is what enforces DISTINCTNESS —
 *   it prevents duplicates of the minimum from being picked as the second min.
 * - Alternative approach: convert to a Set (deduplicate), sort, take index 1.
 *   Simpler to explain but O(n log n) time. The two-variable scan is O(n).
 * - Edge case: two-element array [10, 5] → firstMin=5, secondMin=10 → return 10.
 *   Single element → secondMin stays Infinity → return null.
 *
 * Time Complexity:  O(n) — single pass through the array.
 * Space Complexity: O(1) — only two tracking variables used.
 */
console.log(findSecondMin([10, 5]));            // 10
