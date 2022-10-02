// Recursion - what is it?

//  A function that calls itself until it does not
//  Each recursive function has a base case and a reductive case

// the base case ENDS the funciton 
// the reductive case is moves the function towards the base case

// Happy new year
// lets use recursion to write a countdown function for the new year

const happyNewYear = (num) => {
  // base case - where we end the funciton
  if( num === 0 ) {
    console.log("HAPPY NEW YEAR")
  } else {
    // move the funciton towards the base case
    console.log(`${num}.....`)
    happyNewYear(num - 1)
  }
}





// Sum up the numbers
// Write a function to add the following numbers together
// 1,2,3,4,5,6,7,8,9,10
const myNums = [1,2,3]
const sumNums = (numsArr, sum) => {
    // we need our base case
    if (numsArr.length === 0) {
        return sum
    }
    // we need a reductive case
    sum += numsArr.shift();
    return sumNums(numsArr, sum)
    //
}

// console.log(sumNums(myNums,0))


//isEven - lets write a funciton to determine if a number is even or not
//  This function will have a base case if the number is 0 || 1 `
//  This function will also have a reductive case recursively subtracting 2
const isEven = (num) => {
    // base case
    if (num === 0) {
        return "the number is even!!!!!"
    }
    if (num === 1) {
        return "the number is odd yo!"
    }
    // reductive case - move towards the base case
    return isEven(num - 2)
}
const testOne = 4;
// console.log(isEven(testOne))

/*

Fibonacci is a classic problem that shows up as examples in coding or as a problem to solve in a class or possibly on an interview. Since sequence shows up often, it is worthwhile to take the time to gain a solid understanding what the Fibonacci Sequence is and how to calculate it.

Write a function that prints the nth number in the Fibonacci sequence:


1.  Do we understand the problem?


What is the fibonacci sequence?

a sequence wherein a number is derived from adding the previous two
example:  1,2,3,5,8,13,21
    
    How do we figure out the numbers in the sequence?
    starting from one  - every new number is the sum the previous two

2.  What are we asked to show?
    return the nth number in the sequence.  N is passed as an argument

3.  Restate the problem in your own words
  using the argument passed through we will add numbers in the fibo sequence to reach the end number in the sequecen
    

4. Is there enough informaiton for you to find a solution?
yes - we know how to get the next number in the sequence 

5.  Whats the plan?
    lets start with 5 and work backwards;
    fib(5) => fib(3) + fib(2) 
    fib(3) => fib(2) + fib(1)
    1, 0  => return 1

*/

const fibonacci = (num) => {
    // see if you can solve this using memoization <---
    // base case
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(6))
