import React from "react";
import { Route, Switch } from "react-router-dom";

// Components

import Home from "./components/home/Home";
import ShowsIndex from "./components/shows/ShowsIndex";
import MoviesIndex from "./components/movies/MoviesIndex";
import Footer from "./components/home/common/Footer";
import Nav from "./components/home/common/Nav"
import ErrorMessage from "./components/home/common/ErrorMessage";

const App = () => (
  <div className="wrapper">
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shows">
        <ShowsIndex />
      </Route>
      <Route path="/movies">
        <MoviesIndex />
      </Route>
      <Route path="*">
      <ErrorMessage />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;
