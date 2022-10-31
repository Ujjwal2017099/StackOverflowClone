import React from "react";
import LeftSideBar from "../leftsidebar/LeftSideBar";
import RightSideBar from "../rightsidebar/RightSideBar";
import HomeMainBar from "../homemainbar/HomeMainBar";
import '../../App.css';

const Questions = ()=>{
     return (
         <div className="home-container-1">
             <LeftSideBar />
             <div className="home-container-2">
                 <HomeMainBar />
                 <RightSideBar />
             </div>
         </div>
     );
}

export default Questions