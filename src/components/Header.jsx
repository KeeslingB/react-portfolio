import "./Header.css";
import Nav from "./Nav";
export default function Header() {
  return (
    <>
      <div className="Header">
        <h2 className="name">Brendan Keesling</h2>
        <Nav />
      </div>
    </>
  );
}
