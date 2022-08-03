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
  } catch(err) {
    return err
  } 
}


// we will have a bunch of exports
module.exports = { getAllBookmarks }