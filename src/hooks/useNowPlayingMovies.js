import { useEffect } from "react";
import { TMDB_OPTIONS } from "../constants";
import { useDispatch } from "react-redux";
import { addNowPlaying, removeNowPlaying } from "../utils/nowPlayingSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        const now_playing= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS)
        const fetchData = await now_playing.json();
        dispatch(addNowPlaying(fetchData.results));
    }
useEffect(() => {
    getNowPlaying();
    return () => {
        dispatch(removeNowPlaying());
    }
},[]);

}

export default useNowPlayingMovies;