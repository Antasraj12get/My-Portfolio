import React from "react";
import "../styles/Challenges.css";

const Challenges = () => {
  return (
    <div id="challenges">
      <div className="challenge-box">
        <h2>160 days gfg Challenge</h2>
        <div className="key-points">
          <span>Active</span>
          <span>155 days Left</span>
          <span>geeksforgeeks</span>
        </div>
      </div>
      <div className="challenge-box-mid">
        <h2>365 days DSA challenge</h2>
        <div className="items">
          <span>90 days ✓</span>
          <span>275 left</span>
          <span>50 badge ✓</span>
        </div>
        <div className="levels">
          <span>Basic 100 </span>
          <span>Easy 120Q</span>
          <span>Medium 80Q</span>
          <span>Hard 65Q</span>
          <span>gfg</span>
          <span>leetcode</span>
        </div>
      </div>
      <div className="challenge-box  challenges-box">
        <h2>30 days Front end </h2>
        <div className="key-points">
          <span id="first">Active • </span>
          <span id="second">25 days Left</span>
          <span id="third">30+ Projects</span>
          <span id="fourth">JS</span>
          <span id="fifth">React</span>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
