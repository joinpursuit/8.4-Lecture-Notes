# React CRUD Lab

You've been hired to build out _ScreenViews_, a website dedicated to rating shows and movies. While the backend server has been created, you'll need to build the entire frontend on your own. Don't worry, with your new React knowledge you'll be able to create a fantastic web application!

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

#### Testing Tips

Keep the following in mind for this lab as you run the tests.

1. While running your tests, you must have a server up and running in another terminal. This means you will have _both_ a terminal window running the actual React application _and_ a terminal window running the tests.

1. When creating a component, make sure to create and import it with the same name as the file name. For example, the component created and exported inside of the `NavBar.js` file should be `NavBar`. The tests look for these specific names.

1. While the `cypress-watch-and-reload` package has been installed in this project, sometimes the React application will take longer to reload than the tests. If you feel as though a test should be passing that isn't, try pressing the re-run button in the Cypress tests before asking for help.

### API for this lab

You will be running your own local server on your machine. Follow the instructions at the link below to get it up and running.

- [Television Shows API](https://github.com/joinpursuit/resource-television-shows-api)

---

Data sourced from [Kaggle](https://www.kaggle.com/shivamb/hulu-movies-and-tv-shows).
