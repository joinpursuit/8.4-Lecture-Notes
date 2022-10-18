// QUEUE
// Have first-in, first- out (FIFO) functionality
// Are fair
// Function essentially like an array if you were 
// to utilize shift and push exclusively or unshift and pop exclusively

// Will have the following methods
// enqueue (adds an item)
// dequeue (removes an item)
// peek (returns the top item)
// isEmpty (checks if the queue is empty)

// Let's implement a Queue using a Linked List Data Structure

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  const patrons = [
    "Jede",
    "Kim",
    "Jimmy",
    "Adnan",
    "Dan",
    "Kalilah",
    "Zane",
    "Christine",
    "John",
    "T.K.",
    "Jamal",
    "Gigi",
    "Tim"
  ];

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    enqueue(data) {
        // initialize new Node
        let newItem = new Node(data)

        if (!this.first){
          this.first = newItem
          this.last = newItem
        } else {
          this.last.next = newItem
          this.last = newItem
        }
        return ++this.size
        // check if we have any nodes in queue
        // if queue is empty set first and last to initialized node
        // else set initialized node as last node's next and new last
        // increment size and return new size

    }

    isEmpty() {
        return !!this.first
        // check if we have nodes in our queue and returns boolean
    }

    dequeue() {
        if (this.first === null){
          throw new Error("This queue is empty!")
        }
        // throws error if queue is empty
      
        // line1 = Gigi this.first + this.last
        // line2 = Kim, Gigi


        let item = this.first // Kim
        if (this.first === this.last){  //false->  first -> Kim last -> Gigi
          this.last = null 
        }
      
        // check if the first and last node are the same (only one node in our queue)
        // if true set current last to null
        this.first = this.first.next // Gigi
        this.size -- // 1
        // set new first element
        // decrement size
        return item.data // Kim
        // return dequeued node data
      }

      peek() {
        if (this.first === null){
          throw new Error("This queue is empty!")
        }
        // throws error if queue is empty
        return this.first
        // return first node in the queue
      }
  }


// const { inspect } = require("util")
const queue = new Queue()
for (let i = 0; i < patrons.length; i++) {
  queue.enqueue(patrons[i]);
}



