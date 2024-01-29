import React, { useState } from 'react'
import useMovieLogo from '../hooks/useMovieLogo';
import { useSelector } from 'react-redux';

const PlayMovieTitle = ({title, overview, movieId}) => {
  useMovieLogo(movieId);
  const trailerLogo = useSelector(state => state.nowPlaying.trailerLogo);
  const [showDesc, setShowDesc] =useState(false);

  return (
    <div
    className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-navyblue-500 to-transparent'>
    
      <div 
      onMouseEnter={() => setShowDesc(true)} 
      onMouseLeave={() => setShowDesc(false)}
      className='group' >
        {trailerLogo && <img src={"https://image.tmdb.org/t/p/w300/" + trailerLogo?.file_path} alt=""/>}
        {!trailerLogo && <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>}
        {showDesc && <h2 className='hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:inline-block py-6 text-sm w-1/2'>{overview}</h2>}
        
      </div>
      <div className="my-8">
        <button className=" bg-white text-black py-2 md:py-2 px-6 md:px-6 text-lg rounded-md hover:bg-opacity-80 w-[12%]">
          Play
        </button>
        <button className="hidden md:inline-block mx-4  bg-gray-500 text-white p-2 px-6 text-lg bg-opacity-50 rounded-md  w-[12%]">
          More Info
        </button>
      </div>
      </div>
  )
}

export default PlayMovieTitle