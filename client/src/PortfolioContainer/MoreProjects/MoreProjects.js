import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './MoreProjects.css';
export default function MoreProjects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScrrenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    }
  }


  return (
    <div>
      <ScreenHeading
      title={'More Projects'}
      subHeading={''}
      />
      <section className='moreproject-section' id={props.id || ''}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id="moreprojects-carousel" {...options}>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      Metric Converter
                      
                    </p>
                    <p>
                      Used HTML, CSS, and JavaScript to Complete this simple Metric Conversion.<br/>
                      You can enter any value into the input field. Click on any button to convert and Converted value is displayed
                    </p>
                    <a href='https://bhavkarn.dev.fast.sheridanc.on.ca/webprog/Assignments/Karn-Bhavsar-a1/Rock-Paper-Scissor/public_html/' target='_blank'>
                      <button className='btn highlighted-btn'>View Project</button>
                    </a>
                  </div>
                  
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      BlackJack Game in JAVA
                      
                    </p>
                    <p>
                      Created BlackJack Java Game as part of my School Project
                    </p>
                    <a href='https://github.com/KARNB24/BlackJack/tree/KarnWork' target='_blank'>
                      <button className='btn highlighted-btn'>View Project</button>
                    </a>
                  </div>
                  
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      Unity Game Beta Version
                      
                    </p>
                    <p>
                      Developed a First Person and Third Person Advanture Game where the character moves across the Game World.
                      Objective: Get to the Finish Line before the time runs out.
                    </p>
                    <a href='A1_Karn_Bhavsar_991578281.mp4' download='GameDemo.mp4'>
                      <button className='btn highlighted-btn'>View Demo</button>
                    </a>
                  </div>
                  
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}

