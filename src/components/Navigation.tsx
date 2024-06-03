import Nav from "react-bootstrap/Nav";

function Navigation() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Navigation;
