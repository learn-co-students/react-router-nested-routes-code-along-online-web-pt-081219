// @ts-check

import React from "react";
import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
  const renderMovies = Object.values(movies).map((movie) => (
    <Link key={movie.id} to={`/movies/${movie.id}`}>
      <li>{movie.title}</li>
    </Link>
  ));

  // const renderMovies = Object.keys(movies).map((movieID) => {
  //   <Link key={movieID} to={`/movies/${movieID}`}>
  //     {movies[movieID].title}
  //   </Link>;
  // })

  return <div>{renderMovies}</div>;
}
