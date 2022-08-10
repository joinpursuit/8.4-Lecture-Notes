import axios from "axios";
import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";

const API = process.env.REACT_APP_API_URL;

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/bookmarks`)
      .then((response) => setBookmarks(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
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
            {bookmarks.map((bookmark) => {
              return <Bookmark key={bookmark.id} bookmark={bookmark} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
