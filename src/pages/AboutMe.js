import React from "react";
import {Link} from "react-router-dom";

const interest=[
    {text: 'Javascript', level:'high'},
    {text: 'HTML/CSS', level:'high'},
    {text: 'Python', level:'high'},
    {text: 'Web Developer', level:'high'},
    {text: 'Frontend Developer', level:'high'},
    {text: 'Database', level:'high'},
    {text: 'API', level:'high'},
    {text: 'Database', level:'medium'},
    {text: 'Java', level:'medium'},
    {text: 'Backend Developer', level:'medium'},
    {text: 'C', level:'low'},
    {text: 'C++', level:'low'},
    {text: 'UNIX/Linux', level:'low'},
 
]

const getRandomValue = () => Math.random() *70; // Gives a random value between 0% and 80%

const AboutMePage=()=>{
    return (
        <>
        <div className="container">
            <div className="profile">
                <h1>Profile</h1>
            
                <div className="paragraph">
                <h2>Web Developer<br/><br/></h2>
               <h3>
                <p> 
                I pursue a life engaged in work that I can immerse myself in, rather than 'Work-Life Balance'. <br/>I pursue completion rather than perfection and am always up for a challenge. <br/>I enjoy learning new skills and contemplating how to improve productivity.</p></h3>
                </div>
            </div>
            <div className="skills">
                <div className="skills-category">
                    <h3><span class="bold">Lang</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Javascript, HTML/CSS, Python</h3>
                        
                 
                </div>
                <div className="skills-category-1">
                    <h3><span class="bold">Front</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React</h3>
                    
                </div>
                
                <div className="skills-category-1">
                    <h3><span class="bold">Back</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
                </div>

                <div className="skills-category-1">
                    <h3><span class="bold">DB</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
                </div>

                <div className="skills-category-1">
                    <h3><span class="bold">IDE</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
                </div>

                <div className="skills-category-1">
                    <h3><span class="bold">ETC</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </h3>
                </div>

            </div>
        </div>
        <div className="education-section">
            <h2>Education</h2>
           
                <p>
                    <span class="institution">Seneca College</span>
                    <span class="program"> Computer Programming</span>
                    <h>2022-2023</h>
                </p>

                <p>
                    <span class="institution">University of Toronto</span>
                    <span class="program">Human Biology</span>
                    <h>Graduated 2020</h>
                </p>
           

        </div>
    <div className="course-container">
        <div className="course-section">
        <h2>Course taken</h2>
        <h3>DSA456: Data Structures and Algorithms</h3>
        <h3>DBS501: Stored Procedures Using Oracles PL/SQL</h3>
        <h3>PMC444: IT Project Management Fundamentals Tools and Techniques</h3>
        <h3>EAC594: Business Communication for the Digital Workplace</h3>
        <h3>OOP345: Object-Oriented Software Development Using C++</h3>
        <h3>WEB322: Web Programming Tools and Frameworks</h3>
        <h3>DBS311: Advanced Database Services</h3>
        <h3>SYD366: Software Analysis and Design-I</h3>
        <h3>OOP244: Introduction to Object Oriented Programming</h3>
        <h3>WEB222: Web Programming Principles</h3>
        <h3>DBS211: Introduction to Database Systems</h3>
        <h3>SFT221: Software Testing</h3>
        <h3>IPC144: Introduction to Programming Using C</h3>
        <h3>APS145: Applied Problem Solving</h3>
        <h3>CPR101: Computer Principles for Programmers</h3>
        <h3>ULI101: Introduction to UNIX/LINUX and the Internet</h3>
        </div>

        <div className="interest-container">
           {interest.map((interests)=>(
            <div className={`interest ${interests.level}`} key={interests.text} 
                style={{
                    top:`${getRandomValue()}%`,
                    left:`${getRandomValue()}%`
                }}
                >
                <span>{interests.text}</span>
                </div>
           ))}
        </div>
    </div>
    
    <div className="timeline-container">
        <h2>Timeline</h2>
        <div className="timeline"></div> 
        <div className="event" style={{left:'10%'}}>
        <div className="event-dot"></div> {/* This is the new dot */}
            <div className="event-date">23.02.-23.04.</div>
            <div className="event-title">HERE</div>
            <div className="event-subtitle">Frontend</div>
            <div className="event-desc">NFT</div>
      </div>
         <div className="event" style={{left:'30%'}}>
         <div className="event-dot"></div> {/* This is the new dot */}
            <div className="event-date">23.04.-23.05.</div>
            <div className="event-title">HERE</div>
            <div className="event-subtitle">Frontend</div>
            <div className="event-desc">NFT</div>
         </div>

         <div className="event" style={{left:'80%'}}>
         <div className="event-dot"></div> {/* This is the new dot */}
            <div className="event-date">23.08.-23.09.</div>
            <div className="event-title">HERE</div>
            <div className="event-subtitle">Frontend</div>
            <div className="event-desc">NFT</div>
         </div>
    </div>
       </>
    )
}

export default AboutMePage;

