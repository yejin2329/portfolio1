import React, {useState} from "react";
import {Link} from "react-router-dom";
import phoneIcon from "../images/mobile.png";
import emailIcon from "../images/email.png";
import githubIcon from "../images/github.png";

const ContactPage=()=>{
 
        const [comment, setComment]=useState("");
        const [comments, setComments]=useState([]);

        const [thumbsUpCount, setThumbsUpCount]=useState(0);

        const handleCommentChange=(e)=>{
            setComment(e.target.value);
        }
        
        const handleCommentSubmit=(e)=>{
            e.preventDefault(); //to prevent form from submit

            if(comment.trim()!==""){
                setComments([...comments, comment]);
                setComment("");
            }
        }

        const handleDeleteComment=(index)=>{
            const newComments=[...comments];
            newComments.splice(index,1);
            setComments(newComments);
        }

        const handleThumbsUpClick=()=>{
            setThumbsUpCount(thumbsUpCount+1);
        }

    return(
        <div className="contact-container">
            <Link to="/" className="back-button">Back to HomePage</Link>
    <div className="contact">
        <div className="email">
      
        <img src={emailIcon} alt="email" className="email"/>
              
        kimye232917@gmail.com
        </div>
        
        <div className="phone">
        <img src={phoneIcon} alt="phone" className="phone"/>
        2897727022
        </div>

        <div className="github">
        <img src={githubIcon} alt="gitHub" className="gitHub"/>
                https://github.com/yejin2329/portfolio1.git</div>
    </div>

    <div className="review">
        <div className="leave-comments">
            Please leave a comment if you have free time!
            <form onSubmit={handleCommentSubmit}>
            <textarea value={comment}
            onChange={handleCommentChange}
            placeholder="Enter your comment here"
            />
            <button type="submit" class="submit-button">Post</button>
            </form>

            <div className="comment-post">
                <h3>Comments</h3>
                <ul>
                    {comments.map((comment, index)=>(
                        <li key={index}>
                            {comment}
                            <button onClickCapture={()=>handleDeleteComment(index)}>
                                Delete
                            </button>
                            </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleThumbsUpClick}>Thumbs Up</button>
            <span>{thumbsUpCount}</span>
        </div>
    </div>
    </div>
    )
}

export default ContactPage;

