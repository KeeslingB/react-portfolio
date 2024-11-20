import "./Header.css";
import Nav from "./Nav";
export default function Header() {
  return (
    <>
      <div className="Header">
        <h2 className="title">Brendan Keesling</h2>
      </div>
      <div>
        <Nav />
      </div>
    </>
  );
}
