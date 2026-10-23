/**
 * 28. Find the Index of the First Occurrence in a String (LeetCode)
 *
 * Given two strings `needle` and `haystack`, return the index of the first 
 * occurrence of `needle` in `haystack`, or -1 if `needle` is not part of `haystack`.
 *
 * Example 1:
 *   Input: haystack = "sadbutsad", needle = "sad"
 *   Output: 0
 *   Explanation: "sad" occurs at index 0 and 6. The first occurrence is at index 0.
 *
 * Example 2:
 *   Input: haystack = "leetcode", needle = "leeto"
 *   Output: -1
 *   Explanation: "leeto" did not occur in "leetcode", so we return -1.
 *
 * Constraints:
 *   - 1 <= haystack.length, needle.length <= 10^4
 *   - haystack and needle consist of only lowercase English characters.
 */

function strStr(haystack: string, needle: string): number {

    let h = haystack.length
    let n = needle.length

    for (let i = 0; i <= h - n; i++) {
        let j = 0;
        while (j < n && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === n) {
            return i;
        }
    }
    return -1;
};

console.log(strStr("sadbutsad", "sad"));   // 0 (matches at index 0)
console.log(strStr("leetcode", "leeto"));  // -1 (not found)
console.log(strStr("hello", "ll"));        // 2 (matches at index 2)
console.log(strStr("a", "a"));            // 0 (single character match)
console.log(strStr("abc", "c"));          // 2 (match at the very end)
console.log(strStr("mississippi", "issip")); // 4 (multiple partial matches before success)
console.log(strStr("short", "longerneedle")); // -1 (needle longer than haystack)


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find the FIRST position in `haystack` where `needle` starts.
 * If needle is "sad" and haystack is "sadbutsad", the answer is 0 (not 6) because
 * we want the FIRST occurrence. Return -1 if needle never appears.
 * Think of it like Ctrl+F in a text editor — find the first match.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a SLIDING WINDOW / SUBSTRING SEARCH pattern.
 * The classic brute-force approach:
 * - Slide a window of size needle.length across haystack one position at a time.
 * - At each position i, compare haystack[i..i+n-1] with needle character by character.
 * - If all characters match → return i.
 * - If any mismatch → move the window forward by 1.
 * The key bound: i only needs to go up to h - n (if fewer than n characters remain,
 * needle can't possibly fit, so we stop early).
 *
 * STEP-BY-STEP WALKTHROUGH:
 * haystack = "mississippi", needle = "issip"  (n=5, h=11)
 * i=0: haystack[0..4] = "missi" vs "issip" → 'm'!='i' → mismatch at j=0, move on
 * i=1: haystack[1..5] = "issis" vs "issip" → matches i,s,s,i but 's'!='p' at j=4 → mismatch
 * i=2: haystack[2..6] = "ssiss" vs "issip" → 's'!='i' → mismatch at j=0
 * i=3: haystack[3..7] = "sissi" vs "issip" → 's'!='i' → mismatch at j=0
 * i=4: haystack[4..8] = "issip" vs "issip" → all 5 chars match → j===n → return 4 ✅
 *
 * INTERVIEW TIPS:
 * - Always mention the loop bound i <= h - n as an important optimization.
 *   Without it, you'd attempt matches that can't possibly succeed.
 * - The inner while loop exits early on the first mismatch — no wasted comparisons.
 * - Built-in alternative: haystack.indexOf(needle) does exactly this in JS.
 *   Mention it exists, but explain you're implementing it manually to show the logic.
 * - For follow-up (optimal): mention the KMP (Knuth-Morris-Pratt) algorithm which runs
 *   in O(h + n) by reusing information from partial matches, avoiding re-scanning.
 * - Edge cases: needle longer than haystack → loop never runs → return -1.
 *   needle === haystack → i=0, j goes to n → return 0.
 *
 * Time Complexity:  O(h × n) — worst case: h positions, each comparing up to n chars.
 * Space Complexity: O(1)     — only index variables are used; no extra data structures.
 */

