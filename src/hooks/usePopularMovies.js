import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constant';
import { addPopularMovies, getMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
    };
    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;
