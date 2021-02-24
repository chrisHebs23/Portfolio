import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <ul className="NavbarList">
          <li className="home listItems">
            <NavLink exact to="/" activeClassName="nav-active" className="nav">
              Home
            </NavLink>
          </li>
          <li className="contact listItems">
            <NavLink to="/contact" activeClassName="nav-active" className="nav">
              Contact Me
            </NavLink>
          </li>
          <li className="about listItems ">
            <NavLink to="/about" activeClassName="nav-active" className="nav">
              About Me
            </NavLink>
          </li>
          <li className="portfolio listItems">
            <NavLink
              to="/portfolio"
              activeClassName="nav-active"
              className="nav"
            >
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
