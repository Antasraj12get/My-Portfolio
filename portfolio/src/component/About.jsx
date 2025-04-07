import React from 'react';
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-card">
        {/* <h2>About Me</h2> */}
        <p>
          I'm Antas Raj Pathak, a passionate Full Stack Developer (MERN) with a knack for building dynamic web applications.
          Alongside development, I’m diving into the worlds of SEO and DevOps to broaden my skill set. Currently, I'm also on a
          365-day DSA challenge, solving problems daily to strengthen my problem-solving abilities and stay sharp.
        </p>
        <p>
          I'm always open to learning, exploring new tech, and collaborating on exciting projects. Whether it's clean code,
          user-first UI/UX, or scalable systems—I'm here for it all.
        </p>
        <button className='button-light'>Know More...</button>
      </div>
    </div>
  );
};

export default About;
