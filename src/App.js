import React from "react";
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
    
   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    
    </div>
  );
}

export default App;
