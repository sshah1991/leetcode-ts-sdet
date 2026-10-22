/**
 * 468. Validate IP Address
 *
 * Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address,
 * or "Neither" if IP is not a correct IP of any type.
 *
 * A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros.
 * For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1", "192.168.1.00",
 * and "192.168@1.1" are invalid IPv4 addresses.
 *
 * A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
 * - 1 <= xi.length <= 4
 * - xi is a hexadecimal string which may contain digits, lowercase English letters ('a' to 'f') and uppercase English letters ('A' to 'F')
 * - Leading zeros are allowed in xi
 *
 * Example 1:
 * Input: queryIP = "172.16.254.1"
 * Output: "IPv4"
 *
 * Example 2:
 * Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * Output: "IPv6"
 *
 * Example 3:
 * Input: queryIP = "256.256.256.256"
 * Output: "Neither"
 *
 * Constraints:
 * queryIP consists only of English letters, digits, and the characters '.' and ':'
 */

function validateIP(inputIP: string): string {

    // First decide which format we are checking.
    // If the string contains ':' then it must be an IPv6 address.
    // If it contains '.' then it must be an IPv4 address.
    if (inputIP.includes(":")) {
        console.log("Validating IPv6 conditions")
        if (validateConditions_IPv6(inputIP)) {
            return "IPv6"
        } else {
            return "Neither"
        }
    } else if (inputIP.includes(".")) {
        console.log("Validating IPv4 conditions")
        if (validateConditions_IPv4(inputIP)) {
            return "IPv4"
        } else {
            return "Neither"
        }
    } else {
        return "Neither"
    }
}

// IPv4 rule: exactly 4 sections separated by dots.
// Each section must be a number from 0 to 255 and cannot have leading zeros.
function validateConditions_IPv4(inputIP: string): boolean {
    const allInputIP = inputIP.split(".")

    if (allInputIP.length !== 4) {
        console.log("length missmatch")
        return false
    }
    return allInputIP.every(ip => {

        if (!/^\d{1,3}$/.test(ip)) {
            console.log("Cannot contain leading anything other than numbers")
            return false
        }
        if (Number(ip) < 0 || Number(ip) > 255) {
            console.log("0 <= xi <= 255 Condition Missmatch")
            return false
        }
        if (ip.startsWith("0") && ip.length > 1) {
            console.log("Cannot contain leading zeros Condition Missmatch")
            return false
        }
        
        return true
    })
}

// IPv6 rule: exactly 8 sections separated by colons.
// Each section is 1 to 4 hexadecimal characters and may contain only 0-9, a-f, A-F.
function validateConditions_IPv6(inputIP: string): boolean {

    const allInputIp=inputIP.split(":")
    if(allInputIp.length!==8){
        console.log("complete string length mismatch")
        return false
    }
    return allInputIp.every(ip=>{
        if(ip.length<1 || ip.length>4){
             console.log("indvisual char length mismatch")
             return false
        }
        if(!/^[a-fA-F0-9]{1,4}$/.test(ip)){
            console.log("contains invalid character")
             return false
        }
        return true
    })
    
}
 // Test cases
console.log(validateIP("172.16.25.A01")); // "Neither"
console.log("***************************")
console.log(validateIP("2001:0db8:85a3:0:0:8A2E:0370:7334")); // "IPv6"
console.log("***************************")
console.log(validateIP("256.256.256.256")); // "Neither"
console.log("***************************")
console.log(validateIP("192.168.1.1")); // "IPv4"
console.log("***************************")
console.log(validateIP("192.168.01.1")); // "Neither"
console.log("***************************")
console.log(validateIP("2001:0db8:85a3::8A2E:0370:7334")); // "Neither"
console.log("***************************")
/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Determine if a string is a valid IPv4 address, a valid IPv6 address, or neither.
 * The two formats have very different rules — you cannot apply the same validation to both.
 * The first decision is always: which format are we even dealing with?
 * - Contains "." → must be IPv4 (or neither if it fails IPv4 rules).
 * - Contains ":" → must be IPv6 (or neither if it fails IPv6 rules).
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a SPLIT + VALIDATE EACH SEGMENT pattern — a structured parsing problem.
 * For any "validate a formatted string" problem:
 * 1. Identify the separator and expected segment count.
 * 2. Split by the separator.
 * 3. Validate each segment against the specific rules.
 * Use helper functions to keep IPv4 and IPv6 logic separate and readable.
 *
 * STEP-BY-STEP WALKTHROUGH — IPv4:
 * input = "192.168.01.1"
 * 1. Contains "." → IPv4 path
 * 2. split(".")  → ["192", "168", "01", "1"] → length 4 ✅
 * 3. Validate each part:
 *    "192" → digits only ✅, 0-255 ✅, no leading zero ✅
 *    "168" → ✅
 *    "01"  → starts with "0" and length > 1 → LEADING ZERO ❌ → return "Neither"
 *
 * STEP-BY-STEP WALKTHROUGH — IPv6:
 * input = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * 1. Contains ":" → IPv6 path
 * 2. split(":")  → 8 parts ✅
 * 3. Each part: length 1-4 ✅, only [0-9a-fA-F] ✅ → return "IPv6"
 *
 * INTERVIEW TIPS:
 * - The leading zero check for IPv4 is the most common mistake — always include it.
 *   "01" is NOT valid even though Number("01") = 1.
 * - For IPv6, leading zeros ARE allowed ("0001" is valid), unlike IPv4.
 * - The regex /^\d{1,3}$/ ensures only digits (no letters or signs) before converting to Number.
 * - Edge case: "2001:0db8:85a3::8A2E:0370:7334" has an empty segment after split → length check fails → "Neither".
 * - Splitting "1.2.3.4." (trailing dot) gives 5 parts → length check fails → "Neither".
 *
 * Time Complexity:  O(n) — we scan and validate each character once.
 * Space Complexity: O(n) — we create arrays of segments from splitting.
 */

