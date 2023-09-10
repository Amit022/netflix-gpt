import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './movieList';

const GptSearchSuggestions = () => {
    const {movieNames, movieResults}= useSelector(store => store.gpt)
    if(!movieNames) {
      return null;
    }
  return (
    <div className='p-4 m-4 bg-black bg-opacity-70 text-white'>
      {movieNames.map((movieName,index) => <MovieList title={movieName}  movies={movieResults[index]} /> )}
    </div>
  )
}

export default GptSearchSuggestions;
