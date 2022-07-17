# Agenda
- [Bookmarks App Preview](https://www.youtube.com/watch?v=-FrpZpGk82c)
- MVC/Crud Review
## Review
How does a client communicate with a server?
It sends a HTTP request

How does a client send a request to our server?
Postman - sends requests for us not in the browser
Forms capture user input and their data is sent in the BODY of a request

What kinds of requests can be sent to a server?
CRUD - Create, Read, Update, Delete
GET - gets data from the server
POST - creates a new record this needs some sort of data to be sent in the body
PUT/PATCH - update the info of a record
DELETE - deletes a record

How do we make routes dynamic in express?
by prepending a `:` in front of our route we create a `parameter`
if my route is `coffee/:name` -  `:name` is my parameter;

We key into this using `req.params`

req.params = { name: "latte" }

What is a query string?
Any string after a ? in a url 

queryString =  {
    q : "query+string",
    sxsrf: "somecrazystring"
    source: "some value"
}

This is how we send information to the server

How do we access a query string in express?
In express we can key into an object called `req.query`

## Notes
What is MVC?
Model View Controller;
MVC is a pattern that we use in order to Seperate Concerns;
MVC has proven itself time and again as an effective way to organize code and many develpers


What is a Model?
The model is our DATA - template for our data


What is a View?
The visual layout and UI of the page. 
React is in charge of rendering our views.
How the user communicates with our server

What is a Controller?
Is what tells the data model how to change based on certain parameters in the request.  The controller is our business logic.
The middleman between the server and the client;


## Code Along - Controllers

## Lab Time [Express Fitness](https://github.com/joinpursuit/express-fitness.git)

## Bonus Lab [Express UFO](https://github.com/joinpursuit/express-ufo)

Pairs for 7/17
1. Adnan Adams & Christine Taylor
2. Dan-ell Morales & Ametzayin Maldonado
3. Jamal Ruiz & AC Kleemoff
4. Jede Brahma & Ziqian Pan
5. Jimmy Ayivor & Victor Lopez
6. John Prado & Tom LaTulipe
7. Jorge Carrera & Thierry Ankoue
8. Kalilah Clarke & Taji Fuller
9. Kenya Mighty & Spencer Simon
10. Kenyetta Griffin & Soma Majumder
11. Khaleed Uddin & Zane Ahmed
12. Luke Kinoshi & Samantha Figueroa
13. Mason Mei & Sabrina Escobar Flores
14. Michael Kleemoff & Olayinka Fakanbi