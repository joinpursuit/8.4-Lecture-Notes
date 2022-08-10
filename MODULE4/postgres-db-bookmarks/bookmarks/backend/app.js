const express = require('express');
const cors = require("cors");
const app = express();
// CONTROLLERS
const bookmarksController = require("./controllers/bookmarksController.js");
// MIDDLEWARE - What happens between the REQ but BEFORE it hits a route. After the REQ but before the ROUTE
// REMEMBER THESE MUST COME BEFORE OUR CONTROLLERS OR WE WILL HAVE A BAD TIME
app.use(cors());
app.use(express.json());

app.use("/bookmarks", bookmarksController);


// Bouncer at the club - Allows requests from other origins (like our REACT APP)
// PARSES JSON FOR US SO WE CAN USE IT - thanks Christine

app.get('/', (req, res) => {
    res.send("welcome to bookmarks - this route brought to you by Luke")
});

//404
app.get("*", (req, res) => {
    res.status(404).send("page not found - this is from line 20 by the way")
})

module.exports = app;