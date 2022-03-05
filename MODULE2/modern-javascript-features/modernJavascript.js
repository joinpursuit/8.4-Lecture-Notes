/* 

By the end of this lesson you should be able to:

    - Describe what ECMAScript is.
    - Apply destructuring when assigning variables.
    - Apply destructuring in function definitions.
    - Use object shorthand to construct objects.
    - Add default parameters to functions.
    - Write functions using the arrow function expression syntax.
    - Implement the spread syntax.
    - Implement the rest syntax.

*/


// Based on the reading, what is ECMAScript?
//  The scripting language that is the basis of JS.
//  an association that decides the future of JS 
//   the last version was ES6 released in 2015 was a big one with `let and const`
//  A new ES is released every year with some changes



// - What is destructuring?
//   It's a way to unpack an object or arrays 
//   destructuring lets us take the inner pieces of an object or array
//   and take them apart individually.


// - How could you use destructuring to create three new variables from the following array?


 const astronauts = ["Jessica Watkins", "Robert Shane", "Nicole Mann"];
//  // This is the old way of declaring variables
// // let one = astronauts[0];
// // let two = astronauts[1];
// // let three = astronauts[2];
// // below is the same thing
let [ one, two, three ]  = astronauts;
console.log(one, two);

// - How could you use destructuring to create three new variables that represent each key-value pair in the following object?

  
const astronaut = {
    name: "Jessica Watkins",
    isActive: true,
    occupation: "Geologist",
};
const { name, isActive } = astronaut;

// long way of writing 49 is below

// let name = astronaut.name;
// let isActive = astronaut.isActive;



// - What are some benefits of using destructuring? Are there any downsides?
//   Destructuring syntax can seem backwards;
//   We need to assign variable names that coincide with object keys
//   Destructuring is less code - its very efficent.

// - How can you apply destructuring to the following function?

function getAstronautActivityStatus({ name = "no name", isActive }) {

  let result = "";
  if (isActive) {
    result = `${name} is active.`;
  } else {
    result = `${name} is not active.`;
  }
  return result;
}

console.log(getAstronautActivityStatus(astronaut)); //> "Jessica Watkins is active."

// - How can you use object shorthand to construct an object using all of the following variables?

const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";
const whatever = "yes";

const wholeName = {
  first,
  middle,
  last,
}




// - What are some of the benefits of using object shorthand? Are there any downsides?
//   Efficency (sp?).  It's short and saves time.  
//   Readability - once we are used to object shorthand it is very clean
//   LESS CODE

// DOWNSIDES
//   It's a new syntax so some people may not be used to it
//   The key names must match varaible names EXACTLY

// - The function below expects that sometimes `name` will not be provided. How can you update the `greet()` function so that it uses default parameters?

function greet(name = "space cadet") {
  return `Welcome to NASA, ${name}!`;
}

// console.log(greet("Jessica")); //> "Welcome to NASA, Jessica!"

// console.log(greet()); //> "Welcome to NASA, space cadet!"


// - Convert the `greet()` function from above to use the arrow function syntax instead of the function declaration syntax.
const greet2 = (name = "space cadet") =>  {
  return `Welcome to NASA, ${name}!`;
  
  
  //   Is it possible to write this function on a single line?
}
// We can write short functions on one line like so - in do we can omit the `return` and `{}` 
// but the function must be on one line;
const greet3 = (name = "space cadet") => `Welcome to NASA, ${name}`





// - Are there any benefits to using the arrow function syntax? Are there any downsides?
// BENEFITS!
//   Shorter!  Less code.  Readability. 
//   Less code means less error chance

// DOWNSIDES
//   return statements!  Remember that we need to return from our funcitons if they are more than one line;
//   New syntax - not everyone likes it.

// - "Rest" and "spread" share the same syntax. What is that syntax?
// ...

// - Is the code below an example of the "rest" or "spread" syntax? How do you know?
//   This is SPREAD - we are spreading the values into a new array
const beforeEarth = ["Mercury", "Venus"];
const afterEarth = ["Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const allPlanets = [...beforeEarth, "Earth", ...afterEarth];

// Without spread the results would be 
/*
  [
    [ "Mercury", "Venus" ],  <---- notice this is still an array!
    "Earth",
    [ "Mars", "Jupiter", "Saturn", "Uranus",  "Neptune" ]  < ------ same here!
  ]
*/
//  WE can also SPREAD objects and their key values just like we can with Arrays
const physicalRequirements = {
  visualAcuity: "20/20",
  height: "5ft",
};


const workRequirements = {
  degree: "STEM field",
  minimumYearsOfExperience: 3,
  isAlien: false,
};

const requirements = {
  mustBeUSCitizen: true,
  ...physicalRequirements,
  ...workRequirements,
};
console.log(requirements)


// - Take a look at the code below. What do you expect will be logged to the console?
// This is REST - which is used primarily to access the REST of the arguments in a fuction
function getPlanetsCount(...whatever) {
  let result;

  if (whatever.length === 1) { 
    result = `There is 1 planet!`;
  } else {
    result = `There are ${whatever.length} planets!`;
  }

  return result;
}

const count = getPlanetsCount("Mercury", "Venus", "Earth", "Mars");




// we can also use REST with array destructuring assignment 
function listAstronauts(nasaPeople) {
  const [first, second, third, ...others] = nasaPeople;
  console.log(first, second)
  return `${first}, ${second}, ${third}, and ${others.length} more!`;
}

const astronauts2 = [
  "Jessica Watkins",
  "Robert Shane",
  "Nicole Mann",
  "Jasmin Moghbeli",
  "Frank Rubio",
];
console.log(listAstronauts(astronauts2));
console.log("stop here")



// - What are the benefits of using the rest or spread syntax? Are there any downsides?
// Benefits - It's short!  Spread can also be used to CREATE A NEW OBJECT OR ARRAY
// Downsides - like all other ES6 features - it many not be the easiest to understand for some.
// With rest you do not get to dictate what the keys will be called in your new object

// - There are many ways to accomplish the same functionality in JavaScript. Why do you think new tools and syntax continue to get added to the language?
// JS changes constantly to evolve with the web.  New challenges require different tools.
//  As JS is used certain features are requested by developers that are decided upon as essential and added to ECMAscript


// WELCOME TO ES6 YA'LL!!!!!


