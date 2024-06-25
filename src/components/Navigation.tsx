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
    <Nav variant="underline" className="justify-content-end position-fixed">
      <Nav.Item>
        <Nav.Link href="/home">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <FontAwesomeIcon icon={faAddressCard} />
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <FontAwesomeIcon icon={faBarsProgress} />
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">
          <FontAwesomeIcon icon={faFile} />
          Resume
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
