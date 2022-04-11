import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 
import { Button } from './Button';
import './NavBar.css';
import useScroll from './useScroll'; 


function NavBar() {
  //set the initial state 
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); //the function will reverse the current state when clicked
  const closeMobileMenu = () => setClick(false) // add this to different tags so it will close out of the mobile menu
  const [buttonC, setButton] = useState(true);
//
  //show button function 

  const showButton = () =>{
    if(window.innerWidth <= 960 ){
      setButton(false); 
    }else{
      setButton(true);
    }
  };
  //to remove resume button from appearing again when refreshed
  useEffect(() =>{
    showButton();
    
  }, []);
  window.addEventListener('resize', showButton);
  // const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.1s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }
 
  return (
    // style={scrollDirection === "down" ? styles.active: styles.hidden}
    <nav className='navbar' >
        <div className='navbar-container'>
          {/* add the closemobilMenu when clicked so that the menu will be closed */}
            <Link to = "/" className= 'navbar-logo' onClick={closeMobileMenu}>
                   Dagmawi Negesse <i className='fab fa-typo3'></i>
                 </Link>

                 <div className='menu-icon' onClick={handleClick}>
                  {/** this when clicked change states */}
                   <i className={click ? 'fas fa-times': 'fas fa-bars'}></i>
                   </div>
                   
                   <ul id="navItem"className= {click ?'nav-menu active': 'nav-menu'}>

                   <li className='nav-item'>
                      
                      <Link id= "proj"to = '/projects'   className='nav-links' >
                        Projects 
                        
                      </Link>
                    </li>

                    <li className='nav-item '>
                      
                      <Link to = 'Resume.pdf' download target='_blank' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Resume <i class="fas fa-download"></i>
                        
                      </Link>
                    </li>


                   </ul>
                   {/* {buttonC && <Button classname = "button-nav"buttonStyle={'btn--outline'} >
                     Resume
                   <i class="fas fa-download"></i>
                   </Button>} */}
                 <div>
                   {buttonC && 
                    <Button id="navItem"className = 'btn--outline'>Resume</Button>
                   }
                 </div>
                   

                   
                 
        </div>
        
     

    </nav>
  );

  
  
}

export default NavBar;
