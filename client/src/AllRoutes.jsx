import React from "react";
import { Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./components/Questions/Questions";
import AskQuestions from "./Pages/AskQuestions/AskQuestions";

const AllRoutes = ()=>{
     return (
         <Routes>
             <Route exact path="/" element={<Home />} />
             <Route exact path="/Auth" element={<Auth />} />
             <Route exact path="/Questions" element={<Questions/>} />
             <Route exact path="/AskQuestions" element={<AskQuestions />} />
         </Routes>
     );
}

export default AllRoutes;