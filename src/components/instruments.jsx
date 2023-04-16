import NavDropdown from 'react-bootstrap/NavDropdown';

function instrumentsdrop() {
  return (
    <NavDropdown title="Instruments" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1"></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Guitar</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Bass</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.4">Piano</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.5">Ukelele</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.6">Singing</NavDropdown.Item>
      </NavDropdown>
  );
}

export default instrumentsdrop;