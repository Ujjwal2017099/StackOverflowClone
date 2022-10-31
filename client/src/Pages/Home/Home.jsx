import React from "react";
import LeftSideBar from '../../components/leftsidebar/LeftSideBar'
import RightSideBar from '../../components/rightsidebar/RightSideBar'
import HomeMainBar from '../../components/homemainbar/HomeMainBar'
import '../../App.css'

const Home = ()=>{
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

export default Home;