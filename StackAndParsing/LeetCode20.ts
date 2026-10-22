/**
 * ============================================================================
 * Problem: 20. Valid Parentheses (LeetCode)
 * Difficulty: Easy
 * ============================================================================
 * 
 * Description:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Examples:
 * - Example 1:
 *     Input: s = "()"
 *     Output: true
 * 
 * - Example 2:
 *     Input: s = "()[]{}"
 *     Output: true
 * 
 * - Example 3:
 *     Input: s = "(]"
 *     Output: false
 * 
 * - Example 4:
 *     Input: s = "([])"
 *     Output: true
 * 
 * - Example 5:
 *     Input: s = "([)]"
 *     Output: false
 * 
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'.
 * ============================================================================
 */


function isValid(s: string): boolean {

    // STEP 1: Early Exit Check
    if (s.length % 2 !== 0) {
        return false
    }
    // STEP 2: Define the Lookup Mapping
    const closeToOpen = new Map<string, string>([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);

    // STEP 3: Initialize the Stack
    const stack: string[] = [];

    //STEP 4: Iterate Through Each Character by Index
    for (let i = 0; i < s.length; i++) {
        //STEP 4A: Handle Closing Bracket
        if (closeToOpen.has(s[i])) {
            const topElement = stack.pop()
            if (topElement != closeToOpen.get(s[i])) {
                return false
            }
        } else {
            //STEP 4B: Handle Opening Bracket
            // Push opener ('(', '{', '[') onto the stack
            stack.push(s[i])
        }
    }

    if (stack.length === 0) {
        return true
    } else {
        return false
    }

};



// 1. Standard Valid Cases
console.log(isValid("()"));            // true  - Simple single pair
console.log(isValid("()[]{}"));        // true  - Multiple adjacent valid pairs
console.log(isValid("([])"));          // true  - Nested valid brackets
console.log(isValid("{[()]}"));        // true  - Deeply nested valid brackets
console.log(isValid("((({}[])))"));    // true  - Mixed nesting with duplicates

// 2. Type Mismatch (wrong closer for the current open bracket)
console.log(isValid("(]"));            // false - Open '(' closed by ']'
console.log(isValid("{[}]"));          // false - Inner opener '[' closed by '}'
console.log(isValid("[(])"));          // false - Interleaved/overlapping brackets

// 3. Underflow / Premature Closer (closing bracket appears with no matching opener)
console.log(isValid("]"));             // false - Odd length, starts with a closer
console.log(isValid("]["));            // false - Closer appears before opener (stack empty pop)
console.log(isValid("())"));           // false - Odd length, extra closer at the end
console.log(isValid("())("));          // false - Extra closer in middle, extra opener at end

// 4. Incomplete / Unclosed Brackets (openers left over in stack)
console.log(isValid("("));             // false - Odd length, single opener
console.log(isValid("(()"));           // false - Odd length, missing final closer
console.log(isValid("((("));           // false - Odd length, all openers
console.log(isValid("(([]){"));        // false - Leftover unclosed brackets in stack