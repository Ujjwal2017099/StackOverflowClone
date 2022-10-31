import React from "react";
import {Link , useLocation} from 'react-router-dom'
import './HomeMainBar.css';
import QuestionList from './QuestionList'

const HomeMainBar = () => {
    var questionList = [
        {
            id: 1,
            votes: 2,
            noOfAnswers: 3,
            questionTitle: "What is a function",
            questionBody: "it meant to be",
            questionTags: ["java", "nodejs", "reactjs", "mongodb"],
            userPosted: "nano",
            askedOn: "jan 1",
        },
        {
            id: 2,
            votes: 2,
            noOfAnswers: 3,
            questionTitle: "What is a function",
            questionBody: "it meant to be",
            questionTags: ["java", "C++"],
            userPosted: "nano",
            askedOn: "jan 1",
        },
        {
            id: 3,
            votes: 0,
            noOfAnswers: 0,
            questionTitle: "What is a function",
            questionBody: "it meant to be",
            questionTags: ["javascript", "R", "python"],
            userPosted: "nano",
            askedOn: "jan 1",
        },
    ];
    let user = 12;
    const location = useLocation();
    return (
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <Link to={user === null ? '/Auth' : '/AskQuestions'} className='ask-btn' >
                    Ask Questions
                </Link>
            </div>
            <div>
                {
                    questionList === null ?
                    <h1>Loading...</h1>:
                    <>
                        <p>{questionList.length} Questions</p>
                        <QuestionList questionList = {questionList} />
                    </>
                }
            </div>
        </div>
    );
};

export default HomeMainBar;
