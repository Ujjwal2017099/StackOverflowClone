import React from "react";
import './AskQuestions.css';

const AskQuestions = ()=>{
     return (
         <div className="ask-question">
               <h1>Ask Question</h1>
               <form className="ask-form-container">
                    <div className="ask-ques-container">
                         <label htmlFor="ask-ques-title">
                              <h4>Title</h4>
                              <p>Be specific with the title to your query</p>
                              <input type='text' id='ask-ques-title' placeholder='title'/>
                         </label>
                         <label htmlFor="ask-ques-body">
                              <h4>Body</h4>
                              <p>Include all necessary information</p>
                              <textarea id='ask-ques-body' />
                         </label>
                         <label htmlFor="ask-ques-tags">
                              <h4>Tags</h4>
                              <p>Include neccessary tags related to your problem</p>
                              <input type='text' id='ask-ques-tags' placeholder='tags'/>
                         </label>
                    </div>
                    <input type='submit' id="submit" value='Review yor question' />
               </form>
         </div>
     );
}

export default AskQuestions