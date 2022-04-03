// Promises with error handling.
// Change the below value to `true` to see an error happen!
const shouldSimulateError = true;

const delayedMessage = new Promise(
  (yourCallbackSuccessFunction, yourCallbackErrorFunction) => {
    setTimeout(() => {
      if (shouldSimulateError) {
        yourCallbackErrorFunction("An error occurred!");
      } else {
        yourCallbackSuccessFunction("I love Promises.");
      }
    }, 10000);
  }
);

delayedMessage
  .then((message) => {
    console.log("Anonymous function that was given to .then");
    console.log(message);
  }).
  catch((error) => {
    console.log("Anonymous function that was given to .catch");
    console.log(error);
  });

// Or, with named functions.
// This is much less common unless the functions are significant in size or complexity.
// const logMessage = (message) => {
//   console.log("Named function that was given to .then");
//   console.log(message);
// };

// const logError = (error) => {
//   console.log("Named function that was given to .catch");
//   console.log(error);
// };

// Commented out so we're not doing this twice, but comment the line back in to
// see that the named functions above work the same as the anonymous ones!
// // (And probably comment out the above `delayedMessage.then` call so it doesn't run twice.)
// delayedMessage.then(logMessage).catch(logError);
