import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { getVideoTrailer } from "../utils/movieSlice";

const useMovieTrailer =(movieId)=> {
  const dispatch = useDispatch();

    const getAllVideos = async () => {
        const data = await fetch(
          "https://corsproxy.io/?https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json(); 
        const filterData = json.results.filter((movie) => movie.type === "Trailer");
        const Trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(getVideoTrailer(Trailer));
      };
    
      useEffect(() => {
        getAllVideos();
      }, []);
}

export default useMovieTrailer;