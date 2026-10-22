/**
 * 242. Valid Anagram
 * 
 *An anagram is a word or phrase formed by rearranging the letters 
 *of a different word or phrase, using all the original letters exactly once.

 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters
 */

function checkAnagram(s:string,t:string):boolean{

    if(s.length!=t.length){
        return false
    }
    s=s.split("").sort().join("")
    t=t.split("").sort().join("")
    if(s===t){
        return true
    }else{
        return false
    }
}
console.log(checkAnagram("anagram","nagaram"))
console.log(checkAnagram("rat","car"))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Two strings are anagrams if they contain the EXACT SAME characters with the EXACT SAME frequencies.
 * Order doesn't matter — "anagram" and "nagaram" are anagrams because both contain the same letters.
 * If one string is longer than the other, they CANNOT be anagrams.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a SORT-THEN-COMPARE pattern (simplest approach).
 * Key insight: if two strings are anagrams, sorting both will produce IDENTICAL strings.
 * - If sorted(s) === sorted(t) → anagrams.
 * - Always do a length check first as a fast early exit.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * s = "anagram", t = "nagaram"
 * 1. Lengths: 7 === 7 → proceed
 * 2. sort(s): "anagram" → ['a','a','a','g','m','n','r'] → "aaagmnr"
 * 3. sort(t): "nagaram" → ['a','a','a','g','m','n','r'] → "aaagmnr"
 * 4. "aaagmnr" === "aaagmnr" → return true ✅
 *
 * s = "rat", t = "car"
 * 1. Lengths: 3 === 3 → proceed
 * 2. sort(s): "art"
 * 3. sort(t): "acr"
 * 4. "art" !== "acr" → return false ✅
 *
 * INTERVIEW TIPS:
 * - Lead with the sort approach (easy to explain), then offer the O(n) Map approach as a follow-up.
 * - The O(n) approach: count character frequencies with a Map for s, then decrement for t.
 *   If any count goes below 0, return false. At the end all counts should be 0.
 * - The O(1) space approach for lowercase-only: use a fixed array of 26 integers.
 * - Edge case: empty strings — "" is an anagram of "" (both sorted are ""), returns true.
 * - If Unicode or case-insensitive comparison is needed, mention toLowerCase() first.
 *
 * Time Complexity:  O(n log n) — sorting both strings dominates.
 * Space Complexity: O(n)       — sort creates new character arrays.
 */

