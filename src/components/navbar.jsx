import React from "react";
import Logo from "../assets/logo.svg";
import { UilUserCircle, UilGlobe } from "@iconscout/react-unicons";
import "../App.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button } from "react-bootstrap";

function MyNavbar() {
  return (
    <Navbar className="navbar">
      <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" className="imglogo" />
      </Navbar.Brand>
      <Navbar.Collapse id="nav">
        <Nav >
          <NavDropdown
            title="Instruments"
            className="nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1" className="nav-dropdown-item">
              Guitar
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" className="nav-dropdown-item">
              Bass
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="nav-dropdown-item">
              Piano
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="nav-dropdown-item">
              Ukulele
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" className="nav-dropdown-item">
              Singing
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Artist Courses"
            className="nav-dropdown"
          >
            <NavDropdown.Item
              href="/artist-courses/metallica"
              className="nav-dropdown-item"
            >
              Metallica
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/artist-courses/jasonmraz"
              className="nav-dropdown-item"
            >
              Jason Mraz
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/artist-courses/juanes"
              className="nav-dropdown-item"
            >
              Juanes
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/blog" className="nav-link">
            Blog
          </Nav.Link>
          <Nav.Link href="/familyplan" className="nav-link">
            Family Plan
          </Nav.Link>

          <Nav.Link href="/help" className="nav-link">
            Help
          </Nav.Link>

          <UilGlobe className="icon" />
          <NavDropdown id="basic-nav-dropdown" className="nav-dropdown">
            <NavDropdown.Item
              href="/homepage"
              className="nav-dropdown-item"
            >
              English
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/artist-courses/jasonmraz"
              className="nav-dropdown-item"
            >
              Català
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/artist-courses/juanes"
              className="nav-dropdown-item"
            >
              Español
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#profile" className="nav-link-profile">
            <UilUserCircle />
          </Nav.Link>
          <Button id="button-premium">Try premium</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
