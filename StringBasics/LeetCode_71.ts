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
