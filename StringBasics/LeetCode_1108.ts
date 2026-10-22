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
 *
 * Constraints:
 * address is a valid IPv4 address
 * 1 <= address.length <= 15
 */


function defangIPaddr(address: string): string {

    const newAddress = address.split(".").join("[.]")
    return newAddress
}

console.log(defangIPaddr("1.1.1.1"));
console.log(defangIPaddr("255.100.50.0"));

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Replace every "." in a valid IPv4 address with "[.]".
 * Everything else stays the same. The input is GUARANTEED to be a valid IPv4,
 * so no need for any validation — just a pure string transformation.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a simple STRING REPLACEMENT / SPLIT-JOIN pattern.
 * Any time you need to replace a delimiter with another string, the idiomatic approach is:
 *   split(oldDelimiter) → join(newDelimiter)
 * This is cleaner and less error-prone than manually scanning with a loop or regex replace.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "1.1.1.1"
 * 1. split(".")  → ["1", "1", "1", "1"]
 * 2. join("[.]") → "1[.]1[.]1[.]1" ✅
 *
 * input = "255.100.50.0"
 * 1. split(".")  → ["255", "100", "50", "0"]
 * 2. join("[.]") → "255[.]100[.]50[.]0" ✅
 *
 * INTERVIEW TIPS:
 * - This is a very common warm-up question — solve it in under 2 minutes and move on.
 * - Mention that split + join is equivalent to replace(/\./g, "[.]") but is more readable.
 * - If asked to do it without split/join/replace: use a loop and build the string manually
 *   character by character, appending "[.]" whenever you see ".".
 * - No edge cases here since the input is guaranteed to be a valid IPv4.
 *
 * Time Complexity:  O(n) — we scan through the string once to split and once to join.
 * Space Complexity: O(n) — we create a new string for the defanged result.
 */
