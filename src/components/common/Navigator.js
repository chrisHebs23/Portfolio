import React, { Component, useState } from "react";
import "./Navigator.css";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";

export default function Navigator(props) {
  return (
    // <div collapseOnSelect className="navbar-container ">
    <Navbar expand="lg">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="hamburger-button"
      />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar" activeKey={location.pathname}>
          <NavLink exact to="/" className="listStyle home">
            Home
          </NavLink>

          <NavLink
            to="/contact"
            activeClassName={{
              color: "#66fcf1",
              textDecoration: "underline white",
            }}
            className=" contact listStyle"
          >
            Contact Me
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="active-style"
            className=" about listStyle"
          >
            About Me
          </NavLink>

          <NavLink
            to="/portfolio"
            activeClassName="active-style"
            className="listStyle portfolio "
          >
            Portfolio
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/">
        <img src={logo} className="logo" />
      </Navbar.Brand>
    </Navbar>
    // </div>
  );
}
