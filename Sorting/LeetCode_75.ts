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
    console.log(myMap)

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