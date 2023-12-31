import React from "react";
import "../SubNavPages/style.css";


const NavbarT = ({ handleNavClick, activePage }) => {
  return (
    <div className="container mt-3">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a
            className={`nav-link ${activePage === "home" ? "active" : ""}`}
            href="#home"
            onClick={() => handleNavClick("home")}  >
            Friend's group
          </a>

        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activePage === "menu1" ? "active" : ""}`}
            href="#menu1"
            onClick={() => handleNavClick("menu1")}  >
            Suggested for you
          </a>
        </li><li className="nav-item">
          <a
            className={`nav-link ${activePage === "menu2" ? "active" : ""}`}
            href="#menu2"
            onClick={() => handleNavClick("menu2")}  >
            Popular near you
          </a>
        </li><li className="nav-item">
          <a
            className={`nav-link ${activePage === "menu3" ? "active" : ""}`}
            href="#menu3"
            onClick={() => handleNavClick("menu3")}  >
            More suggestion
          </a>
        </li>
        
      </ul>
      <hr />
    </div>
  );
};

export default NavbarT;