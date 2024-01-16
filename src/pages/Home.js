import React from "react";
import {Link} from "react-router-dom";
import CurrentDateTime from "./CurrentDateTime";
import bookImage from "../images/book.jpg";
import coffeeImage from "../images/coffee.jpg";
import laptopImage from "../images/laptop.jpg";

const Home=()=>{
    return (
    <div className="homeSection">
                <CurrentDateTime/>
        <div className="top-section">
        <h2>Welcome to the Future Web Developer's blog!</h2>
        </div>
        <div className="image-container">
        <img src={bookImage} alt="book" className="book"/>
        <img src={coffeeImage} alt="coffee" className="coffee"/>
        <img src={laptopImage} alt="laptop" className="laptop"/>
        </div>
        <div className="padding">
            
        </div>
        <div className="bottom-section">
        <Link to="/about-me" className="menu">ABOUT ME</Link> <br/>
        <Link to="/project" className="menu">PROJECT</Link>  <br/>  
        <Link to="/contact" className="menu">CONTACT</Link>
        </div>
    </div>

    )
}

export default Home;

