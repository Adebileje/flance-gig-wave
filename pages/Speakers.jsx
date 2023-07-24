import React from 'react'
import { Link } from "react-router-dom";
import StraightLine from './assets/StraightLine.svg';
import speaker1 from './assets/speaker1.svg';
import speaker2 from './assets/speaker2.svg';
import speaker3 from './assets/speaker3.svg';
import speaker4 from './assets/speaker4.svg';
import speaker5 from './assets/speaker5.svg';
import speaker6 from './assets/speaker6.svg';

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
        <div className="speakerOne">
          <img className="round" src={speaker1} alt="" />
        </div>
        <div className="speakerTwo">
          <img className="round" src={speaker2} alt="" />
        </div>
        <div className="speakerThree">
          <img className="round" src={speaker3} alt="" />
        </div>
        <div className="speakerFour">
          <img className="round" src={speaker4} alt="" />
        </div>
        <div className="speakerFive">
          <img className="round" src={speaker5} alt="" />
        </div>
        <div className="speakerSix">
          <img className="round" src={speaker6} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Speakers