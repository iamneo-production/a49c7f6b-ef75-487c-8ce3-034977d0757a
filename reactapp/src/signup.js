import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";

function Signup() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchToLogin = (event) => {
    event.preventDefault();
    setIsLoginForm(true);
  };

  const switchToSignup = (event) => {
    event.preventDefault();
    setIsLoginForm(false);
  };

  return (
    <div className="container">
      <div className={`form-container ${!isLoginForm ? "active" : ""}`} id="signup-form">
        <h1>New User</h1>
        <form>
          <label htmlFor="new-username">First name</label>
          <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your firstname"/>
          <label htmlFor="new-username">Last name</label>
          <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your lastname"/>
          <label htmlFor="new-email">Email Id</label>
          <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/>
          <label htmlFor="new-email">Mobile No</label>
          <input className="margin" type="number" id="new-password" name="new-password" placeholder="   enter mobile no" required />
          <label htmlFor="new-email">Create password</label>
          <input className="margin" type="password" id="new-password" name="new-password" placeholder="   enter password" required />
          <label htmlFor="new-email">Confirm password</label>
          <input className="margin" type="password" id="new-password" name="new-password" placeholder="   confirm password" required />
          <Link to="/" id="login-link">
          <button  className="sumit" type="submit">Sign Up</button></Link>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/"  id="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;