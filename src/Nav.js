import React, { useEffect, useState } from 'react';
import "./Nav.css"
function Nav() {
    const [show , handleShow ] = useState(false);
    const transitionNav = () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
       
    }
    useEffect(() => {
        window.addEventListener("scroll" , transitionNav)
        
        return () => window.removeEventListener("scroll" , transitionNav)
    },[])
  return <div className={`nav ${show && 'nav__black'}`}>
   <div className='nav_content'>
   <img
   className='nav_logo '
    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' />
  
  <img
  className='nav_avatar'
   src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
   </div>
   
  </div>;
}

export default Nav;
