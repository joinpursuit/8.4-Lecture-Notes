// ****** OBJECTIVES *******
// Explain why we need classes
// Create a class
// Add methods and properties to a class
// What is this? Why do we need it?

// ******* CLASSES *******
// Sometimes, we need to repetitively create new objects with the same attributes. Imagine we want to create a bunch of pet profiles. Each user profile would need at least the following:
// name
// type
// age
// greeting
// take for a walk

// NAIVE IMPLEMENTATION OF A PET PROFILE
// let buttons = {
//     name: "Buttons",
//     type : "miniature horse",
//     age: 10,
//     greeting: "sniff sniff",
//     walk: "clip clop, clip clop",
// }
// WHY IS THE ABOVE NOT IDEAL? WHAT IF WE WANTED TO HAVE MULTIPLE?

// CLASSES ARE A BETTER WAY TO REPLICATE OBJECTS AND WE'VE BEEN USING THEM ALL ALONG IN JS - THINK `Math`

// ******* CREATING A CLASS *******
// To create a new class we must use the class keyword. By convention class names must be capitalized.

// Now we can instantiate (make a new instance) / create a new object, using this class.

// ******* ADD METHODS TO A CLASS *******

// Right now, our objects are empty and don't do anything. Let's add a method. What is great, is that we will add our code in one place, but it will update both of our objects. This keeps our code DRY (principle of don't repeat yourself).

// If we create a second method, we don't add a comma between them. We can also pass in an argument to our function.

// ****** SETTING PROPERTIES OF A CLASS *******

// Right now, our class has methods (functions that are attached to the class), but objects also have properties. Let's add some properties.

// The way we add properties is by using a special function called constructor

// ******* THIS ******
// - `this` is a special keyword in JS that refers to the object executing the code
// - It is a property which is stored on all functions(which are essentially objects) that point to a value that is the current execution context
// - when used inside of a class' constructor function ensures we are referencing the properties inside `this` class (the one we've created and are currently inside)
// When we make a new class and add properties inside of the constructor, we use `this` to be sure we are referencing the properties inside this class

// ******* CUSTOMIZED CLASS INSTANCES *******

// Notice what happens when we don't pass enough arguments into our functions in JavaScript.

// It can be really confusing to understand how the values are being set. Let's go over it.

// First, we are creating a new animal and passing in the name Buttons

// This goes up into the Animal class and is passed in as the argument name inside the constructor

// This value is then on the right side in `this.name = name;`

// ******* DEFAULT VALUES *******

// Sometimes you want to create default values that can be overwritten. For example, if a user were creating a profile, but did not include a picture, you would likely want to have a default placeholder image set that can be updated later.

// Just like in functions we can use default parameters and short circuiting to give our classes' properties default values

// ******* CREATING METHODS TO ALTER THE PROPERTIES OF AN INSTANCE
// We can alter the properties of an instance, after it is created

// ****** OBJECTS INTERACTING WITH OTHER OBJECTS *******
// We can pass objects in to other objects to have them interact
class Animal {
  constructor(name, type, color, walkStyle, isFriendly = true) {
    this.name = name;
    this.type = type;
    this._age = 4;
    this.color = color;
    this.isFriendly = isFriendly;
    this.walkStyle = walkStyle || "walka, walka";
  }
  walk() {
    console.log("Clip, clop, clip, clop");
  }
  greet(otherBeing) {
    console.log(`Sniff, sniff, ${otherBeing}`);
  }
  ageUp() {
    this._age++;
  }
  age() {
    return this._age;
  }
  classyGreeting(otherclassyAnimal) {
    console.log(
      `Cheerio, ${otherclassyAnimal.name}! I heard you are a ${otherclassyAnimal._age} year old ${otherclassyAnimal.type}`
    );
  }
}

const buttons = new Animal(
  "Buttons",
  "miniature horse",
  "iridescent pink",
  "clip, clop",
  false
);
const marshmallow = new Animal("Marshmallow", "cat", "white");

