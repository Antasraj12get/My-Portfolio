import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="flex justify-center items-center px-4 py-6 bg-white">
			<div className="w-full max-w-7xl bg-[#f9f9f9] p-8 rounded-xl shadow-sm font-[Segoe UI] transition-all duration-300">
				<p className="text-base leading-7 text-[#333] mb-4">
					Hello, and thank you for visiting my portfolio. My name is{" "}
					<b>Antas Raj Pathak</b>, and I am a passionate and dedicated{" "}
					<b>Full Stack Developer</b>, specializing in the <b>MERN stack</b> (MongoDB,
					Express.js, React.js, and Node.js). Alongside this, I have working
					knowledge of Astro.js, and C++ at a basic to intermediate level. I’m
					currently expanding my expertise in{" "}
					<b>cloud services and deployment practices</b>.
					<br />
					I completed my <b>Bachelor of Computer Applications</b> (BCA) from MLK PG
					College, Balrampur in 2024, and later pursued Full Stack Development
					training from <b>Internshala</b>, where I achieved an aggregate score of{" "}
					<b>
						<em>85%</em>
					</b>
					.
					<br />
					Originally from Shrawasti, Uttar Pradesh, I am currently open to
					relocation as per job requirements.
				</p>
				<Link
					to="/fullAbout"
					className="inline-block bg-[#f0f6ff] text-[#1a73e8] border border-[#d0e3ff] px-5 py-2.5 text-[16px] rounded-lg font-[Inter] shadow-sm transition-all duration-300 hover:bg-[#e0edff] hover:shadow-md hover:-translate-y-1 active:bg-[#d0e3ff] active:translate-y-0 active:shadow-sm"
				>
					Know More...
				</Link>
			</div>
		</div>
	);
};

export default About;








