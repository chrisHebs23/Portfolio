import React from "react";
import "./Footer.css";
import linkedin from "../../../public/pictures/linkedin.png";
import github from "../../../public/pictures/githubl.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <button
        className="logos linked-logo"
        type="button"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/christopher-heberden-9218321b5/",
            "_blank"
          );
        }}
      >
        <img src={linkedin} className="logo-img" />
      </button>

      <p className="linkedin text-align">LinkedIn</p>

      <button
        className="logos github-logo"
        type="button"
        onClick={() => {
          window.open("https://github.com/chrisHebs23", "_blank");
        }}
      >
        <img src={github} className="logo-img" />
      </button>
      <p className="github text-align">Github</p>
    </footer>
  );
}
