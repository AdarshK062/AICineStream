import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const PlayMovieVideo = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector(store => store.nowPlaying.trailerVideo);
  if(!trailerKey) return;
  return (
    
    <div className='w-screen'>      
      <iframe
        title="YouTube Background"
        className="-top-10 w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerKey.key+"?&autoplay=1&controls=0&loop=1&mute=1"}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe></div>
  )
}

export default PlayMovieVideo;