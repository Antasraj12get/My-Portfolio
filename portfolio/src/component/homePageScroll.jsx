import React from "react";
import "../styles/HomePageScroll.css";
import avtar from "../assets/Sidedp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Certification from "./Certification";
import Challenges from "./Challenges";
import ContactUs from "./ContactUs.jsx"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";



const HomePageScroll = () => {
	return (
		<div className="homeScroll">
			<section className="info-section">
				<div className="info-grid">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
  {/* Offer Letters Box */}
  <div className="w-full h-full rounded-xl shadow-sm p-5 flex flex-col justify-center items-center text-center gap-4 hover:scale-[1.02] hover:shadow-md transition duration-300 bg-white">
    {/* Header */}
    <div>
      <h2 className="text-lg font-semibold text-gray-800">🎉 Offer Letters</h2>
      <p className="text-xs text-gray-500">Received so far</p>
    </div>

    {/* Offer Stats */}
    <div>
      <span className="text-3xl font-bold text-green-600">4+</span>
      <p className="text-sm text-gray-700">
        <span className="font-medium text-indigo-500">Internships:</span> 4
      </p>
    </div>

    {/* CTA Button */}
    <a
      href="#offer-letters"
      className="px-4 py-1.5 bg-[#0276FF] text-white rounded-full text-sm font-medium hover:border transition"
    >
      View Offers
    </a>
  </div>

  {/* Quote Box */}
  <div className="w-full h-full rounded-xl shadow-sm p-6 bg-black text-white text-base leading-[1.6] flex items-center justify-center text-left hover:scale-[1.02] hover:shadow-md transition duration-300">
    <p>
      ❝<br />
      <em>
        When everyone distances themselves, consider it a powerful sign that you're
        nearing profound success
      </em>
    </p>
  </div>
</div>















<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
  {/* LeetCode - Orange (approximated) */}
  <a
    href="https://leetcode.com/u/antaspathak_/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between bg-[#f9f9f9] p-4 min-h-[110px] w-full rounded-xl shadow-sm transition-all duration-300 hover:bg-[#FFA116] hover:text-white hover:scale-[1.02]"
  >
    <FontAwesomeIcon className="w-[50px] h-[50px] text-xl pl-2 flex-shrink-0" icon={faCodeBranch} />
    <p className="flex-1 text-sm text-gray-800 ml-4 truncate">
      <span className="text-gray-500">leetcode</span>
    </p>
  </a>

  {/* GitHub - Dark Gray/Black */}
  <a
    href="https://github.com/Antasraj12get"
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between bg-[#f9f9f9] p-4 min-h-[110px] w-full rounded-xl shadow-sm transition-all duration-300 hover:bg-[#24292F] hover:text-white hover:scale-[1.03]"
  >
    <FontAwesomeIcon className="w-[50px] h-[50px] text-xl pl-2 flex-shrink-0" icon={faGithub} />
    <p className="flex-1 text-sm  ml-4 truncate">Git</p>
  </a>

  {/* LinkedIn - Blue */}
  <a
    href="https://www.linkedin.com/in/antas-raj-pathak-150609277/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between bg-[#f9f9f9] p-4 min-h-[110px] w-full rounded-xl shadow-sm transition-all duration-300 hover:bg-[#0A66C2] hover:text-white hover:scale-[1.03]"
  >
    <FontAwesomeIcon className="w-[50px] h-[50px] text-xl pl-2 flex-shrink-0" icon={faLinkedinIn} />
    <p className="flex-1 text-sm text-gray-800 ml-4 truncate">
      <span className="text-gray-500">linkedin</span>
    </p>
  </a>

  {/* Instagram - Gradient simulation with pink (since Tailwind doesn’t support full gradient on hover natively) */}
  <a
    href="https://www.instagram.com/antaspathak_?igsh=MTRibjJyODF6eWJ0Yg=="
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between bg-[#f9f9f9] p-4 min-h-[110px] w-full rounded-xl shadow-sm transition-all duration-300 hover:bg-[#E1306C] hover:text-white hover:scale-[1.03]"
  >
    <FontAwesomeIcon className="w-[50px] h-[50px] text-xl pl-2 flex-shrink-0" icon={faInstagram} />
    <p className="flex-1 text-sm text-gray-800 ml-4 truncate">
      <span className="text-gray-500">Insta</span>
    </p>
  </a>

  {/* GFG - Dark Green */}
  <a
    href="https://www.geeksforgeeks.org/user/sijjupath4dne/"
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between bg-[#f9f9f9] p-4 min-h-[110px] w-full rounded-xl shadow-sm transition-all duration-300 hover:bg-[#2F8D46] hover:text-white hover:scale-[1.03]"
  >
    <FontAwesomeIcon className="w-[50px] h-[50px] text-xl pl-2 flex-shrink-0" icon={faGlobe} />
    <p className="flex-1 text-sm  ml-4 truncate">
      <span className="">GfG</span>
    </p>
  </a>

  {/* Twitter - Sky Blue */}
  <a
    href="https://x.com/sijjju_64?s=09"
    target="_blank"
    rel="noreferrer"
    className="flex items-center justify-between bg-[#f9f9f9] p-4 min-h-[110px] w-full rounded-xl shadow-sm transition-all duration-300 hover:bg-[#1DA1F2] hover:text-white hover:scale-[1.03]"
  >
    <FontAwesomeIcon className="w-[50px] h-[50px] text-xl pl-2 flex-shrink-0" icon={faTwitter} />
    <p className="flex-1 text-sm text-gray-800 ml-4 truncate">
      <span className="text-gray-500">Twitter</span>
    </p>
  </a>
</div>






















				</div>
			</section>

			<Challenges />
			<About />
			<Skills />
			<h4 className="headings-tags">Projects</h4>
			<Projects />
			<h4 className="headings-tags">Certification</h4>
			<Certification />
			<ContactUs/>
		</div>
	);
};

export default HomePageScroll;
