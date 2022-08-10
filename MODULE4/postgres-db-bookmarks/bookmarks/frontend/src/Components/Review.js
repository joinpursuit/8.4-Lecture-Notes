import ReviewForm from "./ReviewForm";
import { useState } from "react"
export default function Review ({ review  }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  // THIS FILE WILL HOLD OUR SECOND FORM - we need a toggle to display the form or hide it
  //  How can we use our state to toggle this form
  const toggleView = () => {
 
  };

  return (
    <div className="Review">
      <button>Edit</button>
      {/* 
        our handleSubmit is going to be a different function for this iteration of our ReviewForm
        What crud function will it perform?
        What does it need in this context?
        What should we pass it
      
      */}
      { viewEditForm ? (
        <ReviewForm handleSubmit = { ()=> {} }></ReviewForm>
      ) : ( 
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button onClick={() => {}}>delete</button>
        </div>
      )}
    </div>
  );

}
