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
 * Interview prep explanation:
 *
 * To check if two strings are anagrams, they must have the same characters in the same counts.
 * A quick way to compare this is:
 * 1. First, check if the lengths are equal. If not, they cannot be anagrams.
 * 2. Sort both strings.
 * 3. If the sorted versions are identical, the strings are anagrams.
 *
 * Example:
 * "anagram" -> "aagmnr"
 * "nagaram" -> "aagmnr"
 * They match, so the answer is true.
 *
 * Why this is a good interview approach:
 * - It is simple and easy to explain.
 * - It works well for the given constraints.
 * - It shows you are thinking about character counts and pattern matching.
 *
 * Time Complexity: O(n log n)
 * - Sorting dominates the cost.
 *
 * Space Complexity: O(n)
 * - We create new sorted strings.
 */

