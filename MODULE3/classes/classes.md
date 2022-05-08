# Object Oriented Programming

- ([Insert NaughtyByNature Joke Here]) What the heck is that even!??
  - JavaScript is natively a funtionally oriented programming language. Classes are JavaScript attempt at object oriented programming.
  - Object Oriented Programming is the basic idea that we use objects to model real world things that we want to represent inside our programs.
  - In OOP, Objects can contain related data and code, which represent information about the thing you are trying to model, and functionality or behavior that you want it to have.

# Classes

- What are classes and why do we need them?
  - What are they?
    - Not objects!
    - Classes are blueprints for creating objects.
    - Classes are high-level data structures that can contain many attributes and methods. 
    - Most of the data structures we know how to use already are classes
  - Why do we need them? - More controlled - Less repetitive - keeps code DRY
  - Whoo hoo! Classes sound amazing! How do we make 'em?
    - Slow down young padawan... there are some rules.
      - use the `class` keyword to declare a class
      - class names start with capital letters by convention
      - use the `new` keyword to instantiate a new class instance
  - Cool! We made a class... we should maybe put something in it, huh?
    - We can add properties to our classes using the constructor
      - constructor is a function 
      - constructor enables us to provide any custom initialization for an instance of our class that must be done before any other methods can be called on a class instance.
      - inside of our constructor we can declare properties using `this`
    - We can also add class methods
      - Just like other functions we can pass arguments to our class methods

# This

- WHAT ARE THOOOOOSEEEEEEE?!?!?!? Couldn't tell you fam. But I can tell you:
  - What is `this`?
    - `this` is a special keyword in JS that refers to the object executing the code
    - `this` is a property which is stored on all functions(which are essentially objects) that point to a value that is the current execution context
    - when used inside of a class' constructor function ensures we are referencing the properties inside `this` class (the one we've created and are currently inside)
    - Why do we care? A lot of reasons - but immediately because `this` allows us to define and access attributes of a class

# Excercises

  - Exercise 1: Create an instance of the Animal class. Give it a unique name. Assign the instance to a variable, and log the instance's name and the result of its speak method (with some unique words to speak) to the console.

  - Exercise 2: Create instances of the Animal class with these names. Log name and speak() to the console for each instance. Use the words in the table with speak() How can you use a loop to do this more efficiently?

| Name | Says |
| ---- | ---- |
| Kermit | ribbit |
| Ms. Piggy | oink |
| Fozzie | wakka wakka |
| Rowlf | arf arf |
| Big Bird | cheep cheep |

  - Exercise 3: Let's add some attributes and methods to the Animal class code
    - Add an age attribute to the Animal class. Update the constructor to set the age when an instance of Animal is created.
    - Add a greet method to the Animal class. greet() should return a string that contains the animal's name and age. Ex: Hello. My name is Luna and I am 42 years old
    - Create two new instances of Animal. Log the instances' age and greeting to the console.

# Extending Classes
  - Allows us to define a new class with the same methods (and properties) of an existing class, plus whatever new methods and properties we want to define.
  - In order to extend a class we muct first use the class keyword, followed by the name of the new class, followed by the `extends` keyword and then the name of the parent class (the class we wish to extend)
  - We must call the `super()` function inside of the constructor to make sure the parent class gets the data that it needs. The `super()` function will call the constructor of the parent class at the time a class instance is initialized(created).

  - Excercise 4: Create a Cat class that extends Animal. Cats should have a meow() method. Create an instance of Cat and log its speak() and meow() methods to the console.


