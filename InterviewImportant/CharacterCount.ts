/**
 * Character Frequency Count in a String
 * 
 * Given a string s, count and return the frequency (number of occurrences)
 * of each character present in the string.
 * 
 * Example 1:
 * Input: s = "hello"
 * Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }
 * 
 * Example 2:
 * Input: s = "banana"
 * Output: { 'b': 1, 'a': 3, 'n': 2 }
 * 
 * Example 3:
 * Input: s = "QA Automation"
 * Output: { 'Q': 1, 'A': 1, ' ': 1, 'a': 2, 'u': 1, 't': 2, 'o': 2, 'm': 1, 'i': 1, 'n': 1 }
 * (Note: Case-sensitive vs case-insensitive depends on interview requirements)
 * 
 * Constraints:
 * - 0 <= s.length <= 10^5
 * - s can contain letters, numbers, spaces, and punctuation
 */

function characterCount(input:string):Record<string,number>{

    let myMap=new Map<string,number>()

    for(let i=0;i<input.length;i++){
        const currentChar=input[i]
        const count=myMap.get(currentChar)||0
        myMap.set(currentChar,count+1)
    }
    return Object.fromEntries(myMap)

    
}
console.log(characterCount("AAABBBCCCaaa"))


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Scan a string and count how many times each character appears.
 * Return those counts as a key-value object (character → frequency).
 * "QA Automation" is case-sensitive by default — 'A' and 'a' are different characters
 * unless the problem explicitly says to ignore case.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is the foundational FREQUENCY MAP pattern.
 * Any time you see "count occurrences", "how many times does X appear", or
 * "group by character/value" — reach for a Map (or object).
 * - Scan once, updating the count for each character.
 * - Use `map.get(char) || 0` to handle the first occurrence cleanly (default 0).
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "banana"
 * i=0 'b': count=0+1=1 → Map:{b:1}
 * i=1 'a': count=0+1=1 → Map:{b:1, a:1}
 * i=2 'n': count=0+1=1 → Map:{b:1, a:1, n:1}
 * i=3 'a': count=1+1=2 → Map:{b:1, a:2, n:1}
 * i=4 'n': count=1+1=2 → Map:{b:1, a:2, n:2}
 * i=5 'a': count=2+1=3 → Map:{b:1, a:3, n:2}
 * Object.fromEntries(Map) → { b:1, a:3, n:2 } ✅
 *
 * INTERVIEW TIPS:
 * - Confirm case-sensitivity upfront: "Should 'A' and 'a' be counted separately or together?"
 *   If case-insensitive, add input.toLowerCase() before the loop.
 * - `map.get(char) || 0` is idiomatic but has a subtle bug if count could be 0 intentionally;
 *   prefer `map.has(char) ? map.get(char)! : 0` for strict correctness.
 * - Object.fromEntries(map) converts the Map to a plain object for cleaner output.
 * - This pattern is the building block for: anagram check, first unique character,
 *   group anagrams, sort by frequency — knowing it cold is essential.
 * - Edge case: empty string → Map stays empty → returns {}.
 *
 * Time Complexity:  O(n) — single pass through the string.
 * Space Complexity: O(k) — where k is the number of distinct characters (at most alphabet size).
 */


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Scan a string and count how many times each character appears.
 * Return those counts as a key-value object (character → frequency).
 * "QA Automation" is case-sensitive by default — 'A' and 'a' are different characters
 * unless the problem explicitly says to ignore case.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is the foundational FREQUENCY MAP pattern.
 * Any time you see "count occurrences", "how many times does X appear", or
 * "group by character/value" — reach for a Map (or object).
 * - Scan once, updating the count for each character.
 * - Use `map.get(char) || 0` to handle the first occurrence cleanly (default 0).
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "banana"
 * i=0 'b': count=0+1=1 → Map:{b:1}
 * i=1 'a': count=0+1=1 → Map:{b:1, a:1}
 * i=2 'n': count=0+1=1 → Map:{b:1, a:1, n:1}
 * i=3 'a': count=1+1=2 → Map:{b:1, a:2, n:1}
 * i=4 'n': count=1+1=2 → Map:{b:1, a:2, n:2}
 * i=5 'a': count=2+1=3 → Map:{b:1, a:3, n:2}
 * Object.fromEntries(Map) → { b:1, a:3, n:2 } ✅
 *
 * INTERVIEW TIPS:
 * - Confirm case-sensitivity upfront: "Should 'A' and 'a' be counted separately or together?"
 *   If case-insensitive, add input.toLowerCase() before the loop.
 * - `map.get(char) || 0` is idiomatic but has a subtle bug if count could be 0 intentionally;
 *   prefer `map.has(char) ? map.get(char)! : 0` for strict correctness.
 * - Object.fromEntries(map) converts the Map to a plain object for cleaner output.
 * - This pattern is the building block for: anagram check, first unique character,
 *   group anagrams, sort by frequency — knowing it cold is essential.
 * - Edge case: empty string → Map stays empty → returns {}.
 *
 * Time Complexity:  O(n) — single pass through the string.
 * Space Complexity: O(k) — where k is the number of distinct characters (at most alphabet size).
 */
console.log(characterCount("AAABBBCCCaaa"))
