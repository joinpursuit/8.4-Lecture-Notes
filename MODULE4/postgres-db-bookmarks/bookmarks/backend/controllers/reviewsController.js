const express = require("express");
// allows us to merge our bookarms router w/ reviews router
const reviews = express.Router({ mergeParams: true});
const {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview
} = require("../queries/reviews.js");

reviews.get("/", async (req, res) => {
  const { bookmarkId } = req.params;
  const allReviews = await getAllReviews(bookmarkId);
  if (allReviews[0]) {
    res.status(200).json(allReviews);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review.id) {
    
    res.json(review);
  } else {
    res.status(404).json({ error: "review not found" });
  }
});

reviews.post("/", async (req, res) => {
    try {
      
        const createdReview = await createReview(req.body);
        console.log(typeof createdReview.rating)
        res.json(createdReview);
    } catch (err) {
        res.status(422).json({error: "ERROR not good entity"});
    }
});

reviews.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedReview = await deleteReview(id);
    if (deletedReview.id) {
        res.status(200).json(deletedReview)
    } else {
        res.status(404).json({error: "Review not found at that ID"})
    }
});

reviews.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedReview = await updateReview(id, req.body);
    if (updatedReview.id) {
        res.status(200).json(updatedReview)
    } else {
        res.status(404).json({error: "no review found to update - loser"})
    }
})

module.exports = reviews;
