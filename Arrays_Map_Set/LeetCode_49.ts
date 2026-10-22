/**
 * 49. Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * using all the original letters exactly once.
 *
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 *
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 *
 * Constraints:
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters
 */

function groupAnagrams(strs: string[]): string[][] {

    let myMap = new Map<string, string[]>()
    for (let i = 0; i < strs.length; i++) {
        let currentString = strs[i]
        let sortedString = currentString.split("").sort().join("")
        if(!myMap.has(sortedString)){
            myMap.set(sortedString,[])
        }
        myMap.get(sortedString)?.push(currentString)
        
    }
    return Array.from(myMap.values())
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Anagrams are words built from the exact same letters.
 * We need to group all strings that are anagrams of each other.
 * The output is a list of buckets — each bucket contains one anagram family.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * When the problem involves grouping by "same characters regardless of order",
 * the canonical key trick is the go-to approach:
 * - Sort each string alphabetically → anagrams will produce the same sorted key.
 * - Use a Map<sortedKey, string[]> to bucket strings under their sorted version.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * - "eat" → sorted: "aet"  → Map: {"aet": ["eat"]}
 * - "tea" → sorted: "aet"  → Map: {"aet": ["eat", "tea"]}
 * - "tan" → sorted: "ant"  → Map: {"aet": [...], "ant": ["tan"]}
 * - "ate" → sorted: "aet"  → Map: {"aet": ["eat", "tea", "ate"], ...}
 * - "nat" → sorted: "ant"  → Map: {..., "ant": ["tan", "nat"]}
 * - "bat" → sorted: "abt"  → Map: {..., "abt": ["bat"]}
 * Return all Map values: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
 *
 * INTERVIEW TIPS:
 * - Always mention the sorted key approach first — it is simple and easy to explain.
 * - For follow-up, an alternative key is a character frequency array (e.g., "a2t1e1"),
 *   which avoids the O(k log k) sort cost per string (k = string length).
 * - Mention that Map preserves insertion order in JavaScript, which is useful here.
 * - Edge cases: empty string "" → sorted key is "" → groups alone.
 *
 * Time Complexity:  O(n * k log k) — n strings, each of length k, sorted in O(k log k).
 * Space Complexity: O(n * k)       — the Map stores all strings.
 */