// What is a built -in method ?
    // We did NOT have to write any code for them.
    // Functions stored directly on JavaScript's built-in objects (Classes)

// Which classes in JS have built-in methods
    // Arrays
    // Objects
    // Strings
    // Math
    // Numbers

// Documentation can sometimes be difficult to read, but is essential to your success as a developer.Take a look at the following page from the Mozilla Developer Network that describes the Math.max() method.Then, describe in your own words what the Math.max() method does.
//  MDN: Math.max()
    // console.log(Math.max(12, 6, 50, 9, 11));

// Why is the Number.isNaN() method helpful ?
    // let myNumber = "number" / 3;

// console.log(Number.isNaN(myNumber));

// Why is the Array.isArray() method helpful ?
    // let myArray = [1, 2, 3, 4]

    // console.log(Array.isArray(myArray));

// What does the Math.random() method do?
    // Give us a float number that is anywhere between 0 and 1
    // console.log(Math.random());

// How can you return a random number between 0 and 9 ?
    // console.log(Math.floor(Math.random() * 10))

// How can you return a random number between 0 and 99 ?
    // console.log(Math.floor(Math.random() * 100));

// How can you return a random number between 1 and 100 ?
    // console.log(Math.floor(Math.random() * 100) + 1);

// How can you return a random number between 1 and 50 ?
    // console.log(Math.floor(Math.random() * 50) + 1);

// How can you return a random number between 10 and 20 ?
    // console.log(Math.floor(Math.random() * 11) + 10);

// What built -in method(s) do you think would help with the following problem ?
    // Given an array of integers where some numbers are strings, return the largest integer as a number.
    // e.g. [4, "10", 9]
    // Math.max
    // typeof
    // Number.parseInt()

// let myArr = [4, "10", 9, "15"];

// function highestNumber (arr){

//     for(let i = 0; i < arr.length; i++){
//         if (typeof arr[i] !== "number"){
//            arr[i] = Number.parseInt(arr[i]);
//         }
//     }
//     let highest = arr[0]

//     for (number of arr) {
//         number > highest ? highest = number : null;
//     }
//     return highest;
// }

// console.log(highestNumber(myArr));



// // What built -in method(s) do you think would help with the following problem ?
//     //Given an object, verify that none of the values of those keys are NaN.
//     //e.g. { inStock: 11, maximum: 20 }

//     let questionableObject = { inStock: 11, maximum: 20 };

//     function isNotANumber (obj){
//         // Object.values() - return values of the first level of an object
//         let myValues = Object.values(obj);

//         for(let value of myValues){
//             if(Number.isNaN(value)){
//                 return true;
//             }
//         }
//         return false;
//     }
//     console.log(isNotANumber(questionableObject))

// What built -in method(s) do you think would help with the following problem ?
    // Given an object with a number of keys, choose a key at random and return the value of that key.
        // e.g. { firstName: "Francisco", lastName: "Carrillo", age: 28 }