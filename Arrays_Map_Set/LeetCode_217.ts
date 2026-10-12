/**
 * 217. Contains Duplicate
 *
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 */

function checkDuplicates(input:number[]):boolean{
    // Store each distinct number as we encounter it.
    let myMap=new Map<number,number>()

    for(let i=0;i<input.length;i++){
        let currentNumber=input[i]
        if(!myMap.has(currentNumber)){
            // First occurrence: mark this number as seen.
            myMap.set(currentNumber,1)
        }else{
            // A previous occurrence exists, so we can return immediately.
            return true
        }
    }
    return false
    
}

console.log(checkDuplicates([1,1,1,3,3,4,3,2,4,2]))
console.log("*****************")
console.log(checkDuplicates([1,2,3,4]))
console.log("*****************")
console.log(checkDuplicates([1,2,3,4,2]))
console.log("*****************")
console.log(checkDuplicates([1]))

/**
 * Interview prep explanation:
 *
 * Scan the array once while keeping track of values already seen in a Map.
 * For each number, check the Map before adding it:
 * - If it is already present, a duplicate exists, so return true.
 * - Otherwise, add it and continue.
 * If the scan finishes, every value was distinct, so return false.
 *
 * Example: [1, 2, 3, 1]
 * The first 1, 2, and 3 are recorded. When the final 1 is reached, it is
 * already in the Map, so the function returns true.
 *
 * Checking before inserting also means the function can stop as soon as the
 * answer is known.
 *
 * Time Complexity: O(n) average, because each value is checked once.
 * Space Complexity: O(n) in the worst case, if all values are distinct.
 */