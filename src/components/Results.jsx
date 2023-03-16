import React, { useRef } from "react";
import { useQuizContext } from "../context/QuizContext";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
const Results = () => {
  let { score } = useQuizContext();
  const [user, loading, error] = useAuthState(auth);
  let Navigate=useNavigate()
  let form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_afy14c5",
        "template_5zzjcfi",
        form.current,
        "1CPXTR6YwWRzubl1a"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("check your mail for scores")
    Navigate("/categories")
  };
  return (
    <div className="results">
      <h2>Results</h2>
      <p>Your score is: {score}</p>
      <form ref={form} onSubmit={sendEmail}>
        <input type="email" value={user?.email} name="email" hidden />
        <input type="text" value={user?.displayName} name="name" hidden />
        <input type="text" value={score} name="score" hidden />
        <button type="submit" className="btn">
          send scores to mail
        </button>
      </form>
    </div>
  );
};

export default Results;
