import React from 'react'

const MovieTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%]  px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-xl md:text-2xl lg:text-5xl font-bold'>{title}</h1>
        <p className='hidden md:inline lg:inline-block text-lg py-6 w-1/3'>{overview}</p>
        <div className='py-3 md:py-3 lg:py-0'>
            <button className='w-[150px] bg-white text-black p-1 md:p-2 lg:p-4 px-1 md:px-2 lg:px-12 text-xl rounded-lg items-center hover:bg-opacity-80'>Play</button>
            <button className='hidden md:inline-block lg:inline-block mx-2 w-[200px] bg-gray-500 text-white p-1 md:p-2  lg:p-4 px-1 md:px-2 lg:px-12 text-xl bg-opacity-50 rounded-lg'>More info</button>
        </div> 
    </div>
  )
}

export default MovieTitle
