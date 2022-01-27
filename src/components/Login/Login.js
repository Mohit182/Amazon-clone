import React, { useState } from "react";
import "./Login.css";
import amazonLogo from "../../Assets/amazonLogo.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();
  };
  const registerHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={amazonLogo} />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <h5>Password</h5>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login-signInButton"
            type="submit"
            onClick={signInHandler}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login-registerButton" onClick={registerHandler}>
          Create Your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
