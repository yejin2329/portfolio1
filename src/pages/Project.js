import React from "react";
import {Link} from "react-router-dom";
import screenshot1 from "../images/to_do_list sample3.png";
import VideoPlayer from "./VideoPlayer";

const ProjectPage=()=>{
    return (
        <div className="project-container">
            <Link to="/" className="back-button">Back to HomePage</Link>
           <div className="project-card">
           <div className="to-do-list">
                <h1>Voice To-Do List</h1>
                <div className="project-image">
                <img src={screenshot1} alt="project_sample" className="project_sample"/>
                </div>
                <div className="project-desc">
                    <h1>Description: Utilizing two Azure APIs; Speech-to-Text API and Key Phrase Extraction API - enables users to efficiently manage their to-do lists verbally </h1>
                    <p>
                        <span class="topic">Project Duration </span>
                        <span class="topic-a">024.01.30~2024.02.22 </span>
                    </p>

                    <p>
                        <span class="topic">Platform </span>
                        <span class="topic-a"> Web </span>
                    </p>
                     
                    <p>
                        <span class="topic"> Personnel</span>   
                        <span class="topic-a">1</span>
                    </p>
                    <h3>[Environment]</h3>
                    
                    <p>
                         <span class="topic"> Language</span> 
                         <span class="topic-a">Python, Javascript, HTML/CSS </span>
                    </p> 
                   
                    <p>
                        <span class="topic">Server </span> 
                        <span class="topic-a">Flask, Node.js </span>
                    </p>

    
                    <p>
                        <span class="topic">Framework </span> 
                        <span class="topic-a">  Express.js </span>
                    </p>

                    <p>
                        <span class="topic"> IDE  </span> 
                        <span class="topic-a"> VSCode </span>
                    </p>
                    
                    <p>
                        <span class="topic"> API  </span> 
                        <span class="topic-a">  microsoft azure APIs </span>
                    </p>
                       

                </div>
            </div> 
         
        
            </div>
            {/*
            <div className="project-card2">
            <div className="project2">
                coming soon...
                <br/>coming soon....
                <br/>coming soon....
                <br/>coming soon....
                <br/>coming soon....
                <br/>coming soon....
            </div>
    </div> */}

            <VideoPlayer/>
        </div>
    )
}

export default ProjectPage;

