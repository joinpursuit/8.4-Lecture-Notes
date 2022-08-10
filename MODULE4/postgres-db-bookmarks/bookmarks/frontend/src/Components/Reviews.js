import axios from "axios";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
const API = process.env.REACT_APP_API_URL;
function Reviews( props ) {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();
    // where do our CRUD functions need to be passed?
  const handleAdd = (newReview) => {

  };
  const handleDelete = (id) => {

  };

  const handleEdit = (updatedReview) => {

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
      <ReviewForm handleSubmit={()=>{}}>
      </ReviewForm>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
        />
      ))}
    </section>
  );
}

export default Reviews;
