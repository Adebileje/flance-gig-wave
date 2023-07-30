import React, {useState} from 'react'
import StraightLine from './assets/StraightLine.svg';
import Footer from '../pages/Footer';
import minus from './assets/minus.svg';
import plus from './assets/plus.svg';

const Faqs = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div>
         <div className='sponsorsPage'>
            <div className="meetSpeakers">
        <h2 className='meetSpeakerstxt'>Frequently asked questions.</h2>
      </div>
      <div className="straightline2">
          <img src={StraightLine} alt="" />
      </div>
      <div className="faq-container">
        <div className="faq-content-top">
          <h3 className='faq-content-title'>Who is Gigwave for</h3>
          <div className="faq-accordion" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (<img src={minus} alt="" />) : (<img src={plus} alt="" />)}
          </div>
        </div>
        {isOpen && <div className='faq-content-text'><p>Gigwave is for anyone who doesn't work in a traditional workplace. From freelancers, gig workers.</p></div>}
      </div>

      <div className="faq-container">
        <div className="faq-content-top">
          <h3 className='faq-content-title'>Who is Gigwave for</h3>
          <div className="faq-accordion" onClick={() => setIsActive(!isActive)}>
            {isActive ? (<img src={minus} alt="" />) : (<img src={plus} alt="" />)}
          </div>
        </div>
        {isActive && <div className='faq-content-text'><p>Gigwave is for anyone who doesn't work in a traditional workplace. From freelancers, gig workers.</p></div>}
      </div>

      <div className="faq-container">
        <div className="faq-content-top">
          <h3 className='faq-content-title'>Who is Gigwave for</h3>
          <div className="faq-accordion" onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? (<img src={minus} alt="" />) : (<img src={plus} alt="" />)}
          </div>
        </div>
        {isClicked && <div className='faq-content-text'><p>Gigwave is for anyone who doesn't work in a traditional workplace. From freelancers, gig workers.</p></div>}
      </div>
      <div className="footer">
          <Footer />
      </div>
        </div>
    </div>
  )
}

export default Faqs