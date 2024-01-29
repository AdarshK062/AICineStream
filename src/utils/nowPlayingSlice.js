import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: "nowPlaying",
    initialState: {
        now_playing: null,
        trailerVideo: null,
        trailerLogo: null,
    },
    reducers:{
        addNowPlaying: (state, action) => {
            state.now_playing = action.payload;
        },
        addTrailerVideo: (state, actions) => {
            state.trailerVideo = actions.payload;
        },
        addTrailerLogo: (state, actions) => {
            state.trailerLogo = actions.payload;
        },
        removeNowPlaying: (state) => {
            return {...state, now_playing: null};
        },
    }
});

export const {addNowPlaying, addTrailerVideo, addTrailerLogo, removeNowPlaying} = nowPlayingSlice.actions;
export default nowPlayingSlice.reducer;