const express = require("express");
const bookmarks = express.Router();

const bookmarksData = require("../models/bookmarks.js");
// quick reminder!  We can key into arrays with strings because they are objects!
console.log(bookmarksData["1"])
// in order to even get to this line the path is already "/bookmarks"
bookmarks.get("/", (req, res) => {
    res.json(bookmarksData)
});

bookmarks.get("/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    if (bookmarksData[id]) {
        res.json(bookmarksData[id])
    } else {
        res.status(404).send("no bookmark found - sorry")
    } 
})


module.exports = bookmarks
