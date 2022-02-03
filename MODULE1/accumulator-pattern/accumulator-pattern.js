/* 
  Accumulator Pattern Agenda!
    1- What is the Accumulator pattern?
    2 - VS code debugger
    3 - Functions time!
    4 - LAB TIME

*/


/*
  Steps for Accumulator pattern:  

  - Determine your output data type and default value.
  - Define your loop.
  - Accumulate!

*/

/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/
function sumAllNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++ ) {
    sum = sum + numbers[i];
    // sum += numbers[i];  is another way of writing this!
  }
  return sum;
}

console.log(sumAllNumbers([10, 20, 30])); //> 60
console.log(sumAllNumbers([10 - 10])); //> 0
console.log(sumAllNumbers([])); //> 0

/*
  PRESENT ALL STATES
  ---------------
  Write a function that adds all of the states below to a string. 
  The string should be prefixed with "STATES: " and 
  all states should be separated by a comma and a space.

  If there are no states, just print "STATES: ".
*/
function presentAllStates(states) {
  let allStates = "STATES: "
  for (let i = 0; i < states.length; i++) {
    allStates = allStates + `${states[i]}, `
  }
  return allStates;
}

console.log(presentAllStates(["Alaska", "New York", "Florida"]));
//> "STATES: Alaska, New York, Florida, "
console.log(presentAllStates([]));
//> "STATES: "

/*
  HAS SPACE
  ---------------
  Write a function that determines whether or not any of the 
  states provided include a space (i.e. " ") in their name.
*/
// Let's solve this using NESTED LOOPS!  
//  What are our steps to solve?
//   1.  loop through states once at a time
//   2.  then loop AGAIN and check each character in the string for a space;
//   3.  If we find a string - return true;  If not we run to the end of loop and return false!
function hasSpace(states) {
  let spaces = false;
  for (let i = 0; i < states.length; i++ ) {
    console.log(states[i]) // "New York"
    for (let j = 0; j < states[i].length; j++) {
      //  we are checking each character in the string at states[i]
      //  for an empty string
      if (states[i][j] === " ") {
        return true;
      }
    
    }
  }
  return spaces
}

console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false


/*
KEBAB CASE
---------------
Write a function that returns a new array of all the states in kebab casing.
*/
// Lets solve this without the .replace() string method!
function kebabCase(states) {
  
  // Loop through the first array 
  for (let i = 0; i < states.length; i++) {
    // For EVERY index in the array - loop through and check the individual characters
    for (let j = 0 ; j < states[i].length; j ++) {
      // check the ARRAY at index [i] and the CHARACTER in that string  at index [j] to equal " "!
      if (states[i][j] === " ") {
        // split the string to an array - save to a variable
        let split  = states[i].split("");
        // change the index of " " to "-"
        split[j] = "-";
        // change states[i] to our new string returned from .join()
        states[i] = split.join("")   
        
        // THIS ALSO WORKS!   SO MANY WAYS TO SOLVE THIS PROBLEM!
        // let split = states[i].split(" ");
        // let joined = split[0].concat("-").concat(split[1]);
        // states[i] = joined;
      }
    }
  }
  // this array constructor makes a NEW ARRAY from our states array
  return Array.from(states);
}

console.log(kebabCase(["Alaska", "New York", "Florida"]));
//> [ "Alaska", "New-York", "Florida" ]
console.log(kebabCase([]));
//> []

/*
  IS VALID
  ---------------
  Write a function that returns false if ANY state abbreviation is longer than two characters.
*/
function isValid(states) {
  let onlyTwo = true;
  for (let i = 0 ; i < states.length; i++) {
    if (states[i].length > 2) {
      onlyTwo = false;
      break;
      // return false also works and IS BETTER but for today - let's do it long form
    }
  }
  return onlyTwo

}

console.log(isValid(["AK", "NYC", "FL"])); //> false
console.log(isValid(["AK", "WA", "FL"])); //> true

/*
  FIND
  ---------------
  Write a function that looks for a state by name. If that state is found, return the state name. 
  If it is not found, return `null`.
*/
function find(states, name) {
  let foundState = null;
  for (let i = 0; i < states.length; i++) {
    if (states[i] === name) {
      foundState = name;
      break;
      // return name
    }
  }
  return foundState;
}

console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null

/*
  FILTER ABBREVIATIONS
  ---------------
  Write a function that filters out ALL strings equal to or longer than 3 characters. 
  Return a new array with just the valid abbreviations.
*/
function filterAbbreviations(states) {
  let valid = [];
  for (let i = 0; i < states.length; i++) {
    if (states[i].length < 3) {
      valid.push(states[i]);
    }
  }
  return valid;
}

console.log(filterAbbreviations(["AK", "MT", "WA", "NYC","AK", "MT", "WA", "NYC","AK", "MT", "WA", "NYC"]));
//> [ "AK", "MT", "WA" ]
console.log(filterAbbreviations(["Alaska", "New York", "Florida"]));
//> []
