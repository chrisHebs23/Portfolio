import React, { Component, useState } from "react";
import "./Navigator.css";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pictures/logo.png";

export default function Navigator(props) {
  const { location } = props;
  return (
    // <div collapseOnSelect className="navbar-container ">
    <Navbar expand="lg" variant="dark">
      <Navbar.Brand to="/">
        <img src={logo} className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="hamburger-button"
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar listStyle">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className=" home listStyle"
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="active"
            className="contact listStyle"
          >
            Contact Me
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
            className="about listStyle"
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName="active"
            className=" portfolio listStyle "
          >
            Portfolio
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // </div>
  );
}
