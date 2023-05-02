import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login__container">
      <h1>Sign In</h1>
      <form action="index.html" method="post">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email..."
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <small>Should be at least 6 characters!</small>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Password..."
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button className="login__button login__signInButton">Sign In</button>
        <button
          className="login__button login__registerButton"
          onClick={register}
        >
          Register
        </button>
        <button className="login__button" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
        <button className="login__button" onClick={logOut}>
          Sign Out
        </button>
      </form>
    </div>
  );
}

export default Login;
