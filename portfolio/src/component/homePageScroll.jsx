// import React from "react";
// import "../styles/HomePageScroll.css";
// import avtar from "../assets/Sidedp.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Certification from "./Certification";
// import Challenges from "./Challenges";

// const HomePageScroll = () => {
//   return (
//     <div className="homeScroll">
//       <section>
//         <section className="info-section">
//           <div className="info-grid">
//             <div className="avatar-card">
//               <img src={avtar} alt="Avatar" />
//             </div>

//             <div className="quote-card">
//               <p>
//                 ❝<br />
//                 <em>
//                   When everyone distances themselves, consider it a powerful
//                   sign that you're nearing profound success"
//                 </em>
//               </p>
//             </div>

//             <div className="links-grid">
//               <a
//                 href="https://leetcode.com/u/antaspathak_/"
//                 target="_blank"
//                 className="link-card leetcode"
//               >
//                 <FontAwesomeIcon className="yoyo" icon={faCodeBranch} />/
//                 <p>
//                   <span>leetcode.com</span>
//                 </p>
//                 <button>Follow</button>
//               </a>

//               <a
//                 href="https://github.com/Antasraj12get"
//                 target="_blank"
//                 className="link-card github"
//               >
//                 <FontAwesomeIcon className="yoyo" icon={faGithub} />
//                 <p>Antas Raj Pathak</p>
//                 <button>Follow</button>
//               </a>

//               <a
//                 href="              https://www.linkedin.com/in/antas-raj-pathak-150609277/"
//                 target="_blank"
//                 className="link-card linkedin"
//               >
//                 <FontAwesomeIcon className="yoyo" icon={faLinkedinIn} />
//                 <p>
//                   <span>linkedin.com</span>
//                 </p>
//                 <button>Follow</button>
//               </a>
//             </div>
//           </div>
//         </section>
//       </section>
//       <Challenges />
//       <About />
//       <Skills />
//       <h4 className="headings-tags">Projects</h4>
//       <Projects />
//       <h4 className="headings-tags">Certification</h4>
//       <Certification />
//     </div>
//   );
// };

// export default HomePageScroll;
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

const HomePageScroll = () => {
  return (
    <div className="homeScroll">
      <section className="info-section">
        <div className="info-grid">
          <div className="avatar-card">
            <img src={avtar} alt="Avatar" />
          </div>

          <div className="quote-card">
            <p>
              ❝<br />
              <em>
                When everyone distances themselves, consider it a powerful
                sign that you're nearing profound success
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
    </div>
  );
};

export default HomePageScroll;
