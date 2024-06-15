import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import emoji from "../assets/images/emoji.jpg";
function Navigation() {
  return (
    <Navbar className="nav">
      <Container>
        <img className="emoji" src={emoji} alt="emoji" />
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
