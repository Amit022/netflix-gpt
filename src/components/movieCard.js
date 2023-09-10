import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MovieCard = ({posterPath}) => {
    if(!posterPath){
        return null;
    }
  return (
    <div className=' w-36 md:w-48 pr-3 rounded-xl md:hover:w-48 h-82 opacity-100 transition duration-400 hover:scale-125'>
        <img src={IMG_CDN_URL + posterPath} alt="img"  className=""/>
    </div>
  )
}

export default MovieCard
