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
 * HOW TO UNDERSTAND THE PROBLEM:
 * We are given an array and a target. We need to find two numbers that ADD UP to the target
 * and return their INDICES (not the values). Each input has exactly one solution,
 * and we cannot use the same element twice.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * Any time you see "find two elements that satisfy a condition", think HashMap/Map.
 * Instead of checking every pair (O(n²)), use a Map to store what you've seen:
 * - For each number, calculate its complement = target - currentNumber.
 * - If the complement is already in the Map, you found your pair.
 * - Otherwise, store the current number → index in the Map and keep going.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums = [3, 2, 4], target = 6
 * - i=0, num=3: complement = 6-3 = 3. Map is empty → store {3: 0}
 * - i=1, num=2: complement = 6-2 = 4. 4 not in Map → store {3:0, 2:1}
 * - i=2, num=4: complement = 6-4 = 2. 2 IS in Map at index 1 → return [1, 2] ✅
 *
 * INTERVIEW TIPS:
 * - Always check the Map BEFORE inserting to avoid using the same element twice.
 * - Mention the brute-force O(n²) approach first, then improve to O(n) with a Map.
 * - Edge case: nums = [3, 3], target = 6 — works because we check before inserting,
 *   so the second 3 finds the first 3 already in the Map.
 * - The Map stores number → index (not index → number) for O(1) complement lookup.
 *
 * Time Complexity:  O(n) — single pass; Map lookups are O(1) average.
 * Space Complexity: O(n) — the Map stores at most n entries.
 */