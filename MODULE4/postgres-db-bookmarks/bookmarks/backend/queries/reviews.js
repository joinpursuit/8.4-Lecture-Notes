const db = require("../db/dbConfig.js");

const getAllReviews = async (bookmarkId) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE bookmark_id=$1", bookmarkId);
    return allReviews;
  } catch (err) {
    return err;
  }
};

const getReview = async (id) => {
  try {
    const review = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return review;
  } catch (err) {
    return err;
  }
};

const createReview = async (review) => {
  const { bookmark_id, reviewer, title, content, rating } = review;
  try {
    const createdReview = await db.one(
      "INSERT INTO reviews (bookmark_id, reviewer, title, content, rating) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [bookmark_id, reviewer, title, content, rating]);
      return createdReview
  } catch (err) {
    return err;
  }
};

const deleteReview = async (id) => {
    try {
        const deletedReview = await db.one("DELETE FROM reviews WHERE id =$1 RETURNING *", id)
        return deletedReview;
    } catch(err) {
        return err
    }
};

const updateReview = async (id, review) => {
    const { bookmark_id, reviewer, title, content, rating } = review;

    try {
        const updatedReview = await db.one("UPDATE reviews SET bookmark_id=$1, reviewer=$2, title=$3, content=$4, rating=$5 WHERE id=$6 RETURNING *", [bookmark_id, reviewer, title, content, rating, id])
        return updatedReview;
    } catch (err) {
        return err
    }
}

module.exports = { getAllReviews, getReview, createReview, updateReview, deleteReview };
