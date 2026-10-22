/**
 * 349. Intersection of Two Arrays
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Example 1:
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 * Example 2:
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 *
 * Constraints:
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 */

function intersection(nums1: number[], nums2: number[]): number[] {
   let nums1Set=new Set(nums1)
   let resultSet=new Set<number>()
   for(let i=0;i<nums2.length;i++){
    if(nums1Set.has(nums2[i])){
        resultSet.add(nums2[i])
    }
   }
    return Array.from(resultSet.values())
    
};
console.log(intersection([1,2,2,1],[2,2]))
console.log(intersection([4,9,5],[9,4,9,8,4]))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * We need to find values that appear in BOTH arrays, but each value should
 * appear only once in the result — even if it appears multiple times in either array.
 * Think of it as a classic mathematical set intersection: A ∩ B.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * Any time you see "find common elements" or "appears in both", think Set/Map.
 * - Build a Set from the first array so lookups are O(1).
 * - Iterate the second array and collect matches in another Set to guarantee uniqueness.
 * - Convert the result Set to an array at the end.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 * 1. nums1Set = {1, 2}
 * 2. Scan nums2:
 *    - 2 is in nums1Set → add to resultSet → resultSet = {2}
 *    - 2 is already in resultSet (no duplicate added)
 * 3. Return [2]
 *
 * INTERVIEW TIPS:
 * - Using a result Set automatically handles the "unique" requirement.
 * - Mention that converting nums1 to a Set first reduces lookup time from O(n) to O(1).
 * - If asked for a follow-up with sorted arrays, mention the two-pointer approach as O(n) with O(1) space.
 * - If asked "what if the arrays are huge and can't fit in memory?", mention external merge sort or streaming.
 *
 * Time Complexity:  O(n + m) — building nums1Set is O(n), scanning nums2 is O(m).
 * Space Complexity: O(min(n, m)) — result set holds at most min(n, m) unique values.
 */
