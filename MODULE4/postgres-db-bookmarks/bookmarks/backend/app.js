const express = require('express');
const cors = require("cors");
const app = express();

const bookmarksController = require("./controllers/bookmarksController.js")
// MIDDLEWARE - What happens between the REQ but BEFORE it hits a route. After the REQ but before the ROUTE
app.use("/bookmarks", bookmarksController);

app.use(cors());
// Bouncer at the club - Allows requests from other origins (like our REACT APP)
app.use(express.json());
// PARSES JSON FOR US SO WE CAN USE IT - thanks Christine

app.get('/', (req, res) => {
    res.send("welcome to bookmarks - this route brought to you by Luke")
});

//404
app.get("*", (req, res) => {
    res.status(404).send("page not found - this is from line 20 by the way")
})

module.exports = app;