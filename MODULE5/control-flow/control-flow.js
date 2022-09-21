// CONDITIONALS

// Step one # lets model our should be moving / is moving model

// lets code this out;

// moving block
const fixIt = (moving, shouldBeMoving) => {
    if (moving) {
        if (shouldBeMoving) {
          console.log("hey everything is good - its supposed to move")  
        } else {
           console.log("hey - go get some duct tape") 
        }
        // not moving block 
    } else {
        if (shouldBeMoving) {
            console.log("uh oh go get some W-d 40")
        } else {
            console.log("no problem - this should not move")
        }
    }
}

fixIt(false, true)

// LOOPS
// to demonstrate some random loops - elts write a quick die roll function;
let roll = Math.floor(Math.random() * 6) + 1;


while (roll < 10) {
    console.log(`roll is: ${roll}`);
    roll++
}

let myArr= [1,2,3,4,5];

// for(let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }
// while loops  when we don't know how often we are going to loop we can use a WHILE loop





// PRINT PRIMES

/* 

Write a function that takes an integer and then 
returns an array of all the prime numbers up to that value.

1. DO WE UNDERSTAND THE WORDS IN THIS PROBLEM?
    
    WHAT IS AN INTEGER?
    a whole number is an integer

    WHAT IS A PRIME NUMBER?
    a number that is only evenly divisible by itself and one and itself

         IS 0 PRIME ?
         no!

         IS 1 PRIME ?
         No!

         IS 2 PRIME ?
         yes!

2. WHAT ARE WE ASKED TO SHOW?
return an array of prime numbers

3. RESTATE THE PROBLEM IN YOUR OWN WORDS
create a function that returns an array of all prime numbers between 2
and a integer passed to the function

4.  DO WE HAVE ENOUGH INFORMATION TO FIND A SOLUTION

5. WHATS THE PLAN?
    Determine if a number is a prime number or not - write this function;
    Iterrate starting at 2 ( first prime) then iterate until we hit our limit;
    if a number is prime push it into an array;
    return the array;

  */

const isPrime = (num) => {
    // num === 4
    if (num < 2) {
        return false
    } else if (num === 2) {
        return true
    } else if (!Number.isInteger(num)) {
        return false
    }
    for( let i = 2; i <= Math.sqrt(num); i++) {
       if(num % i === 0) {
        return false
       }
    }
    return true
}

// start with an empty array

// loop through we'll start at 2 and ending at the number that we pass in - our limit;
// check if the number is prim;
// if it is - push to an array;
// if not do nothing - move on to the next 

const printPrimes = (limit) => {
    const primes = [];
    for(let i = 2; i < limit; i ++) {
        if(isPrime(i)) {
            primes.push(i)
        } 
    }
    return primes
}

console.log(printPrimes())