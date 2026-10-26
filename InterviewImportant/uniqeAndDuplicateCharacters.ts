/**
 * 3. Find Unique and Duplicate Characters Without Collections
 * 
 * Given a string representing a name, find and separate all unique characters 
 * (characters that appear exactly once) and duplicate characters (characters 
 * that appear more than once) without using Java Collections (no Set, List, Map).
 * 
 * Example 1:
 * Input: name = "programming"
 * Output: Unique: ['o', 'a', 'i', 'n'], Duplicates: ['r', 'g', 'm', 'p' depends on case]
 * 
 * Example 2:
 * Input: name = "java"
 * Output: Unique: ['j', 'v'], Duplicates: ['a']
 * 
 * Constraints:
 * - 0 <= name.length <= 10^5
 * - Solved strictly using primitive arrays or bitwise operations
 */

function findUniqueAndDuplicates(input: string): { unique: string[]; duplicate: string[] } {

    const freq = new Int32Array(256)
    const unique: string[] = []
    const duplicate: string[] = []

    // Pass 1: Count frequency of every character using ASCII codes
    for (let i = 0; i < input.length; i++) {
        const assciCode = input.charCodeAt(i)
        freq[assciCode]++
    }

    // Pass 2: Separate unique vs duplicates in order of appearance

    for(let i=0;i<input.length;i++){
        const char=input[i]
        const assciCode= input.charCodeAt(i)
        if(freq[assciCode]===1){
            unique.push(char)
        }else if(freq[assciCode]>1){
            duplicate.push(char)
            freq[assciCode]=0
        }
    }

    return { unique, duplicate }
}
console.log(findUniqueAndDuplicates("programming"));
// { unique: [ 'p', 'o', 'a', 'i', 'n' ], duplicates: [ 'r', 'g', 'm' ] }

console.log(findUniqueAndDuplicates("java"));
// { unique: [ 'j', 'v' ], duplicates: [ 'a' ] }

console.log(findUniqueAndDuplicates("Programming"));
// { unique: [ 'P', 'r', 'o', 'a', 'i', 'n' ], duplicates: [ 'g', 'm' ] }

console.log(findUniqueAndDuplicates("aabbcc"));
// { unique: [], duplicates: [ 'a', 'b', 'c' ] }

console.log(findUniqueAndDuplicates("abcdef"));
// { unique: [ 'a', 'b', 'c', 'd', 'e', 'f' ], duplicates: [] }

console.log(findUniqueAndDuplicates(""));
// { unique: [], duplicates: [] }


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Separate a string's characters into two buckets:
 * - unique: characters that appear EXACTLY once.
 * - duplicate: characters that appear MORE THAN once (each listed only once).
 * The constraint: no JS Map/Set — use a fixed-size array indexed by ASCII code.
 * Preserve original order of first appearance.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TWO-PASS FREQUENCY ARRAY pattern — the "no collections" variant of the
 * frequency Map approach.
 * Instead of a Map<char, count>, use Int32Array(256) where index = ASCII code.
 * - Pass 1: count[charCode]++ for every character → builds frequency table.
 * - Pass 2: scan original string in order → check frequency → route to unique or duplicate.
 * Setting freq[code] = 0 after first duplication prevents the same duplicate being listed twice.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "java"
 * Pass 1 — freq array (only relevant indices):
 *   'j'(106)→1, 'a'(97)→2, 'v'(118)→1
 *
 * Pass 2 — scan "java" in order:
 *   i=0 'j': freq[106]=1  → unique=['j']
 *   i=1 'a': freq[97]=2   → duplicate=['a'], freq[97]=0  (zeroed to avoid re-adding)
 *   i=2 'v': freq[118]=1  → unique=['j','v']
 *   i=3 'a': freq[97]=0   → neither condition (already zeroed) → skip
 * Return { unique:['j','v'], duplicate:['a'] } ✅
 *
 * INTERVIEW TIPS:
 * - Int32Array(256) covers the full ASCII range — all printable characters (letters, digits,
 *   symbols, space) have ASCII codes 0–127, so 256 is a safe upper bound.
 * - Setting freq[code] = 0 after pushing to duplicates is the key trick to prevent
 *   the same duplicate from being pushed multiple times in Pass 2.
 * - This technique is the O(1) space alternative to a Map when the character set is bounded.
 * - If Unicode characters are possible, this approach breaks — mention that a Map is needed instead.
 * - Pass 2 must scan the ORIGINAL string (not the freq array) to preserve insertion order.
 * - Edge case: empty string → both passes do nothing → { unique:[], duplicate:[] }.
 *   All same character (e.g., "aaa") → unique=[], duplicate=['a'].
 *
 * Time Complexity:  O(n) — two passes over the string of length n.
 * Space Complexity: O(1) — Int32Array(256) is a fixed-size structure, independent of input.
 */


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Separate a string's characters into two buckets:
 * - unique: characters that appear EXACTLY once.
 * - duplicate: characters that appear MORE THAN once (each listed only once).
 * The constraint: no JS Map/Set — use a fixed-size array indexed by ASCII code.
 * Preserve original order of first appearance.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a TWO-PASS FREQUENCY ARRAY pattern — the "no collections" variant of the
 * frequency Map approach.
 * Instead of a Map<char, count>, use Int32Array(256) where index = ASCII code.
 * - Pass 1: count[charCode]++ for every character → builds frequency table.
 * - Pass 2: scan original string in order → check frequency → route to unique or duplicate.
 * Setting freq[code] = 0 after first duplication prevents the same duplicate being listed twice.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "java"
 * Pass 1 — freq array (only relevant indices):
 *   'j'(106)→1, 'a'(97)→2, 'v'(118)→1
 *
 * Pass 2 — scan "java" in order:
 *   i=0 'j': freq[106]=1  → unique=['j']
 *   i=1 'a': freq[97]=2   → duplicate=['a'], freq[97]=0  (zeroed to avoid re-adding)
 *   i=2 'v': freq[118]=1  → unique=['j','v']
 *   i=3 'a': freq[97]=0   → neither condition (already zeroed) → skip
 * Return { unique:['j','v'], duplicate:['a'] } ✅
 *
 * INTERVIEW TIPS:
 * - Int32Array(256) covers the full ASCII range — all printable characters (letters, digits,
 *   symbols, space) have ASCII codes 0–127, so 256 is a safe upper bound.
 * - Setting freq[code] = 0 after pushing to duplicates is the key trick to prevent
 *   the same duplicate from being pushed multiple times in Pass 2.
 * - This technique is the O(1) space alternative to a Map when the character set is bounded.
 * - If Unicode characters are possible, this approach breaks — mention that a Map is needed instead.
 * - Pass 2 must scan the ORIGINAL string (not the freq array) to preserve insertion order.
 * - Edge case: empty string → both passes do nothing → { unique:[], duplicate:[] }.
 *   All same character (e.g., "aaa") → unique=[], duplicate=['a'].
 *
 * Time Complexity:  O(n) — two passes over the string of length n.
 * Space Complexity: O(1) — Int32Array(256) is a fixed-size structure, independent of input.
 */
// { unique: [], duplicates: [] }
