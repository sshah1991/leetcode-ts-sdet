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
 * Interview prep explanation:
 *
 * This problem is basically simulating how a Unix shell resolves a file path.
 * We process the path piece by piece and maintain a stack of valid directories.
 *
 * Rules:
 * - Ignore empty parts and "." because they do not change the location.
 * - If we see "..", move up one level by popping the last directory from the stack.
 * - Otherwise, treat the segment as a real folder name and push it onto the stack.
 *
 * Example:
 * input: "/home/user/Documents/../Pictures"
 * parts: ["", "home", "user", "Documents", "..", "Pictures"]
 * stack becomes: ["home", "user", "Pictures"]
 * result: "/home/user/Pictures"
 *
 * Why this is a strong interview solution:
 * - It matches the real behavior of path navigation.
 * - It is easy to explain: "Use a stack for directory changes."
 * - It handles repeated slashes and dot segments cleanly.
 *
 * Time Complexity: O(n)
 * - We scan through each segment once.
 *
 * Space Complexity: O(n)
 * - The stack stores the valid directories in the final path.
 */


