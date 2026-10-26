/**
 * 1. String Compression (Run-Length Encoding)
 * 
 * Given a string s, return a compressed version containing each character 
 * followed by the count of its consecutive occurrences.
 * 
 * Example 1:
 * Input: s = "aabcccccaaa"
 * Output: "a2b1c5a3"
 * 
 * Example 2:
 * Input: s = "abcd"
 * Output: "a1b1c1d1"
 * 
 * Constraints:
 * - 0 <= s.length <= 10^5
 * - s consists of lowercase/uppercase English letters
 */

function compressString(input: string): string {

    if (input.length < 1) {
        return ""
    }
    let output = ""
    let count=1

    for(let i=0;i<input.length;i++){
        if(input[i]!==input[i+1] || i+1>=input.length){
            output+=input[i]+count
            count=1
        }else{
            count++
        }
    }

    return output

}
// ================= TEST CASES =================
console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
console.log(compressString("abcd"));        // "a1b1c1d1"
console.log(compressString("a"));           // "a1"
console.log(compressString(""));            // ""
console.log(compressString("aaAA"));        // "a2A2" (case-sensitive)


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Compress a string using Run-Length Encoding (RLE): replace each run of consecutive
 * identical characters with the character followed by its count.
 * "aabcccccaaa" → "a2b1c5a3"
 * Note: even single characters get a count ("b" → "b1"), not just repeating ones.
 * This is different from classic RLE where singles are left as-is.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a CONSECUTIVE GROUP / RUN-LENGTH scan pattern.
 * Any time you need to "process groups of identical adjacent elements", use a single
 * pass with a running counter:
 * - Increment count while the current character equals the next.
 * - When they differ (or end of string), append char+count to output and reset count to 1.
 * The boundary condition (i+1 >= input.length) handles the final group.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "aabcccccaaa", count=1, output=""
 * i=0 'a': input[1]='a' same     → count=2
 * i=1 'a': input[2]='b' DIFF     → output="a2", count=1
 * i=2 'b': input[3]='c' DIFF     → output="a2b1", count=1
 * i=3 'c': input[4]='c' same     → count=2
 * i=4 'c': input[5]='c' same     → count=3
 * i=5 'c': input[6]='c' same     → count=4
 * i=6 'c': input[7]='c' same     → count=5
 * i=7 'c': input[8]='a' DIFF     → output="a2b1c5", count=1
 * i=8 'a': input[9]='a' same     → count=2
 * i=9 'a': input[10]='a' same    → count=3
 * i=10 'a': i+1>=length (end)    → output="a2b1c5a3", count=1
 * Return "a2b1c5a3" ✅
 *
 * INTERVIEW TIPS:
 * - The condition `input[i] !== input[i+1] || i+1 >= input.length` elegantly handles both
 *   "character changed" and "end of string" in a single if-branch.
 * - Confirm with interviewer: should single characters also get a count? ("b" → "b1" or "b"?)
 * - Confirm: is it case-sensitive? ("aaAA" → "a2A2" vs "a4")
 * - Classic follow-up: "Only return compressed string if it's shorter than original."
 *   Add: return output.length < input.length ? output : input.
 * - Edge case: empty string → early return "" before the loop.
 * - This is a building block for LeetCode 443 (in-place compression) — same concept.
 *
 * Time Complexity:  O(n) — single pass through the string.
 * Space Complexity: O(n) — the output string can be at most 2× the input length.
 */


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Compress a string using Run-Length Encoding (RLE): replace each run of consecutive
 * identical characters with the character followed by its count.
 * "aabcccccaaa" → "a2b1c5a3"
 * Note: even single characters get a count ("b" → "b1"), not just repeating ones.
 * This is different from classic RLE where singles are left as-is.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a CONSECUTIVE GROUP / RUN-LENGTH scan pattern.
 * Any time you need to "process groups of identical adjacent elements", use a single
 * pass with a running counter:
 * - Increment count while the current character equals the next.
 * - When they differ (or end of string), append char+count to output and reset count to 1.
 * The boundary condition (i+1 >= input.length) handles the final group.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "aabcccccaaa", count=1, output=""
 * i=0 'a': input[1]='a' same     → count=2
 * i=1 'a': input[2]='b' DIFF     → output="a2", count=1
 * i=2 'b': input[3]='c' DIFF     → output="a2b1", count=1
 * i=3 'c': input[4]='c' same     → count=2
 * i=4 'c': input[5]='c' same     → count=3
 * i=5 'c': input[6]='c' same     → count=4
 * i=6 'c': input[7]='c' same     → count=5
 * i=7 'c': input[8]='a' DIFF     → output="a2b1c5", count=1
 * i=8 'a': input[9]='a' same     → count=2
 * i=9 'a': input[10]='a' same    → count=3
 * i=10 'a': i+1>=length (end)    → output="a2b1c5a3", count=1
 * Return "a2b1c5a3" ✅
 *
 * INTERVIEW TIPS:
 * - The condition `input[i] !== input[i+1] || i+1 >= input.length` elegantly handles both
 *   "character changed" and "end of string" in a single if-branch.
 * - Confirm with interviewer: should single characters also get a count? ("b" → "b1" or "b"?)
 * - Confirm: is it case-sensitive? ("aaAA" → "a2A2" vs "a4")
 * - Classic follow-up: "Only return compressed string if it's shorter than original."
 *   Add: return output.length < input.length ? output : input.
 * - Edge case: empty string → early return "" before the loop.
 * - This is a building block for LeetCode 443 (in-place compression) — same concept.
 *
 * Time Complexity:  O(n) — single pass through the string.
 * Space Complexity: O(n) — the output string can be at most 2× the input length.
 */
console.log(compressString("aaAA"));        // "a2A2" (case-sensitive)
