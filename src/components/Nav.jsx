import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/projects">Projects</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <Link to="/resume">Resume</Link>
      </div>
    </>
  );
}
