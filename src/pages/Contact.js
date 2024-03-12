import React from "react";
import {Link} from "react-router-dom";
import phoneIcon from "../images/mobile.png";
import emailIcon from "../images/email.png";
import githubIcon from "../images/github.png";

const ContactPage=()=>{
    return (
        <div className="contact-container">
            <Link to="/" className="back-button">Back to HomePage</Link>
    <div className="contact">
        <div className="email">
      
        <img src={emailIcon} alt="email" className="email"/>
              
        Email Address: kimye232917@gmail.com
        </div>
        
        <div className="phone">
        <img src={phoneIcon} alt="phone" className="phone"/>
        2897727022
        </div>

        <div className="github">
        <img src={githubIcon} alt="gitHub" className="gitHub"/>
                https://github.com/yejin2329/portfolio1.git</div>
    </div>
    </div>
    )
}

export default ContactPage;

