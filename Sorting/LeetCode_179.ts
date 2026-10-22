/**
 * 179. Largest Number
 *
 * Given a list of non-negative integers nums, arrange them such that they form the largest number.
 *
 * Return the largest number as a string.
 *
 * Note: The result may be very large, so you need to return a string instead of an integer.
 *
 * Example 1:
 * Input: nums = [10,2]
 * Output: "210"
 *
 * Example 2:
 * Input: nums = [3,30,34,5,9]
 * Output: "9534330"
 *
 * Example 3:
 * Input: nums = [1]
 * Output: "1"
 *
 * Constraints:
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 10^9
 */

function largestNumber(nums: number[]): string {
    // Step 1: Convert all numbers to strings
    const numsString = nums.map(String)
    
    //Sort
    numsString.sort((a,b)=>{
        const ord1=a+b
        const ord2=b+a
        return ord2.localeCompare(ord1)
    })

    console.log(numsString)
    return numsString.join("")
};

console.log(largestNumber([3, 30, 34, 5, 9]))
console.log(largestNumber([10, 2]))
console.log(largestNumber([10, 2, 4, 1]))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * We have an array of integers and want to arrange them so that when concatenated
 * as strings they form the largest possible number.
 * The tricky part: standard numeric sort doesn't work because "9" > "34" > "30"
 * but you can't simply sort by digit value — "34" before "3" gives "343" whereas
 * "3" before "34" gives "334", and "343" > "334".
 * We need to compare two numbers a and b by checking whether (a+b) > (b+a) as strings.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a custom comparator / greedy sort problem.
 * Whenever you see "arrange numbers to maximize/minimize a concatenated result",
 * the pattern is: compare pairs by string concatenation order.
 * - Convert all numbers to strings.
 * - Sort using comparator: (a, b) => (b+a).localeCompare(a+b) for descending order.
 * - Join the sorted array.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums = [3, 30, 34, 5, 9]
 * As strings: ["3", "30", "34", "5", "9"]
 * Compare "9" vs "5": "95" > "59" → 9 comes first.
 * Compare "5" vs "34": "534" > "345" → 5 comes first.
 * Compare "34" vs "3": "343" > "334" → 34 comes first.
 * Compare "3" vs "30": "330" > "303" → 3 comes first.
 * Final sorted order: ["9", "5", "34", "3", "30"]
 * Joined: "9534330"
 *
 * INTERVIEW TIPS:
 * - The comparator (b+a).localeCompare(a+b) sorts in descending concatenation order.
 *   You can also write it as: if (b+a > a+b) return 1; else return -1;
 * - Edge case: if all numbers are 0, the result should be "0" not "00...0".
 *   (Add a guard: if (numsString[0] === "0") return "0")
 * - Always convert numbers to strings first — number concatenation does addition, not string concat.
 * - This is a medium-difficulty greedy problem; mention the proof: the comparator defines
 *   a valid total ordering (transitive), which is why sort works correctly here.
 *
 * Time Complexity:  O(n log n) — for the sort, where each comparison is O(d) for d digits.
 * Space Complexity: O(n)       — for the strings array.
 */