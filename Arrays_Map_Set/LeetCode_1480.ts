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
 * Interview prep explanation:
 *
 * A running sum at index i is the sum of every input value from index 0 through i.
 * Keep a cumulative total as we scan the array from left to right. For each value,
 * add it to the total and append that total to the result array.
 *
 * Example: [3, 1, 2, 10, 1]
 * - Start with total 0.
 * - Add 3: total is 3, so append 3.
 * - Add 1: total is 4, so append 4.
 * - Continue to get [3, 4, 6, 16, 17].
 *
 * Time Complexity: O(n), because each input value is processed once.
 * Space Complexity: O(n), because the result contains one value per input element.
 */


