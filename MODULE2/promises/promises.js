// Promises
const delayedMessage = new Promise((yourCallbackSuccessFunction) => {
    setTimeout(() => {
      yourCallbackSuccessFunction("I love Promises!!!!!!!");
    }, 5000);
  });
  
  const logMessage = (message) => {
    console.log("We're in the named success function that was passed to .then");
    console.log("The message given to this success function was: " + message);
  };
  
  // delayedMessage.then(logMessage);
  
  // Commented out so we're not doing this twice, but comment the below back in to see it works the same!
  // (And probably comment out the above `delayedMessage.then` call so it doesn't run twice.)
  // This is using an anonymous function instead of a named function.
  // Much more common to do it this way! (It's shorter and you don't have to name a trivial function.)
  delayedMessage
    .then((message) => {
      // manipulate dom with message 
      console.log("In the anonymous success function that was passed to .then");
      console.log("The message given to this success function was: " + message);
    })
  
  
  
  
  