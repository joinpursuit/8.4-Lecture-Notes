/*
  The `getPersonInQueue()` function returns a promise. If given a number, it will attempt to find the person in the queue at that position. For example, `getPersonInQueue(7)` will attempt to find the 7th person in the queue.

  If given no value, a value that is not a number, or a number that does not match a person in the queue, it will fail and return an error message.
*/

const getPersonInQueue = require('./helpers/getPersonInQueue');

const getPeople = (number) => {
  let i = 1;
  let count = 0;
  while( i <= number) {
    getPersonInQueue(i)
      .then(data => {
        count+=1
        console.log(`${count}: ${data}`);
       })
      .catch(err => {
        console.log(err);
       })
    i++;
  }
} 
// What will this getPeople function return?
getPeople(100)