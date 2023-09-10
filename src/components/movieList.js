import React from "react";
import MovieCard from "./movieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className=" text-lg  md:text-xl lg:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
