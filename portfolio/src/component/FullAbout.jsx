import React from 'react';
import '../styles/FullAbout.css';

const FullAbout = () => {
  return (
    <section className="about-section-white">
      <h1 className="about-title">ABOUT ME</h1>
      <p className="about-intro">
        I'm <strong>Antas Raj Pathak</strong>, Full Stack Developer (MERN) & Web Enthusiast
      </p>
      <p className="about-description">
        I’m a results-driven Full Stack Developer with a strong foundation in the MERN stack and a growing interest in cloud services and DevOps. 
        Currently engaged in continuous learning through challenges like the 365-day DSA challenge, GFG 160-day track, and Aptitude 130-day series. 
        I’m passionate about writing clean code, crafting meaningful user experiences, and contributing to collaborative development environments. 
        I’ve also built and maintained projects in Astro.js and explored technologies like Python and C++.
      </p>

      <div className="about-content">
        {/* Column 1: What I Do */}
        <div className="about-column">
          <h3 className="section-label yellow">What I Do?</h3>
          {[
            {
              icon: "/icons/code-icon.svg",
              title: "Web Development",
              desc: "Building dynamic, responsive, and scalable web applications using the MERN stack and Astro.js."
            },
            {
              icon: "/icons/cloud-icon.svg",
              title: "Cloud & Deployment",
              desc: "Learning cloud deployment strategies using platforms like Vercel and Netlify, and exploring CI/CD pipelines."
            },
            {
              icon: "/icons/learning-icon.svg",
              title: "Problem Solving",
              desc: "Participating in long-term coding challenges and improving data structures, algorithms, and aptitude skills."
            }
          ].map((item, idx) => (
            <div className="about-item" key={idx}>
              <img src={item.icon} alt={item.title} className="icon" />
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2: Quick Stats */}
        <div className="about-column">
          <h3 className="section-label yellow">Quick Stats</h3>
          <div className="facts-grid">
            {[
              { value: "10+", label: "Tech Stack Explored" },
              { value: "15+", label: "Projects Completed" },
              { value: "85%", label: "Internshala Training Score" },
              { value: "2024", label: "BCA Graduation Year" },
              { value: "365+", label: "Days of DSA Journey" },
              { value: "130+", label: "Aptitude Days Completed" }
            ].map((fact, idx) => (
              <div className="fact-circle" key={idx}>
                <h3>{fact.value}</h3>
                <p>{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullAbout;
