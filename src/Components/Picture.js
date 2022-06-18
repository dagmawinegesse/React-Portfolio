import React from "react";
import "./pics.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import "animate.css";

export default function Picture() {
  return (
    <div className="picsHolder">
      <div className="infoHolder">
        <div className="part1">
          <h1 id="title" class="animate__animated animate__fadeIn">
            Hey, my name is <span>Dagmawi</span>
          </h1>
          <h2 className="name">Software Engineer & Web Developer</h2>

          {/* <h3 className="innerParag">
            I completed my B.S in Computer Science in May 2020, and currently I
            am working towards getting my M.S in Technology Managment with
            concentration in Cyber Systems Tech Security.
          </h3> */}
        </div>
        <div className="part2">
          <Link id="proj" to="/projects">
            <Button id="Button" className="btn-light">
              Projects
            </Button>
          </Link>

          <Link id="proj" to="Resume.pdf" download target="_blank">
            <Button id="Button" className="btn-info">
              Download Resume/CV
            </Button>
          </Link>
        </div>
        {/* <div className="part3">
          <p id="innerPara" className="animate__animated animate__tada">
            <i class="fas fa-arrow-down fa-10x"></i> Scroll and{" "}
            <span className="name">Explore More</span>
          </p>
        </div> */}
      </div>

      <div id="picEdit">
        <img alt="personalPic" src="images/IMG_2207.jpeg" />
        
      </div>
      <div className="part4">
        <h3 className="animate__backInLeft">
          Thank you and 
               Swipe down to learn more!
        </h3>
      </div>
    </div>
  );
}
