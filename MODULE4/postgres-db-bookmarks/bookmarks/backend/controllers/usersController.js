const express = require("express");

const users = express.Router();
// we are destructuring the object exported from users.js
const {
  getAllBookmarksForUser,
  getAllUsers,
  addNewBookmarkForUser,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../queries/users.js");

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    res.status(404).json({ error: "no users" });
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user.id) {
    res.json(user);
  } else {
    res.status(404).json({ error: "user not found" });
  }
});

users.post("/", async (req, res) => {
  const createdUser = await createUser(req.body);
  // ONLY a successful post will return an object with a key of id
  if (createdUser.id) {
    res.json(createdUser);
  } else {
    // unprocessable entity
    res.status(422).json({ error: "could not create user." });
  }
});

users.put("/:id", async (req, res) => {
  const { id } = req.params;
  // first argument is the key of body from our req object
  // second is the id from the key of params on our req object
  const updatedUser = await updateUser(req.body, id);
  // ONLY a successful post will return an object with a key of id
  if (updatedUser.id) {
    res.status(200).json(updatedUser);
  } else {
    // unprocessable entity
    res.status(422).json({ error: "we could not upate this user." });
  }
});

users.get("/:id/bookmarks", async (req, res) => {
  const { id } = req.params;
  const usersBookmarks = await getAllBookmarksForUser(id);
  res.json(usersBookmarks);
});

users.post("/:id/bookmarks/:bookmarkId", async (req, res) => {
  const { id, bookmarkId } = req.params;
  const successfulAdd = await addNewBookmarkForUser(id, bookmarkId);
  if (successfulAdd) {
    res.status(201).json({ message: "Bookmark for user created!" })
  } else {
      res.status(422).json({ error: "unprocessable entity" });
    }
});


module.exports = users;
