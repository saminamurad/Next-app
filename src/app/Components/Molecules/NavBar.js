import React from "react";
import Image from "next/image";
import { Humberger } from "../Atoms/Humberger";
import SearchBar from "../SearchBar";
import Refresh from "../Atoms/Refresh";
import Listview from "../Atoms/Listview";
import Setting from "../Atoms/Setting";
import SearchIcon from "../Atoms/SearchIcon";
import DotsIcon from "../Atoms/DotsIcon";
import Logo from "../img/keeplogo.png";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <Humberger />
        <Image src={Logo} className="logo" alt="logo" />
        <span className="keep-text">Keep</span>
      </div>
      <div className="center-section">
        <SearchBar />
      </div>
      <div className="right-section">
        <Refresh />
        <Listview />
        <Setting />
        <div className="end-section">
          <DotsIcon />
        </div>
      </div>
    </nav>
  );
};
