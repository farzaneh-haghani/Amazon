import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__container">
      <h1>Sign In</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email..."
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Password..."
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login__button">SignIn</button>
      </form>
    </div>
  );
}

export default Login;
