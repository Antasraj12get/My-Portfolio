// import React from "react";
// import "../styles/HomePage.css";
// import image from "../assets/dp.png";
// const HomePage = () => {
//   return (
//     <div className="home">
//       <img src={image} alt="profileImage" className="profile-image" />
//       <h1>Antas Raj Pathak</h1>
//       <div className="description">
//         <span>Full stack developer (MERN)</span>
//         <span> | Exploring SEO</span>
//       </div>
//       <div className="description">
//         <span>Exploring 365 DSA Journey</span>
//         <span> | Exploring DevOps </span>
//       </div>
//       <div id="getCv">
//         <button>Get CV</button>
//         <span className="button-60">Mark Your Presence</span>
//       </div>


//     </div>
//     //
//   );
// };

// export default HomePage;


import React from "react";
import "../styles/HomePage.css";
import image from "../assets/dp.png";
import resume from "../assets/Antas_Resume.pdf"; // <-- Make sure the PDF is placed in your assets folder
import { useState } from "react";

const HomePage = () => {
  const[mark, setMark] = useState(0);
  function growPlus(){
    setMark(mark+ 1);
  }
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
        <a href={resume} download="Antas_Raj_Pathak_Resume.pdf">
          <button>Get CV</button>
        </a>
        <span onClick={growPlus} className="button-60">{`Mark Your Presence ${mark}`}</span>
      </div>
    </div>
  );
};

export default HomePage;