console.log(buttons);
console.log(marshmallow);

// ******** STATIC KEYWORD *******
// Static Members
// As we've mentioned, you have already been working with JavaScript's version of classes with things like Math methods.

// When you use a Math method you don't do this
// const mathStuff = new Math();
// console.log(mathStuff.abs(-5));
// Rather, we do this:
// console.log(Math.abs(-5));

// This makes sense because we want all the math methods to be organized in a way that they are all together, however, we don't want to instantiate a new class to use them.

// We can then add the word static to declare methods and properties to a class

/*

********** Inheritance *********

   In our world of animals, let's say there is a new kind: Mythical creature. 
   The mythical creature will have all the properties of methods as an animal and some additional ones. 
   We could copy our Animal class and paste it and add more, but what if we need to change the greet function? 
   Then we would have to find every place we copy/pasted and carefully update. 
   We are going to keep our animal as our one source of truth as a parent class.
    
    EXAMPLE : Class TimComponent extends React.component() {}
    
*/

// Let's EXTEND our class to MythicalCreature
class MythicalCreature extends Animal {
  constructor(name, type, color, isFriendly) {
    super(name, type, color, isFriendly);
    this.powers = ["invisitbility", "ruggedly handsome"];
  }
  grantWish(wish) {
    console.log(`I have granted your wish to ${wish}`);
  }
  walk() {
    console.log(`!!!!!!!!!  ${this.walkStyle} !!!!!!`);
  }
  greet(otherBeing) {
    super.greet(otherBeing);
    console.log("I am greeting you from a mythical place");
  }
}
const memphis = new MythicalCreature(
  "Memphis",
  "dragon",
  "blue",
  "flies really high"
);
console.log(memphis);

memphis.walk();
memphis.grantWish("become good at Javascript");
memphis.greet("Marhsmallow");
console.log(memphis.powers);
// Let's OVERRIDE our parent's walk method
// "Super is like a chaperone where you got to check with your parents" - Kim 10/9/2022
// Let's reference the parent's class' method and and extend its original functionality

// Let's add properties to our new class in its constructor

/*

********** FACTORY FUNCTIONS*********
   

    Sometimes we need a controlled way to generate other objects.
    Sometimes creating a new instance involves a lot of complex logic.
    A Factory function is a way to ABSTRACT that logic in a simple form that can be reused.

    For example:  Creating a deck of Cards involves a lot of work that we want to 

    What do we need in order to create a deck of cards?
    we need a DeckOfCards class
    we need a Card class

    1.  suits -> spades, diamonds, hearts, clubs
    2.  values 1-13
    3.  face values  1:ace, 11:jack, 12:queen, 13:king

*/
class Card {
  constructor(face, value, suit) {
    this.face = face;
    this.value = value;
    this.suit = suit;
  }
}

class DeckOfCards {
  constructor() {
    this.cards = [];
    this.createDeck();
    this.shuffle(this.cards);
  }
  // we need a list of suits
  // then we need to run what we have for each item in the suits

  createDeck() {
    const suits = ["hearts", "spades", "diamonds", "clubs"];
    for (let j = 0; j < suits.length; j++) {
      for (let i = 1; i <= 13; i++) {
        if (i === 1) {
          this.cards.push(new Card("Ace", i, suits[j]));
        } else if (i === 11) {
          this.cards.push(new Card("Jack", 10, suits[j]));
        } else if (i === 12) {
          this.cards.push(new Card("Queen", 10, suits[j]));
        } else if (i === 13) {
          this.cards.push(new Card("King", 10, suits[j]));
        } else {
          this.cards.push(new Card(i, i, suits[j]));
        }
      }
    }
  }
  shuffle(array) {
    let m = array.length;
    let i = 0;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      [array[m], array[i]] = [array[i], array[m]];
    }
    return array;
  }
}
const myCards = new DeckOfCards();
console.log(myCards.cards);
console.log(myCards.cards);
