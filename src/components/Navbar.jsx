import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <header>
      <h1>QuizGenerator</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user && <li>
            <Link to="/categories">categories</Link>
          </li>}
          {!user && <li className="signin-btn">
            <Link to="/signin">
              <FaSignInAlt />
              signIn
            </Link>
          </li>}
          {user && <li>
            <button className="logout-btn" onClick={() => signOut(auth)}>signOut</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
