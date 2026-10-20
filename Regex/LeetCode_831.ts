/**
 * 831. Masking Personal Information
 *
 * You are given a personal information string s, representing either an email address or a phone number.
 *
 * You need to mask it according to the following rules:
 * - For email addresses:
 *   - The local name part (before '@') should be masked as follows:
 *     - keep the first and last characters if the length > 2
 *     - keep the first character if the length == 2
 *     - keep the entire string if the length == 1
 *   - Replace all other characters with '*'
 *   - Keep the domain part unchanged
 * 
 * 
 * - For phone numbers:
 *   - Remove all non-digits from the string.
 *   - Keep the last 10 digits.
 *   - Format the masked number as:
 *     - "***-***-6789" if the original had 10 digits
 *     - "+*-***-***-6789" if it had 11 digits
 *     - "++***-***-***-6789" if it had 12 digits
 *     - "+++***-***-***-6789" if it had 13 digits
 *
 * Example 1:
 * Input: s = "LeetCode@LeetCode.com"
 * Output: "lE***********@leetcode.com"
 *
 * Example 2:
 * Input: s = "AB@qq.com"
 * Output: "a*****b@qq.com"
 *
 * Example 3:
 * Input: s = "1(234)567-890"
 * Output: "***-***-890"
 *
 * Constraints:
 * s consists of English letters, digits, and special characters like '@', '.', '+', '-', '(', ')', and spaces
 * 1 <= s.length <= 100
 */

function maskPII(s: string): string {
    if (s.includes("@")) {
        return maskEmail(s)
    } else {
        return maskPhoneNumber(s)
    }

};

function maskEmail(s: string): string {
    //1. tolowercase
    //2. split by @
    //3. result= name[0] + "*****" + name[last]+ "@" + domain
    let input = s.toLowerCase()
    let localeName = input.split("@")
    let name = localeName[0]
    let domain = localeName[1]
    let nameSplit = name.split("")
    let fistletter = nameSplit[0]
    let lastletter = nameSplit[nameSplit.length - 1]

    if (name.length >= 2) {
        let result = fistletter + "*****" + lastletter + "@" + domain
        return result
    } else if (name.length === 1) {
        let result = "*****" + "@" + domain
        return result
    } else {
        return "Invalid EmailID"
    }
}

function maskPhoneNumber(s: string): string {
    // 1. Remove all non-digits from string using regex (\D)
    const digits = s.replace(/\D/g, "")
    // 2. Extract the last 4 digits (these will be exposed at the end)
    const lastFour = digits.slice(-4)
    const count = digits.length;
    const local = `***-***-${lastFour}`;

    if (count === 10) {
        return local;
    } else if (count === 11) {
        return `+*-${local}`;
    } else if (count === 12) {
        return `+**-${local}`;
    } else if (count === 13) {
        return `+***-${local}`;
    }
    return ""
}

console.log(maskPII("Sumeetshah.Tsk@gmail.com"))
console.log(maskPII("AB@qq.com"))
console.log(maskPII("S@gmail.com"))

// 11-digit phone numbers (Country code: 1 digit -> "+*-")
console.log(maskPII("+1 (333) 444-5678"));  // Output: "+*-***-***-5678"
console.log(maskPII("1-333-444-5678"));    // Output: "+*-***-***-5678"
console.log(maskPII("1 333 444 5678"));    // Output: "+*-***-***-5678"
console.log(maskPII("+13334445678"));      // Output: "+*-***-***-5678"
// 10-digit phone number (No country code -> "***-***-")
console.log(maskPII("1(234)567-890"));     // Output: "***-***-7890"
// 12-digit phone number (Country code: 2 digits -> "+**-")
console.log(maskPII("+86(10)12345678"));   // Output: "+**-***-***-5678"
// 13-digit phone number (Country code: 3 digits -> "+***-")
console.log(maskPII("+123 456 789 0123")); // Output: "+***-***-***-0123"
