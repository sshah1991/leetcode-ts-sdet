/**
 * 71. Simplify Path
 *
 * You are given an absolute path for a Unix-style file system, which always begins with a slash '/'.
 * Your task is to transform this absolute path into its simplified canonical path.
 *
 * The rules of a Unix-style file system are as follows:
 * - A single period '.' represents the current directory.
 * - A double period '..' represents the previous/parent directory.
 * - Multiple consecutive slashes such as '//' and '///' are treated as a single slash '/'.
 * - Any sequence of periods that does not match the rules above should be treated as a valid directory or file name.
 *
 * The simplified canonical path should follow these rules:
 * - The path must start with a single slash '/'.
 * - The path must not end with a slash '/', unless it is the root directory.
 * - Directories within the path must be separated by exactly one slash '/'.
 * - The path must not have any single or double periods ('.' and '..') used to denote current or parent directories.
 *
 * Return the simplified canonical path.
 *
 * Example 1:
 * Input: path = "/home/"
 * Output: "/home"
 *
 * Example 2:
 * Input: path = "/home//foo/"
 * Output: "/home/foo"
 *
 * Example 3:
 * Input: path = "/home/user/Documents/../Pictures"
 * Output: "/home/user/Pictures"
 *
 * Example 4:
 * Input: path = "/../"
 * Output: "/"
 *
 * Example 5:
 * Input: path = "/.../a/../b/c/../d/./"
 * Output: "/.../b/d"
 *
 * Constraints:
 * 1 <= path.length <= 3000
 * path consists of English letters, digits, period '.', slash '/', or '_'
 * path is a valid absolute Unix path
 */

function canonicalPath(input:string):string{

    const pathStack:string[]=[]
    const inputNew=input.split("/")
    
    for(const element of inputNew){
        if(element==="" || element==="."){
            continue
        }else if(element===".."){
            pathStack.pop()
        }else{
            pathStack.push(element)
        }
    }
    pathStack.join("/")
    
    return "/" + pathStack.join("/")
}
console.log(canonicalPath("/home/"))
console.log(canonicalPath("/home//foo/"))
console.log(canonicalPath("/home/user/Documents/../Pictures"))
console.log(canonicalPath("/../"))
console.log(canonicalPath("/.../a/../b/c/../d/./"))
/**
 * HOW TO UNDERSTAND THE PROBLEM:
 * Simplify a Unix file path to its canonical (shortest unambiguous) form.
 * The rules to handle:
 * - "."  means "stay in current directory" → ignore it.
 * - ".." means "go up one directory" → pop the last directory from the stack.
 * - ""   means an empty segment (from consecutive slashes like "//") → ignore it.
 * - Anything else is a real directory or file name → keep it.
 * The result must start with "/" and must NOT end with "/" (unless it's the root "/").
 *
 * HOW TO RECOGNIZE THE PATTERN:
 * This is a STACK-based simulation problem.
 * Any time you see "go back / undo / move up a level", think STACK:
 * - Push when moving into a directory.
 * - Pop when going up ("..").
 * - Skip when there's nothing to do ("." or "").
 * After processing all segments, join the stack with "/" and prepend "/".
 *
 * STEP-BY-STEP WALKTHROUGH:
 * input = "/home/user/Documents/../Pictures"
 * 1. split("/") → ["", "home", "user", "Documents", "..", "Pictures"]
 * 2. Process each:
 *    ""           → skip (empty segment from leading "/")
 *    "home"       → push → stack: ["home"]
 *    "user"       → push → stack: ["home", "user"]
 *    "Documents"  → push → stack: ["home", "user", "Documents"]
 *    ".."         → pop  → stack: ["home", "user"]
 *    "Pictures"   → push → stack: ["home", "user", "Pictures"]
 * 3. Join: "/" + "home/user/Pictures" = "/home/user/Pictures" ✅
 *
 * INTERVIEW TIPS:
 * - Mention that "..." (three dots) is a VALID directory name — only exactly ".." means go up.
 *   The else branch handles any segment that isn't ".", "..", or "" as a real name.
 * - Edge case: "/../" → pop on an empty stack does nothing (pop returns undefined) → result is "/".
 * - Edge case: "///" → three empty segments all skipped → result is "/".
 * - The problem says the input is always a valid absolute path, so no need to validate it.
 *
 * Time Complexity:  O(n) — we process each segment of the split path exactly once.
 * Space Complexity: O(n) — the stack stores the valid directory names.
 */


