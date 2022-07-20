import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import axios from "axios";
// ^^ this is our new package for making API calls
const API = process.env.REACT_APP_API_URL;
// request for data must come AFTER component is loaded to the DOM
// otherwise we have a RACE condition  - page might be done before data arrives;
function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  
  useEffect(() => {
    axios.get(`${API}/bookmarks`)
      .then((response) => { setBookmarks(response.data) })
      .catch((error) => { console.error(error) })
  },[])

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark, index) => {
              return <Bookmark key={index} bookmark={bookmark} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
