/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0,1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * There will be exactly one valid answer.
 */

function twoSum(numbers:number[],target:number){
    let myMap= new Map<number,number>()
    //nums = [3,2,4], target = 6
    for(let i=0;i<numbers.length;i++){
        let currentNumber=numbers[i]
        const compliment=target-currentNumber
        if(myMap.has(compliment)){
            return [myMap.get(compliment),i]
        }else{
            myMap.set(currentNumber,i)
        }
    }
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));

/**
 * Interview prep explanation:
 *
 * We need to return the indices of two numbers whose sum equals the target.
 * As we scan the array, calculate the complement each number needs:
 * complement = target - currentNumber.
 *
 * Store each number and its index in a Map as we visit it. Before storing the
 * current number, check whether its complement is already in the Map. If so,
 * those two indices form the answer. Checking before inserting also ensures
 * that we do not use the same array element twice.
 *
 * Example: nums = [3, 2, 4], target = 6
 * - Visit 3: complement is 3; it is not in the Map, so store 3 -> index 0.
 * - Visit 2: complement is 4; it is not in the Map, so store 2 -> index 1.
 * - Visit 4: complement is 2; it is in the Map, so return [1, 2].
 *
 * Time Complexity: O(n), because each number is processed once and Map lookups
 * take O(1) average time.
 * Space Complexity: O(n), because the Map may store up to n numbers.
 */