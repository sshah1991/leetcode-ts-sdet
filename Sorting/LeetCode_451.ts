/**
 * 451. Sort Characters By Frequency
 *
 * Given a string s, sort it in decreasing order based on the frequency of the characters.
 *
 * If multiple characters have the same frequency, return any order.
 *
 * Example 1:
 * Input: s = "tree"
 * Output: "eert"
 * Explanation: 'e' appears twice while 'r' and 't' both appear once.
 *
 * Example 2:
 * Input: s = "cccaaa"
 * Output: "aaaccc"
 * Explanation: both 'c' and 'a' appear three times, so any order is acceptable.
 *
 * Example 3:
 * Input: s = "Aabb"
 * Output: "bbAa"
 * Explanation: 'b' appears twice, 'A' and 'a' appear once each.
 *
 * Constraints:
 * 1 <= s.length <= 5 * 10^5
 * s consists of uppercase and lowercase English letters and digits
 */

function frequencySort(s: string): string {
    let myMap=new Map<string,number>()
    for(let i=0;i<s.length;i++){
        let currentElement=s[i]
        if(!myMap.has(currentElement)){
            myMap.set(currentElement,0)
        }
        let currentElementCount=myMap.get(currentElement)||0
        myMap.set(currentElement,currentElementCount+1)
    }
    //convert the string to array so we cann apply(a+b) sorting
    let myArray=Array.from(myMap)
    myArray.sort((a,b)=>{
        return b[1]-a[1]
    })
   // console.log(myArray)

    //rebuild the newString
    let result=""
    for(const[char,count] of myArray){
        result+=char.repeat(count)
    }
    return result
};

console.log(frequencySort("tree"))
console.log(frequencySort("cccaaa"))
console.log(frequencySort("Aabb"))
console.log(frequencySort("19999Aabb"))