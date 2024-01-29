import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingReducer from "./nowPlayingSlice";

const appStore = configureStore({
    reducer: {
        userData: userReducer,
        nowPlaying: nowPlayingReducer,
    },
});

export default appStore;