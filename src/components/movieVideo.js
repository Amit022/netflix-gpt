
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import usePopularMovies from "../hooks/usePopularMovies";

const MovieVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.videoTrailer);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieVideo;
