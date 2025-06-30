import React from "react";
import "../styles/Projects.css";
import Barrowz from "../assets/BarriwzCertificate.png";
import FullStack from "../assets/FullStack.png";
import AWS from "../assets/AWS.png";
import kodekage from "../assets/kodekage.png";

const Certification = () => {
  return (
    <>
      <div id="project-container">

        {/* Kodekage Internship */}
        <div className="project">
          <div className="project-left">
            <div className="project-left-image-logo"></div>
            <div className="project-left-content">
              <h3>
                Frontend Development <br /> (Latest Internship)
              </h3>
              <p className="project-meta">
                <a
                  className="view-project-btn"
                  href="https://drive.google.com/file/d/1AcUTSvyeXgGsaXhRBDrTGDYGlGgCgRfs/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              </p>
            </div>
          </div>
          <div className="project-right">
            <a href="/Antas - Internship certificate.pdf" download>
              <img src={kodekage} alt="Kodekage Internship" />
            </a>
          </div>
        </div>

        {/* Barrowz Internship */}
        <div className="project">
          <div className="project-left">
            <div className="project-left-image-logo">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png"
                alt="Barrowz Logo"
              />
            </div>
            <div className="project-left-content">
              <h3>Barrowz Learning (Internship)</h3>
              <p className="project-meta">
                <button className="view-project-btn">View Project</button>
              </p>
            </div>
          </div>
         <a href="https://drive.google.com/file/d/13ShjYqUxZrkfvSpz_4ayhYxlyuOA5I98/view?usp=drivesdk">
           <div className="project-right">
            <img src={Barrowz} alt="Barrowz Certificate" />
          </div>
         </a>
        </div>

        {/* Full Stack Training */}
        <div className="project">
          <div className="project-left">
            <div className="project-left-image-logo">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png"
                alt="Training Logo"
              />
            </div>
            <div className="project-left-content">
              <h3>Full Stack Development (Training)</h3>
              <p className="project-meta">
                <button className="view-project-btn">View Project</button>
              </p>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/13SsMVvpmmLX9QU5O8uBOJWMJIABUir9N/view?usp=drivesdk">
            <div className="project-right">
            <img src={FullStack} alt="Full Stack Certificate" />
          </div>
          </a>
        </div>



         {/* nsdc */}
        <div className="project">
          <div className="project-left">
            <div className="project-left-image-logo">
              <img
                src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png"
                alt="Training Logo"
              />
            </div>
            <div className="project-left-content">
              <h3> PGC(NSDC & Skill india)</h3>
              <p className="project-meta">
                <button className="view-project-btn">View Project</button>
              </p>
            </div>
          </div>
          <a href="https://res.cloudinary.com/dtpohcwel/image/upload/v1751296709/Screenshot_2025-06-30_204816_r9i5bu.png">
            <div className="project-right">
            <img src="https://res.cloudinary.com/dtpohcwel/image/upload/v1751296709/Screenshot_2025-06-30_204816_r9i5bu.png" alt="Full Stack Certificate" />
          </div>
          </a>
        </div>

        {/* https://res.cloudinary.com/dtpohcwel/image/upload/v1751296709/Screenshot_2025-06-30_204816_r9i5bu.png */}

        {/* AWS Course */}
        <div className="project">
          <div className="project-left">
            <div className="project-left-image-logo"></div>
            <div className="project-left-content">
              <h3>
                AWS Beginner <br /> (Online Course)
              </h3>
              <p className="project-meta">
                <button className="view-project-btn">View Project</button>
              </p>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/13YAMPxkIaKsmf4Z6sXmZ0cDtMBYlt4BI/view?usp=drivesdk">
            <div className="project-right">
            <img src={AWS} alt="AWS Certificate" />
          </div>
          </a>
        </div>

      </div>
    </>
  );
};

export default Certification;
