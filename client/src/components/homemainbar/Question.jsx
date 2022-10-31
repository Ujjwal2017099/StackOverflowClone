import React from "react";
import { Link } from "react-router-dom";
import './HomeMainBar.css'

const Question =({question})=>{
     return(
          <div className="display-ans-container">
               <div className="display-votes-ans">
                    <p>{question.votes}</p>
                    <p>votes</p>
               </div>
               <div className="display-votes-ans">
                    <p>{question.noOfAnswers}</p>
                    <p>answers</p>
               </div>
               <div className="display-question-details">
                    <Link to={`/Questions/${question.id}`} className='question-title'>{question.questionTitle}</Link>
                    <div className="display-tags-time">
                         <div className="dispaly-tags">
                              {
                                   question.questionTags.map((tag)=>{
                                        return <p key={tag}>{tag}</p>
                                   })
                              }
                         </div>
                         <p className="display-time">
                              asked on {question.askedOn} by {question.userPosted}
                         </p>
                    </div>
                    
               </div>
          </div>
     )
}

export default Question