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
    // with using db.one() we will not hit our catch block even if we have no
    // record with the corresponding ID - there are MANY ways to handle this
    // db.oneOrNone() is one way - there are also others.
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

const deleteBookmark = async (id) => {
  try {
    const deletedBookmark = await db.one("DELETE FROM bookmarks WHERE id = $1 RETURNING *", id);
    return deletedBookmark;
  } catch (err) {
    return err;
  }
};
// We need to pass in the BOOKMARK - the information to change
// && the ID of the bookmark to access it in the DB
const updateBookmark = async (bookmark, id) => {
  const { name, url, category, is_favorite } = bookmark;
  try {
    // first argument is the QUERY string
    // second argument is the actual DATA 
    const updatedBookmark = await db.one("UPDATE bookmarks SET name = $1, url = $2, category = $3, is_favorite = $4 WHERE id = $5 RETURNING *",
    // remember the order MATTERS here 
    // $1  $2   $3        $4           $5
    [name, url, category, is_favorite, id]);
    return updatedBookmark;
  } catch (err) {
    return err;
  }
}

// we will have a bunch of exports, hence the object;
module.exports = { 
  getAllBookmarks, 
  getBookmark, 
  createBookmark, 
  deleteBookmark,
  updateBookmark
};
