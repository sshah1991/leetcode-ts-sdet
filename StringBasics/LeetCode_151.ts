/**
 * 151. Reverse Words in a String
 *
 * Given an input string s, reverse the order of the words.
 *
 * A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
 *
 * Return a string of the words in reverse order concatenated by a single space.
 *
 * Note that s may contain leading or trailing spaces or multiple spaces between two words.
 * The returned string should only have a single space separating the words. Do not include any extra spaces.
 *
 * Example 1:
 * Input: s = "the sky is blue"
 * Output: "blue is sky the"
 *
 * Example 2:
 * Input: s = "  hello world  "
 * Output: "world hello"
 * Explanation: Your reversed string should not contain leading or trailing spaces.
 *
 * Example 3:
 * Input: s = "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s contains English letters, digits, and spaces
 * There is at least one word in s
 */
/** Solution: **/

function reverseWords(s: string): string {

    const revWord=s.trim().split(/\s+/).reverse().join(" ")
    return revWord
};

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))



/*
 * HOW TO UNDERSTAND THE PROBLEM:
 * Reverse the ORDER of words in the string, not the characters within each word.
 * The tricky part: the input may have leading/trailing spaces AND multiple spaces between words.
 * The output must have exactly ONE space between words and NO extra spaces at the ends.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TRIM + SPLIT + REVERSE + JOIN pattern.
 * When a problem involves manipulating words (not characters) in a string, the natural approach is:
 * 1. Isolate the words (split, handling multiple spaces).
 * 2. Apply the operation (reverse the array).
 * 3. Rebuild the string (join with single space).
 * The key tool is split(/\s+/) — it splits on ANY whitespace sequence, collapsing multiple spaces.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * s = "  hello world  "
 * 1. trim()         → "hello world"
 * 2. split(/\s+/)   → ["hello", "world"]
 * 3. reverse()      → ["world", "hello"]
 * 4. join(" ")      → "world hello" ✅
 *
 * s = "a good   example"
 * 1. trim()         → "a good   example"
 * 2. split(/\s+/)   → ["a", "good", "example"]   ← multiple spaces collapsed
 * 3. reverse()      → ["example", "good", "a"]
 * 4. join(" ")      → "example good a" ✅
 *
 * INTERVIEW TIPS:
 * - The regex /\s+/ is the key: it handles any number of spaces (including tabs/newlines).
 * - trim() before split ensures no empty strings at the start/end of the array.
 * - If asked for an in-place O(1) space solution (e.g., in C++): reverse the whole string,
 *   then reverse each word individually — a classic two-step reversal trick.
 * - Mention that split(" ") (single space) would NOT work here because "a  b" would give
 *   ["a", "", "b"] with an empty string in the middle.
 *
 * Time Complexity:  O(n) — each character is processed a constant number of times.
 * Space Complexity: O(n) — we store the words array and the result string.
 */