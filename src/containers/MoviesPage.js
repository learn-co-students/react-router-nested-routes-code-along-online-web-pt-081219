// @ts-check
// .src/containers/MoviesPage.js
import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "../components/MoviesList.js";
import MovieShow from "../components/MovieShow.js";

const MoviesPage = ({ url, movies }) => {
  // console.log(match);
  return (
    <div>
      <MoviesList movies={movies} />
      <Route
        exact
        path={url}
        render={() => <h3>Choose a movie from the list above</h3>}
      />
      <Route
        path={`${url}/:movieId`}
        render={(routerProps) => <MovieShow {...routerProps} movies={movies} />}
      />
    </div>
  );
};

export default MoviesPage;
