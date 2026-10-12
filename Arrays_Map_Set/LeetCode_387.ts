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
 * Interview prep explanation:
 *
 * We need the index of the first character that occurs exactly once.
 * Use two passes so character counting and preserving original order stay simple:
 * 1. Count every character with a Map.
 * 2. Scan the string from left to right and return the first index whose count is 1.
 * If no such character exists, return -1.
 *
 * Example: "loveleetcode"
 * The Map shows that 'l' and 'e' repeat, while 'v' occurs once. Scanning from
 * the start finds 'v' first, at index 2, so return 2.
 *
 * Time Complexity: O(n), for the two passes over the string.
 * Space Complexity: O(1) for this problem's fixed lowercase-English alphabet
 * (at most 26 character counts are stored).
 */