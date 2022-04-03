import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import emailjs, { send } from 'emailjs-com'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
export default function Footer() {

    function sendEmail(e){
        e.preventDefault(); 

        emailjs.sendForm('service_6cn0ffb' , 'template_s039w28' , e.target, 'user_P2g7GGB2qN1mtruWRzpz8')
        .then((result) => {
            console.log(result.text);
        }, (error) =>{
            console.log(error.text);
        

        });
        e.target.reset();

    }
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Looking for jobs for software/web developer position
    
        </p>
        <p className='footer-subscription-text'>
            Contact me if you are interested with my work!
        </p>
        <div className='input-areas'>
          <form onSubmit={sendEmail}> 
          <input
              className='form-control'
              name='name'
              type='text'
              placeholder='Name'
            />
            <input
              className='form-control'
              name='subject'
              type='text'
              placeholder='Subject:'
            />
            <input
              className='form-control'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <textarea
              className='form-control'
              name='message'
              type='message'
              col = '1'
              row = '20'
              placeholder='Enter Message'
            />
             <Button id = "button"variant="outline-success"
            type= 'submit'
            value='sendmessage'>Send</Button>
            
            {/* <input >I am Interested</input> */}
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

        </div>
       
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a to='/' className='social-logo'>
              Dagmawi Negesse
              <i class='fab fa-typo3' />
            </a>
          </div>
          <small class='website-rights'>Dagmawi Negesse © 2022</small>
          <div class='social-icons'>
          
            <a href = "https://github.com/dagmawinegesse"
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-github' />
            </a>
            <a href='https://www.linkedin.com/in/dagmawi-negesse-820972159/'
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

