import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="NavbarList">
          <li className="home listItems">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="contact listItems">
            <NavLink exact to="/contact">
              Contact Me
            </NavLink>
          </li>
          <li className="about listItems ">
            <NavLink to="/about">About Me</NavLink>
          </li>
          <li className="portfolio listItems">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
