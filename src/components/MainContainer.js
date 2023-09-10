import React from "react";
import MovieVideo from "./movieVideo";
import MovieTitle from "./movieTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.moviesData);
  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview , id } = mainMovie;
  return (
    <div className=" pt-[30%] bg-black md:pt-6 lg:pt-0">
      <MovieTitle title={original_title} overview={overview} />
      <MovieVideo movieId={id}/>

    </div>
  );
};

export default MainContainer;
