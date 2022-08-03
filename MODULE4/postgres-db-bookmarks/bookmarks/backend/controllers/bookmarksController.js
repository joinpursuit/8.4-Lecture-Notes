const express = require("express");
const bookmarks = express.Router();
const { getAllBookmarks } = require("../queries/bookmarks.js")
// Extends our app so that we can create a new route for our BOOKMARKS resource
// we need to make this ASYNC as well
bookmarks.get("/", async (req, res) => {
    const allBookmarks = await getAllBookmarks();
    if (allBookmarks[0]) {
        // if there is one index that gets returned then the data exists - John P 8/2/2022
        // an empty array is TRUTHY - so we need to check for an element 
        res.status(200).json(allBookmarks);
    } else {
        res.status(500).json({ error: "server error!"})
    }
});

module.exports = bookmarks;
// EXPORT our Bookmarks Router 
