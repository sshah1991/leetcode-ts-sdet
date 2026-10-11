/**
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
Interview-friendly breakdown:

We need to reverse the order of words while ignoring extra spaces at the beginning, end, and between words.

A clean way to think about the problem is:
1. Trim the string to remove leading and trailing spaces.
2. Split the string on any whitespace sequence using /\s+/.
   - This converts "a good   example" into ["a", "good", "example"].
   - It also handles cases like "  hello world  " safely.
3. Reverse the array of words.
4. Join them back together with a single space.

Why this works:
- trim() removes unnecessary spaces on the outside.
- split(/\s+/) collapses multiple spaces between words into one logical separation.
- reverse() flips the word order.
- join(" ") rebuilds the final string with exactly one space between words.

Time complexity: O(n)
- We scan the string once to split and once to join, so this is linear in the input size.

Space complexity: O(n)
- We store the words in an array before joining them back together.

This is a great interview approach because it is short, readable, and directly matches the problem constraints.
*/