import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import MainContainer from "./MainContainer";
import Header from "./header";
import SecondaryContainer from "./secondaryContainer";

const Browse = () => {
    const showGptSearch= useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies()
  return (
    <div>
      <Header />
     {showGptSearch ? <GptSearch /> :
     <>
      <MainContainer />
      <SecondaryContainer />
      </> }
    </div>
  );
};
export default Browse;
