import React from "react";
import './RightSideBar.css'
import comment from '../../assets/comment.png'
import pen from '../../assets/pen.png'
import blackLogo from '../../assets/black-logo.png'

const Widget = () => {
    return (
     <div className="widget">
          <div className="right-sidebar-div-1">
               <h4>The Overflow Blog</h4>
               <div className="right-sidebar-div-2">
                    <img src={pen} style={{width:'15px',height:'15px'}} />
                    <p>I spent two years trying to do what Backstage does for free</p>
               </div>
               <div className="right-sidebar-div-2">
                    <img src={pen} style={{width:'15px',height:'15px'}} />
                    <p>A serial entrepreneur finally embraces open source (Ep. 486)</p>
               </div>
          </div>
          <div className="right-sidebar-div-1">
               <h4>Featured on Meta</h4>
               <div className="right-sidebar-div-2">
                    <img src={comment} style={{width:'20px',height:'15px'}} />
                    <p>Planned maintenance scheduled for Wednesday, 21 September, 00:30-03:00 UTC...</p>
               </div>
               <div className="right-sidebar-div-2">
                    <img src={comment} style={{width:'20px',height:'15px'}} />
                    <p>Recent Color Contrast Changes and Accessibility Updates</p>
               </div>
               <div className="right-sidebar-div-2">
                    <img src={blackLogo} style={{width:'20px',height:'15px'}} />
                    <p>Should I explain other people's code-only answers?</p>
               </div>
          </div>
     </div>
    )
};

export default Widget;
