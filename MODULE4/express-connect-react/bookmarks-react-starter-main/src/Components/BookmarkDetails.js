import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function BookmarkDetails() {
  const [bookmark] = useState([]);
  let { index } = useParams();

  useEffect(() => {}, 
  /* 
    We need to GET the bookmark from our DB to display to our user
    1. Get the INDEX it exists at in the db
    2. GET the data
    3. Display it to our user in state;
  */
 []);
  const handleDelete = () => {
    /* 
      We need to send a DELETE request to our DB 
      1. Get the INDEX of our bookmark
      2. send the DELETE request to our API
      3. < what do we need to do after this works ? >
    */
  };
  return (
    <article>
      <h3>
        {bookmark.isFavorite ? <span>⭐️</span> : null} {bookmark.name}
      </h3>
      <h5>
        <span>
          <a href={bookmark.url}>{bookmark.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {bookmark.url}
      </h5>
      <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/bookmarks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/bookmarks/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default BookmarkDetails;
