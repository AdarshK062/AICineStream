import { useDispatch } from "react-redux"
import { TMDB_OPTIONS } from "../constants";
import { addTrailerLogo } from "../utils/nowPlayingSlice";
import { useEffect } from "react";


const useMovieLogo = (movieId) => {
    
    const dispatch = useDispatch();
    const getMovieLogo = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/images', TMDB_OPTIONS);
        const movieData = await data.json();
        console.log(movieData);
        const images = movieData.logos;
        const filteredImages = images.filter((image)=> image.iso_639_1 ==="en");
        let logo = null;
        if(filteredImages.length){
            logo = (filteredImages.length > 1) ? filteredImages[1] :filteredImages[0]
        }
        // console.log(logo);
        dispatch(addTrailerLogo(logo));
    }
    useEffect(()=>{
        getMovieLogo();
    }, []);
}

export default useMovieLogo;