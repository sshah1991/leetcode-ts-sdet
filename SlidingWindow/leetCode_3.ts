/**
 * Problem: Longest Substring Without Repeating Characters (LeetCode 3)
 *
 * Given a string s, find the length of the longest substring without duplicate characters.
 *
 * Example 1:
 *   Input: s = "abcabcbb"
 *   Output: 3
 *   Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *   Input: s = "bbbbb"
 *   Output: 1
 *   Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *   Input: s = "pwwkew"
 *   Output: 3
 *   Explanation: The answer is "wke", with the length of 3.
 *   Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 *   - 0 <= s.length <= 10^5
 *   - s consists of English letters, digits, symbols and spaces.
 *
*/
function lengthOfLongestSubstring(s: string): number {
  let left=0
  let maxLength=0
  let charMap=new Map<string,number>()

  for(let right=0;right<s.length;right++){
    const currentCharacter=s[right]
    if(charMap.has(currentCharacter) && charMap.get(currentCharacter)!>=left){
      left=charMap.get(currentCharacter)!+1
    }
    // Record or update the most recent index of currentChar
    charMap.set(currentCharacter, right);

    const currentWindowSize= right-left+1
    maxLength=Math.max(maxLength,currentWindowSize)
  }
  
  return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 ("wke")
console.log(lengthOfLongestSubstring(""));         // 0 (empty string)
console.log(lengthOfLongestSubstring("abba"));     // 2 ("ab" or "ba")
console.log(lengthOfLongestSubstring(" "));        // 1 (space character)
console.log(lengthOfLongestSubstring("au"));       // 2 ("au")


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find the LENGTH of the longest contiguous portion (substring) of the string
 * that contains NO repeated characters. Every character in the window must be unique.
 * "Substring" means characters must be adjacent — "pwke" is a subsequence of "pwwkew"
 * but NOT a substring (characters are not contiguous).
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is the classic SLIDING WINDOW with a HashMap pattern.
 * Use it whenever: "find the longest/shortest subarray/substring satisfying a condition."
 * - `right` pointer expands the window by including new characters.
 * - `left` pointer shrinks the window when a duplicate is detected.
 * - A Map stores each character's MOST RECENT index so we can jump `left` directly
 *   past the previous occurrence (no need to shrink one step at a time).
 *
 * STEP-BY-STEP WALKTHROUGH:
 * s = "abcabcbb"
 * right=0 'a': not in Map → Map:{a:0}, window=[0,0], size=1, max=1
 * right=1 'b': not in Map → Map:{a:0,b:1}, window=[0,1], size=2, max=2
 * right=2 'c': not in Map → Map:{a:0,b:1,c:2}, window=[0,2], size=3, max=3
 * right=3 'a': in Map at 0 (>=left=0) → left=0+1=1 → Map:{a:3,b:1,c:2}, window=[1,3], size=3, max=3
 * right=4 'b': in Map at 1 (>=left=1) → left=1+1=2 → Map:{a:3,b:4,c:2}, window=[2,4], size=3, max=3
 * right=5 'c': in Map at 2 (>=left=2) → left=2+1=3 → Map:{a:3,b:4,c:5}, window=[3,5], size=3, max=3
 * right=6 'b': in Map at 4 (>=left=3) → left=4+1=5 → window=[5,6], size=2, max=3
 * right=7 'b': in Map at 6 (>=left=5) → left=6+1=7 → window=[7,7], size=1, max=3
 * Return 3 ✅
 *
 * INTERVIEW TIPS:
 * - The condition charMap.get(char) >= left is critical — it prevents accidentally jumping
 *   `left` BACKWARD when a character was seen before the current window started.
 *   Example: "abba" at right=3 ('a'), Map has a→0 but left is already 2, so we should NOT
 *   move left back to 1. The >= left guard prevents this.
 * - Window size formula: right - left + 1 (inclusive on both ends).
 * - Alternative: use a Set instead of a Map, and shrink left one step at a time.
 *   It's simpler to understand but O(n²) worst case; the Map approach is O(n).
 * - Edge cases: empty string → loop never runs → return 0.
 *   All unique characters → left stays 0, window grows to full length.
 *   All same characters (e.g., "bbbbb") → left chases right, max stays 1.
 *
 * Time Complexity:  O(n) — each character is visited at most twice (once by right, once by left).
 * Space Complexity: O(min(n, a)) — the Map holds at most 'a' unique characters (alphabet size).
 */
console.log(lengthOfLongestSubstring("au"));       // 2 ("au")
