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
 * Output: "a*****@qq.com"
 *
 * Example 3:
 * Input: s = "1(234)567-890"
 * Output: "***-***-890"
 *
 * Constraints:
 * s consists of English letters, digits, and special characters like '@', '.', '+', '-', '(', ')', and spaces
 * 1 <= s.length <= 100
 */
