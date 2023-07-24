import React from 'react'
import StraightLine from './assets/StraightLine.svg';

const GetInTouch = () => {
    return ( 
        <div className='sponsorsPage'>
            <div className="meetSpeakers">
        <h2 className='meetSpeakerstxt'>Get in touch.</h2>
      </div>
      <div className="straightline2">
          <img src={StraightLine} alt="" />
      </div>
      <p className='moreInfo'>
      For more information about sponsorship opportunities or to discuss a customized<br />sponsorship package, please send an email to; v@flanceapp.com.
      </p>
        </div>
     );
}
 
export default GetInTouch;