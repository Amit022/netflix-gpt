import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies.moviesData);
  const PopularMovies = useSelector((store) => store.movies.popularMovies);

  return (
    nowPlayingMovies && (
      <div className="bg-black">
        <div className="md:ml-9 ml-0 mt-0 lg:-mt-72 md:mt-0 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={PopularMovies} />
          <MovieList title={"Trending Movies"} movies={nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={PopularMovies} />
          <MovieList title={"Horror Movies"} movies={nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
