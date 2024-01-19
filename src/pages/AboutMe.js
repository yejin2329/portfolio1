import React from "react";
import {Link} from "react-router-dom";

const AboutMePage=()=>{
    return (
        <div className="about-page-container">
            <Link to="/" className="back-button">Back to HomePage</Link>
            <div className="about">
                <div className="sticky-note">
                     <h2>Name</h2>
                     <p>Yejin Kim</p>
                 </div>
             <div className="sticky-note">
                    <h2>Education</h2>
                     <p>2022-2023 Computer Programming-Seneca College</p>
                 </div>
             <div className="sticky-note">
               <h2>Hobbies</h2>
               <p>Watch Netflix</p>
                <p>Reading mysterious book</p>
            </div>
            <div className="sticky-note2">
                <h2>Skills</h2>
                <p>Javascript, HTML, CSS</p>
                <p>Python, C, C++</p>
                <p>SQL Developer, PostgreSQL</p>
                <p>React</p>
                <p>GitHub, Git</p>
                <p>Microsoft 365</p>
                <p>Excellent Collaboration & Communication</p>
            </div>
            <div>
            <p>

            </p>
            </div>
         </div>
    </div>
    )
}

export default AboutMePage;

