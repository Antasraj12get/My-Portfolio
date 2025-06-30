

import React from "react";
import "../styles/Projects.css";
import web from "../assets/webAnimations.png";
import currency from "../assets/currency.png";
import yt from "../assets/youtube.png";
import Antas from "../assets/Antas.png";
import BM from "../assets/Bookmanagement.png";

const Projects = () => {
	return (
		<div id="project-container">
			{[
				{
					title: "Advance UI",
					link: "https://web-animations-seven.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image: web,
				},
				{
					title: "Youtube (MERN Stack)",
					link: "https://github.com/Antasraj12get/YouTube.git",
					logo: "https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png",
					image: yt,
				},
				{
					title: "ShoppyGlobe Backend (E-Commerce)",
					link: "https://github.com/Antasraj12get/Backend-shoppyGlobe.git",
					logo: "https://cdn.pixabay.com/photo/2021/09/11/12/17/github-6615451_1280.png",
					image:
						"https://d3m1rm8xuevz4q.cloudfront.net/wp-content/uploads/2022/10/Model-View-Controller.png.webp",
				},
				{
					title: "Portfolio",
					link: "https://antas-raj-pathak-new.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image: Antas,
				},
				{
					title: "Book Management App",
					link: "https://books-management-application.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image: BM,
				},
				{
					title: "Currency Converter",
					link: "https://currency-converter-three-inky.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image: currency,
				},
				{
					title: "Caffe Webs",
					link: "        https://caffe-webs.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image:
						"https://res.cloudinary.com/dtpohcwel/image/upload/v1748756007/Screenshot_2025-06-01_110113_psrwdq.png",
				},
				{
					title: "Paginations",
					link: "       https://paginationproject-alpha.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image:"https://res.cloudinary.com/dtpohcwel/image/upload/v1751296078/Screenshot_2025-06-30_203110_echxg3.png",
				},
				{
					title: "List Builder",
					link: " https://mynetodoss.netlify.app/",
					logo: "data:image/png;base64,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",
					image:"https://res.cloudinary.com/dtpohcwel/image/upload/v1751296079/Screenshot_2025-06-30_203227_jpo6yc.png",
				},
				{
					title: "BMI Calculator",
					link: "https://bmicalculator-eight-teal.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image:"https://res.cloudinary.com/dtpohcwel/image/upload/v1751296077/Screenshot_2025-06-30_202402_eu2eex.png",
				},
				{
					title: "User Search",
					link: "https://usersearch-olive.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image:"https://res.cloudinary.com/dtpohcwel/image/upload/v1751296078/Screenshot_2025-06-30_202902_kzw2fk.png",
				},
				{
					title: "Colors Game",
					link: "https://colorchanger-two.vercel.app/",
					logo: "https://w7.pngwing.com/pngs/436/888/png-transparent-vercel-hd-logo-thumbnail.png",
					image:"https://res.cloudinary.com/dtpohcwel/image/upload/v1751296077/Screenshot_2025-06-30_202948_gp5xgd.png",
				},
			].map((project, index) => (
				<div className="project" key={index}>
					<div className="project-left">
						<div className="project-left-image-logo">
							<img src={project.logo} alt="logo" />
						</div>
						<div className="project-left-content">
							<h3>{project.title}</h3>
							<a
								href={project.link}
								className="project-meta"
								target="_blank"
								rel="noreferrer"
							>
								<button className="view-project-btn">View Project</button>
							</a>
						</div>
					</div>
					<div className="project-right">
						<img src={project.image} alt="preview" />
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
