import React from 'react'
import moonIcon from "../../assets/icon-moon.svg"
import sunIcon from '../../assets/icon-sun.svg';
import { UseTheme } from '../../Hooks/UseTheme';

function Header() {
  const {currentTheme, toggleTheme} = UseTheme();
  return (
    <div className='d-flex justify-content-between'>
      <h1 className='h1 fw-700 '>T O D O</h1>
      <img 
        className='cursor-pointer' 
        height={"25px"} 
        src={currentTheme == "dark"?sunIcon:moonIcon} 
        alt="Theme-Icon"
        onClick={() => toggleTheme()}
      />
    </div>
  )
}

export default Header