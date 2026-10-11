/**
 * 1108. Defanging an IP Address
 *
 * Given a valid (IPv4) IP address, return a defanged version of that IP address.
 * A defanged IP address replaces every period "." with "[.]".
 *
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 *
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 */

function defangIPaddr(address: string): string {

    const newAddress = address.split(".").join("[.]")
    return newAddress
}

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

/**
 * Explanation for interview prep:
 *
 * The goal is to replace every period in the IP address with the string "[.]".
 * Since the input is a valid IPv4 address, we know the dots are the only separators we need to alter.
 *
 * A simple and readable approach is:
 * 1. Split the string at every ".".
 * 2. Join the pieces back together using "[.]" as the separator.
 *
 * Example:
 * "1.1.1.1" -> ["1", "1", "1", "1"] -> "1[.]1[.]1[.]1"
 *
 * Why this is good for interviews:
 * - It is easy to explain in a few seconds.
 * - It uses the built-in string operations directly.
 * - It handles all valid IPv4 addresses without extra complexity.
 *
 * Time Complexity: O(n)
 * - We scan through the string and rebuild it once.
 *
 * Space Complexity: O(n)
 * - We create a new string for the defanged result.
 */
