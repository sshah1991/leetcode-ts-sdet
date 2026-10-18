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