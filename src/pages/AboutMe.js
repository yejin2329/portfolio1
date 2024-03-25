import React, {useState} from "react";
import {Link} from "react-router-dom";



const interest=[
    {text: 'Javascript', level:'high'},
    {text: 'HTML/CSS', level:'high'},
    {text: 'Python', level:'high'},
    {text: 'Web Developer', level:'high'},
    {text: 'Frontend Developer', level:'high'},
    {text: 'Database', level:'high'},
    {text: 'API', level:'high'},

    {text: 'Java', level:'medium'},
    {text: 'Backend Developer', level:'medium'},
    {text: 'C', level:'low'},
    {text: 'C++', level:'low'},
    {text: 'UNIX/Linux', level:'low'},
 
]

const Skill = ({ text, proficiency }) => {
    return (
      <div className={`skill proficiency-${proficiency}`}>
        {text}
      </div>
    );
  };

const SkillLevelSelector=({onSelectLevel})=>{
    const levels=['Beginner', 'Intermediate', 'Advanced'];
    
    const handleClick=(level)=>{
        onSelectLevel(level);
    }

    return(
        <div>
            {levels.map((level, index)=>(
                <button key={index} onClick={()=>handleClick(index+1)}>
                    {level}
                </button>
            ))}
        </div>
    )
}

const getRandomValue = () => Math.random() *70; // Gives a random value between 0% and 80%

const AboutMePage=()=>{
//state for proficiency level
const [selectedLevel, setSelectedLevel]=useState(1);

//function to handle proficiency level
const handleSelectLevel=(level)=>{
    setSelectedLevel(level);
}

//list of skills with proficiency level
const skills=[
    {text:"Javascript", proficiency:3},
    {text:"HTML", proficiency:4},
    {text:"CSS", proficiency:3},
    {text:"React", proficiency:2},
    {text:"Python", proficiency:2},
    {text:"C", proficiency:2},
    {text:"C++", proficiency:2},
    {text:"Microsoft 365", proficiency:4},
    {text:"Git", proficiency:2},
    {text:"GitHub", proficiency:3},
    {text:"Jira", proficiency:3},
    {text:"VSCode", proficiency:4},
    {text:"MongoDB", proficiency:2},
    {text:"Database", proficiency:3},
]
    return (
        <>
        <div className="aboutme-container">
        <Link to="/" className="back-button">Back to HomePage</Link>
        
            <div className="profile">
                <div className="profile-info">
                <h1>Yejin Kim</h1>
                <h2>Profile</h2>
                </div>
                <div className="sub-profile">
  <h1>I am <span class="brackets">[&nbsp;&nbsp;&nbsp;&nbsp;]</span></h1>
  <h1 className="text">
    <span class="word">hard-working,&nbsp;</span>
    <span class="word">fast-learner,&nbsp;</span>
    <span class="word">passionate,&nbsp;</span>
    <span class="word">smile person,&nbsp;</span>
    <span class="word">work together</span>
  </h1>
</div>

            </div>
            <div className="content">
                <div className="paragraph">
                <h2>Web Developer | IT Anlayst | IT Help Desk Specialist <br/><br/></h2>
               <h3>
                <p> 
                I pursue a life engaged in work that I can immerse myself in. <br/>I pursue completion rather than perfection and am always up for a challenge. <br/>I enjoy learning new skills and contemplating how to improve productivity.</p></h3>
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


        <div className="skill-container">
                <div className="skill">
                   <div className="bold">Lang</div> 
                   <div className="element">Javascript, HTML/CSS, Python, C, C++</div>
                </div>
          
                <div className="skill">
                   <div className="bold">Front</div> 
                   <div className="element">React, Node.js</div>
                </div>

                <div className="skill">
                   <div className="bold">Back</div> 
                   <div className="element">Express.js</div>
                </div>
                                
                <div className="skill">
                   <div className="bold">DB</div> 
                   <div className="element">Oracle, MySQL, MongoDB</div>
                </div>

                <div className="skill">
                   <div className="bold">IDE</div> 
                   <div className="element">VSCode</div>
                </div>

                <div className="skill">
                   <div className="bold">ETC</div> 
                   <div className="element">Git, Jira</div>
                </div>
            </div>

       <div>
        <SkillLevelSelector onSelectLevel={handleSelectLevel}/>
        
        <div className="skill-level container">
            {skills.map((skill, index)=>(
                  <Skill key={index} text={skill.text} proficiency={skill.proficiency} />
            ))}
        </div>
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
            <h2>I'm interest in...</h2>
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
        <div className="timeline-a">
            <div className="event" style={{left:'30%'}}>
             <div className="event-dot"></div> {/*new dot*/}
                <div className="event-date">23.05.-23.08.</div>
                <div className="event-title">Web Project</div>
                <div className="event-desc">A simple blog with login functionality, the ability to create new categories and posts.
            <br/> Based on the existing data, it will render the relevant number of categories.</div>
             </div>
         <div className="event" style={{left:'70%'}}>
         <div className="event-dot"></div>  {/*new dot*/}
            <div className="event-date">23.12.-24.03.</div>
            <div className="event-title">Personal Website</div>
            <div className="event-desc">A simple website for an interactive resume</div>
         </div>

         <div className="event" style={{left:'90%'}}>
         <div className="event-dot"></div>  {/*new dot*/}
            <div className="event-date">24.01.-24.03.</div>
            <div className="event-title">Vocal-Activated To-Do List</div>
            <div className="event-desc">A to-do list utilizing Azure APIs for enhanced convenience</div>
         </div>
      </div>
    </div>
       </>
    )
}

export default AboutMePage;