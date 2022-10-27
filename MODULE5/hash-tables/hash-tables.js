/* 
    ***** Goals For Today *****
        - Be able to idenfity the following:
            - a Hash => processed value through a hash function
            - a Hash Function => complex way of encoding some data
                string goes in => crazyInsaneValue comes out
                we can even pass crazyInsaneValue back to our hash in certain complex cases
                to decode the data;
            
            - a Hash Table / Map =>  a data strucutre that leverages a hash function for the 
            efficent storage and retreival of data - based on hashed values
            in Javascript an object is an implementation of a hash table/map (with some caveats)

            - JS Map 
*/



/* 
    Across compting languages, there can be a different name for the same (or very similar things). 
    Let's look at some more similar, yet sometimes different, terminology

    Associative arrays: similar to JavaScript object, or Python dictionary, or hash in Ruby. These are made up of key-value pairs.

    Hash Map, Hash Table - both are quite similar to each other and can be interchanged sometimes when people are describing them. They are both built-in to some languages (like Java) and have some performance differences depending on what the goal of the code is.

*/

// First off whats a hash?

// a hash is a stored encrypted value; 

// bcrypt is a well known hashing program that cna be used to encode things we may not want people to be able to read

const bcrypt = require('bcrypt');
const password = "sweetPassWordMyDude";
// here we are invoking the hash() method from the bcrpyt npm package;
bcrypt.hash(password, 10, function(err, hash) {
    if(err) {
        console.log(err)
    }
    // after hashing we could use this value in our database
    else console.log(hash)
});

//  So WHY should we use them hash tables?
const myObj = { name: "tim"}
console.log(myObj["tim"])
// [ 1000.... 250:"tim" ]

// Let's visit our old friend Dr Linked-List
class LinkedList {
    constructor(head) {
        this.head = head || null;
    }

    // what is the Big O of this action?
    // O(n) 100 item in the list worst case scneario we make 100 moves to retun null
    search(key) {
        let node = this.head;
        while (node !== null && node.data !== key) {
          node = node.next;
        }
        return node;
      }
      // how bout this?
      // Big O(1)
      // myArr[myArr.length-1]
    getFirst() {
        return this.head
    }
}

// lets take a look at some miro to explain whats different here


/* 
    Let's build one out  

    Just like our dictionary on the wall - we don't want the number of pages on the wall to be too small or else the search time would take too long. We also don't want to make it too big, since at some point it takes up so much space, we may end up with a lot of unnecessary blank space on the wall and it no longer becomes useful.

    We are going to build a basic hash table that will use some arbitrary values for demonstration purposes.

    Our very simple hash table with have one property:
        A table to store the data

    
        Our table will have three properties
            Index
            an array of size two that stores 
                Key - value pairs
    
*/

class HashTable  {
    constructor() {
        // buckets - our table has 127 buckets that we can index into to find our data;
        this.table = new Array(127);
    }
// we need to CREATE our special HASH - our code - to store our value at a certain location
// why is this marked with a  `_` ???
    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += key.charCodeAt(char)
        }
        // just a bunch of fanciness to return a nubmer
        // that number is where we find our data
        return hash % this.table.length;
    }
// we need a method to add something to our table based on its HASH 
    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value]
        // we would need to build conditional logic
        // that would check if we have something already at our index
        // if we do 
        // we CREATE A LINKED LIST AT THAT INDEX to nest our data;

    }
 
    get(key) {
        const index = this._hash(key)
        return this.table[index]
        // to retreive data with collisions we need to see if there is a linked list
        // at our bucket - our data adress - and then iterate over the list 
        // til we find our key - then return that value;
    }
    // we need a method to delete an entry
    delete(key) {
        const index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            this.table[index] = [];
            return true
        }
        return false
    }
    // CHALLENGE - what happens when we have two hashed items that point to the same bucket?

    // this is called a collision!#@@#!@
}
let hashTable = new HashTable()

hashTable.set("John Prado", "Pursuit fellow - Yankee fan")
console.log(hashTable.get("John Prado"))
hashTable.delete("John Prado")
hashTable._hash("zugzwang") // 87;
console.log(hashTable._hash("watch")); // 87
const john = {JohnPrado: "Yankee fan"}
/*

 MAP - Think of it as a special object
 
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

   Generally, it is fine to use a regular JavaScript object, unless you have a good reason to use a map.

    Here are some of the differences between Map and JavaScript objects

   -  No accidental keys 
        if you wanted to create a key called toString which is a method on a JavaScript object, you could not do it with a regular object, you would need Map
    - key types 
        with a regular object you can only use strings, but with Map you can use, numbers, functions, objects etc.
    - key order 
        Map maintains the order which keys are entered
    - size 
        easily determined by using the size property
    - iterable ( can iterate like an array or string - we can even do a forEach with a map);

    - is faster for inserting/deleting


*/
const animals = [
    "otter",
    "dog",
    "dog",
    "dog",
    "parakeet",
    "woodchuck",
    "cat",
    "tardigrade",
    "dog",
    "cat",
    Array.prototype.filter,
    bcrypt,
    11,
    4,
    205,
    76
  ];

const uniqueArray = (arr) => { 
    const map = new Map();
    const unique = [];
    for (let item of arr) {
        if (!map.get(item)) {
            unique.push(item);
            map.set(item, true)
        }
    }
    console.log(map)
    return unique;
}
console.log(uniqueArray(animals))


