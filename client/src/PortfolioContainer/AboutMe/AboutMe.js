import React,{useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id)
      return
      Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScrrenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_CONSTANTS = {
      description: "I am a student currently enrolled in the 3rd year of Software Development and Network Engineering at Sheridan College. Have good knowledge of Web Development (HTML5, CSS, Javascript), MySQL, PHP, and Git version control. Worked on various projects which test my knowledge of Web Development which includes front-end and back-end development. Have 8 months of experience working as an Application Developer.",
      highlights: {
        bullets: [
          "Experience in React, NodeJS, and RESTful API",
          "Experience in web technologies, and web application development (HTML, CSS, JavaScript, and jQuery)",
          "Strong Knowledge of Relational (SQL Server, DB2, MySQL, PostgreSQL) and NoSQL databases",
        ],
        heading: "Here are a Few Highlights:"
      }
    }
    const renderHighlight = ()=>{
      return(
        SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
          <div className='highlight' key={i}>
            <div className='highlight-blob'>

            </div>
            <span>{value}</span>

          </div>
        ))
      )
    }

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Hire Me </button>
              <a href='Karn_Bhavsar_Resume.pdf' download='Karn_Bhavsar_Resume.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

