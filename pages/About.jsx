import { Link } from "react-router-dom";
import StraightLine from './assets/StraightLine.svg';
import mainImg from './assets/mainImg.svg';
import smallImg from './assets/smallImg.svg';
import rectangle from './assets/rectangle.svg';
import Footer from '../pages/Footer';

const About = () => {
    return (
        <div>
            <div className="box">
                
        <div className="aboutpage">
                <div className="main">
                    <h2>We are connecting Africa's gig economy.</h2>
                <div className="straightline">
                    <img src={StraightLine} alt="" />
                </div>
                <p className="text-main">GigWave Lagos is a unique gathering of freelancers, gig workers, anyone who doesn't work<br />in a traditional workplace in Nigeria, and stakeholders in these spaces. It is designed to<br />provide attendees with practical insights, skills, tools, and strategies to thrive in the ever-<br />changing world of work.</p>
                <div className="images">
                    <div className="mainimg1">
                        <img className="round" src={mainImg} alt="" />
                    </div>
                    <div className="boxes">
                        <div className="mainimg2">
                            <img className="round" src={smallImg} alt="" />
                        </div>
                        <div className="mainimg3">
                            <img className="round" src={rectangle} alt="" />
                        </div>
                    </div>
                </div>
                <div className="paratexts">
                    <div className="paratext1">
                        <p>Attendees will have the chance to connect with like-minded individuals, share their<br />experiences, and gain valuable insights into the<br />latest trends and best practices in the freelance and gig economy.</p>
                    </div>
                    <div className="paratext2">
                    GigWave Lagos is a must-attend event for anyone looking to grow their skills, expand their<br />network, stay ahead of the curve in the world of independent work, and for stakeholders<br />looking to connect with the pulse of the gig economy in Nigeria and Africa.
                    </div>
                    
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
                </div>
        </div>
        </div>
        </div>
     );
}

export default About;