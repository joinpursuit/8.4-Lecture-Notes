// const { inspect } = require("util");
// STACKS
// Have last-in, first- out (LIFO) functionality
// Like life - Are not fair
// Function essentially like an array if you were only able to use push and pop

// Let's implement a Stack using a Linked List Data Structure:

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  const months = [
    "Jan",
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

// Will have the following methods
// push (adds an item)
// pop (removes an item)
// peek (returns the top item)
// isEmpty (checks if the stack is empty)
// toArray (converts our linked list to an array)

class Stack {
    constructor(top = null) {
      this.top = top;
    }

    isEmpty() {
      return this.top === null
      // checks if we have nodes in our stack and returns boolean
    }

    push(data) {
        const newItem = new Node(data)
        // initialize node w/ Data
        newItem.next = this.top
        // set new node next to current top
        this.top = newItem
        // set top to new Node
    }

    pop(){
        if (this.isEmpty()){
          throw newError("We gots no stack!!!!")
        }
        // throws error if stack is empty
        const item = this.top; // red tray
        if (item){ // if we have a tray????
          let newItem = item.next // green tray
          this.top = newItem // top = green tray
          return item // give user red tray
        }
        // if there is a node on the top of our stack:
        // saves current top node to a var
        // resets top to current top node next
        // returns the node we removed (our var)
    }

    peek(){
        if (this.isEmpty()){
          throw new Error("stack is empty!")
        }
        // throws error if stack is empty
        return this.top
        // returns top node
    }

    toArray(){
        let dataArray = [];

        let node = this.top
        while (node){
          dataArray.push(node.data)
          node = node.next
        }
        return dataArray
        // returns an array of all our nodes
    }
}

const stack = new Stack()
console.log(stack.isEmpty())
for(let i = 0; i < months.length; i++){
  stack.push(months[i])
}




