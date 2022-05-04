# Promises

## Learning objectives

By the end of this lesson you should be able to:

- Identify the purpose of promises.
- Distinguish between the three states of promises.

---

## Setup

Begin by forking the following Repl.it.

- [Repl.it: Queue](https://replit.com/@Pursuit/Promises-Queue)

You do not need to look through the `helpers/` directory, but you should read the comment at the top of the `index.js` file.

## Guiding questions

- What does it mean for code to be run asynchronously?
  asynchronous code is the term used when a program or task can take a long time to run.  Rather than the entire code stopping and waiting for completion the rest of the file will continue to execute until the asyhnchronous code is ready to complete.

- Why is it beneficial for some code to be asynchronous?
- Async code allows the user to do other things while a process completes,

- What will be logged and in what order from the following code? Why?

  ```js
  setTimeout(() => {
    console.log("First");
  }, 1000);

  console.log("Second");

  setTimeout(() => {
    console.log("Third");
  }, 500);
  ```

second - third - first.   setTimeout() is asynchronous and will wait a set number of miliseconds before executing

- Promises were made to help handle asynchronous code. Why are they are called promises?

- The code promises to execute a callback function once completed based on wheteher or not the task suceeded.

- What are the three possible states of a promise?
- Pending - waiting to be completed;
- Fulfiled - the promise completed successfully;
- Rejected - in the event something went wrong 

- What methods can be used to access the value stored inside of a promise?
- using .then() we can access the values in a promise if it suceeded.
- .catch() is used in the event the promise failed

