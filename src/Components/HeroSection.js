import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Skills from './pages/Skills';
// import { useHistory } from 'react';
import {Link } from 'react-router-dom'
import Card from "react-bootstrap/Card";
import Picture from './Picture';


function HeroSection() {
  // const history = useHistory();
  return (
    <div className='hero-container'>
   
         <Picture/>

      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      
      {/* <h1>Software/Web Developer</h1> */}
    

      {/* <p>Learn More About My Expertise</p> */}
      <div className='hero-btns'>
        
        {/* <Button
          className='btns'
          buttonSize='btn--large'
          component={<Link to = '/skills'>Skills</Link>}

        /> */}
        
         
        
        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
         
          
          // onClick={console.log('hey')}
          // component={<Link style={{ color: '#fff',textDecoration: 'none' }} to = '/projects' >Learn More <i className='far fa-play-circle' /></Link>}
        />
           */}
       
      </div>
    </div>
  );
}

export default HeroSection;
