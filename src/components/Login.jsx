import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let provider = new GoogleAuthProvider();
  let navigate = useNavigate()
  function login(e) {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form className="form" onSubmit={login}>
      <button>
        <FcGoogle /> signIn with Google
      </button>
    </form>
  );
};

export default Login;
