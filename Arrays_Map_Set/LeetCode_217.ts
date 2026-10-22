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
 * HOW TO UNDERSTAND THE PROBLEM:
 * We need to detect if ANY value appears MORE THAN ONCE in the array.
 * Return true as soon as we find a duplicate; if we finish without finding one, return false.
 * We only care about existence of a duplicate, not which one or how many times.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is the "seen before" HashMap pattern — the most basic use of a Map/Set.
 * Whenever a problem asks "have we encountered this value before?", use a Set or Map:
 * - Before storing a value, check if it is already there.
 * - If yes → duplicate found, return true immediately (early exit).
 * - If no  → record it and continue.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums = [1, 2, 3, 1]
 * - i=0, num=1: not in Map → store {1: 1}
 * - i=1, num=2: not in Map → store {1:1, 2:1}
 * - i=2, num=3: not in Map → store {1:1, 2:1, 3:1}
 * - i=3, num=1: 1 IS in Map → return true ✅ (early exit, no need to scan further)
 *
 * INTERVIEW TIPS:
 * - A Set is slightly cleaner than a Map here since we only care about presence, not count.
 *   You can mention: "I used a Map, but a Set with has/add is the minimal data structure."
 * - The early-exit on duplicate is important to mention — we don't scan the whole array if found early.
 * - Alternative O(1) space approach: sort first, then check adjacent elements. Trade-off: O(n log n) time.
 * - Edge case: single-element array → loop runs but never finds a duplicate → return false.
 *
 * Time Complexity:  O(n) average — each element is checked and stored once; Map lookups are O(1).
 * Space Complexity: O(n) worst case — if all values are distinct, all n are stored.
 */