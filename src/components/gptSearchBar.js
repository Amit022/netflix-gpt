import React, { useRef } from "react";
import Lang from "./languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/Constant";
import { addSearchGptMovies } from "../utils/gptSlice";
import { FiSearch } from "react-icons/fi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef();
  const dispatch = useDispatch();

  //search movie in TMDB database

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://corsproxy.io/?https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearch = async () => {
    // make an api call to gpt apis to get the movies results
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 10 movies comma separated like the example result given ahead. example: Gadar,Sholay,Don,Golmaal Return,Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // handle ERROR
    }

    const gptMovies = gptResults.choices[0]?.message.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addSearchGptMovies({movieNames: gptMovies , movieResults: tmdbResults}));
  };
  return (
    <div className="pt-[20%] md:pt-0 flex justify-center rounded-xl">
      <form
        className="bg-black py-2  w-full md:w-full lg:w-1/2 grid grid-cols-12 mt-20 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={Lang[langKey].gptSearchPlaceholder}
          className="p-2 my-4 mx-2 col-span-9 rounded-lg"
        />
        <button
          className=" px-2 md:px-4 py-2 my-4 mx-1 text-white rounded-lg bg-red-800 col-span-3"
          onClick={handleGptSearch}
        >
          {Lang[langKey].search}  <FiSearch className="inline"/>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
