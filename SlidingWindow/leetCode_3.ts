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