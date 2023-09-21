import React from 'react'
import { Humberger } from '../Atoms/Humberger'
//import Icons from '../Atoms/Icons'
import SearchBar from '../SearchBar'
import Refresh from '../Atoms/Refresh'
import Listview from '../Atoms/Listview'
import Setting from '../Atoms/Setting'
import SearchIcon from '../Atoms/SearchIcon'
import DotsIcon from '../Atoms/DotsIcon'


export const NavBar = () => {
  return (
  <nav className="navbar">
  <div className="left-section">
      <Humberger />
  <img
      src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
      width="45"
      height="45"
      alt="Your Logo"
          className="logo"
        />
        <span className="keep-text">Keep</span>
        </div>
        <div className="center-section"> <SearchBar/></div>
       <div className="right-section">
        <Refresh />
      <Listview/>
      <Setting/>
      <div className="end-section">
        <DotsIcon/>
        </div>
      
       </div>
      
    </nav>

  );
};


