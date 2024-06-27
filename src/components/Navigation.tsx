import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBarsProgress,
  faAddressCard,
  faFile,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
function Navigation() {
  return (
    <Nav variant="underline" className="nav-justified flex fixed-top bg-white">
      <Nav.Item>
        <Nav.Link href="/home">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#about">
          <FontAwesomeIcon icon={faAddressCard} />
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">
          <FontAwesomeIcon icon={faBarsProgress} />
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#resume">
          <FontAwesomeIcon icon={faFile} />
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
