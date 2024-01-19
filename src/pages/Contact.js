import React from "react";
import {Link} from "react-router-dom";

const ContactPage=()=>{
    return (
        <div className="contact-container">
            <Link to="/" className="back-button">Back to HomePage</Link>
    <div className="contact">
        <h1>Email Address:</h1>
        
    </div>
    </div>
    )
}

export default ContactPage;

