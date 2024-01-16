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
            <div>
            <p>

            </p>
            </div>
         </div>
    </div>
    )
}

export default AboutMePage;

