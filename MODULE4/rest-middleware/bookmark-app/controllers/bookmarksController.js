const express = require("express");
const bookmarks = express.Router();

const bookmarksData = require("../models/bookmarks.js");
const { validateURL } = require("../models/validations")

// quick reminder!  We can key into arrays with strings because they are objects!
console.log(bookmarksData["1"]);
// in order to even get to this line the path is already "/bookmarks"
// INDEX ROUTE
bookmarks.get("/", (req, res) => {
    res.json(bookmarksData);
});
// SHOW ROUTE
bookmarks.get("/:arrayIndex", (req, res) => {
    console.log(req.params);
    const { arrayIndex } = req.params;
    if (bookmarksData[arrayIndex]) {
        res.json(bookmarksData[arrayIndex])
    } else {
        res.status(404).send("no bookmark found - sorry");
    } 
})

// CREATE ROUTE
bookmarks.post("/", validateURL, (req, res) => {
    bookmarksData.push(req.body);
    res.json(bookmarksData[bookmarksData.length - 1]);
});

bookmarks.delete("/:arrayIndex", (req, res)=> {
    const {arrayIndex} = req.params
    const deletedBookmark = bookmarksData.splice(arrayIndex, 1)
    res.status(200).json(deletedBookmark)
});

bookmarks.put("/:arrayIndex", (req,res) => {
    const {arrayIndex} = req.params
    bookmarksData[arrayIndex] = req.body
    res.status(200).json(bookmarksData[arrayIndex])
});



module.exports = bookmarks
