import React, { useRef } from "react";
import "./pics.css";
import Cards, { Button, Card } from "react-bootstrap";
import CardItem from "./CardItem";
import { scroller } from "react-scroll";
import "animate.css";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
export default function Picture() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div className="picsHolder">
        <div id="disc">
          <h1 id="title" className="animate__animated animate__rotateIn">
            Software/Web Developer
          </h1>

          <div id="slider">
            <input type="radio" name="slider" id="slide1" checked />
            <input type="radio" name="slider" id="slide2" />
            <input type="radio" name="slider" id="slide3" />
            <input type="radio" name="slider" id="slide4" />

            <div id="slides">
              <div id="overflow">
                <div className="inner">
                  <div className="slide slide_1">
                    <div className="slide-content">
                      <h2 className="animate animate__lightSpeedInRight">
                        Welcome
                      </h2>

                      <p
                        id="par"
                        class="animate__animated animate__lightSpeedInRight"
                      >
                        Passionate to transfer my education and{" "}
                      </p>

                      <p>expierence to the work force.</p>
                    </div>
                  </div>
                  <div className="slide slide_2">
                    <div className="slide-content">
                      <h2>Slide 2</h2>
                      <p>Content slide 2</p>
                    </div>
                  </div>
                  <div className="slide slide_3">
                    <div className="slide-content">
                      <h2>Slide 3</h2>
                      <p>Content slide 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="controls">
              <label for="slide1"></label>
              <label for="slide2"></label>
              <label for="slide3"></label>
              <label for="slide4"></label>
            </div>
            <div id="bullets">
              <label for="slide1"></label>
              <label for="slide2"></label>
            </div>
          </div>
        </div>

        <div id="picEdit">
          <ul className="image">
            <img src="images/IMG_2207.jpeg" />
          </ul>
        </div>
      </div>
    </>

    // <div className="picHolder">
    //   <div className="image">

    //   </div>
    //   <div className="discr">{/* <h1>Software/Web Deverloper</h1> */}</div>
    // </div>
  );
}
