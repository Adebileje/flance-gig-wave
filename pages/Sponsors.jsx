import React from 'react'
import StraightLine from './assets/StraightLine.svg';
import Axamansard from './assets/Axamansard.svg';
import mtn from './assets/mtn.svg';
import Bolt from './assets/Bolt.svg';
import Footer from '../pages/Footer';

const Sponsors = () => {
    return ( 
        <div className='sponsorsPage'>
            <div className="meetSpeakers">
                <h2 className='meetSpeakerstxt'>Meet our sponsors.</h2>
            </div>
      <div className="straightline2">
          <img src={StraightLine} alt="" />
      </div>
      <div className="speakersLogo">
        
            <img src={Axamansard} alt="" />
            <img src={mtn} alt="" />
            <img src={Bolt} alt="" />
            <img src={mtn} alt="" />

        <img src={Axamansard} alt="" />
        <img src={mtn} alt="" />
        <img src={Bolt} alt="" />
        <img src={mtn} alt="" />

        <img src={Axamansard} alt="" />
        <img src={mtn} alt="" />
        <img src={Bolt} alt="" />
        <img src={mtn} alt="" />

        <img src={Axamansard} alt="" />
        <img src={mtn} alt="" />
        <img src={Bolt} alt="" />
        <img src={mtn} alt="" />
      </div>
      <div className="footer">
          <Footer />
      </div>
        </div>
     );
}
 
export default Sponsors;