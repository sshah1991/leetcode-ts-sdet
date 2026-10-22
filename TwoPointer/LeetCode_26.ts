/**
 * ============================================================================
 * Problem: 26. Remove Duplicates from Sorted Array (LeetCode)
 * Difficulty: Easy
 * ============================================================================
 * 
 * Description:
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements should be kept the same.
 * 
 * Consider the number of unique elements in nums to be k. After removing duplicates,
 * return the number of unique elements k.
 * 
 * The first k elements of nums should contain the unique numbers in sorted order.
 * The remaining elements beyond index k - 1 can be ignored.
 * 
 * Custom Judge:
 * The judge will test your solution with the following code:
 * 
 *   int[] nums = [...]; // Input array
 *   int[] expectedNums = [...]; // The expected answer with correct length
 * 
 *   int k = removeDuplicates(nums); // Calls your implementation
 * 
 *   assert k == expectedNums.length;
 *   for (int i = 0; i < k; i++) {
 *       assert nums[i] == expectedNums[i];
 *   }
 * 
 * If all assertions pass, then your solution will be accepted.
 * 
 * Examples:
 * - Example 1:
 *     Input: nums = [1, 1, 2]
 *     Output: 2, nums = [1, 2, _]
 *     Explanation: Your function should return k = 2, with the first two elements
 *                  of nums being 1 and 2 respectively.
 *                  It does not matter what you leave beyond the returned k.
 * 
 * - Example 2:
 *     Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
 *     Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
 *     Explanation: Your function should return k = 5, with the first five elements
 *                  of nums being 0, 1, 2, 3, and 4 respectively.
 *                  It does not matter what you leave beyond the returned k.
 * 
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order.
 * ============================================================================
 */
// --- 2. The Custom Judge Runner ---
function runJudge(nums: number[], expectedNums: number[]): void {
    console.log("Original Input:", [...nums]);

    // Step A: Call your function
    // (nums is modified directly in memory)
    const k = removeDuplicates(nums);

    // Step B: Assert k matches the expected length
    console.assert(
        k === expectedNums.length,
        `Length check failed! Expected ${expectedNums.length}, got ${k}`
    );

    // Step C: Assert the first k elements match expectedNums
    for (let i = 0; i < k; i++) {
        console.assert(
            nums[i] === expectedNums[i],
            `Element mismatch at index ${i}! Expected ${expectedNums[i]}, got ${nums[i]}`
        );
    }

    console.log(`✅ Passed! k = ${k}, first k elements: [${nums.slice(0, k).join(", ")}]`);
    console.log("Entire modified array:", nums);
    console.log("--------------------------------------------------");
}
// --- 1. Your Implementation ---

function removeDuplicates(num:number[]):number{

    if(num.length===0){
        return 0
    }

    let k=1
    for(let i=1;i<num.length;i++){
        if(num[i]!==num[i-1]){
            num[k]=num[i]
            k++
        }
    }

    return k
}

// 1. Your custom trace example
runJudge([3, 3, 4, 5, 6, 6, 7], [3, 4, 5, 6, 7]);

// 2. LeetCode Example 1
runJudge([1, 1, 2], [1, 2]);

// 3. LeetCode Example 2
runJudge([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]);

// 4. All identical numbers
runJudge([7, 7, 7, 7], [7]);

// 5. Already unique
runJudge([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

// 6. Single element boundary
runJudge([99], [99]);

// 7. Negative numbers and zero
runJudge([-3, -3, -2, -1, 0, 0, 1], [-3, -2, -1, 0, 1]);