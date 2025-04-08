import React from "react";
import "../styles/Projects.css";
import Barrowz from "../assets/BarriwzCertificate.png"
// import Barrowz from "../assets/BarriwzCertificate.png"
import FullStack from "../assets/FullStack.png"
import AWS from "../assets/AWS.png"



const Certification = () => {
  return (
    <>
    
    <div id="project-container">
      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png"
              alt=""
            />
          </div>
          <div className="project-left-content">
            <h3>Barrowz Learning (Internship)</h3>
            <p className="project-meta">
              <button className="view-project-btn">View Project</button>
            </p>
          </div>
        </div>
        <div className="project-right">
          <img
            src={Barrowz}
            alt=""
          />
        </div>
      </div>


      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
            <img
              src="https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png"
              alt=""
            />
          </div>
          <div className="project-left-content">
            <h3>Full Stack Development (Tranning)</h3>
            <p className="project-meta">
              <button className="view-project-btn">View Project</button>
            </p>
          </div>
        </div>
        <div className="project-right">
          <img
            src={FullStack}
            alt=""
          />
        </div>
      </div>


      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
       
          </div>
          <div className="project-left-content">
            <h3>AWS Begginer <br /> (Online Course)</h3>
          
          </div>
        </div>
        <div className="project-right">
          <img
            src={AWS}
            alt=""
          />
        </div>
      </div>

      



    </div>


</>



  );
};

export default Certification;
