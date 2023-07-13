import React, { useState } from "react";
import './App.css';
import { Link } from 'react-router-dom';
import { Password } from "@mui/icons-material";


function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if(!name){
      alert("please enter the username")
    }
    else if(!password){
      alert("please enter password")
    }
    else{
      alert("Login sucessful")
      // e.preventDefault();
      // Perform sign-in logic here, such as making an API call to authenticate the user
      console.log('Name:', name);
      console.log('Password:', Password);
      // Reset form fields
      setname('');
      setpassword('');
      setIsLoginForm('');
    }
  };
 

  
  

  return (
    <div className="container">
      <div className={`form-container ${isLoginForm ? "active" : ""}`} id="login-form">
        <h1>Login</h1>
        <form >
          <label htmlFor="username">Username</label>
          <input className="margin" type="text" id="username" name="username" placeholder="Enter username" value={name} onChange={handleNameChange} required/>
          <label htmlFor="password">Password</label>
          <input  className="margin" type="password" id="password"  placeholder="Enter password" value={password} onChange={handlePasswordChange} required/>
          </form>
          <Link to="/home" id="home-link">
          <button  onClick={handleSubmit} type="submit">Login</button>
               
          </Link>
        <p>
          Don't have an account?{" "}
          <Link to="/signup"  id="signup-link" >
            New User
          </Link>
        </p>
      </div>
      
    </div>
  );
}

export default Login;