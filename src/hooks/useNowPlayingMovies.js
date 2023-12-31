import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constant';
import { getMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://corsproxy.io/?https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(getMovies(json.results))
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;
