import React from "react";
import Question from "./Question";

const QuestionList =({questionList})=>{
     return (
          <>
               {
                    questionList.map((question)=>{
                         return <Question question={question} key={question.id} />
                    })
               }
          </>
     )
}

export default QuestionList;