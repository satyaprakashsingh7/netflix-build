import React, { useState , useEffect } from 'react';
import "./Nav.css";

function Nav() {
 const[show,handleshow] = useState(false);

 const transitionNavBar = () =>{
    if(window.scrollY > 100){  
        handleshow(true);
    } else{
        handleshow(false);
    }
 };

 useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);
 },[]);
  return ( 
    <div className={`nav ${show && "nav_black"}`}>
        <div className='Nav_contents'>
        <img className='nav_logo'
        src='https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png'
       alt=''
       />

       <img className='nav_Avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png'
        alt=''
       />
        </div>
    </div>
  )
}

export default Nav
