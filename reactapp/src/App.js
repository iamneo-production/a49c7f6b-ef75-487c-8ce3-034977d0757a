import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './login';
import Signup from './signup';
import Homepage from "./home";
import Pg from "./Course";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/signup" element={<Login/>}/>
        <Route path="/courses" element={<Pg/>}/>


      </Routes>
    </Router>
  );
}

export default App;