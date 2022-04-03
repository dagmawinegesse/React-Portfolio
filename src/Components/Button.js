
import React from 'react';

import {Link} from 'react-router-dom';
import './Button.css'; 

//create arrray of button styles 
const STYLES = ['btn--primary', 'btn--outline'];
//create an array of button sizes
const SIZE = ['btn--medium', 'btn--large'];


export const Button =({children, type, onClick, buttonStyle, buttonSize, component}) => {

    const checkbuttonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];
    const checkbuttonSize = SIZE.includes(buttonSize) ? buttonSize: SIZE[0]; 

    return(
      <>
       <Link to = 'Resume.pdf'  download target='_blank' className='btn-mobile'>
         
         <button className = {`btn ${checkbuttonStyle} ${checkbuttonSize}`}
        onClick= {onClick}
        type = {type}
        style={{ textDecoration: 'none' }}
         >
        {children}
        {component}
      </button>
    </Link>

    
      </>
    
    
        
    );
};  