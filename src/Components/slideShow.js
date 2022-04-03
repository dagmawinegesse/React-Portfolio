import React, {useEffect, useState , useRef} from 'react';
import './pics.css';



function SlideShow() {
  
  return (
    <>
    
      <div className="picsHolder">
        <div id="disc">
          <h1>Software/Web Developer</h1>
         
          
          </div>
          <div id = "slider">
              <input type = "radio" name = "slider" id="slide1" checked/>
              
          </div>
        <div id="picEdit">
          <ul className="image">
            <img src="images/IMG_2207.jpeg" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default SlideShow