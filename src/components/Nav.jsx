import { Link } from "react-router-dom";
import "./Header.css";
export default function Nav() {
  return (
    <>
      <ul className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </>
  );
}
