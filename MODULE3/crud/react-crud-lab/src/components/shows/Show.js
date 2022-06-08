import React from "react";
import { useParams, useHistory } from "react-router-dom";
import ErrorMessage from "../common/ErrorMessage";
export default function Show({ shows, handleDelete }) {
  const { id } = useParams();
  const history = useHistory()
  // const navigate = useNavigate() v6 syntax
  const show = shows.find((show) => show.id === id);
  const handleClick = () => {
    history.push("/shows");
    // navigate("/shows")
  };
  return (
    <section class="shows-show-wrapper">
      {!show ? (
        <ErrorMessage />
      ) : (
        <>
          <h2>{show.title}</h2>
          <section class="shows-show">
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>REPLACE_WITH_DESCRIPTION</p>
            </article>
            <aside>
              <button value = {id} onClick = { handleDelete } class="delete">Remove show</button>
            </aside>
            <aside>
              <button value = {id} onClick = { handleClick } class="delete">Go back</button>
            </aside>
          </section>
        </>
      )}
    </section>
  );
}
