import { createSlice } from "@reduxjs/toolkit";

const GptSlice  = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames : null,
        movieResults: null
    },
    reducers: {
     toggleGptSearch: (state,action) => {
       state.showGptSearch= !state.showGptSearch
     },
     addSearchGptMovies: (state,action) => {
        const { movieNames, movieResults}= action.payload;
        state.movieNames=movieNames;
        state.movieResults=movieResults
     }

    }
})

export const {toggleGptSearch,addSearchGptMovies} = GptSlice.actions;
export default GptSlice.reducer;