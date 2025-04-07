import React from "react";
import "../styles/HomePageScroll.css";
import avtar from "../assets/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";


const HomePageScroll = () => {
  return (
    <div className="homeScroll">
      <section>
        <section className="info-section">
          <div className="info-grid">


            <div className="avatar-card">
              <img src={avtar} alt="Avatar" />
            </div>

            <div className="quote-card">
              <p>
                ❝<br />
                <em>
                When everyone distances themselves, consider it a powerful sign that you're nearing profound success"
                </em>
              </p>
            </div>


            <div className="links-grid">
              <div className="link-card leetcode">
                <FontAwesomeIcon className="yoyo" icon={faCodeBranch} />/
                <p>
                  <span>leetcode.com</span>
                </p>
                <button>Follow</button>

              </div>
              <div className="link-card github">
                <FontAwesomeIcon className="yoyo" icon={faGithub} />
                <p>Antas Raj Pathak</p>
                <button>Follow</button>
              </div>
              <div className="link-card linkedin">
                <FontAwesomeIcon className="yoyo" icon={faLinkedinIn} />
                <p>
                  <span>linkedin.com</span>
                </p>
                <button>Follow</button>

              </div>
            </div>




          </div>
        </section>
      </section>
      <About/>
      <Skills/>
      <h4 id="project">Projects</h4>
      <Projects/>

   
    </div>
  );
};

export default HomePageScroll;
