import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logo.svg";
import "../index.css";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" className="imglogo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="text-decoration-none">
            Home
          </Nav.Link>
          <Nav.Link href="#pricing" className="nav-link">
            Pricing
          </Nav.Link>
          <NavDropdown
            title="Instruments"
            id="basic-nav-dropdown"
            className="nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1" className="nav-dropdown-item">
              Guitar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="nav-dropdown-item">
              Bass
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="nav-dropdown-item">
              Ukulele
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#teachers" className="nav-link">
            Teachers
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#login" className="nav-link">
            Log In
          </Nav.Link>
          <Nav.Link href="#signup" className="nav-link sign-up">
            Sign Up
          </Nav.Link>
          <Nav.Link href="#search" className="nav-link search-icon"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
