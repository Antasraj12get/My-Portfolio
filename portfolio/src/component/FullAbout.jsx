import React from 'react';
import '../styles/FullAbout.css';

const FullAbout = () => {
  return (
    <div className="about-section-white">
      <h1 className="about-title">ABOUT ME</h1>
      <p className="about-intro">
        I'm <strong>Antas Raj Pathak</strong>, Full Stack Developer (MERN) / DevOps Explorer
      </p>
      <p className="about-description">
        Passionate about clean code and intuitive UI/UX. I’m continuously learning and evolving—currently immersed in a
        365-day DSA challenge, and exploring the realms of SEO and DevOps. I love building scalable web solutions and contributing
        to exciting projects.
      </p>

      <div className="about-content">
        <div className="about-column">
          <h3 className="section-label yellow">What I Do?</h3>
          <div className="about-item">
            <img src="/icons/code-icon.svg" alt="Development" className="icon" />
            <div>
              <h4>Web Development</h4>
              <p>
                Creating responsive and high-performance websites and applications using MERN Stack (MongoDB, Express, React, Node).
              </p>
            </div>
          </div>
          <div className="about-item">
            <img src="/icons/seo-icon.svg" alt="SEO" className="icon" />
            <div>
              <h4>SEO Optimization</h4>
              <p>
                Enhancing search engine visibility through keyword research, metadata optimization, and content strategy.
              </p>
            </div>
          </div>
          <div className="about-item">
            <img src="/icons/devops-icon.svg" alt="DevOps" className="icon" />
            <div>
              <h4>DevOps Basics</h4>
              <p>
                Exploring CI/CD pipelines, containerization and automated deployment strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="about-column">
          <h3 className="section-label yellow">Fun Facts</h3>
          <div className="facts-grid">
            <div className="fact-circle">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="fact-circle">
              <h3>450</h3>
              <p>Projects Done</p>
            </div>
            <div className="fact-circle">
              <h3>65</h3>
              <p>Awards</p>
            </div>
            <div className="fact-circle">
              <h3>300+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="fact-circle">
              <h3>650K</h3>
              <p>Followers</p>
            </div>
            <div className="fact-circle">
              <h3>+10</h3>
              <p>New Videos Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullAbout;


