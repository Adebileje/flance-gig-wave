import React, { useState } from 'react';
import logo from './assets/logo.svg';
import Linetwo from './assets/Linetwo.svg';
import { Link } from "react-router-dom";
import { VscThreeBars, VscChromeClose } from "react-icons/vsc";

const Navbar = () => {
    const [openToggle, setOpenToggle] = useState(false)
    return ( 
        <div className="header">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>

        
            <div className="menu">
                            <button className="reg-test">
                                <div className="button">REGISTER NOW!</div>
                            </button>
                        
                    <div className="container" onClick={() => setOpenToggle(!openToggle)}>
                        <h3>MENU</h3>
                        <div className="" onClick={() => setOpenToggle(!openToggle)}>
                            {openToggle? <VscChromeClose size={30} /> : <VscThreeBars size={30} /> }
                        </div>
                    </div>
            </div>
            {openToggle && 
            <div className="sidebar">
                <div>
                    <img src={Linetwo} alt="" />
                </div>

            <div className="links">
                <Link to="/" onClick={() => setOpenToggle(!openToggle)} >HOME</Link>
                <Link to="/about" onClick={() => setOpenToggle(!openToggle)} >ABOUT</Link>
                <Link to="/speakers" onClick={() => setOpenToggle(!openToggle)} >SPEAKERS</Link>
                <Link to="/sponsors" onClick={() => setOpenToggle(!openToggle)} >SPONSORS</Link>
                <Link to="/faqs" onClick={() => setOpenToggle(!openToggle)} >FAQS</Link>
                <Link to="/getInTouch" onClick={() => setOpenToggle(!openToggle)} >GET IN TOUCH</Link>
            <div>
                    <img src={Linetwo} alt="" />
                </div>
                </div>
            </div>}
        </div>
     )
}
 
export default Navbar;