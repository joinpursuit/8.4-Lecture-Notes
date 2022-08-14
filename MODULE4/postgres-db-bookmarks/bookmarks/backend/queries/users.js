const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (err) {
    return err;
  }
};

const getUser = async (id) => {
  try {
    const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id);
    return oneUser;
  } catch (err) {
    return err;
  }
};

const createUser = async (user) => {
  // destructuring our user object
  try {
    const { username, email, admin, verified } = user;
    const newUser = await db.one(
      "INSERT INTO users (username, email, admin, verified) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, admin, verified]
    );
    return newUser;
  } catch (err) {
    return err;
  }
};
// we need to make sure we pass our arguments in the correct order when updating
const updateUser = async (user, id) => {
  try {
    const { username, email, admin, verified } = user;
    const updatedUser = await db.one(
      "UPDATE users SET username=$1, email=$2, admin=$3, verified=$4 WHERE id=$5 RETURNING *",
      [username, email, admin, verified, id]
    );
    return updatedUser;
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (err) {
    return err;
  }
};

const getAllBookmarksForUser = async (id) => {
  try {
    const bookmarksByUser = db.any(
      `SELECT 
                bookmark_id, user_id, name, is_favorite, category
            FROM
                users_bookmarks
            JOIN
                users
            ON
                users.id = users_bookmarks.user_id
            JOIN
                bookmarks
            ON
                bookmarks.id = users_bookmarks.bookmark_id
            WHERE
                users_bookmarks.user_id = $1
            `,
      id
    );
    return bookmarksByUser;
  } catch (err) {
    return err;
  }
};

const addNewBookmarkForUser = async (userId, bookmarkId) => {
  try {
    // db.none returns NULL ALWAYS
    const addedBookmark = await db.oneOrNone(
      `INSERT INTO users_bookmarks (user_id, bookmark_id) VALUES ($1, $2) RETURNING *`,
      [userId, bookmarkId]
    );
    return addedBookmark;
  } catch (err) {
    return err
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
  getAllBookmarksForUser,
  addNewBookmarkForUser,
};
