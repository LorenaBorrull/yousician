import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import guitar from '../pages/instruments/guitar';
import bass from '../pages/instruments/guitar';
import piano from '../pages/instruments/guitar';
import ukelele from '../pages/instruments/guitar';
import singing from '../pages/instruments/guitar';

function Navigate() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="Instruments" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" src='guitar'>Guitar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Bass</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Piano</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5">Ukelele</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.6">Singing</NavDropdown.Item>
      </NavDropdown>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="Artist Courses" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Metallica</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Jason Mraz</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Juanes</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Blog
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Family Plan
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Nav>
);
}
export default Navigate;
