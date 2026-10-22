/**
 * 75. Sort Colors
 *
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue.
 *
 * We will use the integers 0, 1, and 2 to represent the colors red, white, and blue,
 * respectively.
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 300
 * nums[i] is either 0, 1, or 2
 */

function sortColors(nums: number[]): void {
    let myMap=new Map<number,number>()
    for(let i=0;i<nums.length;i++){
        let currentNumber=nums[i]
        if(!myMap.has(currentNumber)){
            myMap.set(currentNumber,0)
        }
        let currentNumberCounter=myMap.get(currentNumber)||0
        myMap.set(currentNumber,currentNumberCounter+1)
    }
    //console.log(myMap)

    let count=0
    for(let i=0;i<=2;i++){
        let appearanceCount=myMap.get(i)||0
        while(appearanceCount>0){
            nums[count]=i
            count++
            appearanceCount--
        }
    }
    console.log(nums)
};

sortColors([2,0,2,1,1,0])
sortColors([2,0,1])

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Sort an array in-place where the only values are 0, 1, or 2 (representing red, white, blue).
 * The result should be all 0s, then all 1s, then all 2s — the Dutch National Flag problem.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * When the problem has a fixed, known set of values (like 0, 1, 2), there are two common approaches:
 *   1. Count Sort (used here): Count each value, then overwrite the array in sorted order.
 *   2. Dutch National Flag (one-pass, O(1) space): Use three pointers (low, mid, high).
 *
 * The approach used here is Count Sort:
 * - Count how many 0s, 1s, and 2s exist using a Map.
 * - Fill the array back by writing each value the right number of times.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums = [2, 0, 2, 1, 1, 0]
 * 1. Count: {0:2, 1:2, 2:2}
 * 2. Fill in order for i = 0, 1, 2:
 *    i=0: write 0 twice  → [0, 0, ...]
 *    i=1: write 1 twice  → [0, 0, 1, 1, ...]
 *    i=2: write 2 twice  → [0, 0, 1, 1, 2, 2]
 *
 * INTERVIEW TIPS:
 * - This two-pass counting approach is O(n) time and O(1) extra space (the Map stores only 3 keys).
 * - Always mention the Dutch National Flag one-pass O(1) space algorithm as an optimal follow-up:
 *   Use three pointers: low (next 0 slot), mid (current element), high (next 2 slot).
 *   Swap nums[mid] to the correct zone based on its value, advancing pointers accordingly.
 * - The counting approach is easier to explain in an interview under pressure.
 * - Note: this function modifies the array in-place (void return type), which the problem requires.
 *
 * Time Complexity:  O(n) — two passes: one to count, one to fill.
 * Space Complexity: O(1) — the Map holds at most 3 entries (0, 1, 2).
 */