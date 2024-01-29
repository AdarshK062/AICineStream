import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import PlayMovieComponent from './PlayMovieComponent';
import AllMovieCards from './AllMovieCards';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <PlayMovieComponent />
      <AllMovieCards />
    </div>
  )
}

export default Browse;