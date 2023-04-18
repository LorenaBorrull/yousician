import Logo from "../assets/logo.svg";
import "../index.css";

import { Container, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <Navbar className="navbar">
      <Container>
        <img src={Logo} to='HomePage' className="imglogo"/>
        <NavDropdown className="Instruments" title="Instruments">
          <NavDropdown.Item eventKey="1">
            <Link to='/instruments/guitar'>Guitar</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default Navigate;
