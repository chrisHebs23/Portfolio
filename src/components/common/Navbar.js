import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a exact href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
