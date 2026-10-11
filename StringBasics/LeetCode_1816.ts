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
 * Interview explanation:
 *
 * The problem is asking us to keep only the first k words from a sentence.
 * Since the sentence is already formatted as words separated by single spaces,
 * the easiest approach is to split the string on spaces and then take only the first k elements.
 *
 * Example:
 * input = "Hello how are you Contestant"
 * k = 4
 * split(" ") gives ["Hello", "how", "are", "you", "Contestant"]
 * slice(0, 4) gives ["Hello", "how", "are", "you"]
 * join(" ") gives "Hello how are you"
 *
 * Why this is a good interview solution:
 * - It directly matches the problem statement.
 * - It is easy to explain in one sentence: "Split the sentence into words, take the first k words, then join them back."
 * - It works because the input guarantees a single space between words and no extra spaces.
 *
 * Time Complexity: O(n)
 * - Splitting, slicing, and joining all process the string in linear time.
 *
 * Space Complexity: O(n)
 * - We create a new array of words and a new string for the result.
 */