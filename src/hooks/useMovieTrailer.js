import { useDispatch } from "react-redux"
import { TMDB_OPTIONS } from "../constants";
import { addTrailerVideo } from "../utils/nowPlayingSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', TMDB_OPTIONS);
        const movieData = await data.json();
        const videos = movieData.results;
        const filteredVideos = videos.filter((video)=> video.type ==="Trailer");
        const trailer = (filteredVideos.length) ? filteredVideos[0] : videos[0];

        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMovieTrailer();
    }, []);
}

export default useMovieTrailer;