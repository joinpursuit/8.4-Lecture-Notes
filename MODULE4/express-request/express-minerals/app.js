const express = require("express");
const rocks = require("./models/rock");
const app = express();
// Our requests have a PARAMS object used to access the url paramters
// just like our useParams() in React apps do.
// The keys of these objects are dictated by our routes
// when the user makes a request - express assigns their specific request
// to the req.params object at the key we put forth in the route
app.get("/", (req, res) => {
    res.send("Welcome to the rock shop!")
});

app.get("/rocks", (req, res) => {
    res.send(rocks)
})
// this route MUST be above the next in order to be reached;
app.get("/rocks/cool", (req, res) => {
    res.send("rocks are cool")
})

// any request to http://localhost:3333/rocks/0
// will have params as such { index:"0" };
app.get("/rocks/:index", (req, res) => {
    const index = req.params.index
    console.log(index, "<=------- this is our param")
    if (rocks[index]) {
        res.send(rocks[index]);
    } else {
        res.send("sorry, no rock there my friend")
    }
})

// any request to http://localhost:3333/hello/kenya/mighty
// has params object such { firstName: "kenya", lastName:"mighty" }
app.get("/hello/:firstName/:lastName", (req, res) => {
    console.log(req.params);
    const { firstName, lastName } = req.params;
    res.send(`Hello ${firstName} ${lastName}!`)
})

// any request to http://localhost:3333/calculator/add?num1=2&num2=3
// will have a query object: { num1: "1", num2: "3" }
app.get("/calculator/:operator/", (req, res) => {
    console.log(req.params, "<---- this is our parameter")
    console.log(req.query, "<----- this is our query string")
    const { num1, num2 } = req.query;
    const sum = Number(num1) + Number(num2)
    res.send("total = " + sum) 
})
module.exports = app;