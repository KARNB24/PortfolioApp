import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScrrenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "PHP", ratingPercentage: 75 },
    { skill: "ASP.NET CORE", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "Angular", ratingPercentage: 80 },
    { skill: "C#", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: "Bookstore Inventory Management System",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Ceated an Bookstore Inventory Management System using HTML, CSS, JavaScript, PHP and MySQL. Displays book collection based on invidual user who is signed in.",
      subHeading: 
        <a
          href="https://bhavkarn.dev.fast.sheridanc.on.ca/webprog/Assignments/A4-Karn-Bhavsar/"
          target="_blank"
        >
          View Project
        </a>
      
    },
    
    {
      title: "Rock-Paper-Scissor Game",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Created a Rock-Paper-Scissor Game using JavaScript. Basically you play against the computer and check who wins.",
      subHeading: 
        <a
          href="https://bhavkarn.dev.fast.sheridanc.on.ca/webprog/Assignments/Karn-Bhavsar-a1/Rock-Paper-Scissor/public_html/"
          target="_blank"
        >
          View Project
        </a>
      
    },
    {
      title: "Starbuck's Order System",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "Implimented Starbuck's Ordering System using PHP",
      subHeading: 
        <a
          href="https://bhavkarn.dev.fast.sheridanc.on.ca/webprog/Assignments/A3-Karn-Bhavsar/"
          target="_blank"
        >
          View Project
        </a>
      
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Sheridan College"}
        subHeading={
          "Advanced Diploma: Software Development and Network Engineering"
        }
        fromDate={"2019"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"University of Ontario Institute of Technology"}
        subHeading={"Software Engineering Program"}
        fromDate={"2014"}
        toDate={"2019"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Canadian Hospital Specialties Ltd."}
          subHeading={"Application Developer Intern"}
          fromDate={"01/2021"}
          toDate={"12/2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked at CHS for 2 Co-op terms. 4 months each
          </span>
        </div>
        <div className="experience-description">
          
          <span className="resume-description-text">
            - Collaborate with a small development team to deliver profitability
            by delivering software applications on time
          </span>
          <br />

          <span className="resume-description-text">
            - Work with QMS (Quality Management System) using AssurX
          </span>
          <br />
          <span className="resume-description-text">
            - Created Inventory management System for IOS/Android using
            Microsoft PowerApps
          </span>
          <br />
        </div>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops, no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
        
      >
        {resumeDetails.map((ResumeDetails) => ResumeDetails)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */

      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};
