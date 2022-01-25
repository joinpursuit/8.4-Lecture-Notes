# JavaScript on Your Machine

## Learning Objectives

By the end of this lesson you should be able to:

- Describe what NodeJS is and why it's important.
  - A JS runtime that lets us run JS code outside of a browser.  It also functions as a JS REPL
- Install NodeJS on your local machine through Homebrew.
  - in terminal - `brew install node`
- Run JavaScript files with the `node` command.
  - Executes the file that we pass with `node` 
- Access command line arguments with the `node` command.
  - process.argv;  
- Run JavaScript in the NodeJS REPL.
  - node 

---

## Guiding Questions

- What is NodeJS?
  - NodeJs is a javascript runtime that allows us to execute JS code outside of the Browser;
  - JS was originally desigend for in browser use only.  Node allows us to communicate with our machines - not just the browser
  

- Why was NodeJS so influential on the JavaScript community?
  - It allowed js developers to create and write backend code
  - NPM (node package manager) a repository of open source code that we can use!
   

- How can you check which version of `node` you have?
```bash
node -v
```


- How do we install `node` using `homebrew`?
```bash
brew install node
```


- Create a new `.js` file and put the following inside of it.

  ```js
  function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }

  const fruits = ["🍓", "🍐", "🍎"];
  addFruit(fruits, "🥝");
  ```

  How can you run this file from the command line?

- When you run this file, nothing is shown on the command line. How can you update the file so that it prints the response to your terminal window?
  - We need to invoke `console.log()` to print to the console
  - We may see `process.stdout.write()` but it is functionally very similar to `console.log()`

- Try adding the following line inside of your file. What gets logged out? What _data type_ is `process`?

  ```js
  console.log(process);
  ```
  - process is an object
- Try adding the following inside of your file. What gets logged out? What _data type_ is `process.argv`?

  ```js
  console.log(process.argv);
  ```
  - it is an Array;

- What will always be the first and second elements of `process.argv`?
  - The path of node on our machine;
  - The second is the location of the file executed;

- Update your `.js` file so that it contains the code below.

  ```js
  function addFruit(fruits, fruit) {
    fruits.push(fruit);
    return fruits;
  }

  const fruits = ["🍓", "🍐", "🍎"];
  const input = process.argv[2];
  if (input) {
    let result = addFruit(fruits, input);
    console.log(result);
  } else {
    console.log("No fruit added...");
  }
  ```

  How can you change what you run on the command line so that a new fruit is added to the array?

  - We can pass arguments when we execute the code after passing the name of the file to execute.

- After running the code and adding a fruit, your file will not change. This means your changes are not permanent. Why is this?
  - Javascript executes the same code every time the file is invoked and the code is always the same.  What changes are the values we pass to the execution.

- How can you open the NodeJS REPL?
  ```bash
  node 
  ```


- How can you run code in the NodeJS REPL?
  - write code, hit enter;

- How can you exit the NodeJS REPL?
  `.exit` `Ctrl + C` twice, `Ctrl + D` once; 

- Is it possible to write a full function over multiple lines in the REPL? How?
  - Yes. Declare the function hit enter.  Call the function in the same REPL instance.
