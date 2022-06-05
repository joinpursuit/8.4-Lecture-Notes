
- What is a resource?
    - Code that is meant to represent real processes and concepts in the real world that share similar qualities

- Visit the webpage of your learning management system, Canvas. What are some resources you think Canvas has?
    - Assignments, Modules, Classes, Students
    - Other Considerations: Instagram, OpenTable

- What does CRUD stand for?
    - Create, Update, Read, Delete

- CRUD is a generic concept that can apply in many situations. Keeping that in mind, answer the following questions:
    - What CRUD actions can be performed on a file via the command line?
        - Create using `touch`
        - Read using `cat` or `less`
        - Update using `mv`
        - Delete using `rm`

    - What CRUD actions can be performed on an array in JavaScript?
        - Create - Add a new element using .push(), .unshift(), or indexing at array length
        - Read - by referring to an element at its index
        - Update - by referring to an element at its index and reassigning it
        - Delete - using .pop(), .shift(), using JS delete() operator, or indexing at array length and assigning to undefined

    - How does CRUD relate to resources?

- What is an HTTP method or verb?
    - Methods that indicate different kinds of actions we want to to perform with our data.

- So far in this class, what method have you been using when you've made external API requests?
    - GET Requests which are used to tell the server we want to retrieve data.

- What are the different HTTP methods that are related to CRUD actions?
    - POST - Allows us to create a new resource.

- Keeping the above in mind, take a look at the following requests which include an HTTP method and a path. Make a guess as to what action is being taken and what the resource is.
    - GET /products
    - POST /products
    - PUT /products/99
    - DELETE /products/11
    - GET /users/491
    - PUT /users/491

- There are four common "kinds" of pages. What are they?
    - Index - shows a list of a particular resource
    - Show - Features one of a particular resource
    - New - Allows user to create a resource
    - Edit - Allows us to modify an existing resource

- How is an Index page different from a Show page?
    - Show pages typically read a single resource, as opposed to the Index page which reads multiple.

- How is an Edit page different from a New page?
    - Instead of creating a new resource and edit page is used to modify a resource that already exists

The following bullet points each have a description of a page. Based on the description, identify what common page is being represented and what action or actions are being taken or capable of being taken.

Keep in mind that this can often be subjective. Focus on explaining your reasoning as opposed to just getting it right!

- A form to submit a new post to a social media network.
    - Page: New
    - Action: POST

- A page which shows a series of shows you can watch online.
    - Page: Index
    - Action: GET

- A sign up form for a website.
    - Page: New
    - Action: POST

- A page with the most popular images you've posted to social media in the past.
    - Page: Index
    - Action: GET

- A page that allows you to set timed alarms. The page also includes a button next to each alarm that allows you to delete the alarm.
    - Page: Index, New
    - Action: GET, POST, DELETE

- A page with a todo list that contains a list of tasks to be completed. The user can fill out a form on the top with new tasks. When it is submitted, the new task appears on the list.
    - Page: Index, New
    - Action: GET, POST