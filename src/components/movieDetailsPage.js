import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/Constant";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchMovies();
    fetchMovieVideo();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      setMovies(json);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMovieVideo = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      setVideo(json.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("movies", video);

  return (
    <div>
      <div className="">
        <div className="w-full aspect-video">
          <iframe
            className="w-screen aspect-video"
            // width="100%"
            // height="100%"
            src={
              "https://www.youtube.com/embed/" +
              video?.key +
              "?autoplay=1&mute=0"
            } //
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
        </div>
      </div>
      <div className='absolute hidden lg:top-[500px] h-screen w-screen'>
        <div className='text-white absolute ml-14 top-[300px]'>
          <h1 className='font-semibold text-6xl'>{movies?.title}</h1>
          <p className='mt-2 w-[60%]'>{movies?.overview}</p>
          <div className='flex ml-[-15px] mt-6'>
            {movies?.genres?.map((genre) => {
              return (
                <p
                  key={genre?.id}
                  className='rounded-full ml-2 px-4 py-2 bg-brand-charcoal text-white'>
                  {genre?.name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className='lg:hidden bg-gray-800 w-screen h-screen pt-4'>
      <h1 className='font-semibold text-white ml-5 text-3xl md:text-4xl'>{movies?.title.slice(0,25)}</h1>
      <div className='flex flex-wrap left-2 absolute top-12  mt-60 md:mt-[480px]'>
          {movies?.genres?.slice(0,3).map((genre) => {
            return (
              <p
                key={genre?.id}
                className='rounded-full m-2 px-4 py-2 bg-gray-700 text-white'>
                {genre?.name}
              </p>
            );
          })}
        </div>
        <p className='text-sm text-left px-4 py-2 w-[90%] ml-5 mt-20  border-[1px] border-teal-200 rounded-lg text-white bg-black md:text-3xl'>
          {movies?.overview}
        </p>
        
      </div>
    </div>

    
  );
};

export default MovieDetailsPage;
