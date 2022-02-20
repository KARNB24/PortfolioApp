import React from "react";
import Typical from "react-typical";
import './Profile.css';
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/karn-bhavsar/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/KARNB24">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Karn</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Application Developer👨‍💻",
                    2000,
                    "Full Stack Developer 👨‍💻",
                    2000,
                    "Passionate Developer 🌐",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passionate about building Full Stack Web Application
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a
              href="Karn_Bhavsar_Resume.pdf"
              download="Karn_Bhavsar_Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-bacground"></div>
        </div>
      </div>
    </div>
  );
}
