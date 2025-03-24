import React from 'react'
import moonIcon from "../../assets/icon-moon.svg"
import sunIcon from '../../assets/icon-sun.svg';

function Header(props) {
  return (
    <div className='d-flex justify-content-between'>
      <h1 className='h1 fw-700 '>T O D O</h1>
      <img 
        className='cursor-pointer' 
        height={"25px"} 
        src={props.currentTheme == "dark"?sunIcon:moonIcon} 
        alt="Theme-Icon"
        onClick={() => props.toggleTheme(props.currentTheme == "dark"?"light":"dark")}
      />
    </div>
  )
}

export default Header