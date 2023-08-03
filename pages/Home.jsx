import React from 'react'
import logo from './assets/logo.svg';
import Line from './assets/Line.svg';
import Linetwo from './assets/Linetwo.svg';
import About from '../pages/About';
import Footer from '../pages/Footer';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
        <div className='box'>
            <div className="box-left">
            <nav className="navbar">
            <ul>
            <div className="homenavv">
                <Link to="/">
                <div className="headerImg">
                        <img src={logo} alt="" />
                    </div>
                </Link>
    
                        <div>
                            <img src={Linetwo} alt="" />
                        </div>

                    <div className="links">
                        <Link to="/about">ABOUT</Link>
                        <Link to="/speakers">SPEAKERS</Link>
                        <Link to="/sponsors">SPONSORS</Link>
                        <Link to="/faqs">FAQS</Link>
                        <Link to="/getInTouch">GET IN TOUCH</Link>
                    <div>
                            <img src={Linetwo} alt="" />
                        </div>
                        </div>
                </div>

                    </ul>
                </nav>
            </div>

            <div className="box-right">
                <div className="big-text">
                    <h2>Connecting <br />Africa's gig <br />economy.</h2>
                </div>
                <div className="img1">
                    <img src={Line} alt="" />
                </div>                
                <p className='para-text'>A symposium on the gig economy featuring<br />keynote speeches, panel sessions, fireside chats,<br />and workshops on the gig economy, freelancing,<br />remote work, digital transformation,<br />independent work, entrepreneurship and more.</p>
                <div className="img2">
                    <img src={Line} alt="" />
                </div>

                <div className="btns">
                    <div className="btn1"></div>
                    <Link to="">
                        <div className="btn2">
                            <button className="reg-test">
                                <div className="button">REGISTER NOW!</div>
                            </button>
                        </div>
                    </Link>
                
                </div>
            </div>
        </div>
        <div className="homeFooter">
        <Footer />
        </div>
    </div>
  )
}

export default Home