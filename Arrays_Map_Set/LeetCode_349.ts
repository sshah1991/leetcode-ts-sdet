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
