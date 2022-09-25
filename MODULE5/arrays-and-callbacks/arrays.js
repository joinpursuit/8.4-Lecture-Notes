// ******** OBJECTIVES *********
    // - Review array basics
    // - Review array methods that take callbacks
    // - Review reference types

// ******** NAMING CONVENTIONS *********
    // - Arrays are a list (in some programming languages an array is called a list) of items or a collection of items. Therefore, the name of the array should be descriptive and pluralized
        // ***** examples *****
            // - items
            // - numbers
            // - words
            // - products
    // - When you are iterating over an array and selecting a single item, the single item should have a singular matching variable name
        // ***** examples *****
            // - item
            // - number
            // - word
            // - product
    // This becomes especially important when iterating arrays
        // GOOD:
        // for (let review of reviews){}
        // note the readability of the iteration above. reads like a sentence
        // BAD:
        // for (let r of reviews){}
        // Notice the lack of clarity of what is being iterated


// ******** ARRAY ITERATION ********

const nums = [1, 2, 3, 4, 5];
    // WHILE LOOP
        // let i = 0;
        // while (i < nums.length){
        //     console.log(nums[i])
        //     i++
        // }
    // FOR LOOP
        // for( let i = 0; i < nums.length; i++){
        //     console.log(nums[i])
        // }

    // FOR OF LOOP
        // for (let num of nums){
        //     console.log(num)
        // }
    // FOREACH - returns undefined, can be used to mutate the original array
        // nums.forEach(num => console.log(num))

    //.MAP - returns a new array in memory
        // const dupedNums = nums.map(num => {
        //     return num.toFixed(0)
        // })
        // console.log(dupedNums)


// ******** OTHER USEFUL ARRAY METHODS *********
    // - every - given a condition iterates through the array and tell us whether each element meets the condition
    const evenNums = [2, 4, 6, 8]
    const mixedNums = [1, 2, 3, 4, 3, 9]

    console.log(evenNums.every(num => num % 2 === 0)) // true
    console.log(mixedNums.every(num => num % 2 === 0)) // false

    // - filter - returns a new copy of an array with each element that return true for the condition within the callback
    const filteredNums = mixedNums.filter(num => num % 2 === 0 ) // [2, 4]
    console.log(filteredNums)

    // - find - returns the value of the first element that passes the condition in our callback
    const firstEven = mixedNums.find(num => num % 2 === 0) // 2
    console.log(firstEven)
    const bigNumber = mixedNums.find(num => num > 20) // undefined
    console.log(bigNumber)

    // - findIndex - return the first Index of the element that meets our condition otherwise returns -1 i not found
    const divisibleByThree = mixedNums.findIndex(num => num % 3 === 0)
    const divisibleByFive = mixedNums.findIndex(num => num % 5 === 0)
    console.log(divisibleByThree) // 2
    console.log(divisibleByFive) // -1

    // - some - return true if any element meets our condition in our callback otherwise returns false
    const greaterThanThree = mixedNums.some(num => num > 3) // true
    const divisibleBySeven = mixedNums.some(num => num % 7 === 0) //false
    console.log(greaterThanThree) // true
    console.log(divisibleBySeven) // false

    // - sort Note: sorting algorithms 2 goes into more - detail on this method - sorts all elements within the array according to the condition in our callback function

    // - reduce Note: bonus self-guided lesson available run some function with the previous element and the current element and keep track of the value and return it. can take an initial value
    //     const mixedNums = [1, 2, 3, 4, 3, 9]
    const numsAddedToAHundred = mixedNums.reduce((previousValue, currentValue) => {
        console.log(typeof previousValue * currentValue, previousValue, previousValue * currentValue)
        return previousValue * currentValue
    }, "1")

    console.log(numsAddedToAHundred) // 122

// FIND THE INDEX IN AN ARRAY
    // - Without using the .indexOf array method, write your own findIndex function.

    // - The function should take an array and the string or number that is to be found.

    // - If the item is found, it should return the index position. If no matching item is found it should return -1. If there are multiple matches, only the first index positions should be returned.

    // - For example with the following array: findIndex(letters, 'a') should return 0. findIndex(letters, 2) should return -1.

    const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    ];

    // Do we understand all the words in stating this problem?

    // What are we asked to show?
        // - The index! Specifically the index of our second argument in the array if it exists

    // Restate the problem in your own words
        // - We want to go through a given array and see if the given target is in the array. If so return the index if its the first time we're seeing the element,  if not return -1.

    // Is there enough information to find a solution?

        // we don't know if it should be case sensitive or not. On an interview, you would ask this clarifying question. Let's just do case sensitive searches.

    // What is our plan?

        // loop over the array
            // What kind of loop should we use?
                // for loop because we want to be able to return early and we dont need a new array etc.
            // Are there some loops that are better than others?
                // some loops are better at solving for certain problems and have advantages and disadvantages depending on the situation
        // compare whether the current item matches the one we are looking for


        //if it is a match, return the index position

        // if we have looped through all the items and there is no match, return -1

        const findTheIndex = (shaolinArray, target) => {
            if (shaolinArray.length < 1 || !Array.isArray(shaolinArray)) return -1;

            for (let i = 0; i < shaolinArray.length; i++){
                if (shaolinArray[i] === target){
                    return i;
                    // this is our index of the elememt we're looking for
                } 
            }
            return -1
        }

        
        Array.prototype.gigisFindIndex = function (targetValue){
            for(let i = 0; i < this.length; i++ ){
                if (this[i] === targetValue){
                    return i;
                }
            }
            return -1
        }
        
        console.log(letters.gigisFindIndex("a")) // 0
        console.log(letters.gigisFindIndex(2)) // -1

  
        