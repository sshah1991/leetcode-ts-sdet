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