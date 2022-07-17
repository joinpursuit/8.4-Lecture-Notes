# Routes
- Other framerworks have strong conventions that dictate how you must design your application. Following these coventions would allow your application to work "magically"
- Express is not as opinionated of a framework as others you might encounter. Express puts the power back in your hands, giving you the power (and responsibility) to thoughtfully design your application's configuration
- Fortunately for us, there are design patterns that we can follow to help us do just that that.
    * Activity time!

## Rest
- Representational state transfer (REST) is a term software architectural style for exchanging data in well-defined formats in order to increase interoperability.
- Long story short - its a best practice that we will follow. We have already observed and worked with this pattern with the API's that we have used to build our projects in this course thus far


|  #  |   Action   |      URL       | HTTP Verb |    CRUD    |                Description                 |
| :-: | :--------: | :------------: | :-------: | :--------: | :----------------------------------------: |
|  1  | **Create** |   /bookmarks   |   POST    | **C**reate |           Create a new bookmark            |
|  2  |  _Index_   |   /bookmarks   |    GET    |  **R**ead  |   Get a list (or index) of all bookmarks   |
|  3  |  **Show**  | /bookmarks/:id |    GET    |  **R**ead  | Get an individual view (show one bookmark) |
|  4  |   Update   | /bookmarks/:id |    PUT    | **U**pdate |             Update a bookmark              |
|  5  |  Destroy   | /bookmarks/:id |  DELETE   | **D**elete |             Delete a bookmark              |


## Show Route

- What should the url for this route be?

- What should happen when we navigate to this url?

- Let's create a show route in our bookmarks app:
    - We don't have an id? What can we use instead?
    - Using the array index lets create a show route that will return the bookmark at the index within the params:
        ```js
        bookmarks.get("/:arrayIndex", (req, res) => {
            const { arrayIndex } = req.params;
            res.json(bookmarksArray[arrayIndex]);
        });
        ```
    - What happens if there is no bookmarks at the given index?
        - Let's add some error handling in the even that the given index isnt valid:
        ```js
        bookmarks.get("/:arrayIndex", (req, res) => {
            if (bookmarkArray[req.params.arrayIndex]) {
                res.json(bookmarkArray[req.params.arrayIndex]);
            } else {
                res.status(404).json({ error: "Not found" });
            }
        });
        ```

## Create Route

- What should the url for this route be?

- What is different about this request?
    - Thus far we've only made requests using the `GET` verb. However, this will only allow our application to send some data. If we want to receieve data from a user we have to make a `POST` request.

- What should happen when we make a request to this url?
    - Since we are working with an array that is stored in memory, we are just going to push our new data onto the array. The problem is, every time we restart the server our changes will disappear. Later, we'll learn about persisting our data with a database.
    ```js
    bookmarks.post("/", (req, res) => {
        bookmarksArray.push(req.body);
        res.json(bookmarksArray[bookmarksArray.length - 1]);
    });
    ```
    - Now that we have created a create route for our bookmarks we can test it out using some curl commands
        - Get all bookmarks: `curl http://localhost:3003/bookmarks`
        - Sample bookmark post: `curl -H "Content-Type: application/json" -X POST -d '{"name":"AV Club", "url": "https://www.avclub.com"}' localhost:3003/bookmarks`
        - View updated bookmarks: `curl http://localhost:3003/bookmarks`
        - Did that work? Why or why not?

    - We need to add some middleware that willl parse our JSON into some data we can use
        - In app.js above our routes:
        ```js
        app.use(express.json());
        ```
        -Now let's try our curl commands again

# Middleware
- Think of middleware as a layer of code that "runs in the middle" of a request and response. 
- In express we have a third parameter to our callback function called next that allows us to to tell our application when to move to the next callback function
    - Let's see this by adding the following code to our app.js file:
        ```js
        app.use((req, res, next) => {
            console.log("This code runs for every request");
            next();
        });
        ```
- We can also can add middleware to certain routes only
    - Add to bookmarksController.js:
        ```js
        const validateURL = (req, res, next) => {
            console.log("This function checks the validity of the URL entered by the user");
        };
        ```
    - Add this function to our CREATE
        ```js
        bookmarks.post("/", validateURL, (req, res) => {
            bookmarksArray.push(req.body);
            res.json(bookmarksArray[bookmarksArray.length - 1]);
        });
        ```
    - Let's try the curl command to see what happens without the next function
    - Now lets be sure to call the next function in our `validateURL` function. We should now be able to complete our post request.
