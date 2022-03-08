/* Higher Order Native Array Methods

These lesson notes cover `.forEach()`, `.map()`, `.filter()`, and `.find()`.

 Learning Objectives

By the end of this lesson you should be able to:

- Describe the input and return values of `.forEach()`.
- Use `.forEach()` to solve code problems.
- Describe the input and return values of `.map()`.
- Use `.map()` to solve code problems.
- Describe the input and return values of `.filter()`.
- Use `.filter()` to solve code problems.
- Describe the input and return values of `.find()`.
- Use `.find()` to solve code problems.

---

 Guiding Questions

- What is a higher order function?
  // A function that accepts or returns another function

- What is a native array method?
// a built in method that can be used 

- What does it mean for a function to produce side effects?
// A function that modifies something outside its paramters

- What does it mean for a function to return a value?
// allows us to save the value 

- Is it possible for functions that return values to also produce side effects?
// yes but it should be avooided

- The `.forEach()` method expects at least one argument. What data type is this argument?
// A callback - this i

- What is a callback function?

- The `.forEach()` method's callback function has up to three parameters. What are these parameters?


*/
  
  const comics = [
    { title: "Calvin & Hobbes", author: "Bill Watterson", kind: "print" },
    { title: "Zen Pencils", author: "Gavin Aung Than", kind: "web" },
    { title: "Nancy", author: "Olivia James", kind: "print" },
    { title: "False Knees", author: "Joshua Barkman", kind: "web" },
  ];

  //  Update the code below so that it uses `.forEach()` instead of a `for` loop. Inside of `printAllComics()` you will have to write another, anonymous function.
 
// MAP stands for Make Array Plz 
  const printAllComics = (comics) => {
    // Write your code here.
    let result = comics.map(( comic, index, originalArray) => {
      return`(${index + 1} out of ${originalArray.length}) ${comic.title} by  ${comic.author}`;
    })
    // console.log(result);
    return result
    //OLD WAY
    // for (let comic of comics) {
    //   console.log(`${comic.title} by ${comic.author}`);
    // }

   }
let allComics = printAllComics(comics);

// console.log(allComics)
allComics = null;
// console.log(comics)
  /* - How can you update your `.forEach()` code so that it prints out the following?

  1. "Calvin & Hobbes" by Bill Watterson
  2. "Zen Pencils" by Gavin Aung Than
  3. "Nancy" by Olivia James
  4. "False Knees" by Joshua Barkman

    How about this??

  (1 out of 4) "Calvin & Hobbes" by Bill Watterson
  (2 out of 4) "Zen Pencils" by Gavin Aung Than
  (3 out of 4) "Nancy" by Olivia James
  (4 out of 4) "False Knees" by Joshua Barkman
  

- Replace the `.forEach()` in your code with `.map()`. Does the code still run?

- What are some of the differences between `.forEach()` and `.map()`?

- Instead of logging, `return` inside of your callback function. How can you access the result of your `.map()` function call?

- Write a new function called `getAuthors()`. The function should take in an array of comics (like above) and return an array of just the authors' names.

 

*/

function getAuthors(comics) {
  return comics.map((whatever) => {
    return whatever.title
  })
 // Write your code here!
}
const result = getAuthors(comics);
// console.log(result);

  //> [ "Bill Watterson", "Gavin Aung Than", "Olivia James", "Joshua Barkman"]
 
/*
- Now, update your `getAuthors()` function to make use of the `.map()` method. The function should produce the same result.

  Compare what you had written with what you have now. What is a benefit of using the `.map()` method?

- Mentally evaluate the code below before running it. What do you think will be logged out? Why?
*/

  function getTitle(comic) {
   return comic.title.toUpperCase();
  }

  const result2 = comics.map((comic) => getTitle(comic));// < -----
  // console.log(result2.forEach(comic => console.log(comic)));
// ****** GROUP ACTIVITY! 20 minute challenge! *******

// Comic sales are down!  
// It's up to us to autmoate some reviews and map them to a new array we can use.

let reviews = [
  "Was amazing", 
  "Is the best thing EVER", 
  "Is such a good comic!", 
  " - GET THIS COMIC!", 
  " I. CAN'T. EVEN.", 
  "is truly a masterpice of the genre"
];
// using .map() return a new array of strings such that 
// the titles of each comic are concatenated with a random string from the review array.

const makeFakeReviews = (comics, reviews) => {
  return comics.map( (comic) => {

     return `${comic.title} ${reviews[Math.floor(Math.random() * reviews.length)]}`;
    // make this happen - use map to return a new array of strings

  });
};
let fakes = makeFakeReviews(comics, reviews);
// console.log(fakes)


// How does the `.filter()` method differ from `.map()`? From `.forEach()`?
// returns a new array like map BUT only elements that pass the provided function is as truthy;

// Mentally evaluate the code below before running it. What do you think will be logged out? Why?

 
  function isPrintComic(comic) {
    return comic.kind === "print" ;
  }

  const filtered = comics.filter(comic => isPrintComic(comic));

  console.log(filtered);
  
 

// What would happen if the callback function had the code below instead? Why?

 
  // function isPrintComic(comic) {
  //   return comic.kind;
  // }
 
//`type` _is not_ a key on each comic object. Keeping that in mind, would happen if the callback function had the code below instead? Why?

 
  // function isPrintComic(comic) {
  //   return comic.type;
  // }


 // ****** GROUP ACTIVITY! *******

 // The following function represents a roll of a six sided die;
 let rollDie = () => {
   return Math.floor(Math.random()*6+1)
  }
  // rolls represents an array of numbers rolled
  let rolls = [];
 // As a group - write a function rolls 500 dice and records the results in rolls;
 // using .filter() how can we determine how many  5's and 6's were rolled?


// How does the `.find()` method differ from `.filter()`? From `.map()` or `.forEach()`?

//What will be the difference between `filterResult` and `findResult` after the code is run below?

 
  function getJoshuaBarkmanComic(comic) {
    return comic.author 
  }

  const filterResult = comics.filter(comic => getJoshuaBarkmanComic(comic));
  
  
  const findResult = comics.find(comic => getJoshuaBarkmanComic(comic));
 
 

// Is it possible to modify the `getJoshuaBarkmanComic()` function so that it could instead find any author? If so, how so? If not, why not?

// Will Calvin & Hobbes or Nancy be returned by the following code? Why?

 
  function isWebComic(comic) {
    return comic.kind
  }

  const result3 = comics.find(comic => isPrintComic(comic));






//  What will get returned from the following code? Why?

 
  // function isPrintComic(comic) {
  //   return comic
  // }

  const result4 = comics.find(isPrintComic);

 

/* Take a look at the table below. What does each column mean?

  | Method       | Callback expected return value | Method return value | Destructive? |
  | ------------ | ------------------------------ | ------------------- | ------------ |
  | `.forEach()` | Nothing.                       | Nothing.            | No.          |
  | `.map()`     | Anything.                      | An array.           | No.          |
  | `.filter()`  | Boolean.                       | An array.           | No.          |
  | `.find()`    | Boolean.                       | Anything.           | No.          |

- Although none of the methods above are _inherently_ destructive methods, is it possible to cause mutations with those methods? Should you?

*/