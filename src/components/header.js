import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/Constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { FiLogOut ,FiSearch } from "react-icons/fi";

const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleGptSearchBtn=()=> {
        dispatch(toggleGptSearch())
    }
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const user= useSelector(store => store.user)
    const handleSignOut=()=> {
        signOut(auth).then(() => {
            // Sign-out successful.
            // navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error")
          });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const { uid, email } = user;
            dispatch(addUser({uid: uid, email: email}))
            navigate("/browse")
          } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")
          }
        });
      },[]);
      const handleLanguageChange= (e)=> {
        dispatch(changeLanguage(e.target.value))
      }
  return (
    <div className="absolute w-screen md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between justify-items-end">
      <img
        className="w-44 mx-auto md:mx-0"
        src={Logo}
        alt="logo"
      />
      <div className="flex p-2">
        {(user && showGptSearch) && 
        <select onChange={handleLanguageChange} className="py-2 px-4 m-2 bg-purple-800 rounded-lg text-white">
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
        </select> }
        {
          user &&
          <>
        <button className="py-2 px-4 m-2 bg-purple-800 rounded-lg text-white" onClick={handleGptSearchBtn}>{showGptSearch ? "Browse" :"GPT Search"} <FiSearch className="inline"/></button>
       <button onClick={handleSignOut} className="text-white bg-red-800 px-4 py-2 m-2 rounded-lg" >Sign Out <FiLogOut className="inline" /></button>
       </> }
      </div>
    </div>
  );
};

export default Header;
