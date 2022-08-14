import axios from "axios";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
function Reviews(props) {
  const API = process.env.REACT_APP_API_URL;
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();
  // where do our CRUD functions need to be passed?
  
  const handleAdd = (newReview) => {
    axios
      .post(`${API}/bookmarks/${id}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (err) => console.error(err)
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (reviewId) => {
    axios
      .delete(`${API}/bookmarks/${id}/reviews/${reviewId}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.log(error)
      )
      .catch((err) => console.log(err));
  };

  const handleEdit = (updatedReview) => {
    // MAKE CALL TO API ->
    // API RESPONDS WITH UPDATED DATA
    // COPY OUR CURRENT REVEIEW STATE BECUASE IT IS NOW OUT OF SYNC WITH DB
    // RUN A FINDINDEX ON COPY
    // GRAB INDEX OF WHATEVER ID MATCHES THE UPDATED REVIEW PASSED TO FUNCTION
    // REPLACE ITEM AT THAT INDEX WITH RESPONSE.DATA FROM SERVER
    // RESET STATE;
    axios
      .put(`${API}/bookmarks/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`${API}/bookmarks/${id}/reviews`).then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  }, [id, API]);
  return (
    <section className="Reviews">
      {/* 
            this REACT APP will make use of TWO forms being rendered under different circumastances;
            the first will be our NEW form top level 
        */}

      <ReviewForm handleSubmit={handleAdd}>
        <h4>enter new review</h4>
      </ReviewForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleSubmit={handleEdit}
        />
      ))}
    </section>
  );
}

export default Reviews;
