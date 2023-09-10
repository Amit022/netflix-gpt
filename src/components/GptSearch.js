import React from "react";
import GptSearchBar from "./gptSearchBar";
import GptSearchSuggestions from "./gptSearchSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img
        className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div className="">
      <GptSearchBar />
      <GptSearchSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
