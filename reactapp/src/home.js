import React from "react";
import './home.css';
import { Link } from "react-router-dom";


function Homepage(){
    return(
        <div className="navbar">
           <h1>PG admission</h1>
           <div className="nav">
            <Link to="/about" className="about">
            <h1 >About</h1>
            </Link>
            <Link to="/courses" className="courses">
            <h1 >PG courses</h1>
            </Link>
            <Link to="/application" className="application">
            <h1 >Application</h1>
            </Link>
            
           </div>
        </div>
			
    )
}

export default Homepage;