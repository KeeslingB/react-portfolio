import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Brendan Keesling</Navbar.Brand>
        <Nav className="me-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Contact
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Email</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Github</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Linkedin</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Resume</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default NavBar;
