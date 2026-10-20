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