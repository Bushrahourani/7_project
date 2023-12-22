
import Navbar from "../Nav/Navbar";
import AllB from "../subNav/AllB"

import React, { useState, useEffect } from "react";
import NavbarT from "../SubNavPages/NavbarT";
import Pages from "../SubNavPages/Pages";


const FirstPage = () => {


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
  
    return(
        <>
            <Navbar/>
            <AllB/>
            <NavbarT handleNavClick={handleNavClick} activePage={activePage} />
            <Pages activePage={activePage} />

           
        </>
    )
}

export default FirstPage;