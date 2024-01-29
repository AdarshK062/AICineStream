import { useSelector } from 'react-redux'
import PlayMovieTitle from './PlayMovieTitle';
import PlayMovieVideo from './PlayMovieVideo';

const PlayMovieComponent = () => {
    const playMovies = useSelector(store => store.nowPlaying.now_playing);
    
    if(!playMovies) return;
    const playMovie = playMovies[0];
    const {original_title, overview, id} = playMovie;
  return (
    <div>
        <PlayMovieTitle title={original_title} overview={overview} movieId={id}/>
        <PlayMovieVideo movieId={id} />
    </div>
  )
}

export default PlayMovieComponent