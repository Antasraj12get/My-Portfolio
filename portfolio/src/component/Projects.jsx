import React from "react";
import "../styles/Projects.css";
import web from '../assets/webAnimations.png'
import currency from '../assets/currency.png'
import yt from '../assets/youtube.png'
import Antas from '../assets/Antas.png'
import BM from '../assets/Bookmanagement.png'




const Projects = () => {
  return (
    <div id="project-container">
      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
            <img
              src="https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="project-left-content">
            <h3>Advance UI </h3>
            <a href="https://web-animations-seven.vercel.app/" className="project-meta">
              <button className="view-project-btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="project-right">
          <img
            src={web}
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
            <h3>Youtube(MERN Stack)</h3>
            <a href="https://github.com/Antasraj12get/YouTube.git" className="project-meta">
              <button className="view-project-btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="project-right">
          <img
            src={yt}
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
            <h3>ShoppyGlobe Backend ( E Commerce)</h3>
            <a href="https://github.com/Antasraj12get/Backend-shoppyGlobe.git" className="project-meta">
              <button className="view-project-btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="project-right">
          <img
            src="https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2022/10/Model-View-Controller.png.webp"
            alt=""
          />
        </div>
      </div>



      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
            <img
              src="https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="project-left-content">
            <h3>Portfolio</h3>
            <a href="https://antas-raj-pathak-new.vercel.app/" className="project-meta">
              <button className="view-project-btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="project-right">
          <img
            src={Antas}
            alt=""
          />
        </div>
      </div>




      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
            <img
              src="https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="project-left-content">
            <h3>Book Management App</h3>
            <a href="https://books-management-application.vercel.app/" className="project-meta">
              <button className="view-project-btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="project-right">
          <img
            src={BM}
            alt=""
          />
        </div>
      </div>



      <div className="project">
        <div className="project-left">
          <div className="project-left-image-logo">
            <img
              src="https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png"
              alt=""
            />
          </div>
          <div className="project-left-content">
            <h3>Currency Converter</h3>
            <a href="https://currency-converter-three-inky.vercel.app/" className="project-meta">
              <button className="view-project-btn">View Project</button>
            </a>
          </div>
        </div>
        <div className="project-right">
          <img
            src={currency}
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default Projects;
