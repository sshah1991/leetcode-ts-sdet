/**
 * 1122. Relative Sort Array
 *
 * Given two arrays arr1 and arr2, sort the elements of arr1 so that:
 * - all elements in arr2 appear first in the same relative order as in arr2
 * - all remaining elements of arr1 that are not in arr2 are sorted in ascending order
 *
 * Return the sorted array.
 *
 * Example 1:
 * Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * Output: [2,2,2,1,4,3,3,9,6,7,19]
 *xw
 * Example 2:
 * Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * Output: [22,28,8,6,17,44]
 *
 * Constraints:
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * All the elements of arr2 are distinct
 */
function relativeSortArray(arr1: number[], arr2: number[]): number[] {

    let myMap = new Map<number, number>()
    for (let i = 0; i < arr1.length; i++) {
        let currentNumber = arr1[i]
        if (!myMap.has(currentNumber)) {
            myMap.set(currentNumber, 0)
        }
        let currentNumberCount = myMap.get(currentNumber) || 0
        myMap.set(currentNumber, currentNumberCount + 1)
    }




    // 1. If arr2 element exists in myMap, add to newArr as many times as the count
    // 2. Once added, delete the element from myMap
    let newArr: number[] = []
    let count
    for (let i = 0; i < arr2.length; i++) {
        let currentElement = arr2[i]
        if (myMap.has(currentElement)) {
            count = myMap.get(currentElement) || 0
            for (let j = 0; j < count; j++) {
                newArr.push(arr2[i])
            }
        }
        myMap.delete(currentElement)
    }
    
    // 3 & 4. Collect remaining keys and sort in ascending order (a - b)
    let remainingKeys=Array.from(myMap.keys()).sort((a,b)=>a-b)
  
    //5. add each remaining key to the newArray as many times as the count
    for(let i=0;i<remainingKeys.length;i++){
        let currentElement=remainingKeys[i]
        let currentElementCount=myMap.get(currentElement)||0
        for(let j=0;j<currentElementCount;j++){
            newArr.push(currentElement)
        }
    }

    return newArr
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]))
console.log(relativeSortArray([28,6,22,8,44,17], [22,28,8,6]))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * We have two arrays. arr2 defines a custom priority order.
 * We must sort arr1 so that:
 *   1. Elements that appear in arr2 come first, in the SAME relative order as arr2.
 *   2. Elements in arr1 that are NOT in arr2 come last, sorted in ascending order.
 * Think of it as a "custom comparator" problem where arr2 is the priority list.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * When you need a custom sort order defined by another array, use a frequency Map.
 * - Count occurrences of each element in arr1 using a Map.
 * - Iterate arr2 and for each element, push it into the result as many times as its count.
 * - Collect remaining elements (not in arr2), sort them numerically, append them.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 1. Build frequency Map from arr1:
 *    {2:3, 3:2, 1:1, 4:1, 6:1, 7:1, 9:1, 19:1}
 * 2. Follow arr2 order, push counted times:
 *    2 appears 3 times → push [2,2,2]
 *    1 appears 1 time  → push [1]
 *    4 appears 1 time  → push [4]
 *    3 appears 2 times → push [3,3]
 *    9 appears 1 time  → push [9]
 *    6 appears 1 time  → push [6]
 *    → result so far: [2,2,2,1,4,3,3,9,6]
 * 3. Remaining keys not in arr2: {7:1, 19:1}
 *    Sort ascending → [7, 19]
 *    Append → [2,2,2,1,4,3,3,9,6,7,19]
 *
 * INTERVIEW TIPS:
 * - The key insight is: delete keys from the Map as you process arr2 — this makes it easy
 *   to see what is "remaining" for the second half.
 * - Mention that arr2 elements are guaranteed distinct, so no duplicate key issues in arr2.
 * - For the remaining elements, use sort((a, b) => a - b) for numeric ascending order
 *   (default JS sort is lexicographic and would sort 19 before 7!).
 * - Edge case: if arr1 has an element not in arr2 with count > 1, it still gets repeated.
 *
 * Time Complexity:  O(n log n) — dominated by sorting the remaining elements.
 * Space Complexity: O(n)       — the Map and result array.
 */