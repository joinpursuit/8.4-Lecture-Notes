// **REVIEW**

// ** .forEach **
// inputs: fn -> element, optional idx, optional array
// returns: undefined
// side effect?: mutates

// ** .map **
// inputs: fn -> element, optional idx, optional array
// returns: a new array
// side effect?: doesn't mutate

// ** filter **
// inputs: fn -> element, optional idx, opt arr
// returns: a new filtered array
// side effect?: doesn't mutate

// ** find **
// input: fn -> element, optional idx, optional arr
// returns: the first element that meets the condition in our callback fn
// side effect?: doesn't mutate


// **EVERY**
// The `.every()` method expects at least one argument. What data type is this argument ?
// callback fn 
// The `.every()` method's callback function has up to three parameters. What are these parameters?
// element, optional idx, optional array

// Take a look at the following code, which is incomplete. Based on how the code reads, what do you expect the `.every()` method to do?

// const result = comics.every(isPrintComic);
// console.log(result); //> false

// Update the code below so that it uses the .every() method instead of a for loop. Inside of allComicsHaveTitles() you will have to write another, anonymous function.

// return value of `.every()` -> boolean

// const comics = [
//     { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
//     { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
//     { title: "Nancy", author: "Olivia James", kind: "print" },
//     { title: "", author: "Joshua Barkman", kind: "web" },
// ];

// function allComicsHaveTitles(comics) {
    // let result = true;
    // for (let comic of comics) {
    //     if (!comic.title) result = false;
    // }
    // return result;

//     return comics.every((comic) => {
//         // return !!comic.title;
//         return Boolean(comic.title);
//         // return comic.title !== undefined && comic.title !== "";
//         // ^^ please never use this 
//     });
// }

// const result = allComicsHaveTitles(comics);
// console.log(result); //> false

// The callback function inside of the `.every()` method coerces the returned value into a boolean. What does the previous sentence mean ? Describe in your own words.


// ** SOME **
// How does the `.some()` method differ from the `.every()` method ? How is it similar ?
        // checks each iteration
        // returns: boolean
        // input: fn -> element, optional idx, optional arr

// Take a look at the following code. How many times does the isWebComic() function get called ? How could you confirm ?

    // const comics = [
    //     { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
    //     { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
    //     { title: "Nancy", author: "Olivia James", kind: "print" },
    //     { title: "False Knees", author: "Joshua Barkman", kind: "web" },
    // ];

    // function isWebComic(comic) {
    //     return comic.kind === "web";
    // }

    // const result = comics.some(isWebComic);
    // console.log(result); //> true

// ** SORT **

// Calling the.sort() method looks like it might magically work, depending on the elements in the array it is sorting.

    // const numbers = [4, 2, 3, 1, 0];
    // const result = numbers.sort();
    // console.log(result); //> [ 0, 1, 2, 3, 4 ]
    // However, it can have unexpected results.

    // const numbers = [11, 1, 0, 22, 2];
    // const result = numbers.sort();
    // console.log(result); //> [ 0, 1, 11, 2, 22 ]

// In general, you should not use the `.sort()` method without a callback function. However, can you describe why the `.sort()` method is organizing the numbers above in this way ?

// The `.sort()` method expects one argument. What data type is this argument ?
    // input: fn

// The `.sort()` method's callback function has up to two parameters. What are these parameters?
    // fn -> current element (a), next element (b)

// The `.sort()` method's callback function expects a number to be returned. The number must either be a positive number, a negative number, or 0. What is the effect of each of these values?

        // return val > 0	sort b before a
        // return val < 0	sort a before b
        // === 0	keep original order of a and b

// The code below sorts numbers appropriately. Based on what you know about `.sort()` will the numbers be sorted in ascending order(i.e. 0, 1, 2...) or descending order(i.e. 22, 11, 2...) ?

const numbers = [11, 1, 22, 2, 0,];

    const result = numbers.sort((a, b) => { 
        if (a > b) { 
            return -1;
        }

        if (a < b) { // true
            return 1;
        }

        return 0;
    });
    console.log(result);

    console.log(numbers);

// Is `.sort()` a destructive or non - destructive method ?


//** CHALLENGE **

const myComics = [
    { title: "Deadly Class", author: "Bill Watterson", kind: "print", rating: 9 },
    { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print", rating: 7 },
    { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" , rating: 5},
    { title: "Nancy", author: "Olivia James", kind: "print", rating: 6 },
    { title: "False Knees", author: "Joshua Barkman", kind: "web", rating: 6 },
    { title: "The Amory Wars", author: "Claudio Sanchez", kind: "print", rating: 10 },
];

// using `.filter` and `.sort`, complete the function to return an array of comics that have a kind of print rated from highest to lowest, without mutating the original input

    function  getPrintComicsByRating(comics){

    };

console.log(getPrintComicsByRating(myComics)) // new array of print comics sorted by rating

console.log(myComics) // should be the same as the original array above


