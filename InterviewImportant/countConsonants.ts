
/**
 * 1. Count Consonants in a Name
 * 
 * Given a string representing a name, count and return the total number
 * of consonant letters (alphabetic characters excluding 'a', 'e', 'i', 'o', 'u', case-insensitive).
 * 
 * Example 1:
 * Input: name = "Gemini"
 * Output: 3
 * Explanation: Consonants are 'G', 'm', 'n'.
 * 
 * Example 2:
 * Input: name = "Alexander"
 * Output: 5
 * Explanation: Consonants are 'l', 'x', 'n', 'd', 'r'.
 * 
 * Constraints:
 * - 0 <= name.length <= 10^4
 * - name may contain letters, spaces, or hyphens
 */

//Bad Solllution
// function countConsonents(input:String):number{
    
//     if(input.length<=0){
//         return 0
//     }
//     let count=0
//     let inputSmall=input.toLowerCase()
//     for(let i=0;i<input.length;i++){
//         if(inputSmall[i]!=='a' && inputSmall[i]!=='e' && inputSmall[i]!=='i' && inputSmall[i]!=='o' && inputSmall[i]!=='u'){
//             count++
//         }
//     }

//     return count

// }
// console.log(countConsonents("Sumeet"))
// console.log(countConsonents("A"))
// console.log(countConsonents("Gemini"))

//Best Soolution

function countConsonants(input:string):number{
    
    let count=0
    let lower=input.toLowerCase()
    let vowels=new Set(['a','e','i','o','u'])

    for(let i=0;i<lower.length;i++){
        let char=lower[i]
        if(char >= 'a' && char <= 'z' && !vowels.has(char)){
            count++
        }
    }
    return count
}

// Test cases
console.log(countConsonants("Sumeet"));    // 3 ('S', 'm', 't')
console.log(countConsonants("A"));         // 0 (Only vowel)
console.log(countConsonants("Gemini"));    // 3 ('G', 'm', 'n')
console.log(countConsonants("Mary-Jane")); // 5 ('M', 'r', 'y', 'J', 'n' - ignores hyphen)
console.log(countConsonants(""));          // 0


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Count only the CONSONANT letters in a string — skip vowels (a, e, i, o, u),
 * non-alphabetic characters (spaces, hyphens, digits), and apply case-insensitively.
 * Consonants are any alphabetic character that is NOT a vowel.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a FILTER + COUNT pattern using a Set for O(1) vowel lookup.
 * Two conditions must BOTH be true for a character to be counted as a consonant:
 *   1. It must be an alphabetic letter (a–z after lowercasing).
 *   2. It must NOT be a vowel.
 * A Set of vowels is ideal here — has() check is O(1) and the code reads naturally.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "Gemini", lower = "gemini", vowels = {a,e,i,o,u}
 * i=0 'g': is a-z ✅, not in vowels ✅ → count=1
 * i=1 'e': is a-z ✅, IS a vowel ❌    → skip
 * i=2 'm': is a-z ✅, not in vowels ✅ → count=2
 * i=3 'i': is a-z ✅, IS a vowel ❌    → skip
 * i=4 'n': is a-z ✅, not in vowels ✅ → count=3
 * i=5 'i': is a-z ✅, IS a vowel ❌    → skip
 * Return 3 ✅
 *
 * input = "Mary-Jane", lower = "mary-jane"
 * '-' → not a-z → skip (hyphen ignored automatically by the alpha check)
 * Consonants counted: m, r, y, j, n → 5 ✅
 *
 * INTERVIEW TIPS:
 * - The check `char >= 'a' && char <= 'z'` is the cleanest way to confirm alphabetic
 *   without using regex — it naturally excludes spaces, hyphens, digits.
 * - Using a Set(['a','e','i','o','u']) is preferred over a long chain of `!== 'a' && ...`
 *   conditions — it's cleaner, easier to maintain, and O(1) lookup.
 * - The "bad solution" (commented out above) used the chain approach — mention in interviews
 *   that using a Set is the improvement: fewer conditions, more readable.
 * - If regex is preferred: /^[b-df-hj-np-tv-z]$/.test(char) matches consonants directly.
 * - Edge case: empty string → loop never runs → returns 0.
 *   All vowels (e.g., "aeiou") → no consonants → returns 0.
 *
 * Time Complexity:  O(n) — single pass through the string.
 * Space Complexity: O(1) — the vowels Set has a fixed size of 5.
 */


/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Count only the CONSONANT letters in a string — skip vowels (a, e, i, o, u),
 * non-alphabetic characters (spaces, hyphens, digits), and apply case-insensitively.
 * Consonants are any alphabetic character that is NOT a vowel.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a FILTER + COUNT pattern using a Set for O(1) vowel lookup.
 * Two conditions must BOTH be true for a character to be counted as a consonant:
 *   1. It must be an alphabetic letter (a–z after lowercasing).
 *   2. It must NOT be a vowel.
 * A Set of vowels is ideal here — has() check is O(1) and the code reads naturally.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "Gemini", lower = "gemini", vowels = {a,e,i,o,u}
 * i=0 'g': is a-z ✅, not in vowels ✅ → count=1
 * i=1 'e': is a-z ✅, IS a vowel ❌    → skip
 * i=2 'm': is a-z ✅, not in vowels ✅ → count=2
 * i=3 'i': is a-z ✅, IS a vowel ❌    → skip
 * i=4 'n': is a-z ✅, not in vowels ✅ → count=3
 * i=5 'i': is a-z ✅, IS a vowel ❌    → skip
 * Return 3 ✅
 *
 * input = "Mary-Jane", lower = "mary-jane"
 * '-' → not a-z → skip (hyphen ignored automatically by the alpha check)
 * Consonants counted: m, r, y, j, n → 5 ✅
 *
 * INTERVIEW TIPS:
 * - The check `char >= 'a' && char <= 'z'` is the cleanest way to confirm alphabetic
 *   without using regex — it naturally excludes spaces, hyphens, digits.
 * - Using a Set(['a','e','i','o','u']) is preferred over a long chain of `!== 'a' && ...`
 *   conditions — it's cleaner, easier to maintain, and O(1) lookup.
 * - The "bad solution" (commented out above) used the chain approach — mention in interviews
 *   that using a Set is the improvement: fewer conditions, more readable.
 * - If regex is preferred: /^[b-df-hj-np-tv-z]$/.test(char) matches consonants directly.
 * - Edge case: empty string → loop never runs → returns 0.
 *   All vowels (e.g., "aeiou") → no consonants → returns 0.
 *
 * Time Complexity:  O(n) — single pass through the string.
 * Space Complexity: O(1) — the vowels Set has a fixed size of 5.
 */
console.log(countConsonants(""));          // 0
