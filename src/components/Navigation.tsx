import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBarsProgress,
  faAddressCard,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
function Navigation() {
  return (
    <div id="nav">
      <a className="links" href="#home">
        <FontAwesomeIcon className="icons" icon={faHouse} />
        Home
      </a>
      <a className="links" href="#projects">
        <FontAwesomeIcon className="icons" icon={faBarsProgress} />
        Projects
      </a>
      <a className="links" href="#contact">
        <FontAwesomeIcon className="icons" icon={faAddressCard} />
        Contact
      </a>
      <a className="links" href="#resume">
        <FontAwesomeIcon icon={faFile} />
        Resume
      </a>
    </div>
  );
}

export default Navigation;
