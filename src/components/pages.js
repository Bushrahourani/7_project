
import React from "react";

const Pages = ({ activePage }) => {
  return (
    <div className="nav-underline">
      <div id="home" className={`page ${activePage === "home" && "active"}`}>
        <h3>page1</h3>
      </div>
      <div id="menu1" className={`page ${activePage === "menu1" && "active"}`}>
        <h3>page2</h3>
      </div>
      <div id="menu2" className={`page ${activePage === "menu2" && "active"}`}>
        <h3>page3</h3>
      </div>
      <div id="menu3" className={`page ${activePage === "menu3" && "active"}`}>
        <h3>page4</h3>
      </div>
    </div>
  );
};

export default Pages;
