import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        moviesData: null,
        videoTrailer: null,
        popularMovies: null
    },
    reducers: {
        getMovies: (state,action) => {
           state.moviesData = action.payload
        },
        addPopularMovies: (state,action) => {
            state.popularMovies= action.payload
        },
        getVideoTrailer : (state,action) => {
            state.videoTrailer= action.payload;
        }
    }
})

export const { getMovies, getVideoTrailer,addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;