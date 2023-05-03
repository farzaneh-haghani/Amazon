import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app, provider } from "../config/firebase";
import AppContext from "./Context";

function Login() {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setIsLogin(true);
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const emailSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setIsLogin(true);
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user) {
          setIsLogin(true);
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(credential);
      });
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
        <button
          className="login__button login__signInButton"
          onClick={emailSignIn}
        >
          Sign In
        </button>
        <button
          className="login__button login__registerButton"
          onClick={register}
        >
          Register
        </button>
        <button className="login__button" onClick={signInWithGoogle}>
          Sign In with Google
        </button>
      </form>
    </div>
  );
}

export default Login;
