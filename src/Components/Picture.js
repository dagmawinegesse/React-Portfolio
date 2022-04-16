import React, { useRef } from "react";
import "./pics.css";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button'
import Cards, { Button, Card } from "react-bootstrap";
import CardItem from "./CardItem";
import { scroller } from "react-scroll";
import "animate.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export default function Picture() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
   
      <div className="picsHolder">
        <div className="infoHolder">
          <h1 id="title" >
            Hey, my name is <span className="name">Dagmawi</span>
          </h1>
          <h2 className="name">
            Software Engineer, Web Development and soccer fan!
          </h2>
          
          <h3 className="innerParag">
            I completed my B.S in Computer Science in May 2020, and currently working on M.S in Technology Managment.
          </h3>
          <Link id="proj" to="/projects">
          <Button id="Button" className="btn-light">
          Projects
          </Button>

          </Link>
          
          <Link 
          id="proj"
          to="Resume.pdf"
          download
          target="_blank">

          <Button id="Button" className="btn-info">
          Download Resume/CV
          </Button>

          </Link>

          <p  id ="innerPara"className="animate__animated animate__tada">
            <i class="fas fa-arrow-down fa-10x"></i> Scroll and{" "}
            <span className="name">Explore More</span>
          </p>
        </div>

        <div id="picEdit">
          <img src="images/IMG_2207.jpeg" />
        </div>
      </div>
 
  );
}
