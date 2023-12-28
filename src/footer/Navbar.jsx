import React from "react";
import "./Navbar.css";
import { FaGear } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { HiMiniBellAlert } from "react-icons/hi2";

const Navbar = () => {
    const isDemo = false;

  return (
    <nav
        className="navbar"
        style={{backgroundColor: isDemo?"#fff":"#ffffff00"}} 
    >
      <div  className="nav-container">
        <div className="left">
          <img src="./logo192.png" alt="logo" className="logo" />
        {
            isDemo?<>
                      <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg"
            alt="logo"
            className="search-icon"
          />
          <input type="text" placeholder="Search" className="search" /></>
          :
          <></>
        }
        </div>
        <div className="right">
          <div className="links">
            <div className="dropdown">
              <button className="dropbtn" style={{color: isDemo?"#000":"#fff"}} >Demo ⌵</button>
              <div className="dropdown-content"  >
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn" style={{color: isDemo?"#000":"#fff"}}>Pages ⌵</button>
              <div className="dropdown-content"  >
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn" style={{color: isDemo?"#000":"#fff"}}>Account ⌵</button>
              <div className="dropdown-content"  >
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>

            </div>
            <a href="#" className="dropbtn"  style={{color: isDemo?"#000":"#fff"}}>
                Network
              </a>
          </div>
          <div className="icons">
            {
              isDemo?            <>
              <div className="icon">
              <MdMessage />
            </div>
            <div className="icon">
              <FaGear />
            </div>
            <div className="icon">
              <HiMiniBellAlert />
            </div></>
            :
            <></>
            }
            <div className=" user"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
