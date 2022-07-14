const express = require("express");
const rocks = require("./models/rock");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the rock shop!")
});

app.get("/rocks", (req, res) => {
    res.send(rocks)
})

app.get("/rocks/cool", (req, res) => {
    res.send("rocks are cool")
})

app.get("/rocks/:index", (req, res) => {
    const index = req.params.index
    console.log(index, "<=------- this is our param")
    if (rocks[index]) {
        res.send(rocks[index]);
    } else {
        res.send("sorry, no rock there my friend")
    }
})


app.get("/hello/:firstName/:lastName", (req, res) => {
    console.log(req.params);
    const { firstName, lastName } = req.params;
    res.send(`Hello ${firstName} ${lastName}!`)
})

app.get("/calculator/:operator/", (req, res) => {
    console.log(req.params, "<---- this is our parameter")
    console.log(req.query, "<----- this is our query string")
    const { num1, num2 } = req.query;
    const sum = Number(num1) + Number(num2)
    res.send("total = " + sum) 
})
module.exports = app;