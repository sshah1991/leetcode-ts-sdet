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