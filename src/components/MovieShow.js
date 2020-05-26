// @ts-check
import React from "react";

export default function MovieShow({ match, movies }) {
  return (
    <div>
      <h3>{movies[match.params.movieId].title}</h3>
    </div>
  );
}
