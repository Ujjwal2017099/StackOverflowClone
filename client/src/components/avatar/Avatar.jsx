import React from "react";
import './Avatar.css'

const Avatar = ({children})=>{
     const style = {
          textDecoration : "none",
          backgroundColor : 'blue',
          color : "white",
          padding: "7px 11px", 
          borderRadius : "50%"
     }
     return (
          <div className="avatar" style={style}>
               {children}
          </div>
     );
}

export default Avatar