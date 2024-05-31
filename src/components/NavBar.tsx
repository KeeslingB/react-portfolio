import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key="nav" expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand>Brendan Keesling</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Links
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action3">Projects</Nav.Link>
                  <NavDropdown
                    title="Contact"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Linkedin
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Github</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Email</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">Resume</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
