import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState({});
  let { index } = useParams();
  // this is whatever the value of our id in the params is
  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/bookmarks/${index}`)
        .then((response) => setBookmark(response.data))
        .catch((error) => navigate(`/vegan-cheeseburger`));
      // this could navigate to any route that we didnt define really... but we should navigate to something appropriate we dont have like `/404` or `/error`
    },
    /* 
    We need to GET the bookmark from our DB to display to our user
    1. Get the INDEX it exists at in the db
    2. GET the data
    3. Display it to our user in state;
  */
    [index]
  );
  // look whos here again.... oh haaaayy empty dependecy array. Wonder when you happen?

  const handleDelete = () => {
    axios
      .delete(`${API}/bookmarks/${index}`)
      .then((response) => navigate(`/bookmarks`))
      .catch((error) => console.error(error));
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
