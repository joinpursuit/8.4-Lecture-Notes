// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Welcome to Bookmarks App");
});

const bookmarksController = require("./controllers/bookmarksController.js");
app.use("/bookmarks", bookmarksController);
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
});
// EXPORT
module.exports = app;