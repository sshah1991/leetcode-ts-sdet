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
 *
 * Example 2:
 * Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * Output: [22,28,8,6,17,44]
 *
 * Constraints:
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * All the elements of arr2 are distinct
 */
