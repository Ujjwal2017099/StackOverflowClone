import React from "react";
import {NavLink} from 'react-router-dom'
import './LeftSideBar.css'
import globe from '../../assets/globe.png'

const LeftSideBar = () => {
    return (
     <div className="left-sidebar" >
          <div className="side-nav">
               <NavLink to='/' className='side-nav-links' activeClassName = 'active' style={{textDecoration:'none' }}>
                    <p >Home</p>
               </NavLink>
               <div className="side-nav-div">
                    <div><p>PUBLIC</p></div>
                    <div className="globe">
                         <img src={globe} alt='Globe' style={{width:'15px'}} />
                         <NavLink to='/Questions' className='side-nav-links' activeClassName = 'active' style={{textDecoration:'none' }}>
                              <p>Questions</p>
                         </NavLink>
                    </div>
                    <NavLink to='/Tags' className='side-nav-links' activeClassName = 'active' style={{textDecoration:'none'}}>
                         <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeClassName = 'active' style={{textDecoration:'none'}}>
                         <p>Users</p>
                    </NavLink>
               </div>
          </div>
     </div>
    )
};

export default LeftSideBar