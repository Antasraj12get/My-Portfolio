import React from "react";
import "../styles/HomePage.css";
import image from "../assets/dp.png";
const HomePage = () => {
  return (
    <div className="home">
      <img src={image} alt="profileImage" className="profile-image" />
      <h1>Antas Raj Pathak</h1>
      <div className="description">
        <span>Full stack developer (MERN)</span>
        <span> | Exploring SEO</span>
      </div>
      <div className="description">
        <span>Exploring 365 DSA Journey</span>
        <span> | Exploring DevOps </span>
      </div>
      <div id="getCv">
        <button>Get CV</button>
        <span className="button-60">Mark Your Presence</span>
        <span className="button-60">10</span>
      </div>


    </div>
    //
  );
};

export default HomePage;
