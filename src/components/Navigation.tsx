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
        <p>
          <FontAwesomeIcon className="icons" icon={faHouse} />
          Home
        </p>
      </a>
      <a className="links" href="#projects">
        <p>
          <FontAwesomeIcon className="icons" icon={faBarsProgress} />
          Projects
        </p>
      </a>
      <a className="links" href="#contact">
        <p>
          <FontAwesomeIcon className="icons" icon={faAddressCard} />
          Contact
        </p>
      </a>
      <a className="links" href="#resume">
        <p>
          <FontAwesomeIcon icon={faFile} />
          Resume
        </p>
      </a>
    </div>
  );
}

export default Navigation;
