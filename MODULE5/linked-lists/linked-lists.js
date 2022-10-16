// What is a linked list?
//  A data structure that is very similar to an array;

// Data is not stored in the same place in memory for a linked list

// What is a Node?

// A basic unit of our data structrue;
// for a linked list our Nodes are the pieces of data
// each piece of data has two properties

// property #1 is our DATA - the information we need store;
// property #2 is our POINTER - this points to the NEXT item in the list

// Why would we use a linked list?

// its a way to store Data 
// BigO is a huge factor in data structures;

// if we remove the first of a large array what is the complexity?
// [1....1000] - this is in fact linear or O(n)
// an array is a special object;
// an array has key value pairs
// the keys are the indices of the data;
// {"0": "some more data" "1":undefined }

// what is the BigO of removing the item from the LAST index?
// this is in fact Constant because we only need to act on one index;

// we need some classes to create a blueprint for us to use;


// i need a node class
// has two properties 
// NEXT and DATA
// DATA is our information
// NEXT points to the next item
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
  
}
// Hold all the methods to mainpulate the linked list and has a HEAD property
// the HEAD is the first item in the linked list;

// our methods all start by operating ( for the most part) on the head;

// most of our methods involve traversing the list;
// this is accomplished by setting a varialbe to the head
// iterating over the list WHILE we have a next value and doing some sort of work;


class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    // we need some methods here!

    // size - get the size of our list

    // we need a count variable
    // we need a node to represent our current spot on the list
    // we need to loop over the linked list
    // we need a while loop because we dont know the length;
    // as we iterate lets increase count;
    // once we find a node with a next of NULL - we are at the end;
    // return our count
    size() {
        let count = 0;
        let node = this.head;
        while(node) {
            count++;
            node = node.next
        }
        return count
    }

    // search - find a piece of data in our list
        // we need to accept data
        // return a node with matching data
        // we need to loop through it 
        // we dont know how long the list is so lets WHILE LOOP
        // recursion....
        // what do we do if this data is a match?
        // return node;
        // what do we do if it DOESNT match?
        // we need to check the next value
        // reassign node to node.next;
    search(itemToFind) {
        let node = this.head;
        while(node !== null && node.data !== itemToFind) {
            node = node.next;
        }
        return node
    }
    
    // clear - reset the linked list
    clear() {
        this.head = null;
    }

    // get first - get my first, friend
    // do we need an argument?
    getFirst() {
        return this.head
    }

    // get last - get last, my dude
    // what are our steps?
    // set a variable
    // while there are nodes continue to iterate
    // until you hit a next thats null
    getLast() {
        let node = this.head;
        if(!this.head) return null;
        while(node.next) {
            node = node.next
        }
        return node;
    }

    // insert - add to the front of the list
    // function must accept data
    // we need a new node w/data ;
    // is there currently a head?
    // if yes => current node becomes NEW NODE NEXt
    //   new node becomes the head; 
    //  
    // if no => make new node our head
insert(data) {
    let newNode = new Node(data);
    if(!this.head) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode
    }

}

    // delete - remove an item at an index
    delete(data) {
        let node = this.head;
        let counter = 0;// we need to track how many steps to take to delete after we found our node
        while (node.data !== data && node.next) {
            counter++;
            node = node.next
        }
        // only breaks while loop if we have found our node
        let foundNode = node;
        //  reset node and walk through everything
        node = this.head;
        for(let i = 1; i < counter; i++) {
            // we stop right before the item to delete
            node = node.next
        }
        // this for loop will only iterate until we reach our destination node
        // once we've found the destination node - we simply assign the current node next value to the node to delete next value
        // essentially skipping it in our list;
        node.next = foundNode.next;
    }
    // accepts some data to be removed
    // walk through the linked list ( while loop );
    // IF the value matches:
        // we need to remove that item
        //
    // IF not KEEP ON WALKING;

}
// const myRealArr = ["whatever", "cheeseburger"];
const weirdArr = new Array(100);
console.log(weirdArr)
const myRealArr = {
    "-1":"myNeVal", 
"0": "cheeseburger" , 
"1":undefined
}

const firstNode = new Node(1);
const secondNode = new Node(2);

firstNode.next = secondNode;
const myListOne = new LinkedList(firstNode)

console.log(firstNode);

const months = [
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  // reference types !!! 
  // {"0":"Feb"..."11":"Dec"}
  // { head:Node }

  let previousNode = new Node("Jan");
  let listTwo = new LinkedList(previousNode);
  for (let i = 0; i < months.length; i++ ) {
    let currentNode = new Node(months[i]);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  ;
  console.log(listTwo.getLast())
  listTwo.delete("March")
  console.log(listTwo)

// and i need a linked list class
