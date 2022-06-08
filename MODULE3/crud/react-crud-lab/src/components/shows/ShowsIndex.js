import React from "react";
// import { Routes, Route, Navigate } <--- v6 hooks - not for class components
import { Switch, Route, withRouter} from "react-router-dom";
// Helper functions
import { getAllShows } from "../../api/fetch";
import { deleteShow } from "../../api/fetch";
import ShowList from "./ShowList";
import ErrorMessage from "../common/ErrorMessage";
import "./ShowsIndex.css";
import Show from "./Show";


class ShowsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loadingError: false,
    };
  }
  
  componentDidMount() {
    getAllShows()
      .then((shows) => this.setState({ shows, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }
    handleDelete = (e) => {
      const { value } = e.target
      try {
        deleteShow(value);
        const indToDelete = this.state.shows.findIndex(show => {
          return show.id === value
        })
        const newShows = [...this.state.shows];
        newShows.splice(indToDelete, 1);
        this.setState({
          shows:newShows
        })
        // router-dom v5 syntax
        this.props.history.push("/shows")
        // navigate("/shows") v6 syntax
      } catch (err) {
        console.error(err);
        this.setState({ loadingError: true });
      }
    }

  render() {
    if(this.state.loadingError){
      return <ErrorMessage />
    }
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows} handleDelete = {this.handleDelete} />
        </Route>
        <Route>
          <section className="shows-index-wrapper">
            <h2> all Shows!@#!@@! </h2>
            <section className="shows-index">
              {this.state.shows.map((show) => (
                <ShowList show={show}  />
              ))}
            </section>
          </section>
        </Route>
      </Switch>
    );
  }
}
// we do this in version 5 for class components
export default withRouter(ShowsIndex);
