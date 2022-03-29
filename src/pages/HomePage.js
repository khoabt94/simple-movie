import React, { Fragment } from "react";
import MovieList from "../components/Movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <MovieList type="now_playing" label="Now Playing"></MovieList>
      <MovieList type="top_rated" label="Top Rated"></MovieList>
      <MovieList type="popular" label="Trending"></MovieList>
    </Fragment>
  );
};

export default HomePage;
