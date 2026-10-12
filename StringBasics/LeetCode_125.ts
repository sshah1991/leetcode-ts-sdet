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
 * Interview prep explanation:
 *
 * The key idea is to normalize the string before checking palindrome behavior.
 * We should ignore case and remove all non-alphanumeric characters because a palindrome
 * is judged only on letters and numbers.
 *
 * Steps:
 * 1. Convert the string to lowercase.
 * 2. Remove every character that is not a letter or digit.
 * 3. Reverse the cleaned string.
 * 4. Compare it with the original cleaned string.
 *
 * Example:
 * "A man, a plan, a canal: Panama"
 * becomes "amanaplanacanalpanama"
 * which reads the same forward and backward, so the answer is true.
 *
 * Why this is a good interview approach:
 * - It directly matches the problem statement.
 * - It is easy to explain in a few steps.
 * - It handles punctuation and uppercase/lowercase cleanly.
 *
 * Time Complexity: O(n)
 * - We scan and transform the string once, then reverse it.
 *
 * Space Complexity: O(n)
 * - We create a cleaned string and a reversed version.
 */

console.log(checkPalindrome("A man, a plan, a canal: Panama"))
console.log(checkPalindrome("race a car"))
console.log(checkPalindrome(" "))