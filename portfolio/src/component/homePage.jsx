
import React from "react";
import "../styles/HomePage.css";
import image from "../assets/dp2.png";
import resume from "../assets/Antas_Resume.pdf"; // <-- Make sure the PDF is placed in your assets folder
import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const[mark, setMark] = useState(0);
  function growPlus(){
    setMark(mark+ 1);
  }
  return (
    <div className="home ">
      <img src={image} alt="profileImage" className="profile-image" />
      <h1>Antas Raj Pathak</h1>
      <div className="description">
        <span>Full stack developer (MERN)</span>
        <span> | Exploring Devops</span>
      </div>
      <div className="description">
        <span>Exploring 365 DSA Journey</span>
        <span> | Data Science </span>
      </div>
      <div id="getCv">
        <a href={resume} download="Antas_Raj_Pathak_Resume.pdf">
          <button>Get CV</button>
        </a>
        {/* <span onClick={growPlus} className="button-60">{`Mark Your Presence ${mark}`}</span> */}
        <Link to= "/hireme">
        <span  className="button-60 ">why should you hire me!</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
