import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <ul className="NavbarList">
        <li className="home listItems">
          <a exact href="/">
            Home
          </a>
        </li>
        <li className="contact listItems">
          <a href="/contact">Contact Me</a>
        </li>

        <li className="about listItems ">
          <a href="/about">About Me</a>
        </li>
        <li className="portfolio listItems">
          <a href="/portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  );
}
