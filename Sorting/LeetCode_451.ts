/**
 * 451. Sort Characters By Frequency
 *
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 *
 * If multiple characters have the same frequency, return any order.
 *
 * Example 1:
 * Input: s = "tree"
 * Output: "eert"
 * Explanation: 'e' appears twice while 'r' and 't' both appear once.
 *
 * Example 2:
 * Input: s = "cccaaa"
 * Output: "aaaccc"
 * Explanation: both 'c' and 'a' appear three times, so any order is acceptable.
 *
 * Example 3:
 * Input: s = "Aabb"
 * Output: "bbAa"
 * Explanation: 'b' appears twice, 'A' and 'a' appear once each.
 *
 * Constraints:
 * 1 <= s.length <= 5 * 10^5
 * s consists of uppercase and lowercase English letters and digits
 */

function frequencySort(s: string): string {
    let myMap=new Map<string,number>()
    for(let i=0;i<s.length;i++){
        let currentElement=s[i]
        if(!myMap.has(currentElement)){
            myMap.set(currentElement,0)
        }
        let currentElementCount=myMap.get(currentElement)||0
        myMap.set(currentElement,currentElementCount+1)
    }
    //convert the string to array so we cann apply(a+b) sorting
    let myArray=Array.from(myMap)
    myArray.sort((a,b)=>{
        return b[1]-a[1]
    })
   // console.log(myArray)

    //rebuild the newString
    let result=""
    for(const[char,count] of myArray){
        result+=char.repeat(count)
    }
    return result
};

console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))
console.log(frequencySort("Aabb"))
console.log(frequencySort("19999Aabb"))

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Rearrange the characters of a string so that the most frequent characters
 * come first. Characters with equal frequency can appear in any relative order.
 * Example: "tree" → 'e' appears twice, 't' and 'r' appear once → "eert" or "eetr".
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * Any time you see "sort by frequency", think:
 *   1. Count with a Map (or frequency array).
 *   2. Sort the entries by count descending.
 *   3. Rebuild the string using char.repeat(count).
 * This is a classic frequency-map + sort pattern.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * s = "Aabb"
 * 1. Build frequency Map: {A:1, a:1, b:2}
 * 2. Convert Map to array: [["A",1], ["a",1], ["b",2]]
 * 3. Sort descending by count: [["b",2], ["A",1], ["a",1]]
 * 4. Rebuild:
 *    "b".repeat(2) → "bb"
 *    "A".repeat(1) → "A"
 *    "a".repeat(1) → "a"
 * 5. Result: "bbAa"
 *
 * INTERVIEW TIPS:
 * - Note that 'A' and 'a' are treated as DIFFERENT characters (case-sensitive).
 *   Confirm with the interviewer if case-insensitive grouping is needed.
 * - Sort using b[1] - a[1] for descending numeric sort (not localeCompare).
 * - char.repeat(count) is the cleanest way to rebuild — avoid a nested loop unless asked.
 * - For follow-up: if you need stable tie-breaking (e.g., alphabetical order for same frequency),
 *   add a secondary sort: if (b[1] === a[1]) return a[0].localeCompare(b[0]).
 * - This problem is essentially a "bucket sort by frequency" scenario — mention that for O(n) time.
 *
 * Time Complexity:  O(n + k log k) — n to count, k to sort (k = unique characters, ≤ 26 for letters).
 * Space Complexity: O(n)           — for the Map and result string.
 */