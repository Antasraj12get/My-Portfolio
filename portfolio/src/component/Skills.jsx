import React from 'react';
import "../styles/Skills.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "MongoDB", "Express", "Tailwind CSS", "Git", "GitHub",
  "Redux", "TypeScript", "REST API", "Next.js", "Firebase"
];

const Skills = () => {
  return (
    <div className="skills-card">
      {/* <h2 className="skills-title">My Skill Set</h2> */}
      <div className="skills-buttons">
        {skills.map((skill, index) => (
          <button key={index} className="button-light-skills">
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
