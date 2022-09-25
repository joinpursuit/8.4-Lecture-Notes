/* 
    Objectives for today:
        
        - Review strings 
        - Common methods
        - BONUS Regex Intro

*/

// Strings are PRIMITVE TYPES we use to store series of characters

// They share many properties with Arrays
let myStr = "tim";

myStr[0] = "k"; // <---- we cannot do this

// we can Iterate over strings just like arrays

let otherStr = "hello from 8.4";
// for (let i = 0; i < otherStr.length; i++) {
//     console.log(otherStr[i])
// }

// for( let letter of otherStr) {
//     console.log(letter)
// }

// You CAN NOT reassign value to strings directly

//  **********  STRING METHODS ************

//  substring()
let newStr1 = "this is substring";
let myNum = "19";
// console.log((typeof +myNum)) // <-- we can coerce our numbers to string
// console.log(newStr1.substring(0,1))

//  method returns the part of the string between the start and end indexes, or to the end of the string.
//

// slice()
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
// console.log(newStr1.slice(0,1))

//  charCodeAt()
// method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
let myStr3 = "$";
// console.log(myStr3.charCodeAt())

// fromCharCode()
//  method returns a string created from the specified sequence of UTF-16 code units.

// console.log(String.fromCharCode(36))

// includes()
// performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

let myStr4 = "hello";
let myStr5 = "lo";

// indexOf()
// method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
// console.log(myStr4.indexOf(myStr5))

// padEnd()
// pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
let myStr6 = "hello";
// console.log(myStr6.padEnd(10).length)

// padStart()
//  pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
// console.log(myStr6.padStart(10).length)

// repeat()
// constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
let myStr7 = "hello again ";

// console.log(myStr7.repeat(500))

// toString()
// method used to turn other data types to strings. Available on many different data types.
// console.log(Number(19).toString(2))

// trim()
// The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
let mystr8 = "      hello, lets check this out      ";
// console.log(mystr8.trim())

// JSON.stringinfy()

let myJson = {
  glossary: {
    title: "example glossary",
    GlossDiv: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossTerm: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para: "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};

// console.log(JSON.stringify(myJson))

// The JSON.stringify() method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

/*  ********** isPalindrome *************

Your mission: Write a function that determine if a word is a palindrome.

Example:  THERE ARE NO EXAMPLES! FIGURE IT OUT ;)

Do we understand all the words in stating this problem?

    what is a palindrome?

    a palindrome is a word that is spelled the same forwards and backwards
    IE : racecar

    how can we determine if a word is a palindrome?

    we see if the letters from back to front are the same front to back

What are we asked to show?

    we want to return whether or not a word Is a palindrome;
    We want to return true or false

Restate the problem in your own words

starting with a  string we need to identify if the string is the same
when iterating through it forward and backwards;

Is there enough information to find a solution?
yeah - we do

What is our plan?

 splitting  word  to an array;
 reverse it;
 rejoin it to make a string;
 compare if this reversed word is  === to our original word
 if yes => true;
 if no => false

*/

const isPalindrome = (word) => {
  // do we have a condition to get rid of special characters?
  // can we get rid of spaces
//   console.log(word.replace(/[\s,\,]/g, " TIM RULES "));
  return (
    
    word.toLowerCase().replace(/[\s,\,]/g, "") ===
    word.toLowerCase().replace(/[\s,\,]/g, "").split("").reverse().join("")
  );
};

console.log(isPalindrome("A man, a plan, a canal, Panama,"));
/*  ********** disemvowelTrolls *************

Your mission: Write a function that takes a string and return a new string with all vowels removed.

Example:  the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Do we understand all the words in stating this problem?

    what is a vowel?
    a vowel is A or E or O or I or U 

   

What are we asked to show?

    return  a new string with all vowels removed

Restate the problem in your own words
we need a function that can receive a string and remove all vowels in that string returning the new string in the same order w/o the vowels

Is there enough information to find a solution?

What is our plan?
figure out how to remove vowel from a word;
    - itearate over the words 
    - if vowel - slice it out;
    - return the word

use that function to remove every vowel from every word in the array
    - invoke funciton on every item in the original sentence
    - return the new devowelweized sentence



*/
const disemvowellWord = (word) => {
    for( let i=0; i < word.length; i ++) {
        if (
            word[i].toLowerCase() === "a" ||
            word[i].toLowerCase() === "e" ||
            word[i].toLowerCase() === "i" ||
            word[i].toLowerCase() === "o" ||
            word[i].toLowerCase() === "u" 
        ) {
            word = word.slice(0,i) + word.slice(i + 1);
            i--; 
            //i = 3
            //c h s  
            //0 1 2 3 4 5
        }
    }
    return word
}
const disemvowellTrolls = (sentence) => {
    return sentence.replace(/[aeiou]/gi, "it's break time ") // <---- is why you rewgex
    // return sentence 
    //     .split(" ")
    //     .map(word => disemvowellWord(word))
    //     .join(" ")
}
console.log(disemvowellTrolls('This website is for losers LOL!'))