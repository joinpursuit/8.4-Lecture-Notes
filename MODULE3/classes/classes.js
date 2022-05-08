class Animal {
    constructor(name){
        this.name = name
        // inside our constructor lets give our Animal class
        // instance a name using the `this` keyword
    }
    // constructor goes here  - takes in a name for our animal instance
    // that gets passed in at creation

    speak(words){
        return `${this.name} says ${words}.`
    }

    eat(food){
        return `${this.name} eats ${food}`
    }
    // create a method called speak that returns a string of the 
    // Animal instance's name says the words passed as an argument

}

// create an instance of animal using the new keyword
let leo = new Animal("Leo");
console.log(leo.name)
let rex = new Animal("Rex")
console.log(rex.name)

// call the Animal class' .speak method on the instance of animal
console.log(leo.speak("roar"))

// access the Animal instances' .name property








class Dog extends Animal {
    constructor(name, breed) {
        super(name)
        // calls the super function to pass the arguments
        // required by the parent class
        this.breed = breed;
        // creates an property breed specific to the dog class
    }

    bark() {
        return `${this.name} barks.`
    }
    // creates the bark method specific to the dog class
}

// create an instance of dog

// call the Animal class' .speak method on the instance of dog
// note: we didn't have to define this in the dog class

// call the Dog class' .bark method on our instance of dog
