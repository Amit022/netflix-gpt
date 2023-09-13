import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'
import { Link } from 'react-router-dom';

const MovieCard = ({posterPath,id}) => {
    if(!posterPath){
        return null;
    }
  return (
    <div className=' w-36 md:w-48 pr-3 rounded-xl md:hover:w-48 h-82 opacity-100 transition duration-400 hover:scale-125'>
       <Link to={"/browse/" + id}>
        <img src={IMG_CDN_URL + posterPath} alt="img"  className=""/>
       </Link>
    </div>
  )
}

export default MovieCard
