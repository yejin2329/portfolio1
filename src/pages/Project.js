import React from "react";
import {Link} from "react-router-dom";

const ProjectPage=()=>{
    return (
        <div className="project-container">
            <Link to="/" className="back-button">Back to HomePage</Link>
    <div className="project">
        <h1>This is project I created</h1>
        
    </div>
    </div>
    )
}

export default ProjectPage;

