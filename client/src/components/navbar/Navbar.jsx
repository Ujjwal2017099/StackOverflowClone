import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import Avatar from '../../components/avatar/Avatar'

// import Button from '../../components/button/Button'
import '../navbar/Navbar.css'
const Navbar = ()=>{
     var User = null;
     return (
          <nav className="main-nav-bar">
               <div className="navbar">
                    <Link to='/' className='nav-item nav-logo'>
                         <img src={Logo} alt="logo"/>
                    </Link>
                    <Link to='/' className='nav-item nav-btn'>About</Link>
                    <Link to='/' className='nav-item nav-btn'>Products</Link>
                    <Link to='/' className='nav-item nav-btn'>for teams</Link>
                    <form>
                         <input type='text' placeholder='Search' className="search-box" />
                    </form>
                    {
                         User === null ?
                         <Link to='/Auth' className="nav-item nav-link">Log in</Link>
                         :
                         <>
                              <Link to='/'><Avatar>U</Avatar></Link>
                              <button className="nav-item nav-link">Log out</button>
                         </>
                    }
               </div>
          </nav>
     );
}

export default Navbar;