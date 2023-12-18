
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Pages from "./components/pages";
import "./components/structure design/style.css";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    console.log(`Navigating to ${page}`);
    setActivePage(page);
  };

  useEffect(() => {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
      page.style.display = "none";
    });
    document.getElementById(activePage).style.display = "block";
  }, [activePage]);

  return (
    <div>
      <Navbar handleNavClick={handleNavClick} activePage={activePage} />
      <Pages activePage={activePage} />
    </div>
  );
};

export default App;
