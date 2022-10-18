// https://replit.com/@GigiScarborough/Remove-All-Adjacent-Duplicates-In-String#index.js

// You are given a string consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on the string until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

// Examples:

// Do we understand all the words in stating this problem?

// What are we asked to show?
// return unique string with out duplicates

// Restate the problem in your own words
//given a str of all lowercase letters we need to check and see if there are duplicates i.e. 2 letters that are the same, and if they are we need to delete them from the string until there are no more dupes

// Is there enough information to find a solution?

// Are there any abstract data types that might help us to solve this problem?

// What is our plan?
// break our string into an array of chars
// create a stack
// iterate chars
// if char does not match top of stack push in stack
// if char matches top of stack pop stack
// join our leftover chars

const removeAdjacentDuplicates = (stringwithDuplicates) => { // "abbaca"
    const letterArray = stringwithDuplicates.split("") 
    // ["a", "b","b", "a", "c", "a"]
    let stack = []; // ["c", "a"]
    
    for (let i = 0; i < letterArray.length; i++){ 
        let currentChar = letterArray[i] // "a"
        if (stack[stack.length - 1] !== currentChar){ // not a dup
            stack.push(currentChar)
        } else { // is a duplicate
            stack.pop()
        }
    }
    
    return stack.join("") // ["c", "a"] -> "ca"
}

console.log(removeAdjacentDuplicates("abbaca")) // "ca"
console.log(removeAdjacentDuplicates("azxxzy")) // "ay"