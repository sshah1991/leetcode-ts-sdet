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
 * Interview prep explanation:
 *
 * The main idea is to identify which IP format the input belongs to and then validate it using the exact rules.
 * We split the string by the separator ('.' for IPv4, ':' for IPv6) and check each segment one by one.
 *
 * For IPv4:
 * - there must be exactly 4 parts
 * - each part must be 1 to 3 digits
 * - each number must be between 0 and 255
 * - no leading zeros are allowed
 *
 * For IPv6:
 * - there must be exactly 8 parts
 * - each part must be 1 to 4 characters long
 * - each part can only contain hexadecimal characters: 0-9, a-f, A-F
 *
 * Why this is a good interview solution:
 * - It follows the rules directly.
 * - The logic is easy to explain in structured checks.
 * - It is a classic validation problem using splitting and regex.
 *
 * Time Complexity: O(n)
 * - We scan the string and validate each segment once.
 *
 * Space Complexity: O(n)
 * - We create arrays of segments from splitting the string.
 */

