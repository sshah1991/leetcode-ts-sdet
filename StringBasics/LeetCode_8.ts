function myAtoi(s: string): number {
    let i = 0;
    const n = s.length;
    const INT_MAX = 2147483647; // 2^31 - 1
    const INT_MIN = -2147483648; // -2^31

    // Stage 1: Ignore leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }

    // If the string contains only spaces or is empty
    if (i === n) {
        return 0;
    }

    // Stage 2: Determine sign
    let sign = 1;
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        sign = 1;
        i++;
    }

    // Stage 3 & 4: Conversion & 32-bit Clamping
    let result = 0;
    const maxLimitDividedBy10 = Math.floor(INT_MAX / 10); // 214748364

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        // Manual conversion using ASCII character codes (avoiding built-in parsers)
        const digit = s.charCodeAt(i) - 48;

        // Check for 32-bit signed overflow before performing the multiplication
        if (
            result > maxLimitDividedBy10 || 
            (result === maxLimitDividedBy10 && digit > 7)
        ) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return sign * result;
}

// Test Cases
console.log(myAtoi("42"));              // Output: 42
console.log(myAtoi("   -42"));          // Output: -42
console.log(myAtoi("1337c0d3"));        // Output: 1337
console.log(myAtoi("0-1"));             // Output: 0
console.log(myAtoi("words and 987"));   // Output: 0
console.log(myAtoi("-91283472332"));    // Output: -2147483648 (Clamped to INT_MIN)
console.log(myAtoi("2147483648"));      // Output: 21

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Implement the atoi function — convert a string to a 32-bit signed integer.
 * The rules mimic how a real parser works:
 * 1. Skip any leading whitespace.
 * 2. Read an optional '+' or '-' sign.
 * 3. Read as many consecutive digit characters as possible.
 * 4. Clamp the result to the 32-bit signed integer range [-2^31, 2^31 - 1].
 * Stop as soon as a non-digit character is encountered after the digits start.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a string parsing / state machine problem. There are four distinct stages:
 *   Stage 1 → skip whitespace
 *   Stage 2 → read sign
 *   Stage 3 → read digits
 *   Stage 4 → clamp overflow
 * Recognizing these stages lets you write a clean, linear scan without backtracking.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * s = "   -42abc"
 * 1. Skip spaces → i points to '-'
 * 2. Sign '-' found → sign = -1, advance i
 * 3. Read '4', '2' → digit = 4, result = 4; digit = 2, result = 42
 * 4. 'a' is not a digit → stop loop
 * 5. Return sign * result = -42
 *
 * Overflow check (s = "2147483648"):
 * maxLimitDividedBy10 = 214748364
 * When result == 214748364 and next digit == 8 (> 7) → return INT_MAX (2147483647)
 *
 * INTERVIEW TIPS:
 * - The overflow check is the trickiest part — check BEFORE multiplying, not after.
 *   If result > maxLimitDividedBy10 OR (result == maxLimitDividedBy10 AND digit > 7) → clamp.
 *   The magic digit 7 comes from INT_MAX = 2147483647 ending in 7.
 * - Use charCodeAt(i) - 48 to convert char to digit without parseInt (more explicit, avoids locale issues).
 * - Edge cases: all spaces, leading zeros, only sign character ("+"), numbers mixed with letters early.
 * - Don't use parseInt or Number() for the final conversion — the point is to build it manually.
 *
 * Time Complexity:  O(n) — single linear scan of the string.
 * Space Complexity: O(1) — only a few variables are used.
 */
