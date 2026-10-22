/**
 * 387. First Unique Character in a String
 *
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 *
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 *
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 * Constraints:
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters
 */

function firstUniqChar(s: string): number {
    
    // First pass: count how many times each character appears.
    let myMap=new Map<string,number>()
    for(let i=0;i<s.length;i++){
        let currentNumber=s[i]
        if(!myMap.has(currentNumber)){
            myMap.set(currentNumber,1)
        }else{
            let count:number=myMap.get(currentNumber)||0
            myMap.set(currentNumber,count+1)
        }
    }

    // Second pass: scan in original order so the first unique character is returned.
    for(let i=0;i<s.length;i++){
        if(myMap.get(s[i])===1){
            return i
        }
    }

    return -1
};

console.log(firstUniqChar("leetcode"));     // 0 ('l')
console.log(firstUniqChar("loveleetcode")); // 2 ('v')
console.log(firstUniqChar("aabb"));         // -1

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Find the FIRST character in the string that appears exactly ONCE and return its index.
 * "First" means the leftmost in the original string.
 * If no such character exists, return -1.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TWO-PASS frequency Map pattern:
 * Pass 1 — count the frequency of every character.
 * Pass 2 — scan left to right and find the first character with frequency 1.
 * The two-pass approach is needed because "first unique" requires knowing ALL frequencies
 * before committing to an answer — a single pass can't tell if a character seen once
 * will appear again later.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * s = "loveleetcode"
 * Pass 1 — build frequency Map:
 *   {l:2, o:2, v:1, e:4, t:1, c:1, d:1}
 * Pass 2 — scan original string left to right:
 *   i=0 → 'l': count=2 → skip
 *   i=1 → 'o': count=2 → skip
 *   i=2 → 'v': count=1 → return 2 ✅
 *
 * INTERVIEW TIPS:
 * - The second pass must scan the ORIGINAL string in order (not the Map), because
 *   Maps don't guarantee the same order as the input positions.
 * - Mention the O(1) space optimization: since input is lowercase English letters,
 *   a fixed-size array of 26 can replace the Map.
 * - If the interviewer asks for a one-pass solution, it's technically possible using
 *   a LinkedHashMap (insertion-order Map), but two-pass is cleaner to explain.
 * - Edge case: all characters repeat → return -1 (loop finishes without finding count===1).
 *
 * Time Complexity:  O(n) — two linear passes over the string.
 * Space Complexity: O(1) — at most 26 distinct lowercase characters stored.
 */