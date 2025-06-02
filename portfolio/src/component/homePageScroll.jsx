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

const HomePageScroll = () => {
	return (
		<div className="homeScroll">
			<section className="info-section">
				<div className="info-grid">
					<div className="w-full max-w-[300px]  rounded-xl shadow-md p-5 flex flex-col justify-center items-center text-center gap-4 hover:scale-105 hover:shadow-lg transition duration-300">
						{/* Header */}
						<div>
							<h2 className="text-lg font-semibold text-gray-800">
								🎉 Offer Letters
							</h2>
							<p className="text-xs text-gray-500">Received so far</p>
						</div>

						{/* Offer Stats */}
						<div>
							<span className="text-3xl font-bold text-green-600">4+</span>
							<p className="text-sm text-gray-700">
								<span className="font-medium text-indigo-500">
									Internships:
								</span>{" "}
								4
							</p>
							{/* <p className="text-sm text-gray-700">
								<span className="font-medium text-pink-500">No Interview</span>
							</p> */}
						</div>

						{/* CTA Button */}
						<a
							href="#offer-letters"
							className="px-4 py-1.5 bg-[#0276FF] text-white rounded-full text-sm font-medium hover:border  transition"
						>
							View Offers
						</a>
					</div>

					{/* <div className="quote-card">
            <p>
              ❝<br />
              <em>
                When everyone distances themselves, consider it a powerful
                sign that you're nearing profound success
              </em>
            </p>
          </div> */}
					<div className="w-full max-w-[300px] h-full bg-black text-white rounded-[20px] p-[30px] text-[18px] font-inter leading-[1.6] flex items-center justify-center text-left">
						<p>
							❝<br />
							<em>
								When everyone distances themselves, consider it a powerful sign
								that you're nearing profound success
							</em>
						</p>
					</div>

					<div className="links-grid">
						<a
							href="https://leetcode.com/u/antaspathak_/"
							target="_blank"
							rel="noreferrer"
							className="link-card leetcode"
						>
							<FontAwesomeIcon className="yoyo" icon={faCodeBranch} />
							<p>
								<span>leetcode.com</span>
							</p>
							<button>Follow</button>
						</a>

						<a
							href="https://github.com/Antasraj12get"
							target="_blank"
							rel="noreferrer"
							className="link-card github"
						>
							<FontAwesomeIcon className="yoyo" icon={faGithub} />
							<p>Antas Raj Pathak</p>
							<button>Follow</button>
						</a>

						<a
							href="https://www.linkedin.com/in/antas-raj-pathak-150609277/"
							target="_blank"
							rel="noreferrer"
							className="link-card linkedin"
						>
							<FontAwesomeIcon className="yoyo" icon={faLinkedinIn} />
							<p>
								<span>linkedin.com</span>
							</p>
							<button>Follow</button>
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
