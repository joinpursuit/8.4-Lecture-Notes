const db = require("../db/dbConfig.js");

// async await is the modern way to handle promises
// we tried to show you earlier :'(
const getAllBookmarks = async () => {
  try {
    // .any() CAN return ANYTHING from the query
    // returns ALL rows that match the QUERY
    // that we pass
    const allBookmarks = await db.any("SELECT * FROM bookmarks");
    return allBookmarks;
  } catch (err) {
    return err;
  }
};

const getBookmark = async (id) => {
  try {
    // db one takes a string of SQL command;
    // id=$1 allows us to interpolate our second parameter safely
    // we CAN pass multiple values to one query in this manner
    const oneBookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
    return oneBookmark;
  } catch (error) {
    return error;
  }
};

const createBookmark = async (bookmark) => {
  const { name, url, category, is_favorite } = bookmark;
  try {
    const newBookmark = await db.one(
      "INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, url, category, is_favorite]
    );
    return newBookmark;
  } catch (error) {
    return error;
  }
};

// we will have a bunch of exports, hence the object;
module.exports = { getAllBookmarks, getBookmark, createBookmark };
