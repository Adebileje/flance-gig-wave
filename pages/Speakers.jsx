import React from 'react'
import { Link } from "react-router-dom";
import StraightLine from './assets/StraightLine.svg';
import Footer from '../pages/Footer';
import { SpeakerData } from './DummyData';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg'; 

const Speakers = () => {
  return (
    <div className='speakersPage'>
      <div className="meetSpeakers">
        <h2 className='meetSpeakerstxt'>Meet our speakers.</h2>
      </div>
      <div className="straightline2">
          <img src={StraightLine} alt="" />
      </div>
      <div className="speakersInfo">
       {
        SpeakerData.map((data) => (
          <div className="" key={data.id}>
            <div className="speakers">
              <img className="round" src={data.avatar} alt="" />
            <div className="icons-container">
                <img src={twitter} alt="" className='speaker-icon' />
                <img src={instagram} alt="" className='speaker-icon' />
                <img src={linkedin} alt="" className='speaker-icon' />
            </div>
            </div>
            <h3 className='speakersName'>{data.name}</h3>
            <p className='speakersContent'>{data.content}</p>
          </div>
        ))
       }
      </div>
      <div className="footer">
          <Footer />
      </div>
    </div>
  )
}

export default Speakers