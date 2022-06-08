import { render } from "@testing-library/react";
import React from "react";

// Helper functions
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../home/common/ErrorMessage";

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loadingError: false,
    };
  }

  componentDidMount() {
    getAllMovies()
      .then((movies) => this.setState({ movies, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  } 
  
  render() { 
    return (
    <>
      { this.state.loadingError ? <ErrorMessage/> : <p>movies</p> }
    </>
    )
  }
}

export default MoviesIndex;
