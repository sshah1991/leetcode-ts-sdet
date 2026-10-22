/**
 * 1816. Truncate Sentence
 *
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
 * Each of the words consists of only uppercase and lowercase English letters (no punctuation).
 *
 * You are given a sentence s and an integer k. You want to truncate s such that it contains only the first k words.
 * Return s after truncating it.
 *
 * Example 1:
 * Input: s = "Hello how are you Contestant", k = 4
 * Output: "Hello how are you"
 *
 * Example 2:
 * Input: s = "What is the solution to this problem", k = 4
 * Output: "What is the solution"
 *
 * Example 3:
 * Input: s = "chopper is not a tanuki", k = 5
 * Output: "chopper is not a tanuki"
 *
 * Constraints:
 * 1 <= s.length <= 500
 * k is in the range [1, the number of words in s]
 * s consists of only lowercase and uppercase English letters and spaces
 * The words in s are separated by a single space
 * There are no leading or trailing spaces
 */
function truncateSentence(input:string,k:number):string{
    const newstring=input.split(" ").slice(0,k).join(" ")
    console.log(newstring)
    return newstring
}
truncateSentence("Hello how are you Contestant",4)
truncateSentence("What is the solution to this problem",4)
truncateSentence("chopper is not a tanuki",5)

/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Given a sentence (words separated by single spaces, no extra spaces) and a number k,
 * return only the FIRST k words joined back as a sentence.
 * The input is clean — no leading/trailing spaces, single spaces between words —
 * so we don't need to do any trimming or multi-space handling.
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a SPLIT + SLICE + JOIN pattern.
 * When a problem says "take the first k words", think:
 * - Split by the delimiter (space) to get an array of words.
 * - Use slice(0, k) to take only the first k elements.
 * - Join back with the delimiter to rebuild the sentence.
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "Hello how are you Contestant", k = 4
 * 1. split(" ")    → ["Hello", "how", "are", "you", "Contestant"]
 * 2. slice(0, 4)   → ["Hello", "how", "are", "you"]
 * 3. join(" ")     → "Hello how are you" ✅
 *
 * input = "chopper is not a tanuki", k = 5
 * 1. split(" ")    → ["chopper", "is", "not", "a", "tanuki"]   (5 words)
 * 2. slice(0, 5)   → ["chopper", "is", "not", "a", "tanuki"]   (all 5, nothing removed)
 * 3. join(" ")     → "chopper is not a tanuki" ✅
 *
 * INTERVIEW TIPS:
 * - The problem guarantees k is in the valid range [1, number of words], so no out-of-bounds risk.
 * - Because the input has no extra spaces, split(" ") (literal space) works perfectly here.
 *   If input could have multiple spaces, split(/\s+/) would be needed instead.
 * - Mention that slice is non-destructive — it creates a new array, leaving the original intact.
 * - This is a classic "read the constraints carefully" problem — the clean input makes the solution simple.
 *
 * Time Complexity:  O(n) — split, slice, and join all process the string in linear time.
 * Space Complexity: O(n) — we create a new words array and a new result string.
 */