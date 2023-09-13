import React, { useRef, useState } from "react";
import Header from "./header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const name = useRef(null);
  const email = useRef();
  const password = useRef();

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    // validate the data
    const message = checkValidateData(
      email.current.value,
      password.current.value,
    //   name.current.value
    );
    setErrorMsg(message);

    if (message) return;

    // Sign in / Sign up logic

    if (!isSignInForm) {
      // Sign-up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        //   navigate("/browse")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        //   navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-1/2 lg:w-3/12 p-12 bg-gray-900 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className=" text-xl md:text-3xl py-0 md:py-3 px-2 font-bold">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="py-3 px-2 m-2 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email or phone number"
          className="py-3 px-2 m-2 w-full bg-gray-700 border-none focus:border border-blue-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="py-3 px-2 m-2 w-full bg-gray-700"
        />
        <p className="font-bold text-red-800 py-2 px-2 text-xl">{errorMsg}</p>
        <button
          className="py-4 m-2 mt-6 bg-red-700 w-full rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="py-6 px-3 cursor-pointer" onClick={handleSignIn}>
          {isSignInForm
            ? "New to neflix? Sign up now"
            : "Already Registered? Sign in now"}
        </p>
        <p className="py-6 px-3">
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot.Learn more
        </p>
      </form>
    </div>
  );
};

export default Login;
