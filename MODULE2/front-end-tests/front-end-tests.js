// Understanding Front End Tests

// Learning Objectives

// By the end of this lesson you should be able to:

// - Describe the role of tests on the front end.
// - Interpret test output for front end tests in order to take actionable steps in code.

// ---

// Setup

// To work through today's lesson, you will need to fork and clone the following repository.

// - [Introduction to HTML Lab](https://github.com/joinpursuit/8-0-introduction-to-html-lab)

// Once you've forked and cloned it, run the following command in your terminal. You should be in the folder created by the cloning process.


// Guiding Questions

// - In the past you've seen unit tests. What are unit tests?
// Unit tests are smaller single logical tests used in a file
// Unit tests, integration testing, end to end testing.

// - What are some reasons front end testing can be challenging?
//  Let's consider an image - how many different properties do we need to account for?
//  image path - is it correct?  Image size? Is it too big or too small?
//  different browsers  - image responsiveness 
//  Front end testing has HTML, CSS, and JS to account for - thats THREE languages. 

// - What is Cypress?
// Is a front end testing framework written in JS - very similar to Jest

// - Take a look at the `cypress/` folder in the lab you cloned. Which folder in this folder contains test files for the lab?

// - What is a `describe()` block?
// Describe contains our individual test thats we will run 

// - What is an `it()` block?
// The actuall test that we are running with individual conditions inside

// - Each test condition starts with `cy`. What do you think `cy` refers to?
// Cypress - nice work!


// - Take a look at the following test condition. What is required to get this test to pass?
// 3 <h2> tags are needed to pass this 'should' condition

  cy.get("h2").should("have.length", 3);
  

// - Take a look at the following test condition. What is required to get this test to pass?
// Three <h2> tags with "Description", "Ingridients", "Directions"

  cy.get("h2").should((headings) => {
    expect(headings[0]).to.contain.text("Description");
    expect(headings[1]).to.contain.text("Ingredients");
    expect(headings[2]).to.contain.text("Directions");
  });
  

// - Take a look at the following test condition. What is required to get this test to pass?
// Gets an image - we should only have one and that should be visible

  cy.get("img").should("have.length", 1)
  .and("be.visible");
  

// - Take a look at the following test condition. What is required to get this test to pass?
// getting the linebreak and getting its length - we need 4!
// GTE => is an alias for least - "greater than or equal to"
  cy.get("hr").its("length")
  .should("be.gte", 4);
  

// - Take a look at the following test condition. What is required to get this test to pass?
// Literally looking for an  `<em>free</em>`

  cy.get("em").should("have.text", "free");
  

// - Try running tests in the lab you cloned. You can do so by typing the following into your terminal.

  
//   npm test
  

//   What happens?

// - How can you run all tests associated with this lab?

// - How can you run a single file associated with this lab?

// - Try running one or all tests. A browser should open after you begin running the tests. Why does this happen?

// - How can you close Cypress?


// GROUP WORK !
// https://docs.cypress.io/api/commands/contains