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

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * We are given a personal information string that is EITHER an email OR a phone number.
 * We must mask it: hide most characters but keep a few identifying characters visible.
 * - Email: keep first and last characters of the local part, mask the rest with *****.
 * - Phone: strip all formatting, keep only the last 4 digits visible,
 *   and prefix with +* / +** / +*** depending on how many extra country-code digits there are.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a string manipulation / parsing problem.
 * The first decision is always: email or phone?
 * - If it contains "@" → email path.
 * - Otherwise → phone number path.
 * After that, each path is a series of straightforward string operations.
 *
 * EMAIL WALKTHROUGH:
 * "LeetCode@LeetCode.com"
 * 1. Lowercase → "leetcode@leetcode.com"
 * 2. Split at "@" → local = "leetcode", domain = "leetcode.com"
 * 3. Mask → first char + "*****" + last char + "@" + domain
 *          = "l*****e@leetcode.com"
 *
 * PHONE WALKTHROUGH:
 * "+1 (333) 444-5678"
 * 1. Strip non-digits → "13334445678" (11 digits)
 * 2. Last 4 digits = "5678", build base = "***-***-5678"
 * 3. Extra digits = 11 - 10 = 1 → prefix = "+*-"
 * 4. Result = "+*-***-***-5678"
 *
 * INTERVIEW TIPS:
 * - Clearly identify the two branches early; interviewers like to see structured thinking.
 * - For email, always lowercase first — this avoids case-sensitivity bugs.
 * - For phone, using \D regex to strip non-digits is cleaner than manual character checks.
 * - Mention edge cases: single-character local name in email, 10-digit vs 13-digit phone.
 * - The formula for phone prefix: (total digits - 10) extra country-code digits → that many "+" stars.
 *
 * Time Complexity:  O(n) — we scan the string a constant number of times.
 * Space Complexity: O(n) — we build new strings for the result.
 */
