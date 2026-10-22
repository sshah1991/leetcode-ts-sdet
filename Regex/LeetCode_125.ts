/**
 * 125. Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
 * and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 *
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters
 */

function checkPalindrome(input:string):boolean{
    const lowerCaseInput=input.toLowerCase()
    const regex=/[^a-z0-9]/g
    const cleanString=lowerCaseInput.replace(regex,"")
    
    const revString=cleanString.split("").reverse().join("")
    if(cleanString===revString){
        return true
    }else{
         return false
    }

   
}

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * A palindrome reads the same forwards and backwards. But here we must IGNORE:
 * - Case (uppercase/lowercase)
 * - Non-alphanumeric characters (spaces, punctuation, etc.)
 * Only letters and digits count. After cleaning, check if the result is a palindrome.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a string NORMALIZATION + PALINDROME CHECK pattern.
 * Whenever a problem says "ignore certain characters / case", the first step is always
 * to clean/normalize the string before applying the main logic.
 * Steps:
 * 1. Normalize: lowercase + remove non-alphanumeric via regex.
 * 2. Check: compare the cleaned string with its reverse.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "A man, a plan, a canal: Panama"
 * 1. toLowerCase()  → "a man, a plan, a canal: panama"
 * 2. replace(/[^a-z0-9]/g, "") → "amanaplanacanalpanama"
 * 3. reverse         → "amanaplanacanalpanama"
 * 4. cleaned === reversed → true ✅
 *
 * input = "race a car"
 * 1. toLowerCase()  → "race a car"
 * 2. replace(...)   → "raceacar"
 * 3. reverse         → "racaecar"
 * 4. "raceacar" !== "racaecar" → false ✅
 *
 * INTERVIEW TIPS:
 * - The regex [^a-z0-9] means "anything that is NOT a-z or 0-9" — the ^ inside [] negates.
 * - An alternative O(1) space approach: use two pointers (left, right) directly on the cleaned
 *   string, moving inward and comparing characters — avoids building a reversed copy.
 * - Mention that .split("").reverse().join("") is idiomatic JS for reversing a string.
 * - Edge case: " " (only a space) → cleaned string is "" → "" === "" → true.
 *
 * Time Complexity:  O(n) — we scan and transform the string once, then reverse it.
 * Space Complexity: O(n) — we create a cleaned string and a reversed version.
 */

console.log(checkPalindrome("A man, a plan, a canal: Panama"))
console.log(checkPalindrome("race a car"))
console.log(checkPalindrome(" "))